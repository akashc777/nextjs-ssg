---
title: How to access localhost from inside a Docker container in Linux
description: "steps to access allow a docker container to access stuff on the host"
---

1. Enable `route_localnet` for `docker0` interface

```
sysctl -w net.ipv4.conf.docker0.route_localnet=1
```