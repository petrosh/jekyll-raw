---
title: Cosmonauti
---

## Members

{% for member in site.data.cosmonauti.members %}
- **{{member.nick}}** ({{member.name}} {{member.surname}}): {{member.instrument}} [from {{member.from}} to {{member.to}}]
{% endfor %}

---

## Discography

{% for release in site.data.cosmonauti.releases %}
- ### **{{release.title}}** ({{release.support}})  
  {{release.year}}, {{release.label}}
{% for song in release.tracks %}
  - **{{song.title}}**, {{song.release}} {{song.recorded}} ({{song.author}}, {{song.year}})  
		<video src="{{ site.baseurl }}/assets/audio/cosmonauti/{{ song.file }}.mov" controls height="40px" width="300px"></video>
{% endfor %}
{% endfor %}

---

## Live

{% for gig in site.data.cosmonauti.gigs %}
- {{gig.date | date_to_long_string}} in **{{gig.city}}**, {{gig.venue}}
{% endfor %}
