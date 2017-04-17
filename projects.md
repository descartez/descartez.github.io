---
title: Projects
layout: default
permalink: projs.html
---
<h1 class="page-heading">The Projects</h1>
<div class="xs-block-grid-1 sm-block-grid-2 lg-block-grid-3">
  <ul class="post-list xs-border">
    {% for post in site.categories.proj %}
      <div class="block-grid__item">
        <li>
          <h2>
          {{ post.title }}
          </h2>
          {{ post.content | markdownify }}
        </li>
      </div>
    {% endfor %}
  </ul>
</div>