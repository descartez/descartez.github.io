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

```myodotracker``` is simple. It takes JSON objects with a head (denoting what type of transaction should occur to the data and where the data should go), and then data that gets passed along. There are multiple ways for the data to be parsed, and the transaction type gives a heads up to the API what the format of the data will look like.

The code reads easy, but if I could change anything I would make the variable names in the JSON denote the _type_ of data being passed.  ```cycles``` (the number of rotations/armature movements/actions a machine makes) should be  ```cycles_integer``` and so on.
It's not strictly necessary, since the API is in Rails (and Ruby is dynamically typed), but it would be more descriptive and avoid confusion later on.

Documentation is minimally needed, the handling of the JSON is mainly concerned with data storage first and foremost. The time of the start/stop signal being the most important. Any math done to calculate things like uptime and downtime are done by the backend rather than the devices on site or on receiving the signal. The API grabs the JSON and then stores it in objects.

### Hard to Misuse
If the devices do not denote the transaction type or put the wrong type of data in the wrong place, the data does not get stored. If you do not have the API key and the correct serial number of the device, the data gets rejected. It's very strict about it. Abuse is a big concern, as is collision. One device cannot and should not be sending data to the same place as another device. This is controlled by routing, and then the device sends it's serial code as well to be matched with the routes. If they don't match, they don't work.

Since the devices are dealing with time, there's added complications of timezones which means the timestamps must be standardized (read: it's all in Epoch time). The machines that the tracking devices are all in the same timezone (they are at most only a few city blocks from each other), but standardization will be more important as we expand the project.

### Easy to Read and Maintain Code That Uses It
So far, I'm pretty proud with how the code reads. I am less happy about it's maintainability. There's some technical debt that's associated with my past self trying to be a bit too smart. I mentioned earlier about typing the variable names as an example.

Another example is the fact that Ruby has both a ```Datetime``` object and a ```Time``` object. Early on in the project, some of the code dealt with both types and stored them both in different ways. Rather than consider whether I needed both objects and their methods, I decided to be 'agnostic' and not decide. I should have been more opinionated, since later I spent about a day or so weeding out errors from mismatching the objects and storing them separately.

### Sufficiently Powerful to Satisfy requirements
I said at the beginning that the project is starting to show pain points in the manufacturing process. We get to see how long a machine is down. We can even see the reasons why something is down, as well as the job associated with it thanks to a hand scanner that connects to the devices and allows for operator input.

Much of the value added is because of the simplicity of the API. Data recieved is sanitary and formatted. Data is stored, then has things done to it, rather than having things done to the data on store.

### Easy to Extend
Each individual device runs code that has been "set", which means we make little or no modifications to this code. One of the reasons for this is versioning; we will have a device on every press in the future, and updating each machine takes time. So the data that's being grabbed from the devices is set and standardized. I and others spent a long time, months before I started coding, deciding what was necessary.

Data grabbed is simple and straightforward. Cycles, time of start/stop, job number, status messages, etc. We even created a "passthrough" method, which allows for commands to be send directly from the device to the API if necessary. If we end up using the passthrough more, security will need to be implemented, but at the moment the passthrough simply leads to storage and executes no code. (It should go without saying that all transactions are sanitized to prevent SQL injection attacks. We do not want a savvy operator or non-verified device messing with our code.)

This constraint means that extension all has to happen on the API-side rather than device-side. It limits extendability re: sensor types and operator input, but I and others decided that this was a needed restriction.

### Appropriate to the Audience
I've talked about the power and value that ```myodotracker``` has added to our operations. I've talked a bit about how data is handled, even though I can't show the code that makes it all work. But what the heck is "appropriateness"?

Simply put, it means that the people using it know how to use it. I'm the only dev on the team, but that may not always be. If anything, I should be coding for an audience, even if the code is for future-me. I'm always improving my skills, so I need to write code that can be read and modified easily. Past-me has made mistakes, but by writing "code like prose" I can make sure those mistakes are contained. So far I think I've been doing pretty well, and I only curse my past self a few times a day rather than every second of every day.

## How'd I do?
I think there's always room for improvement. Always. I think I've done pretty well though. My colleagues are happy with what they are seeing, and feature adds will be simple enough as time goes on. There's talk of being able to have text alerts when a machine is down for too long, or job-costing done using the job numbers that are stored. These are big adds, but I foresee very little time mucking around in past code that barely works, but rather spending more time on extension. Maintenance is still a big concern (it always is), as the project begins to expand and more machines get more trackers on them.

Overall I am hopeful and happy with where this project is and is going.