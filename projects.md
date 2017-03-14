---
title: Projects
layout: default
permalink: projs.html
---

<h1 class="page-heading">The Projects</h1>
<ul class="post-list">
  {% for post in site.categories.proj %}
  <li>
    <h2>
      {{ post.title }}
    </h2>
    {{ post.content | markdownify }}
  </li>
  {% endfor %}
</ul>