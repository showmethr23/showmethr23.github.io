---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
:)

<div class="row">
{% include about/skills.html title="Skills" source=site.data.languages %}
{% include about/skills.html title="Frameworks" source=site.data.technical-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>