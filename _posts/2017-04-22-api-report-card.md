---
layout: post
title:  "API Report Card: What makes a good API?"
date:   2017-04-22 010:58:00
categories: blog
---

### A Retrospective
I've been working as a developer at Steven Label for a little over a year now, developing a machine-usage tracking API called ```myodotracker```. It takes JSON objects from Raspberry Pi's that we've hooked to each manufacturing machine, registering starts and stops which then is parsed out on the back end. This has allowed for us to look at pain points int he production lifecycle of our products, from operator efficiency to repair times. I thought after this time I'd look back at what makes a good API and how to best build from the ground up.

### What makes a good API?
Much of what I'll be working from is from Joshua Bloch's keynote "How to Design a Good API and Why it Matters", which you can find [here](http://www.cs.bc.edu/~muller/teaching/cs102/s06/lib/pdf/api-design.pdf){:target="_blank"}.

According to Josh, an API should be:

  - Easy to Learn
  - Easy to Use (with or without documentation)
  - Hard to Misuse
  - Easy to Read and Maintain Code That Uses It
  - Sufficiently Powerful to Satisfy requirements
  - Easy to Extend
  - Appropriate to the Audience

All of these are simple, but contain multitudes. I'm not permitted to share

### Easy to Learn
```myodotracker``` is simple. It takes JSON objects with a head (denoting what type of transaction should occur to the data and where the data should go), and then data that gets passed along. There are multiple ways for the data to be parsed, and the transaction type gives a heads up to the API what the format of the data will look like.The code reads easy, variable names are descriptive ()

### Easy to Use