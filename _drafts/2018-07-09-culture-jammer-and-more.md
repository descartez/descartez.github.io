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

Information is the other prong to this system. The device would be hosting a variety of resources for users to use. As an example, the ACLU has [excellent resources](https://www.aclu.org/know-your-rights/demonstrations-and-protests?redirect=free-speech/know-your-rights-demonstrations-and-protests){:target="_blank"}, which could be hosted on this system to ensure access even if the site and the information is blocked on other networks. I would advise against actually allowing hosting of files and downloading onto devices, as this might be used to compromise user devices if the system is ever captured by bad actors.

### The Uses:

- Digital Signposts: Communicating with the wifi name alone would prove valuable. You could mark facilities that otherwise look nondescript, and provide information about the site for activists or concerned citizens nearby for those that connect.

- Organization: Communicating without surveillance is key when discussing activism. Whether you are forming a union, planning a protest, or belong to an oppressed class, being able to form organizations and plan is key. If you use this system, especially if the wifi network is protected by a password only known to the initiated, you can ensure some semblance of privacy.

I'm sure there's more, but this is what I've been able to think of so far.

### What's Been Done:

#### Library Box/Pirate Box:

[The Library Box](http://librarybox.us/hardware.php) is what sparked this idea in the first place. Thinking about networks not connected to the internet, that allow for mobility and connection outside of traditional means really got my gears turning. It then led me to an offshoot of the project called [Pirate Box](https://piratebox.cc/). The Library Box seems to only be able to work on a variety of wifi routers, while the Pirate Box does have support for the Raspberry Pi.

**The Good:** Allows for information and resource sharing, behaving like a "library" that can be used in areas without reliable internet. Pirate Box even has a forum and chat system.

**The Not-So-Good:** It's a matter of preference, but being able to download files from the webserver seems like a great way to infect other devices if the device is compromised. The Pirate Box's forum system also seems like a great way to keep information that may be used as evidence or blackmail.

#### Hot Ninja:
If you haven't seen [vtol's Hot Ninja](https://www.hackster.io/vtol/vtol-hot-ninja-da2cee){:target="_blank"} project, I highly recommend it. It both has the communication and information aspects that I talked about.

**The Good:** I've been thinking about this kind of project for a while, and I'm happy that someone has thought of a way to implement it.  I had never thought of a way to provide multiple networks before. Being able to communicate directly with the network names is brilliant, as it doesn't require direct connection to broadcast a message.

**The Not-So-Good:** It keeps the chats as a log on the device itself, physical possession of the device could be used as evidence or blackmail in certain situations. The profile for the device is also a bit too out of the ordinary. While this is proof of concept, control via a phone or laptop would make sure that you wouldn't be outed by using a suspicious device.

None of these are bad examples, my critique of them are opinions about usage more than anything. Each has a niche that fulfills the same shape of what I was going for, but not quite.

#### How to build it:

I've been thinking about this a lot. I would love some advice about how to best implement this system. I've used Raspberry Pis to host local webservers and chat systems before, but I'd love some advice about how to create admin features with protections, how to physically secure the device to keep from tampering, and how to best hide the device in plain site. If you have any ideas, please email me at rvanstong@gmail.com.