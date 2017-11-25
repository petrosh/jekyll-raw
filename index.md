---
title: Home
description: Hi!
---

## Links

- [Crypto](crypto/)
- [Domtools](domtools/)
- [carello.js](carello.js/)
- [ask-spock](ask-spock/)
- [MathJax](mathjax/)
- [Ops](ops/)

<ul hidden>
  <li><a href="Cosmo/">Cosmo</a></li>
  <li><a href="books/">Books</a></li>
  <li><a href="https://telemarket-tk.github.io/">telemarket-tk</a></li>
  <li><a href="semiotic-standard/">Semiotic standard</a></li>
  <li><a href="gitmarks/">gitmarks</a></li>
  <li><a href="diarissues/">diarissues</a></li>
</ul>

{% for p in site.posts %}* [{{ p.title }}]({{ site.baseurl }}{{ p.url }}) - {{ p.date | date_to_long_string }}
{% endfor %}

## GitHub

{% assign pa = site.pages | where: 'parent', 'GitHub' | sort: 'menu' %}
{% for p in pa %}* {% if p.octicon %}<span class="octicon octicon-{{ p.octicon }}"></span> {% endif %}[{{ p.title }}]({{ site.baseurl }}{{ p.url }})
{% endfor %}
