---
layout: page
permalink: /contact/
title: Contact
description: Reach me by email or send a quick note with the form below.
nav: true
nav_order: 7
---

<style>
.contact-links {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 0;
}
.contact-links li { margin-bottom: 0.6rem; }
.contact-links a,
.contact-links .contact-plain {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
}
.contact-links i { width: 1.3rem; text-align: center; color: var(--global-text-color-light); }

.contact-form { margin-top: 0.5rem; max-width: 640px; }
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.6rem 0.8rem;
  margin-bottom: 0.9rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 6px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-family: inherit;
  font-size: 1rem;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--global-theme-color);
}
.contact-form button {
  background: var(--global-theme-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.8rem;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}
.contact-form button:hover { opacity: 0.85; }
</style>

Feel free to reach out about my research, robotic hardware, personal projects or anything else. The form below is the fastest way, or you can find/add me on the platforms below.

<ul class="contact-links">
  <li><span class="contact-plain"><i class="fa-solid fa-envelope"></i> mpeticco [at] mit [dot] edu</span></li>
  <li><a href="https://www.linkedin.com/in/martinpeticco/" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> linkedin.com/in/martinpeticco</a></li>
  <li><a href="https://scholar.google.com/citations?user=AED82XMAAAAJ" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a></li>
  <li><a href="https://github.com/mfpeticco" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> github.com/mfpeticco</a></li>
</ul>

<hr>

#### Send a message

<form action="https://formspree.io/f/xvovqavl" method="POST" class="contact-form">
  <input type="text" name="name" placeholder="Your name" required>
  <input type="email" name="email" placeholder="Your email" required>
  <input type="text" name="subject" placeholder="Subject">
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <textarea name="message" rows="6" placeholder="Your message" required></textarea>
  <button type="submit">Send</button>
</form>
