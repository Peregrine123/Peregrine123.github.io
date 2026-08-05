// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publication list including preprints, accepted papers, and under-review work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Recent news and updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-english",
              title: "English",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/";
              },
            },{id: "dropdown-中文",
              title: "中文",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh/";
              },
            },{id: "news-our-paper-rubric-based-on-policy-distillation-is-now-available-on-arxiv-co-first-author-in-collaboration-with-nus-and-tencent",
          title: 'Our paper “Rubric-based On-policy Distillation” is now available on arXiv (co-first author, in...',
          description: "",
          section: "News",},{id: "news-our-paper-trace-trajectory-risk-aware-compression-for-long-horizon-agent-safety-is-now-available-on-arxiv",
          title: 'Our paper “TRACE: Trajectory Risk-Aware Compression for Long-Horizon Agent Safety” is now available...',
          description: "",
          section: "News",},{id: "news-our-paper-easyopd-an-easy-to-use-on-policy-distillation-framework-for-large-language-models-is-now-available-on-arxiv-co-authored-with-nus-and-tencent",
          title: 'Our paper “EasyOPD: An Easy-to-use On-Policy Distillation Framework for Large Language Models” is...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6F%6E%67%7A%68%65%70%65%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/peregrine123", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Z2CuIuoAAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/430/1497.html", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-9007-3327", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
