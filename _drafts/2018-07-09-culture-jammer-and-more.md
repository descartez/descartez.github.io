---
layout: post
title:  "Raspberry Networks and More"
date:   2018-07-09 010:58:00
categories: blog
---

With the world being what it is, telecoms getting tighter control over networks, and surveillance projects like [PRISM](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)){:target="_blank"} around, decentralizing communication and hiding it from surveillance is more important than ever.

### The Idea:

A wifi network hosted in an area (permanently or temporarily) that isn't leading to the internet, but rather opens to a chatroom or web page hosted on this network. No outside connection (other than those made within range of the wifi antenna) can be made. It should run on something small (a Raspberry Pi or a ESP8266) that doesn't draw a lot of power. This small profile means can hide it anywhere. The limited power draw also means that you can provide power in novel ways, like with a solar panel.

This wifi network can be more overt (named "Subversive Tech Chat" or similar), or it can be covert (named "Free Wifi", or similar). It can be protected by a password, depending on the access you wish to give.

There's two prongs to this idea: communication and information.

The communication would be provided by a websockets chat server, making sure to not leave a paper trail or log what is being said. Traffic must be obscured as well. Cleanup can happen at a set time, when the server goes down, on startup, etc. This will allow for discussion and organization without fear of being found out, because the wifi usage is not on an existent (and possibly surveilled) network. The optional wifi password may also provide some obscurity and security. The password can then be spread through traditional means (telling someone), hopefully ensuring only trusted individuals get access.

Information is the other prong to this system. Hosting a variety of resources for users to use. As an example, the ACLU has [excellent resources](https://www.aclu.org/know-your-rights/demonstrations-and-protests?redirect=free-speech/know-your-rights-demonstrations-and-protests){:target="_blank"}, which could be hosted on this system to ensure access even if the site and the information is blocked on other networks.

### The Uses:

- Digital Signposts:

- Organization:

### What's Been Done:

#### Hot Ninja:
If you haven't seen [vtol's Hot Ninja](https://www.hackster.io/vtol/vtol-hot-ninja-da2cee){:target="_blank"} project, I highly recommend it. It both has the communication and information aspects that I talked about.

**The Good:** I've been thinking about this kind of project for a while, and I'm happy that someone has thought of a way to implement it.  I had never thought of a way to provide multiple networks before. Being able to communicate directly with the network names is brilliant, as it doesn't require direct connection to broadcast a message.

**The Not-So-Good:** It keeps the chats as a log on the device itself, physical possession of the device could be used as evidence or blackmail in many a situation.The profile for the device is also a bit too out of the ordinary. While this is proof of concept, control via a phone or laptop would make sure that you wouldn't be outed by using a suspicious device.

#### Library Box:

**The Good:**

**The Not-So-Good:**

None of these are bad examples, my critique of them are opinions about usage more than anything. Each has a niche that fulfills the same shape of what I was going for, but not quite.