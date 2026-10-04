/* =========================================================
   ClusterWise — "Save my results" picture (savecard.js)
   Draws the student's results onto a canvas in their own browser
   and saves it as a PNG. Nothing is uploaded anywhere.
   Needs script2.js to be loaded first (uses STRANDS, state,
   pickRecommended, interestMessage, INTEREST_FLAT_SPREAD, LOW_SIGNAL_PCT).

   Where to change things:
   - Colors and fonts: the constants just below
   - Which tags / strand details show for each case: model()
   - Layout and sizes: drawBody()
   ========================================================= */
(function () {
  "use strict";

  /* School seal, small copy embedded so the picture can be saved even when the page is opened from a file */
  var SEAL_SRC = "data:image/png;base64,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";

  var W = 1080, M = 36;                 /* picture width, outer margin */
  var CX = M + 44, CW = W - 2 * M - 88; /* content left edge and width */
  var SCALE = 2;                        /* 2x so the picture stays sharp on phones */
  var CARD_MIN_H = 1278;

  var INK = "#22262B", SOFT = "#5B6169", NAVY = "#1D2B45", AMBER = "#D98E2B", AMBER_DEEP = "#B5711A";
  var LINE = "#E0D6BF", LINE_SOFT = "#EDE4D0", PAPER = "#FBF7EF", CREAM = "#F1E9D8", BACK = "#F4ECDC", BODY = "#3A3F46";
  var SERIF = "Fraunces, Georgia, 'Times New Roman', serif";
  var SANS = "'Work Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

  /* Interest bars show rank, so a better rank is a longer bar (ties share a rank, so they match) */
  var RANK_LEN = { 1: 92, 2: 78, 3: 62, 4: 46, 5: 32, 6: 20 };
  var ORD = ["", "1st", "2nd", "3rd", "4th", "5th", "6th"];

  /* ---------- small drawing helpers ---------- */
  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y); c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r); c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h); c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r); c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }
  function font(c, weight, size, family) { c.font = weight + " " + size + "px " + family; }

  /* Draws one line of text inside a line box of height lh that starts at `top` */
  function txt(c, s, x, top, weight, size, family, color, lh, align) {
    font(c, weight, size, family);
    c.fillStyle = color;
    c.textAlign = align || "left";
    c.textBaseline = "alphabetic";
    c.fillText(s, x, top + (lh - size) / 2 + size * 0.8);
  }

  function wrap(c, s, maxW, weight, size, family) {
    font(c, weight, size, family);
    var words = String(s).split(/\s+/), lines = [], cur = "";
    words.forEach(function (w) {
      var test = cur ? cur + " " + w : w;
      if (cur && c.measureText(test).width > maxW) { lines.push(cur); cur = w; } else { cur = test; }
    });
    if (cur) lines.push(cur);
    return lines;
  }

  /* Diagonal stripes in a strand color, used for the interest bars */
  function stripes(c, x, y, w, h, color) {
    c.save();
    c.beginPath(); c.rect(x, y, w, h); c.clip();
    c.fillStyle = "#FFFFFF"; c.fillRect(x, y, w, h);
    c.strokeStyle = color; c.lineWidth = 6;
    for (var sx = x - h; sx < x + w + h; sx += 15.5) {
      c.beginPath(); c.moveTo(sx, y + h + 2); c.lineTo(sx + h + 4, y - 2); c.stroke();
    }
    c.restore();
  }

  /* Same compass as favicon.svg */
  function compass(c, x, y, size) {
    var s = size / 64;
    c.save(); c.translate(x, y); c.scale(s, s);
    c.fillStyle = NAVY; c.beginPath(); c.arc(32, 32, 31, 0, Math.PI * 2); c.fill();
    c.strokeStyle = AMBER; c.lineWidth = 2; c.beginPath(); c.arc(32, 32, 26.5, 0, Math.PI * 2); c.stroke();
    c.lineWidth = 2.4; c.lineCap = "round";
    [[32, 6.5, 32, 10.5], [32, 53.5, 32, 57.5], [6.5, 32, 10.5, 32], [53.5, 32, 57.5, 32]].forEach(function (t) {
      c.beginPath(); c.moveTo(t[0], t[1]); c.lineTo(t[2], t[3]); c.stroke();
    });
    c.translate(32, 32); c.rotate(35 * Math.PI / 180); c.translate(-32, -32);
    c.fillStyle = AMBER; c.beginPath(); c.moveTo(32, 12); c.lineTo(38.5, 32); c.lineTo(25.5, 32); c.closePath(); c.fill();
    c.fillStyle = "#FBF6EC"; c.beginPath(); c.moveTo(25.5, 32); c.lineTo(38.5, 32); c.lineTo(32, 52); c.closePath(); c.fill();
    c.restore();
    c.save(); c.translate(x, y); c.scale(s, s);
    c.fillStyle = NAVY; c.strokeStyle = "#FBF6EC"; c.lineWidth = 1.5;
    c.beginPath(); c.arc(32, 32, 3, 0, Math.PI * 2); c.fill(); c.stroke();
    c.restore();
  }

  /* ---------- what goes on the card ---------- */
  function plain(html) {
    return String(html).replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&middot;/g, "\u00B7").replace(/\s+/g, " ").trim();
  }
  function and(s) { return String(s).replace(/\s&\s/g, " and "); }
  function blurb(code) {
    var o = STRANDS[code].overview;
    var m = o.match(/^\S+\s+(?:is built for|is for|suits|fits)\s+(.*)$/i);
    var t = m ? "For " + m[1] : o;
    return t.replace(/\s\u2014\s/g, ": ");
  }

  /* Works out the tags, message and strand details for this student's results.
     Same rules as the results page, so the picture always agrees with it. */
  function model() {
    var results = state.results;
    var pick = pickRecommended(results);
    var maxI = Math.max.apply(null, results.map(function (r) { return r.ipct; }));
    var minI = Math.min.apply(null, results.map(function (r) { return r.ipct; }));
    var flat = maxI - minI <= INTEREST_FLAT_SPREAD;
    var topI = results.filter(function (r) { return r.ipct === maxI; });
    var topS = pick.rec;
    var tiedS = pick.tiedAll.length > 1;
    var tiedI = !flat && topI.length > 1;
    var inI = function (code) { return !flat && topI.some(function (r) { return r.strand === code; }); };

    var tags = topS.map(function (r) {
      return { k: r.strand, label: inI(r.strand) ? "Skills and interest match" : (tiedS ? "Tied for top skill" : "Top skill strand") };
    });
    if (!flat) {
      topI.filter(function (r) { return !topS.some(function (s) { return s.strand === r.strand; }); })
        .slice(0, Math.max(0, 4 - tags.length))
        .forEach(function (r) { tags.push({ k: r.strand, label: tiedI ? "Tied for top interest" : "Top interest strand" }); });
    }

    var details = [];
    if (!tiedS) details.push(topS[0].strand);
    if (!flat && topI.length === 1 && details.indexOf(topI[0].strand) < 0) details.push(topI[0].strand);

    var msg = plain(interestMessage(results, pick.rec));
    var big = /^Strong match/i.test(msg);
    if (!big && results[0].percentage < LOW_SIGNAL_PCT) {
      msg += " Your skill scores were low and close together, so lean on your interest results and explore each strand's page.";
    }
    return { results: results, tags: tags, details: details, msg: msg, big: big };
  }

  /* ---------- drawing ---------- */
  function drawStrand(c, code, x, y, w) {
    var info = STRANDS[code], col = info.color, top = y;
    txt(c, "Strand details", x, top, 400, 18, SANS, SOFT, 24); top += 24;
    txt(c, code, x, top, 700, 44, SERIF, col, 48.4); top += 48.4 + 2;
    wrap(c, and(info.full), w, 400, 19, SANS).forEach(function (l) { txt(c, l, x, top, 400, 19, SANS, INK, 26); top += 26; });
    top += 10;
    wrap(c, blurb(code), w, 400, 19, SANS).forEach(function (l) { txt(c, l, x, top, 400, 19, SANS, BODY, 28.5); top += 28.5; });
    top += 14;
    var cw = (w - 20) / 2, bottom = top;
    [["Subjects", info.subjects.slice(0, 4)], ["Possible careers", info.careers.slice(0, 4)]].forEach(function (colData, i) {
      var cx = x + i * (cw + 20), ty = top;
      txt(c, colData[0], cx, ty, 600, 18, SANS, NAVY, 24); ty += 24 + 6;
      colData[1].forEach(function (item) {
        var lines = wrap(c, and(item), cw - 18, 400, 19, SANS);
        c.fillStyle = col; c.beginPath(); c.arc(cx + 4, ty + 13, 4, 0, Math.PI * 2); c.fill();
        lines.forEach(function (l) { txt(c, l, cx + 18, ty, 400, 19, SANS, INK, 25.6); ty += 25.6; });
        ty += 5;
      });
      bottom = Math.max(bottom, ty);
    });
    return bottom;
  }

  /* Draws everything except the footer. Returns the y where the body ends. */
  function drawBody(c, m, seal) {
    var T = M, y = T;

    /* header */
    if (seal) c.drawImage(seal, CX, T + 26, 76, 76);
    c.strokeStyle = AMBER; c.globalAlpha = 0.55; c.lineWidth = 1;
    c.beginPath(); c.moveTo(CX + 98.5, T + 37); c.lineTo(CX + 98.5, T + 91); c.stroke(); c.globalAlpha = 1;
    compass(c, CX + 121, T + 37, 54);
    font(c, 600, 44, SERIF);
    var wx = CX + 189, ww = c.measureText("ClusterWise").width;
    var g = c.createLinearGradient(wx, 0, wx + ww, 0);
    g.addColorStop(0.3, NAVY); g.addColorStop(0.62, AMBER_DEEP); g.addColorStop(1, AMBER);
    txt(c, "ClusterWise", wx, T + 37, 600, 44, SERIF, g, 54);
    var right = W - M - 44;
    txt(c, "My strand results", right, T + 36, 600, 22, SANS, NAVY, 30, "right");
    txt(c, new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }), right, T + 66, 400, 19, SANS, SOFT, 26, "right");
    y = T + 128;
    c.fillStyle = LINE; c.fillRect(M, y, W - 2 * M, 1); y += 1;

    txt(c, "Pasay City South High School", CX, y + 14, 400, 17, SANS, SOFT, 24);
    y += 14 + 24 + 26;

    /* tags */
    var n = m.tags.length, cols = n === 1 ? 1 : (n === 2 || n === 4 ? 2 : 3), gap = 14, th = 95;
    var tw = (CW - gap * (cols - 1)) / cols;
    m.tags.forEach(function (t, i) {
      var tx = CX + (i % cols) * (tw + gap), ty = y + Math.floor(i / cols) * (th + gap), col = STRANDS[t.k].color;
      c.save();
      rr(c, tx, ty, tw, th, 6); c.fillStyle = "#FFFFFF"; c.fill(); c.clip();
      c.fillStyle = col; c.fillRect(tx, ty, 7, th);
      c.restore();
      rr(c, tx + 0.5, ty + 0.5, tw - 1, th - 1, 6); c.strokeStyle = "#D9CDB4"; c.lineWidth = 1; c.stroke();
      c.fillStyle = col; c.save(); rr(c, tx, ty, tw, th, 6); c.clip(); c.fillRect(tx, ty, 7, th); c.restore();
      txt(c, t.label, tx + 25, ty + 12, 400, 19, SANS, SOFT, 23);
      txt(c, t.k, tx + 25, ty + 37, 700, 44, SERIF, col, 46);
    });
    var rows = Math.ceil(n / cols);
    y += rows * th + (rows - 1) * gap + 30;

    /* what this suggests */
    var inner = CW - 60, lines, lh, fw, fs, ff, fc;
    if (m.big) { fw = 600; fs = 38; ff = SERIF; lh = 48.6; fc = NAVY; } else { fw = 400; fs = 23; ff = SANS; lh = 34.5; fc = INK; }
    lines = wrap(c, m.msg, inner, fw, fs, ff);
    var ph = 26 + 34 + 10 + lines.length * lh + 26;
    rr(c, CX, y, CW, ph, 10); c.fillStyle = CREAM; c.fill();
    txt(c, "What this suggests", CX + 30, y + 26, 600, 26, SERIF, NAVY, 34);
    var ly = y + 70;
    lines.forEach(function (l) { txt(c, l, CX + 30, ly, fw, fs, ff, fc, lh); ly += lh; });
    y += ph + 34;

    /* skills and interests, side by side */
    txt(c, "Skills and interests, side by side", CX, y, 600, 31, SERIF, NAVY, 38); y += 38 + 8;
    rr(c, CX, y + 7, 34, 10, 5); c.fillStyle = NAVY; c.fill();
    txt(c, "Skill (test score)", CX + 43, y, 400, 18, SANS, SOFT, 24);
    font(c, 400, 18, SANS);
    var lx = CX + 43 + c.measureText("Skill (test score)").width + 26;
    c.save(); rr(c, lx, y + 7, 34, 10, 5); c.clip(); stripes(c, lx, y + 7, 34, 10, NAVY); c.restore();
    rr(c, lx + 0.5, y + 7.5, 33, 9, 4.5); c.strokeStyle = NAVY; c.lineWidth = 1; c.stroke();
    txt(c, "Interest (rank)", lx + 43, y, 400, 18, SANS, SOFT, 24);
    y += 24 + 18;

    var bx = CX + 128, bw = CW - 128 - 160;
    m.results.forEach(function (r, i) {
      var ry = y + i * 60, col = STRANDS[r.strand].color;
      if (i) { c.fillStyle = LINE_SOFT; c.fillRect(CX, ry, CW, 1); }
      txt(c, r.strand, CX, ry + 12, 700, 30, SERIF, col, 36);
      [[ry + 11, r.percentage, false], [ry + 33, RANK_LEN[r.irank] || 20, true]].forEach(function (b) {
        c.save(); rr(c, bx, b[0], bw, 15, 7.5); c.fillStyle = LINE_SOFT; c.fill(); c.clip();
        if (b[2]) { stripes(c, bx, b[0], bw * b[1] / 100, 15, col); }
        else { c.fillStyle = col; c.fillRect(bx, b[0], bw * b[1] / 100, 15); }
        c.restore();
      });
      var vx = CX + CW - 140;
      txt(c, r.percentage + "%", vx, ry + 7.5, 600, 19, SANS, INK, 24);
      txt(c, ORD[r.irank] || (r.irank + "th"), vx, ry + 29.5, 500, 19, SANS, SOFT, 24);
    });
    y += m.results.length * 60 + 30;

    /* strand details, or a note when there are ties */
    c.fillStyle = LINE; c.fillRect(M, y, W - 2 * M, 1);
    if (m.details.length) {
      y += 1 + 28;
      var nd = m.details.length, dg = 44, dw = (CW - dg * (nd - 1)) / nd, bottom = y;
      m.details.forEach(function (k, i) { bottom = Math.max(bottom, drawStrand(c, k, CX + i * (dw + dg), y, dw)); });
      y = bottom + 14;
    } else {
      y += 1 + 22;
      wrap(c, "Your results include ties, so open each tied strand's page to compare them.", CW, 400, 21, SANS).forEach(function (l) {
        txt(c, l, CX, y, 400, 21, SANS, BODY, 28); y += 28;
      });
      y += 22;
    }
    return y;
  }

  function loadSeal() {
    return new Promise(function (res) {
      var i = new Image();
      i.onload = function () { res(i); };
      i.onerror = function () { res(null); };
      i.src = SEAL_SRC;
    });
  }
  function ensureFonts() {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var specs = ["600 44px Fraunces", "700 44px Fraunces", "400 20px 'Work Sans'", "500 20px 'Work Sans'", "600 20px 'Work Sans'"];
    return Promise.all(specs.map(function (s) { return document.fonts.load(s); })).catch(function () {});
  }

  function build() {
    return Promise.all([ensureFonts(), loadSeal()]).then(function (parts) {
      var seal = parts[1], m = model();
      var tmp = document.createElement("canvas");
      tmp.width = W * SCALE; tmp.height = 4200 * SCALE;
      var t = tmp.getContext("2d"); t.scale(SCALE, SCALE);
      var bodyEnd = drawBody(t, m, seal);

      var FOOT = 58, cardBottom = Math.max(M + CARD_MIN_H, bodyEnd + FOOT);
      var out = document.createElement("canvas");
      out.width = W * SCALE; out.height = (cardBottom + M) * SCALE;
      var c = out.getContext("2d"); c.scale(SCALE, SCALE);
      c.fillStyle = BACK; c.fillRect(0, 0, W, cardBottom + M);
      rr(c, M, M, W - 2 * M, cardBottom - M, 14); c.fillStyle = PAPER; c.fill();
      c.save(); rr(c, M, M, W - 2 * M, cardBottom - M, 14); c.clip();
      c.drawImage(tmp, 0, 0, W, 4200);
      c.fillStyle = "#F6EFE0"; c.fillRect(M, cardBottom - FOOT, W - 2 * M, FOOT);
      c.fillStyle = LINE; c.fillRect(M, cardBottom - FOOT, W - 2 * M, 1);
      txt(c, "A starting point for exploring, not a final decision. You know yourself best.", CX, cardBottom - FOOT + 1, 400, 17, SANS, SOFT, FOOT - 1);
      c.restore();
      rr(c, M + 0.5, M + 0.5, W - 2 * M - 1, cardBottom - M - 1, 14); c.strokeStyle = "#D9CDB4"; c.lineWidth = 1; c.stroke();
      return out;
    });
  }

  /* ---------- saving ---------- */
  var toast;
  function say(msg) {
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "save-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(say.t);
    say.t = setTimeout(function () { toast.classList.remove("show"); }, 3500);
  }

  function toBlob(canvas) {
    return new Promise(function (res, rej) {
      canvas.toBlob(function (b) { b ? res(b) : rej(new Error("no blob")); }, "image/png");
    });
  }

  function isPhone() {
    return /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent));
  }

  function download(blob, name) {
    var url = URL.createObjectURL(blob), a = document.createElement("a");
    a.href = url; a.download = name; a.style.display = "none";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
  }

  /* Fallback for phones that cannot open the share menu (some in-app browsers):
     show the picture so it can be pressed and held to save. */
  function showPreview(blob, name) {
    var url = URL.createObjectURL(blob);
    var box = document.createElement("div");
    box.className = "save-modal";
    box.innerHTML =
      '<div class="save-modal-card" role="dialog" aria-modal="true" aria-label="Your results picture">' +
      '<p class="save-modal-tip">Press and hold the picture, then choose Save image.</p>' +
      '<img alt="Your ClusterWise results" src="' + url + '">' +
      '<div class="save-modal-actions"><a class="btn btn-primary" download="' + name + '" href="' + url + '">Download</a>' +
      '<button type="button" class="btn btn-ghost">Close</button></div></div>';
    document.body.appendChild(box);
    var close = function () { box.remove(); URL.revokeObjectURL(url); };
    box.querySelector(".btn-ghost").addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
  }

  function save(btn) {
    if (!state.results || !state.results.length) { say("Finish all seven parts to save your results."); return; }
    var lab = btn.querySelector(".save-label") || btn, label = lab.textContent;
    btn.disabled = true; lab.textContent = "Preparing picture\u2026";
    var d = new Date(), pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var name = "ClusterWise-results-" + d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + ".png";
    build().then(toBlob).then(function (blob) {
      var file = null;
      try { file = new File([blob], name, { type: "image/png" }); } catch (e) { file = null; }
      if (isPhone() && file && navigator.canShare && navigator.canShare({ files: [file] })) {
        return navigator.share({ files: [file], title: "My ClusterWise results" }).catch(function (err) {
          if (err && err.name === "AbortError") return;
          showPreview(blob, name);
        });
      }
      if (isPhone()) { showPreview(blob, name); return; }
      download(blob, name);
      say("Saved. Check your Downloads folder.");
    }).catch(function () {
      say("Sorry, the picture could not be made. Please try again.");
    }).then(function () {
      btn.disabled = false; lab.textContent = label;
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-save-results]"), function (b) {
    b.addEventListener("click", function () { save(b); });
  });

  /* The floating button is only a helper. It shows when the results page is open,
     the student has scrolled past the bar chart, and no inline Save button is on screen. */
  var fab = document.getElementById("save-fab"), rv = document.getElementById("view-results");
  if (fab && rv) {
    var inlineBtns = Array.prototype.slice.call(rv.querySelectorAll("[data-save-inline]"));
    var inView = {}, pulsed = false, ticking = false;
    var anyInlineVisible = function () { for (var k in inView) if (inView[k]) return true; return false; };

    var sync = function () {
      ticking = false;
      var open = rv.classList.contains("active");
      var chart = document.getElementById("bar-chart");
      var pastChart = open && chart && chart.getBoundingClientRect().bottom < 0;
      var show = !!(pastChart && !anyInlineVisible());
      fab.classList.toggle("on", show);
      /* pulse only the first time it appears: a few rings, then it stays still */
      if (show && !pulsed) {
        pulsed = true;
        fab.classList.add("pulse");
        setTimeout(function () { fab.classList.remove("pulse"); }, 9000);
      }
    };
    var queue = function () { if (!ticking) { ticking = true; requestAnimationFrame(sync); } };

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { inView[inlineBtns.indexOf(e.target)] = e.isIntersecting; });
        queue();
      });
      inlineBtns.forEach(function (b) { io.observe(b); });
    }
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    new MutationObserver(function () {
      if (!rv.classList.contains("active")) { fab.classList.remove("on", "pulse"); }
      queue();
    }).observe(rv, { attributes: true, attributeFilter: ["class"] });
    sync();
  }

  window.ClusterWiseCard = { build: build };   /* handy for testing */
})();