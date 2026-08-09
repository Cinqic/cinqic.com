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
  document.querySelectorAll("[data-release-label]").forEach(function (element) { element.textContent = window.CINQIC.releaseLabel(); });
  var reveal = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) { var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 }); reveal.forEach(function (element) { element.classList.add("will-reveal"); observer.observe(element); }); } else { reveal.forEach(function (element) { element.classList.add("is-visible"); }); }
}());
