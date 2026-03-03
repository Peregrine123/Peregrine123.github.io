FROM ruby:slim

# uncomment these if you are having this issue with the build:
# /usr/local/bundle/gems/jekyll-4.3.4/lib/jekyll/site.rb:509:in `initialize': Permission denied @ rb_sysopen - /srv/jekyll/.jekyll-cache/.gitignore (Errno::EACCES)
# ARG GROUPID=901
# ARG GROUPNAME=ruby
# ARG USERID=901
# ARG USERNAME=jekyll

ENV DEBIAN_FRONTEND noninteractive
ARG APT_MIRROR=mirrors.tuna.tsinghua.edu.cn
ARG PIP_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple
ARG GEM_SOURCE=https://gems.ruby-china.com/
ARG BUNDLE_MIRROR=https://gems.ruby-china.com/

LABEL authors="Amir Pourmand,George Araújo" \
      description="Docker image for al-folio academic template" \
      maintainer="Amir Pourmand"

# uncomment these if you are having this issue with the build:
# /usr/local/bundle/gems/jekyll-4.3.4/lib/jekyll/site.rb:509:in `initialize': Permission denied @ rb_sysopen - /srv/jekyll/.jekyll-cache/.gitignore (Errno::EACCES)
# add a non-root user to the image with a specific group and user id to avoid permission issues
# RUN groupadd -r $GROUPNAME -g $GROUPID && \
#     useradd -u $USERID -m -g $GROUPNAME $USERNAME

# install system dependencies
RUN sed -i "s|http://deb.debian.org/debian|https://${APT_MIRROR}/debian|g; s|http://deb.debian.org/debian-security|https://${APT_MIRROR}/debian-security|g" /etc/apt/sources.list.d/debian.sources && \
    apt-get update -y && \
    apt-get install -y --no-install-recommends \
        build-essential \
        curl \
        git \
        imagemagick \
        inotify-tools \
        locales \
        nodejs \
        procps \
        python3-pip \
        zlib1g-dev && \
    pip --no-cache-dir install -i ${PIP_INDEX_URL} --upgrade --break-system-packages nbconvert

# clean up
RUN apt-get clean && \
    apt-get autoremove && \
    rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*  /tmp/*

# set the locale
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen

# set environment variables
ENV EXECJS_RUNTIME=Node \
    JEKYLL_ENV=production \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8

# create a directory for the jekyll site
RUN mkdir /srv/jekyll

# copy the Gemfile and Gemfile.lock to the image
ADD Gemfile.lock /srv/jekyll
ADD Gemfile /srv/jekyll

# set the working directory
WORKDIR /srv/jekyll

# install jekyll and dependencies
RUN gem install --clear-sources --source ${GEM_SOURCE} --no-document jekyll bundler
RUN bundle config set mirror.https://rubygems.org ${BUNDLE_MIRROR} && bundle install --no-cache

EXPOSE 8080

COPY bin/entry_point.sh /tmp/entry_point.sh

# uncomment this if you are having this issue with the build:
# /usr/local/bundle/gems/jekyll-4.3.4/lib/jekyll/site.rb:509:in `initialize': Permission denied @ rb_sysopen - /srv/jekyll/.jekyll-cache/.gitignore (Errno::EACCES)
# set the ownership of the jekyll site directory to the non-root user
# USER $USERNAME

CMD ["/tmp/entry_point.sh"]
