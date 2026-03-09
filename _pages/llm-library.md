---
layout: page
title: LLM Library
permalink: /llm-library/
description: A searchable showcase for 99 LLM reading notes curated from my knowledge base.
nav: true
nav_order: 5
---

<link rel="stylesheet" href="{{ '/assets/llm-library/llm-library.css' | relative_url }}">

<div
  id="llm-library-root"
  data-source="{{ '/assets/json/llm-library-data.json' | relative_url }}"
  data-markdown-base="{{ '/assets/llm-library/markdown/' | relative_url }}"
></div>

<noscript>
  <p>This page needs JavaScript enabled to render the interactive LLM Library.</p>
</noscript>

<script type="module" src="{{ '/assets/llm-library/llm-library.js' | relative_url }}"></script>
