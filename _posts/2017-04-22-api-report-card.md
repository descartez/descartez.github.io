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

### Easy to Learn and Easy to Use
I think these categories overlap somewhat.

```myodotracker``` is simple. It takes JSON objects with a head (denoting what type of transaction should occur to the data and where the data should go), and then data that gets passed along. There are multiple ways for the data to be parsed, and the transaction type gives a heads up to the API what the format of the data will look like.The code reads easy, but if I could change anything I would make the variable names in the JSON denote the _type_ of data being passed. It's not strictly necessary, since the API is in Rails (and Ruby is dynamically typed), but it would be more descriptive and avoid confusion later on.

Documentation is minimally needed, the handling of the JSON is mainly concerned with data storage first and foremost. The time of the start/stop signal being the most important. Any math done to calculate things like uptime and downtime are done by the backend rather than the devices on site or on receiving the signal. The API grabs the JSON and then stores it in objects.

### Hard to Misuse
If the devices do not denote the transaction type or put the wrong type of data in the wrong place, the data does not get stored. If you do not have the API key and the correct serial number of the device, the data gets rejected. It's very strict about it. Abuse is a big concern, as is collision. One device cannot and should not be sending data to the same place as another device. This is controlled by routing, and then the device sends it's serial code as well to be matched with the routes. If they don't match, they don't work.

Since the devices are dealing with time, there's added complications of timezones which means the timestamps must be standardized (read: it's all in Epoch time). The machines that the tracking devices are all in the same timezone (they are at most only a few city blocks from each other), but standardization will be more important as we expand the project.

### Easy to Read and Maintain Code That Uses It


### Sufficiently Powerful to Satisfy requirements
I said at the beginning that the project is starting to

### Easy to Extend
This is where

### Appropriate to the Audience

