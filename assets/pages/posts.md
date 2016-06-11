---
title: Posts
description: Recent posts
permalink: posts/
menu: 1
octicon: book
---
{% for p in site.posts %}
* [{{ p.title }}]({{ site.baseurl }}{{ p.url }}) - {{ p.date | date_to_long_string }}
{% endfor %}
