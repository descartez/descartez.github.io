---
layout: post
title:  "Why Use Pseudo-selectors?"
date:   2015-11-7 09:44:31
categories: lessons css
---

## What are selectors?

When you have to select a particular HTML element, we use a CSS selector.
So if the HTML looks like this:

{% highlight html linenos %}

<div id="this-list" class="all-lists">
  <ul>
    <li id='first-item'>
      A list item.
    </li>
    <li>
      Another list item.
    </li>
  </ul>
</div>

{% endhighlight %}

A basic CSS selector looks like:

{% highlight css linenos %}

// this selects based on id's. This only works for this one thing.

#this-list {
  font-size: 2em;
}

// this works on all things with the same class.
// If you want to apply the same rules to multiple
// things, this is what to do.

.all-lists {
  font-size: 2em;
}

{% endhighlight %}

But what if you only want to select the first item in the list? I guess you could use that particular item's particular id. But what if the first one of every list you have needs to have the same rules applied? You can't use the same id for every item. Id's only work on the first id found. After that it just ends. Classes work on all elements it's applied to, but you're still working a bit too hard.

I would not suggest making the first of every list have it's own id's or use classes for every first element. You're just repeating yourself (a major sin in programming).

## Enter our hero: Pseudo-selector!

Fear not defenseless programmer! The pseudo-selector can help! So you want the first item of a list to have a bigger font size? Easy.

{% highlight css linenos %}

ul li:first-child {
  font-size: 2em;
}

{% endhighlight %}

There's [a ton](http://www.w3schools.com/css/css_pseudo_classes.asp) of different
pseudo-selectors. From selecting the 3rd of every element of a particular type (:nth-child(n)) or every visited link (:visited).

## But wait! What about efficiency?
Efficiency on the front end is a big deal. With the web being viewed more and more on mobile devices, speed is something users will notice immediately. Well id's are faster than anything. Classes are slightly slower, but barely. Pseudo-selectors are actually one of the slowest things around.

However! "Slow" is comparative, not qualitative. We are talking about milliseconds. If you're making a huge website with a ton of stuff on it, then milliseconds are important to save. But most of the time that's not a huge concern.

Honestly, if you plan on writing a huge websites with id's you're going to have a huge code base that you have to change on a ridiculously granular level.

The advantage with pseudo-selectors is it generalizes code. Reusable code is wonderful.

So use this wonderful tool! Unless you need to build Google or something. Usually you will not be doing that (thankfully). If you wanna read more, I'd go [here](http://csswizardry.com/2011/09/writing-efficient-css-selectors/) or [here](https://css-tricks.com/pseudo-class-selectors/). Or use that Google I hear so much about.
