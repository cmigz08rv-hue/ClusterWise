(function () {
  "use strict";
  var KEY = "strandwise_theme";
  // cant spam the switch, it waits a bit. phones were lagging when people tapped it like crazy xd
  var COOLDOWN_MS = 3000;
  var DEFAULT_THEME = "light";
  var root = document.documentElement;

  function saved() { try { return sessionStorage.getItem(KEY); } catch (e) { return null; } }
  function current() {
    var s = saved();
    if (s === "dark" || s === "light") return s;
    if (DEFAULT_THEME === "system" && window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    return "light";
  }
  function apply(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark"); else root.removeAttribute("data-theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#12151B" : "#FBF7EF");
    var sw = document.getElementById("theme-switch");
    if (sw) sw.setAttribute("aria-checked", String(theme === "dark"));
  }

  // sets the theme before the page paints so theres no white flash. yasssss
  apply(current());

  document.addEventListener("DOMContentLoaded", function () {
    var sw = document.getElementById("theme-switch");
    if (!sw) return;
    sw.setAttribute("aria-checked", String(current() === "dark"));
    var cooling = false;
    sw.addEventListener("click", function () {
      if (cooling) return;
      cooling = true;
      sw.classList.add("is-cooling");
      sw.setAttribute("aria-disabled", "true");
      setTimeout(function () {
        cooling = false;
        sw.classList.remove("is-cooling");
        sw.removeAttribute("aria-disabled");
      }, COOLDOWN_MS);
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try { sessionStorage.setItem(KEY, next); } catch (e) { }
      apply(next);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    if (!header) return;
    // note to self : only flips the class when it actually changes, so nothing runs on every scroll pixel
    var scrolled = null;
    function update() {
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      var now = y > 24;
      if (now !== scrolled) { scrolled = now; header.classList.toggle("is-scrolled", now); }
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  });
})();
