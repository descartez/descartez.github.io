---
title: Jobs
layout: default
permalink: jobs.html
---
<div class="home">
  <h1 class="page-heading">The Jobs</h1>
  <ul class="post-list">
    {% for post in site.categories.job %}
    <li>
      <h2>
        {{ post.title }}
      </h2>
      {{ post.content }}
    </li>
    {% endfor %}
  </ul>

</div>
