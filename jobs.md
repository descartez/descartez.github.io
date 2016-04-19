---
layout: default
---

<div class="home">

  <h1 class="page-heading">The Jobs (All of Them)</h1>
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
