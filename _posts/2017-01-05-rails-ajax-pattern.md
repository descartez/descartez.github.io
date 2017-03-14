---
layout: post
title:  "Partials, Ajax, and Partial Simplicity"
date:   2017-01-05 01:59:07
categories: blog lessons ruby
---

If you haven't looks at this [ajax pattern](https://coderwall.com/p/kqb3xq/rails-4-how-to-partials-ajax-dead-easy) by Sebastián González, it's worth a look. I've been obsessed with it for the past few weeks, mainly because it promised a better way to do ajax with Rails. So

It's a short snippet of an article, so I won't go over it in much detail. Rather than using my usual strategy of passing JSON objects back in forth, this new pattern instead returns ```.js.erb``` files which render partials within them.

I built a to do app using this pattern, and I have some thoughts.

### The Upsides
It's damn simple. HTML renders and changes divs that matter using usual css selectors. Using the ```<%= escape_javascript() %>``` within your JS, partials get rendered and the embedded ruby runs as it loads. I was able to get up and running fast.


### The Downsides
It won't scale.

There's a lot of duplication. For every major change made to the page, there needs to be:

- a route which the link_to can access
- a partial that can be loaded
- a ```.js.erb``` file that corresponds with the route (which loads instead of the usual rendered views)

Routes are easy, but having a route per change can get unwieldly.

Partials are also easy, but they are best used for repeatable mostly unchanging elements (navbars, button groups, etc.). Having too many of them in your views file structure means there's a chance of bloating your app. If there's more than one controller and corresponding views, then there is little organization happening with your views.

Individual scripts are also easy, but considering there's one for every change and the average script looks like: ```$('#single-task').html("<%= escape_javascript(render partial: 'created_task', locals: {task: @task}) %>")```, there's not much going on.

### Possible Uses, Improvements
This pattern proved useful for my to do list, but if my project got any more complicated, I would've run into a serious problem. As is, I'm happy with the way it turned out, though wary of using this pattern too much.

For a one page app with multiple tabs, or a more dynamic blog, this pattern could do wonders.

Improvements are harder to pin down. Introducing more into the ```.js.erb``` files could create interesting effects (animations come to mind), rather than replacing the html of a div. The controllers could also have more going on with them, with each route recieving a particular type of signal which then chooses which views to render.

It felt like I was reinventing the wheel here, repeating what I could do with jQuery and a bit more elbow grease. Rails was handling JavaScript and JavaScript was just handling an intermediate step before more embedded Ruby executed.

This might work with a larger app if used sparingly, using them only to bring up particular unchanging pages. Another use might be to use the partial pattern in a greater app, and recreating the view file structure in the application views. If you're that far in, it might be wiser to use a front end framework.