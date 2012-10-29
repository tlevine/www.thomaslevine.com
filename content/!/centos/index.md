---
title: CentOS cluster slaves
kind: article
created_at: 2012-01-02
---
I'm setting up workers for my cluster to be accessed from R. I got a VPS from
NodeDeploy and found CentOS easiest to install. These pages were helpful

* [Connecting to the network on boot](http://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-dhcp-configuring-client.html)
* [Installing R](http://stackoverflow.com/questions/9468164/problems-installing-r-on-linux-centos-6-2)

I tried making symlinks to make the CentOS R environment look more like mine,
but I started getting problems without error messages, so I stopped trying.
I think I'll just run the master on another NodeDeploy server.
