---
title: Education
layout: default
permalink: edu.html
---
<h1 class="page-heading">The Education</h1>
<ul class="post-list">
  {% for post in site.categories.edu %}
  <li>
    <h2>
      {{ post.title }}
    </h2>
    {{ post.content | markdownify }}
  </li>
  {% endfor %}
</ul>
