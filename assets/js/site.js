(function () {
  "use strict";
  var header = document.querySelector("[data-header]");
  var menu = document.querySelector(".menu-button");
  var nav = document.querySelector(".nav-list");
  var lastFocus;
  function closeMenu(restoreFocus) {
    nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open");
    if (restoreFocus && lastFocus) { lastFocus.focus(); }
  }
  function openMenu() { lastFocus = document.activeElement; nav.classList.add("is-open"); menu.setAttribute("aria-expanded", "true"); document.body.classList.add("menu-open"); nav.querySelector("a").focus(); }
  menu.addEventListener("click", function () { nav.classList.contains("is-open") ? closeMenu(true) : openMenu(); });
  nav.addEventListener("click", function (event) { if (event.target.matches("a")) { closeMenu(false); } });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape" && nav.classList.contains("is-open")) { closeMenu(true); } });
  window.addEventListener("scroll", function () { header.classList.toggle("is-scrolled", window.scrollY > 12); }, { passive: true });
  document.querySelectorAll("[data-launch-copy]").forEach(function (element) { element.textContent = window.CINQIC.launchCopy(); });
  document.querySelectorAll("[data-company-copy]").forEach(function (element) { element.textContent = window.CINQIC.companyCopy(); });
  var detail = document.querySelector("[data-ecosystem-detail]");
  var capabilities = { learning:["01","Learning","Juniper could help connect people with explanations, practice, and the context needed to keep learning moving forward."], creation:["02","Creation","Juniper could help bring together focused tools for drafting, shaping ideas, and making work easier to refine."], research:["03","Research","Juniper could help organize questions, local material, and sources so research stays understandable and user-directed."], automation:["04","Automation","Juniper could coordinate clearly defined tasks while keeping the user aware of what is happening and in control of decisions."], productivity:["05","Productivity","Juniper could help people manage everyday work through a simpler, more coherent conversational interface."], "local-tools":["06","Local tools","Juniper could connect with tools running on user-controlled hardware whenever practical."] };
  document.querySelectorAll("[data-ecosystem]").forEach(function (button) { button.addEventListener("click", function () { var item = capabilities[button.dataset.ecosystem]; document.querySelectorAll("[data-ecosystem]").forEach(function (other) { other.classList.remove("active"); other.setAttribute("aria-pressed", "false"); }); button.classList.add("active"); button.setAttribute("aria-pressed", "true"); detail.innerHTML = '<p class="eyebrow">Future capability / ' + item[0] + '</p><h3>' + item[1] + '</h3><p>' + item[2] + '</p><p class="detail-note">A future direction, not a current feature.</p>'; }); });
  var reveal = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 }); reveal.forEach(function (element) { element.classList.add("will-reveal"); observer.observe(element); }); } else { reveal.forEach(function (element) { element.classList.add("is-visible"); }); }
  var preview = document.querySelector("[data-preview]");
  if (preview && window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { preview.addEventListener("pointermove", function (event) { var box = preview.getBoundingClientRect(); preview.style.setProperty("--tilt-x", ((event.clientY - box.top) / box.height - 0.5) * -2 + "deg"); preview.style.setProperty("--tilt-y", ((event.clientX - box.left) / box.width - 0.5) * 2 + "deg"); }); preview.addEventListener("pointerleave", function () { preview.style.removeProperty("--tilt-x"); preview.style.removeProperty("--tilt-y"); }); }
}());
