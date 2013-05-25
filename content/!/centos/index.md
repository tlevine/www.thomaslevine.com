---
title: CentOS cluster slaves
kind: article
created_at: 2012-10-29
tags: ['data']
---
I'm setting up workers for my cluster to be accessed from R. I got a VPS from
NodeDeploy and found CentOS easiest to install. Here's the extra configuration
I needed.

[Connecting to the network on boot](http://www.centos.org/docs/5/html/Deployment_Guide-en-US/s1-dhcp-configuring-client.html)

    sed -i s/no/yes/ /etc/sysconfig/network-scripts/ifcfg-eth0

[Install R](http://stackoverflow.com/questions/9468164/problems-installing-r-on-linux-centos-6-2)

    rpm -Uvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-7.noarch.rpm  
    yum install R make

Other nice packages

    yum install htop

Install the packages I want.

    #!/usr/bin/env Rscript
    #
    # These run in different lines so they can be separated if need be.
    #

    # General
    install.packages(c('plyr', 'ggplot2', 'reshape', 'stringr', 'ProjectTemplate'))

    # One parallel framework
    install.packages('snowfall')

    # Another, with two backends
    install.packages(c('foreach'))
    install.packages(c('parallel', 'doParallel'))
    install.packages(c('snow', 'doSNOW'))

I tried making symlinks to make the CentOS R environment look more like mine,
but I started getting problems without error messages, so I stopped trying.
I wound up just running the master on another NodeDeploy server.

Try configuring hosts to deal with those errors.
http://serverfault.com/questions/260706/possible-break-in-attempt-in-var-log-secure-what-does-this-mean
