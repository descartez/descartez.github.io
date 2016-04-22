---
layout: default
---

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
