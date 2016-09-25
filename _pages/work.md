---
title: Where I've worked
layout: work
---

<div style="height: 200px;"></div>

{% for job in site.work %}
  {% include work-card.html job=job %}
{% endfor %}

<section id="resume" class="container content-section text-center">
  <div class="row">
    <h1>Resume</h1>
    <ul class="list-inline banner-social-buttons">
      <li>
          <a href="/pdf/prof_serv_cv_2016.pdf" class="btn btn-default btn-lg"><span class="network-name">Professional Services</span></a>
      </li>
      <li>
          <a href="/pdf/eng_2016_resume.pdf" class="btn btn-default btn-lg"><span class="network-name">Engineering</span></a>
      </li>
    </ul>
  </div>
</section>