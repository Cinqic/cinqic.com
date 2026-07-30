(function () {
  "use strict";

  var title = document.querySelector(".title");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!title) return;

  function resetTitle() {
    title.classList.remove("is-tracking");
    title.style.removeProperty("--tracking");
    title.style.removeProperty("--pointer-transform");
  }

  function pulse() {
    if (reduceMotion && reduceMotion.matches) return;
    title.classList.remove("is-pulsing");
    void title.offsetWidth;
    title.classList.add("is-pulsing");
  }

  if (window.PointerEvent && !(reduceMotion && reduceMotion.matches)) {
    title.addEventListener("pointermove", function (event) {
      if (event.pointerType === "touch") return;
      var bounds = title.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      var y = (event.clientY - bounds.top) / bounds.height - 0.5;
      title.classList.add("is-tracking");
      title.style.setProperty("--tracking", (x * 0.012).toFixed(4) + "em");
      title.style.setProperty("--pointer-transform", "translate3d(" + (x * 2).toFixed(2) + "px, " + (y * 2).toFixed(2) + "px, 0)");
    });
    title.addEventListener("pointerleave", resetTitle);
  }

  title.addEventListener("click", pulse);
  title.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      pulse();
    }
  });
  title.addEventListener("animationend", function () { title.classList.remove("is-pulsing"); });

  if (reduceMotion && reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", function (event) {
      if (event.matches) resetTitle();
    });
  }
}());
