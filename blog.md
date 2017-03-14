---
title: Blog
layout: default
permalink: blog.html
---
<h1 class="page-heading">The Blog</h1>
<ul class="post-list">
  {% for post in site.categories.blog %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h2>
     <a href="{{ post.url }}">{{ post.title }}</a>
   </h2>
   <p>
     {{ post.excerpt }}
   </p>
  </li>
 {% endfor %}
</ul>
