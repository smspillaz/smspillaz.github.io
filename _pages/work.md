---
title: Where I've worked
layout: work
---

<div style="height: 200px;"></div>

<div class="container">
  <div class="row text-center">
    <h1>Where I've worked</h1>
  </div>

  {% for job in site.work %}
    {% include work-card.html job=job %}
  {% endfor %}

  <div class="row text-center" style="margin-top: 20px">
      <h1>Where I've volunteered</h1>
  </div>

  {% for role in site.volunteer %}
    {% include work-card.html job=role %}
  {% endfor %}

  <div class="row text-center" style="margin-top: 20px">
      <h1>Where I've interned</h1>
  </div>

  {% for role in site.interned %}
    {% include work-card.html job=role %}
  {% endfor %}

  <section id="resume" class="content-section text-center">
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
</div>