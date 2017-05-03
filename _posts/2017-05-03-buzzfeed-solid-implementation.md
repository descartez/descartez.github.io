---
layout: post
title:  "5 Reasons I love Buzzfeed's Solid Framework"
date:   2017-05-03 05:58:00
categories: blog
---

###Wait, that Buzzfeed They have a framework?
Yes, Buzzfeed! It would make sense that Buzzfeed would have a hand in development, since they are responsible for a good amount of web content. (And yes, I am aware I'm leaning hard into the cliché of a listicle.)

###1.) It's simple
If you're using a styling framework, it should be easy to use. Including the proper classes in my HTML was smooth and I saw results right away. I implemented it here on this site in under a half hour and was really happy with how much cleaner it made my site. It didn't even conflict with what styling I already had.

###2.) There's a class for everything
Want to change your text size? Easy enough. Use `xs-text-6` to make your text have the same styling as a basic `h6` header. the `6` denotes size, and is ranged from 1 to 6. In the same vein, there's a class called `caps` which styles your text into allcaps. Need to center an element? Don't bother building custom CSS to do it. Use Solid's `xs-text-center`.

Now, that could get messy, like this:
{% highlight html %}

<p class='xs-text-6'>Hey</p>
<h3 class='xs-text-5'>There</h3>

{% endhighlight %}

But that would be ridiculous and defy convention, both from Buzzfeed's point of view and the practical developer's.

###3.) No Really, there's a class for everything
What's impressive is just how robust and sensible the classes are. They all follow some kind of convention, and there's always something to nudge the content one way or another.

###4.) I just love the way it looks
Buzzfeed's site is clean and sensible. They have to display a metric *ton* of content, serving it up to a metric *ton* of people. Everything belongs in it's box and the boxes are clean. There's plenty to distract you from doing your everyday work, but nothing distracts from the content itself. Being able to implement similar ordering of content is a breeze and enjoyable.

###5.) This thing
The [block grid](http://solid.buzzfeed.com/block-grid.html). Want a grid to have four items at one size and two on another? Easy.

{% highlight html %}

<div class="xs-block-grid-2 lg-block-grid-4">
  <div class="block-grid__item">Content goes here.</div>
  <div class="block-grid__item">Content goes here.</div>
  <div class="block-grid__item">Content goes here.</div>
</div>

{% endhighlight %}

No lists, no odd tricks with keeping everything in one row and hoping that the column system you are using can push the extra content over. Simple `block-grid__item` and there you go. I freaking love it.

####If you want to know more, I'd suggest reading Buzzfeed's [article](https://medium.com/buzzfeed-design/introducing-solid-1c16b1bf4868) on Solid, or looking at the [docs](http://solid.buzzfeed.com/) yourself.