---
layout: post
title:  "API Report Card: What makes a good API?"
date:   2017-04-22 010:58:00
categories: blog
---

### A Retrospective
I've been working as a developer at Steven Label for a little over a year now, developing a machine-usage tracking API. It takes JSON objects from Raspberry Pi's that we've hooked to each manufacturing machine, registering starts and stops which then is parsed out on the back end. This has allowed for us to look at pain points int he production lifecycle of our products, from operator efficiency to repair times. I thought after this time I'd look back at what makes a good API and how to best build from the ground up.

### What makes a good API?
Much of what I'll be working from is from Joshua Bloch's keynote "How to Design a Good API and Why it Matters", which you can find