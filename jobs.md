---
title: Jobs
layout: default
permalink: jobs.html
---
<div class="home">
  <h1 class="page-heading">The Jobs</h1>
  <div class="xs-block-grid-1 sm-block-grid-2 lg-block-grid-3">
    <ul class="post-list xs-border">
      {% for post in site.categories.job %}
      <div class="block-grid__item">
        <li>
          <h2>
            {{ post.title }}
          </h2>
          {{ post.content }}
        </li>
      </div>
      {% endfor %}
    </ul>
  </div>
</div>
