/* Dark mode. Loaded in <head> so the saved theme is applied before the page paints (no white flash).
   The choice is kept in session storage (like the language), so it clears when the tab closes.
   To follow the device's light/dark setting when nothing is saved, change DEFAULT_THEME to "system". */
(function () {
  "use strict";
  var KEY = "strandwise_theme";
  var COOLDOWN_MS = 3000;               /* wait this long between switches (stops spam-tapping lag on phones) */
  var DEFAULT_THEME = "light";          /* "light" or "system" */
  var root = document.documentElement;

  function saved() { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }
  function current() {
    var s = saved();
    if (s === "dark" || s === "light") return s;
    if (DEFAULT_THEME === "system" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }
  function apply(theme, animate) {
    if (animate && !(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      root.classList.add("theme-anim");
      clearTimeout(apply.t);
      apply.t = setTimeout(function () { root.classList.remove("theme-anim"); }, 450);
    }
    if (theme === "dark") root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#12151B" : "#FBF7EF");
    var sw = document.getElementById("theme-switch");
    if (sw) sw.setAttribute("aria-checked", String(theme === "dark"));
  }

  apply(current(), false);

  document.addEventListener("DOMContentLoaded", function () {
    var sw = document.getElementById("theme-switch");
    if (!sw) return;
    sw.setAttribute("aria-checked", String(current() === "dark"));
    var cooling = false;
    sw.addEventListener("click", function () {
      if (cooling) return;                       /* cooldown: ignore taps while the last switch is still settling */
      cooling = true;
      sw.classList.add("is-cooling");
      sw.setAttribute("aria-disabled", "true");
      setTimeout(function () {
        cooling = false;
        sw.classList.remove("is-cooling");
        sw.removeAttribute("aria-disabled");
      }, COOLDOWN_MS);
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { sessionStorage.setItem(KEY, next); } catch (e) { /* storage blocked: still switches for this visit */ }
      apply(next, true);
    });
  });
})();
