---
title: Home
description: Hi!
---

* [Domtools](domtools/)

## Posts

{% for p in site.posts %}
* [{{ p.title }}]({{ site.baseurl }}{{ p.url }}) - {{ p.date | date_to_long_string }}
{% endfor %}

## Links

- [Cosmo](Cosmo/)
- [telemarket-tk](https://telemarket-tk.github.io/)
- [Semiotic standard](semiotic-standard/)
- [gitmarks](gitmarks/)
- [diarissues](diarissues/)
- [carello.js](carello.js/)
- [ask-spock](ask-spock/)

## GitHub

{% assign pa = site.pages | where: 'parent', 'GitHub' | sort: 'menu' %}
{% for p in pa %}
* {% if p.octicon %}<span class="octicon octicon-{{ p.octicon }}"></span> {% endif %}[{{ p.title }}]({{ site.baseurl }}{{ p.url }})
{% endfor %}
