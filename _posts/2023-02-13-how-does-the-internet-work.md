---
title: How Does The Internet Work?
tags: [Internet, Technology]
style: fill
color: info
description: Let's find out how long internet is invented.
---

Source: [Nikhil Thota](https://medium.com/@nikhilthota/digital-minimalism-ac083064b4e4)

# The Beginning of the Internet
The Internet began as a research project funded by the US Army in the 1960s. When the United States fell behind in launching the first artificial satellite to the Soviet Union, the United States established ARPA (Advanced Research Project Agency) to research new technologies, and in 1969 developed ARPANET, which is the mother of the present web. ARPANET is a system that can safely store and transmit data in the communication system in preparation for a nuclear attack. Previously, it was based on centralized data, but after World War II, weapons that can strike a wide area beyond the nuclear continent were developed, and they felt the threat of centralization of data and tried to distribute data. As a result, it was necessary to create a central communication system that connects each data center, and ARPANET was born.

Entering the 1980s, the Internet changed from being private for military use to a public foundation, and since then, various technologies have been developed. But the way it works is still the same. The Internet is a computer network that connects all computers and communicates to exchange information.
&nbsp;

# Etymology of the Internet

The Internet originates from what Vinton Gray Cerf and Robert E. Kahn, who established TCP/IP in 1973, named the Internet with the intention of implementing a network of networks to connect all computers in one communication network (International Network).
&nbsp;

# Changes in the Internet
## Simple Network
### 1:1 Connection
When two computers need to communicate, they must be connected to another computer either physically (generally ethernet cable, LAN cable) or wirelessly via WiFi or Bluetooth.

Assuming that two computers are connected, it is as shown in the figure 1.


![image.png](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-1.png)
Figure 1.

&nbsp;

### Many : Many connections

You can connect as many other computers as you want in a 1:1 method. For example, one computer has 10 LAN ports and can be connected to 10 other computers. However, as the number of computers increases, this physical connection becomes very complicated and close to impossible.
&nbsp;

### Router connection

To solve the above problem, each computer on the network is connected to a special small computer called a router. A router has only one task, which is to ensure that messages sent from a given computer arrive at the correct destination computer. For example, if computer A wants to send a message to computer B, computer A must send the message to the router, and the router must forward the message to computer B. If we borrow the example of a many-to-many connection, if one computer connects to 10 computers, each computer only needs to connect to the router. A total of 11 LAN cables are required.

<img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-3.png" width="450" height="450" class="center">&nbsp;
Figure 2.

&nbsp;

## A network within a network

If so, should all computers be connected to one router? Not like that. Not only can you actually do it physically. Because routers are also computers, the connection can be infinitely expanded by connecting routers together. Like the picture below.

<img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-4.png" width="600" height="350" class="center">&nbsp;
Figure 3.


In this way, it was possible to build a network by connecting computers. However, due to physical limitations, it was difficult to connect computers that are far away, and to solve this problem, they began to use telephone cables. Even before the spread of the Internet, telephone connection was possible anywhere in the world, so special equipment called a modem was required to connect to telephone facilities. The modem turned the computer's network information into information that could be processed by the telephone facility.

Our computer network connects to the telephone facility and passes information to other networks. To do so, you need to connect to an Internet Service Provider (ISP), which is a company that manages the special routers to which each router is connected and can also access the ISP's router. Therefore, information is transferred from our network to networks in other regions through the ISP.

&nbsp;
# Find computer

To send a message to a computer, you must point to a specific computer to receive the message, which is sent to a unique address called IP (Internet Protocol). An IP address is an address consisting of a dot and four numbers. For example `127.0.0.1` Since these numbers are difficult for humans to remember, they have human readable IP addresses called domains. For example, `'google.com'` is `'173.194.121.32'` as an IP address. By using a domain, people can easily remember and use it.