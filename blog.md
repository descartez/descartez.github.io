---
title: Blog
layout: default
permalink: blog.html
---
<h1 class="page-heading">The Blog</h1>
<div class="xs-block-grid-1 sm-block-grid-2 lg-block-grid-3">
<ul class="post-list xs-border">
  {% for post in site.categories.blog %}
  <div class="block-grid__item">
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2>
     <a href="{{ post.url }}">{{ post.title }}</a>
   </h2>
   <p>
     {{ post.excerpt }}
   </p>
  </li>
  </div>
 {% endfor %}
</ul>
</div>
