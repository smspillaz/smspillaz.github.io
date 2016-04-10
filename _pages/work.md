---
title: Where I've worked
layout: work
---

<div style="height: 200px;"></div>

{% for job in site.work %}
  {% include work-card.html job=job %}
{% endfor %}