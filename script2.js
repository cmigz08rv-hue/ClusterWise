/* =========================================================
   ClusterWise — assessment hub controller (script2.js)

   Requires questions.js to be loaded first (MODULES, MODULE_ORDER).

   SCREEN FLOW (state transitions)
   ---------------------------------------------------------
   view-home
      │  "Start Assessment" (home or strand page)   -> openHub()
      ▼
   view-hub  ◄──────────────────────────────────────────────┐
      │  click an unfinished module card -> startModule(code)│
      ▼                                                      │
   view-assessment (one module, one question at a time)      │
      │  last question + "Finish test" -> finishModule()     │
      │  (score saved, module locked, NO answers shown) ─────┘
      │
   view-hub, once all 6 modules are done:
      │  "See Overall Results" unlocks -> showResults()
      ▼
   view-results

   Finished modules are saved (sessionStorage). The current screen and a
   test in progress (question number, answers, option order) are also saved,
   so a refresh puts the student back where they were.
   ========================================================= */

/* ---------- Strand reference data ---------- */
const STRANDS = {
  STEM: {
    name: "STEM",
    full: "Science, Technology, Engineering & Mathematics",
    color: "#3457D5",
    overview: "STEM is built for students who like asking why something works and proving it. Expect heavy math, laboratory science, and a lot of problem sets.",
    focus: "Deep, theory-first study of the natural and physical sciences, paired with advanced mathematics.",
    highlight: "theory-first",
    subjects: ["Pre-Calculus & Basic Calculus", "General Physics", "General Chemistry", "General Biology", "Research"],
    skills: ["Analytical & logical reasoning", "Data interpretation", "Scientific methodology", "Precision & patience with detail"],
    courses: ["Engineering (all branches)", "Computer Science", "Medicine & Allied Health Sciences", "Architecture", "Applied Mathematics"],
    careers: ["Engineer", "Researcher / Scientist", "Doctor", "Architect", "Data Analyst"],
    videoId: "NO-INaxhY-w",
    videoCaption: "A quick recap of what STEM students actually study and build."
  },
  ASSH: {
    name: "ASSH",
    full: "Arts, Social Sciences, and Humanities",
    color: "#C2457F",
    formerly: "HUMMS",   // the strand's old name, shown as "Formerly ..." (videos may still use it)
    overview: "ASSH is for students drawn to people, culture, language, and ideas — how societies work and how to write and argue well about them.",
    focus: "The study of human behavior, society, communication, and the humanities.",
    highlight: "human behavior, society",
    subjects: ["Creative Writing", "Philosophy", "Communication", "Politics & Governance", "Disciplines & Ideas in Social Sciences"],
    skills: ["Writing & public speaking", "Critical & reflective thinking", "Research & interviewing", "Empathy & cultural awareness"],
    courses: ["Communication / Journalism", "Political Science", "Education", "Psychology", "Law (pre-law)"],
    careers: ["Teacher / Professor", "Lawyer", "Journalist", "Psychologist", "Public Servant"],
    videoId: "QjYIQNZpRyw",
    videoCaption: "A quick recap of what ASSH students read, discuss, and write about."
  },
  BM: {
    name: "BM",
    full: "Business and Management",
    color: "#1E8578",
    formerly: "ABM",   // the strand's old name, shown as "Formerly ..." (videos may still use it)
    overview: "BM suits students curious about how businesses run, how money moves, and how to lead or manage an organization.",
    focus: "The fundamentals of business operations, finance, and management practices.",
    highlight: "business operations, finance",
    subjects: ["Fundamentals of ABM", "Business Finance", "Organization & Management", "Applied Economics", "Business Math"],
    skills: ["Budgeting & financial literacy", "Planning & organizing", "Negotiation & leadership", "Numerical reasoning"],
    courses: ["Accountancy", "Business Administration", "Entrepreneurship", "Marketing Management", "Economics"],
    careers: ["Accountant", "Entrepreneur", "Marketing Manager", "Financial Analyst", "Human Resources Officer"],
    videoId: "4Oog3D2xK10",
    videoCaption: "A quick recap of how BM students learn to plan, manage, and grow a business."
  },
  HT: {
    name: "HT",
    full: "Hospitality and Tourism",
    color: "#E4572E",
    formerly: "HE",   // the strand's old name, shown as "Formerly ..." (videos may still use it)
    overview: "HT is a practical, service-oriented track — cooking, hotel and restaurant operations, and tourism skills you can apply right away.",
    focus: "Hands-on training in food, service, hospitality, and tourism-related work.",
    highlight: "food, service, hospitality",
    subjects: ["Cookery", "Food & Beverage Services", "Housekeeping", "Tourism Promotion", "Caregiving"],
    skills: ["Practical service skills", "Attention to hygiene & detail", "Customer care", "Teamwork under pressure"],
    courses: ["Hotel & Restaurant Management", "Tourism Management", "Nutrition & Dietetics", "Nursing", "Culinary Arts"],
    careers: ["Chef / Cook", "Hotel & Restaurant Staff", "Tour Coordinator", "Caregiver", "Flight Attendant"],
    videoId: "j7XlkEx2IHA",
    videoCaption: "A quick recap of the hands-on service skills HT students practice."
  },
  ICT: {
    name: "ICT",
    full: "Information and Communications Technology",
    color: "#6A3EA1",
    overview: "ICT fits students who like building and fixing digital things — apps, websites, networks, and systems.",
    focus: "Practical, skills-based training in computer systems, software, and digital media.",
    highlight: "skills-based training",
    subjects: ["Computer Programming", "Computer Systems Servicing", "Animation", "Technical Drafting", "Web/App Development"],
    skills: ["Programming & logic building", "Troubleshooting", "Digital design", "Systematic thinking"],
    courses: ["Computer Science", "Information Technology", "Multimedia Arts", "Computer Engineering", "Digital Design"],
    careers: ["Software Developer", "IT Support Specialist", "UI/UX Designer", "Network Administrator", "Game Developer"],
    videoId: "7uVoBJf70m0",
    videoCaption: "A quick recap of what ICT students build, code, and design."
  },
  IA: {
    name: "IA",
    full: "Industrial Arts",
    color: "#B71C1C",
    formerly: "EIM",   // the strand's old name, shown as "Formerly ..." (videos may still use it)
    overview: "IA is a hands-on technical track for students who like building, wiring, and fixing things with tools and machinery.",
    focus: "Technical-vocational training in electrical systems, installation, and maintenance work.",
    highlight: "Technical-vocational training",
    subjects: ["Electrical Installation", "Industrial Wiring", "Occupational Health & Safety", "Technical Drawing", "Electronics"],
    skills: ["Manual dexterity & precision", "Practical troubleshooting", "Safety-conscious work habits", "Tool & equipment handling"],
    courses: ["Electrical Engineering", "Electronics Engineering", "Industrial Technology", "Mechanical Technology", "Automotive Technology"],
    careers: ["Electrician", "Electrical Technician", "Maintenance Engineer", "Industrial Electrician", "Building Technician"],
    videoId: "2GhjbMmD56o",
    videoCaption: "A quick recap of the hands-on electrical and technical work IA students do."
  }
};

/* ---------- Strand icons (single-color line icons) ---------- */
const STRAND_ICONS = {
  STEM: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" stroke-width="2.2"/>
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" stroke-width="2.2" transform="rotate(60 24 24)"/>
    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" stroke-width="2.2" transform="rotate(120 24 24)"/>
    <circle cx="24" cy="24" r="3.4" fill="currentColor"/>
  </svg>`,
  ASSH: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 13c-4.4-3.3-10.6-4.3-15.5-3v24c4.9-1.3 11.1-.3 15.5 3 4.4-3.3 10.6-4.3 15.5-3V10c-4.9-1.3-11.1-.3-15.5 3z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M24 13v24" stroke="currentColor" stroke-width="2.2"/>
  </svg>`,
  BM: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 38h32" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="12" y="26" width="6" height="10" rx="1" stroke="currentColor" stroke-width="2.2"/>
    <rect x="21" y="18" width="6" height="18" rx="1" stroke="currentColor" stroke-width="2.2"/>
    <rect x="30" y="10" width="6" height="26" rx="1" stroke="currentColor" stroke-width="2.2"/>
  </svg>`,
  HT: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 21a7 7 0 0 1 2.6-13.4A6 6 0 0 1 24 4a6 6 0 0 1 7.4 3.6A7 7 0 0 1 34 21v5H14v-5z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M14 34h20v3a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2v-3z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M14 27h20" stroke="currentColor" stroke-width="2.2"/>
  </svg>`,
  ICT: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 14 7 24l10 10" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31 14l10 10-10 10" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27 9 21 39" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
  </svg>`,
  IA: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.8 10.8l4.2 4.2M33 33l4.2 4.2M37.2 10.8 33 15M15 33l-4.2 4.2" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"/>
    <circle cx="24" cy="24" r="9.5" stroke="currentColor" stroke-width="2.3"/>
    <circle cx="24" cy="24" r="3" fill="currentColor"/>
  </svg>`
};

const STRAND_ORDER = ["STEM", "ASSH", "BM", "HT", "ICT", "IA"];
const OPTION_LETTERS = ["A", "B", "C", "D"];

/* Plain-language descriptors used by the results breakdown.
   strength = what a high score suggests, practice = what a low score suggests. */
const APTITUDE = {
  STEM: { strength: "math and natural-science reasoning", practice: "math and science problem solving" },
  ASSH: { strength: "reading comprehension and spotting flawed arguments", practice: "close reading and judging arguments" },
  BM:   { strength: "quantitative and financial reasoning", practice: "numerical and financial reasoning" },
  ICT:  { strength: "algorithmic, step-by-step logic", practice: "algorithm and flowchart logic" },
  IA:   { strength: "mechanical reasoning, tool safety, and reading schematics", practice: "mechanical and schematic reasoning" },
  HT:   { strength: "sound judgment in service situations", practice: "handling customer and service situations" }
};

/* =========================================================
   STATE
   ========================================================= */
const STORAGE_KEY = "strandwise.hub.v1";
const SESSION_KEY = "strandwise.session.v1";   // where the student is (survives a refresh)
const PLEDGE_KEY = "strandwise.pledge.v1";     // the "I will answer honestly" tick (this browser session)
const PROGRESS_KEY = "strandwise.progress.v1"; // unfinished tests: answers saved when the student leaves to the hub
let currentViewId = "view-home";

const state = {
  activeModule: null,   // code of the module being taken, or null (hub / other screens)
  phase: null,          // "intro" (rules screen) or "question" while a module is active
  current: 0,           // index of the current question inside the active module
  draft: [],            // answers for the active module: chosen ORIGINAL option index, or null
  optionOrder: [],      // per question: shuffled list of original option indexes (display order)
  scores: {},           // finished modules only: { STEM: { correct: 8, total: 10 }, ... }
  progress: {},         // unfinished modules only: { STEM: { current, draft, optionOrder }, ... }
  results: null,        // computed by computeResults()
  interest: null,       // finished interest questionnaire: { a: {strand: sum of ratings}, b: {strand: most minus least} }
  iprog: null           // unfinished interest questionnaire (saved position and answers)
};

const INTEREST_KEY = "strandwise.interest.v1";
const INTEREST_PROG_KEY = "strandwise.interestprog.v1";
/* Live interest run. pos 0..nA-1 = Part A statements, nA..nA+nB-1 = Part B items.
   order[p] = statement index shown at Part A position p; a[p] = its 1-5 rating.
   bOrder[i] = shuffled strand order for Part B item i; b[i] = { most, least } strand codes. */
const ist = { active: false, phase: null, pos: 0, order: [], a: [], bOrder: [], b: [] };

/* ---------- sessionStorage (cleared when the tab closes) ---------- */
function saveState() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state.scores)); } catch (e) { /* storage blocked: keep going in memory */ }
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    MODULE_ORDER.forEach(code => {
      const s = saved[code];
      const bank = MODULES[code] && MODULES[code].questions;
      // Only trust an entry if it still matches the current question bank size
      if (s && bank && Number.isInteger(s.correct) && s.total === bank.length && s.correct >= 0 && s.correct <= s.total) {
        state.scores[code] = { correct: s.correct, total: s.total };
      }
    });
  } catch (e) { state.scores = {}; }
}

/* ---------- Honesty pledge: the hub tests stay locked until it is ticked ---------- */
let pledged = false;
try { pledged = sessionStorage.getItem(PLEDGE_KEY) === "1"; } catch (e) { pledged = false; }
function savePledge() {
  try { sessionStorage.setItem(PLEDGE_KEY, pledged ? "1" : "0"); } catch (e) { /* storage blocked: keep going in memory */ }
}

const isDone = code => code === "INTEREST" ? Boolean(state.interest) : Boolean(state.scores[code]);
const countDone = () => MODULE_ORDER.filter(isDone).length;          // skill tests only
const allDone = () => countDone() === MODULE_ORDER.length && Boolean(state.interest);   // all 6 tests AND the interest questionnaire

/* ---------- Remember where the student is, so a refresh keeps them there ---------- */
function saveSession() {
  saveProgress();
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      view: currentViewId,
      activeModule: state.activeModule,
      phase: state.phase,
      current: state.current,
      draft: state.draft,
      optionOrder: state.optionOrder,
      interest: ist.active
    }));
  } catch (e) { /* storage blocked: keep going in memory */ }
}

/* ---------- Saved progress per test ----------
   Lets a student leave a test for the hub and pick it up later. Each unfinished test keeps its own
   answers, position and option order (so nothing is re-shuffled). An entry is removed when the test
   is finished. Kept in sessionStorage, so it is cleared when the tab closes. */
function validProgress(code, p) {
  const bank = MODULES[code] && MODULES[code].questions;
  if (!bank || !p) return false;
  const n = bank.length;
  return Number.isInteger(p.current) && p.current >= 0 && p.current < n &&
    Array.isArray(p.draft) && p.draft.length === n &&
    p.draft.every(a => a === null || (Number.isInteger(a) && a >= 0 && a <= 3)) &&
    Array.isArray(p.optionOrder) && p.optionOrder.length === n &&
    p.optionOrder.every(o => Array.isArray(o) && o.length === 4 && [0, 1, 2, 3].every(i => o.includes(i)));
}

function persistProgress() {
  try { sessionStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress)); } catch (e) { /* storage blocked: keep going in memory */ }
}

/* Copies the live test into state.progress (only while a question screen is showing) */
function saveProgress() {
  const code = state.activeModule;
  if (!code || state.phase !== "question" || isDone(code)) return;
  state.progress[code] = {
    current: state.current,
    draft: state.draft.slice(),
    optionOrder: state.optionOrder.map(o => o.slice())
  };
  persistProgress();
}

function loadProgress() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(PROGRESS_KEY) || "{}");
    MODULE_ORDER.forEach(code => {
      if (!isDone(code) && validProgress(code, saved[code])) state.progress[code] = saved[code];
    });
  } catch (e) { state.progress = {}; }
}

const answeredCount = code => state.progress[code] ? state.progress[code].draft.filter(a => a !== null).length : 0;

/* Returns true if it put the student back where they were */
function restoreSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    if (!s) return false;

    if (s.view === "view-assessment") {
      if (s.interest && !state.interest && resumeInterestFromSaved()) { renderInterest(); showView("view-assessment"); return true; }
      if (s.phase === "intro") { openHub(); return true; }   // refreshing on the rules screen goes back to the hub
      const code = s.activeModule;
      const bank = MODULES[code] && MODULES[code].questions;
      if (!bank || isDone(code)) { openHub(); return true; }
      const n = bank.length;
      const valid =
        Number.isInteger(s.current) && s.current >= 0 && s.current < n &&
        Array.isArray(s.draft) && s.draft.length === n &&
        s.draft.every(a => a === null || (Number.isInteger(a) && a >= 0 && a <= 3)) &&
        Array.isArray(s.optionOrder) && s.optionOrder.length === n &&
        s.optionOrder.every(o => Array.isArray(o) && o.length === 4 && [0, 1, 2, 3].every(i => o.includes(i)));
      if (!valid) { openHub(); return true; }
      state.activeModule = code;
      state.current = s.current;
      state.draft = s.draft;
      state.optionOrder = s.optionOrder;
      renderQuestion();
      showView("view-assessment");
      return true;
    }
    if (s.view === "view-hub") { openHub(); return true; }
    if (s.view === "view-results" && allDone()) { showResults(); return true; }
  } catch (e) { /* fall through to home */ }
  return false;
}

/* Dev helper: warns in the console if a question is malformed */
function validateQuestionBank() {
  MODULE_ORDER.forEach(code => {
    const m = MODULES[code];
    if (!m) { console.warn(`ClusterWise: module ${code} is missing from MODULES`); return; }
    m.questions.forEach((q, i) => {
      const ok = Array.isArray(q.options) && q.options.length === 4 &&
                 Number.isInteger(q.correctAnswerIndex) && q.correctAnswerIndex >= 0 && q.correctAnswerIndex <= 3;
      if (!ok) console.warn(`ClusterWise: ${code} question ${i + 1} needs exactly 4 options and a correctAnswerIndex of 0-3`);
    });
  });
}

/* ---------- Option shuffling ----------
   Display order is generated once per attempt of a module; scoring uses the
   ORIGINAL option index, so shuffling never affects correctness. */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Browser history (makes the Back / Forward buttons work) ----------
   Each screen the student opens is recorded with history.pushState. The popstate
   listener near the bottom of this file shows the right screen again on Back/Forward.
   The URL itself never changes, so refreshing still uses the sessionStorage restore. */
let currentStrand = null;   // which strand page is open (needed to come back to the right one)

function historyState(id) {
  return {
    view: id,
    strand: id === "view-strand-detail" ? currentStrand : null,
    module: id === "view-assessment" ? state.activeModule : null
  };
}

/* mode: "push" (default) adds an entry, "replace" swaps the current one,
   "none" leaves history alone (used when Back/Forward itself brought us here) */
function recordHistory(id, mode) {
  if (mode === "none") return;
  try {
    const next = historyState(id);
    const cur = history.state;
    if (mode === "replace" || !cur) {
      history.replaceState(next, "");                 // first screen of the visit, or a correction
    } else if (cur.view !== next.view || (cur.strand || null) !== (next.strand || null)) {
      history.pushState(next, "");                    // a new screen
    }
  } catch (e) { /* history blocked: the site still works, just without Back/Forward */ }
}

/* ---------- View switching ---------- */
function showView(id, mode = "push") {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  currentViewId = id;
  recordHistory(id, mode);
  saveSession();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   HOME / NAVIGATION
   ========================================================= */
/* Every "Start Assessment" entry point opens the hub */
function openHub(mode) {
  renderHub();
  showView("view-hub", typeof mode === "string" ? mode : "push");   // a click passes an Event, not a string
}

document.getElementById("start-btn").addEventListener("click", openHub);
document.getElementById("nav-home").addEventListener("click", () => showView("view-home"));
document.getElementById("nav-explore").addEventListener("click", () => {
  showView("view-home");
  setTimeout(() => {
    document.getElementById("explore-strands").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
});

/* ---------- Explore Strands cards (home page) ---------- */
function renderStrandGrid() {
  const grid = document.getElementById("strand-grid");
  grid.innerHTML = "";
  STRAND_ORDER.forEach(code => {
    const info = STRANDS[code];
    const card = document.createElement("button");
    card.className = "strand-card";
    card.style.setProperty("--sc", info.color);
    card.innerHTML = `
      <span class="strand-card-badge" aria-hidden="true">${STRAND_ICONS[code]}</span>
      <span class="strand-card-content">
        <span class="strand-card-name">${info.name}</span>
        <span class="strand-card-full">${info.full}</span>
        ${info.formerly ? `<span class="strand-card-former">Formerly ${info.formerly}</span>` : ""}
        <p class="strand-card-blurb">${info.overview}</p>
        <span class="strand-card-cta">View subjects, courses & careers &rsaquo;</span>
      </span>
    `;
    card.addEventListener("click", () => {
      renderStrandDetail(code);
      showView("view-strand-detail");
    });
    grid.appendChild(card);
  });
}

/* ---------- Strand page: "a / an" for the typed career, e.g. "an Engineer", "a Doctor" ---------- */
function withArticle(word) {
  if (/^(u[ix]|uni|use|eu)/i.test(word)) return "a " + word;   // "UI/UX Designer" sounds like "you"
  return (/^[aeiou]/i.test(word) ? "an " : "a ") + word;
}

/* ---------- Strand page: typewriter line under the description ----------
   Types one career at a time, holds, backspaces, then moves to the next.
   Stops by itself when the student leaves the page, pauses while the tab is hidden,
   and shows the first career as plain text when "reduce motion" is on. */
let sdTypeToken = 0;
function initStrandTypewriter(root, info, viewId = "view-strand-detail") {
  const token = ++sdTypeToken;                       // a newer render cancels older loops
  const out = root.querySelector(".sd-type-word");
  if (!out) return;
  const reduced = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const words = info.careers.map(withArticle);

  /* Reserve exactly the height the longest sentence needs at the current width (instead of a fixed
     guess), so the page doesn't jump while typing and there is no big empty gap when it fits on one
     line. Re-measures when the line's width changes (rotation, resize, the page appearing again). */
  const line = out.closest(".sd-type");
  function reserve(list) {
    if (!line || !line.clientWidth) return;                    // hidden page measures 0: keep the CSS default
    const probe = document.createElement("span");
    probe.setAttribute("aria-hidden", "true");
    probe.style.cssText = "position:absolute;left:0;top:0;width:calc(100% - 8px);visibility:hidden;pointer-events:none;";
    line.appendChild(probe);
    let tallest = 0;
    list.forEach(wd => {
      probe.textContent = `${info.name} can take you to becoming ${wd}`;
      tallest = Math.max(tallest, probe.getBoundingClientRect().height);
    });
    probe.remove();
    line.style.minHeight = Math.ceil(tallest) + "px";
  }
  if (line) {
    let lastW = 0;
    const refit = () => {
      const w = line.clientWidth;
      if (w && w !== lastW) { lastW = w; reserve(reduced ? [words[0]] : words); }
    };
    if ("ResizeObserver" in window) new ResizeObserver(refit).observe(line);
    refit();
  }

  if (reduced) {
    out.textContent = words[0];
    const caret = root.querySelector(".sd-type-caret");
    if (caret) caret.hidden = true;
    return;
  }
  const view = document.getElementById(viewId);
  let w = 0, n = 0, deleting = false;
  function tick() {
    if (token !== sdTypeToken || !root.isConnected) return;
    if (!view.classList.contains("active")) return;                 // left the strand page
    if (document.hidden) { setTimeout(tick, 500); return; }         // tab in background
    const word = words[w];
    let delay;
    if (!deleting) {
      n++;
      out.textContent = word.slice(0, n);
      if (n === word.length) { deleting = true; delay = 1500; } else { delay = 75; }
    } else {
      n--;
      out.textContent = word.slice(0, n);
      if (n === 0) { deleting = false; w = (w + 1) % words.length; delay = 400; } else { delay = 40; }
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 900);
}

/* ---------- Strand page: gentle scroll reveal (reuses .reveal / .reveal-in from style2.css) ---------- */
function initStrandMotion(root) {
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  const targets = root.querySelectorAll(
    ".sd-focus-text, .sd-cols .sd-h, .sd-subjects li, .sd-chip, .sd-path .sd-h, .sd-path-sub, " +
    ".sd-path-grid, .sd-close h2, .sd-close p, .sd-close-actions, .sd-others"
  );
  const io = new IntersectionObserver(entries => {
    let n = 0;
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty("--rd", (n++ * 0.08) + "s");
      entry.target.classList.add("reveal-in");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  targets.forEach(el => { el.classList.add("reveal"); io.observe(el); });
}

/* ---------- Strand detail page (from Explore Strands) ---------- */
/* The strand page markup. Used by the Explore Strands page (withClosing = true) and by the
   results page (withClosing = false: no "Take the Assessment / Keep browsing" panel). */
function strandPageHTML(code, withClosing = true) {
  const info = STRANDS[code];
  const li = arr => arr.map(s => `<li>${s}</li>`).join("");
  const others = STRAND_ORDER.filter(s => s !== code);
  const nameTag = withClosing ? "h1" : "h2";   // the results page already has its own h1

  return `
    <div class="sd" style="--sc:${info.color}">

      <div class="sd-hero">
        <span class="sd-ring" aria-hidden="true"><span class="sd-ring-rings"></span><span class="sd-ring-spin"></span><span class="sd-ring-star">&#10022;</span></span>
        <span class="sd-watermark" aria-hidden="true">${STRAND_ICONS[code]}</span>
        <div class="wrap-wide sd-hero-inner">
          <div>
            <${nameTag} class="sd-name" data-text="${info.name}">${info.name}</${nameTag}>
            <p class="sd-full">${info.full}</p>
            ${info.formerly ? `<p class="sd-former">Formerly ${info.formerly}</p>` : ""}
            <p class="sd-overview">${info.overview}</p>
            <p class="sd-type">
              <span class="sd-sr">${info.name} can take you to becoming ${info.careers.map(withArticle).join(", ")}.</span>
              <span aria-hidden="true">${info.name} can take you to becoming </span><span class="sd-type-word" aria-hidden="true"></span><span class="sd-type-caret" aria-hidden="true"></span>
            </p>
          </div>
          ${renderStrandVideo(info)}
        </div>
      </div>

      <div class="wrap sd-focus">
        <p class="sd-focus-text">${info.highlight ? info.focus.replace(info.highlight, `<span class="sd-focus-hl">${info.highlight}</span>`) : info.focus}</p>
      </div>

      <div class="wrap sd-cols">
        <div>
          <h2 class="sd-h">Subjects you'll take</h2>
          <ul class="sd-subjects">${li(info.subjects)}</ul>
        </div>
        <div>
          <h2 class="sd-h">Skills you'll build</h2>
          <div class="sd-chips">${info.skills.map(s => `<span class="sd-chip">${s}</span>`).join("")}</div>
        </div>
      </div>

      <div class="sd-path">
        <div class="wrap">
          <h2 class="sd-h">Where ${info.name} can take you</h2>
          <p class="sd-path-sub">Many college courses accept graduates from any strand, but these are the closest fits.</p>
          <div class="sd-path-grid">
            <div class="sd-path-start">${info.name}</div>
            <div class="sd-path-col"><div class="sd-path-card"><h3>College courses</h3><ul>${li(info.courses)}</ul></div></div>
            <div class="sd-path-col"><div class="sd-path-card"><h3>Career fields</h3><ul>${li(info.careers)}</ul></div></div>
          </div>
        </div>
      </div>

${withClosing ? `
      <div class="sd-close">
        <div class="wrap">
          <h2>Does ${info.name} sound like you?</h2>
          <p>The assessment has six short skill tests, one per strand, plus an interests questionnaire, and shows how your results line up with each one.</p>
          <div class="sd-close-actions">
            <button class="btn btn-light" id="sd-start">Take the Assessment</button>
            <button class="btn btn-outline-light" id="sd-back">Back to Home</button>
          </div>
          <div class="sd-others">
            <span class="sd-others-label">Keep browsing:</span>
            ${others.map(s => `<button class="sd-other" data-strand="${s}" style="--oc:${STRANDS[s].color}">${STRANDS[s].name}</button>`).join("")}
          </div>
        </div>
      </div>
` : ""}

    </div>
  `;
}

function renderStrandDetail(code) {
  currentStrand = code;
  const info = STRANDS[code];
  document.getElementById("strand-detail-content").innerHTML = strandPageHTML(code, true);

  const root = document.getElementById("strand-detail-content");
  initStrandTypewriter(root, info);
  initStrandMotion(root);
  root.querySelector("#sd-start").addEventListener("click", openHub);
  root.querySelector("#sd-back").addEventListener("click", () => showView("view-home"));
  root.querySelectorAll(".sd-other").forEach(btn => {
    btn.addEventListener("click", () => {
      renderStrandDetail(btn.dataset.strand);
      recordHistory("view-strand-detail");          // so Back returns to the strand you just left
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================================
   STRAND RECAP VIDEO — unchanged from before.

   Each strand in STRANDS has:
     - videoId:      YouTube video ID (after "v=" or "youtu.be/"). Leave ""
                      to show the "Video coming soon" placeholder.
     - videoCaption: one-line description under the frame.

   To use a self-hosted file instead of YouTube, replace the <iframe> in the
   hasVideo branch below with:
       <video class="video-frame-media" controls preload="metadata"
         poster="YOUR_POSTER_IMAGE_URL.jpg">
         <source src="YOUR_VIDEO_FILE_URL.mp4" type="video/mp4">
       </video>
   ========================================================================= */
function renderStrandVideo(info) {
  const hasVideo = Boolean(info.videoId);

  const frameContent = hasVideo
    ? `<iframe
         class="video-frame-media"
         src="https://www.youtube.com/embed/${info.videoId}"
         title="${info.name} strand recap video"
         loading="lazy"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>`
    : `<div class="video-frame-placeholder">
         <span class="video-frame-play" aria-hidden="true">
           <svg viewBox="0 0 24 24" width="26" height="26"><path d="M8 5v14l12-7z" fill="#fff"/></svg>
         </span>
         <p class="video-frame-note">Video coming soon</p>
       </div>`;

  return `
    <figure class="sd-video">
      <div class="video-frame">${frameContent}</div>
      <figcaption class="video-caption">${info.videoCaption}</figcaption>
      ${info.formerly ? `<p class="video-former">This video may call ${info.name} by its old name, ${info.formerly}.</p>` : ""}
      ${hasVideo ? `<p class="video-hint">
        <svg class="video-hint-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
        <span>Video looks blurry? YouTube picks the quality automatically. Use the settings (gear) icon in the player and choose a higher quality.</span>
      </p>
      <a class="video-yt" href="https://www.youtube.com/watch?v=${info.videoId}" target="_blank" rel="noopener noreferrer">Watch on YouTube<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="M11 13 20 4"/><path d="M15 4h5v5"/></svg></a>` : ""}
    </figure>
  `;
}

/* =========================================================
   ASSESSMENT HUB  (view-hub)
   Reuses existing classes only: .assess-header/.stepper/.step for the
   progress strip, .strand-card for module cards, .btn for the results button.
   ========================================================= */
/* Six-step strip. activeCode highlights the module being taken (or none in the hub). */
const STEP_LABELS = {
  STEM: "Math & Science", ASSH: "Reading", BM: "Finance",
  ICT: "Logic", IA: "Mechanics", HT: "Service", INTEREST: "Interests"
};

function stepperHTML(activeCode) {
  return [...MODULE_ORDER, "INTEREST"].map((code, i) => {
    const done = isDone(code);
    const active = code === activeCode;
    return `
      <div class="step${active ? " step-active" : ""}${done ? " step-done" : ""}">
        <span class="step-marker">${done ? "&#10003;" : String(i + 1).padStart(2, "0")}</span>
        <span class="step-label">${STEP_LABELS[code]}</span>
      </div>`;
  }).join("");
}

function renderHub() {
  const hub = document.getElementById("view-hub");
  ist.active = false;
  const done = countDone() + (state.interest ? 1 : 0);
  const totalSteps = MODULE_ORDER.length + 1;   // six skill tests + the interest questionnaire
  const perTest = MODULES[MODULE_ORDER[0]].questions.length;
  const skillTotal = MODULE_ORDER.reduce((n, c) => n + MODULES[c].questions.length, 0);
  const interestTotal = INTEREST.statements.length + INTEREST.forced.length;

  hub.innerHTML = `
    <div class="assess-header">
      <div class="wrap">
        <div class="stepper">${stepperHTML(null)}</div>
        <div class="q-progress-track"><div class="q-progress-fill" id="hub-progress"></div></div>
        <span class="q-progress-label">${done} of ${totalSteps} parts completed</span>
      </div>
    </div>
    <div class="wrap assess-body">
      <p class="q-eyebrow">Assessment Hub</p>
      <h2 class="q-text">Choose a test to take</h2>

      <div class="hub-guide">
        <div class="hub-steps">
          <p class="hub-guide-title">Before you begin</p>
          <ol class="hub-steps-list">
            <li>Take the six skill tests in any order. Each has ${perTest} multiple-choice questions (${skillTotal} in total).</li>
            <li>Also complete the <strong>Interests</strong> questionnaire (${interestTotal} questions, no right or wrong answers). It is open from the start.</li>
            <li>Finish all seven parts and <strong>See Overall Results</strong> unlocks.</li>
            <li>Each part can only be taken once, and skill answers aren't shown afterward, so take your time.</li>
          </ol>
        </div>

        <div class="hub-honesty" id="hub-honesty">
          <h3>Honesty is what makes ClusterWise work.</h3>
          <p>Your result is only as accurate as your answers. If you look up answers, ask a friend, or use AI, the result won't show your real strengths, and it could point you to a strand you'd struggle in for two years. This isn't a graded exam. The only person you'd be fooling is yourself.</p>
          <p>No need to review or prepare. This measures how you think, not what you've memorized.</p>
          <label class="hub-pledge">
            <input type="checkbox" id="hub-pledge">
            <span class="hub-pledge-box" aria-hidden="true"></span>
            <span class="hub-pledge-text">I will answer on my own and honestly.</span>
          </label>
        </div>
      </div>

      <p class="hub-lock-hint" id="hub-lock-hint"><span aria-hidden="true">&#128274;</span> Tick the box above to unlock the tests.</p>
      <div class="strand-grid" id="hub-grid"></div>
    </div>
    <div class="wrap results-footer">
      <button class="btn btn-primary" id="hub-results-btn" disabled>See Overall Results</button>
    </div>
  `;

  document.getElementById("hub-progress").style.width = (done / totalSteps * 100) + "%";

  const grid = document.getElementById("hub-grid");
  MODULE_ORDER.forEach(code => {
    const info = STRANDS[code];
    const mod = MODULES[code];
    const finished = isDone(code);
    const inProgress = !finished && validProgress(code, state.progress[code]) && answeredCount(code) > 0;   // seen question 1 but answered nothing = not started
    const card = document.createElement("button");
    card.className = "strand-card" + (inProgress ? " strand-card-inprogress" : "");
    card.dataset.code = code;
    card.style.setProperty("--sc", info.color);
    card.innerHTML = `
      <span class="strand-card-badge">${finished ? "&#10003;" : STRAND_ICONS[code].replace("<svg ", '<svg width="30" height="30" ')}</span>
      <span class="strand-card-content">
        <span class="strand-card-name">${mod.title}</span>
        <p class="strand-card-blurb">${mod.blurb}</p>
        <span class="strand-card-cta">${finished ? "Completed" : inProgress ? `Resume test (${answeredCount(code)} of ${mod.questions.length} answered) &rsaquo;` : `Start test (${mod.questions.length} questions) &rsaquo;`}</span>
      </span>
    `;
    if (!finished) card.addEventListener("click", () => startModule(code));
    grid.appendChild(card);
  });

  // Seventh card: the interest questionnaire (locked by the pledge like the tests)
  {
    const iDone = Boolean(state.interest);
    const iAnswered = state.iprog ? interestAnswered(state.iprog) : 0;
    const iCard = document.createElement("button");
    iCard.className = "strand-card" + (!iDone && iAnswered > 0 ? " strand-card-inprogress" : "");
    iCard.dataset.code = "INTEREST";
    iCard.style.setProperty("--sc", "#7A5AA6");
    iCard.innerHTML = `
      <span class="strand-card-badge">${iDone ? "&#10003;" : "&#9733;"}</span>
      <span class="strand-card-content">
        <span class="strand-card-name">${INTEREST.title}</span>
        <p class="strand-card-blurb">${INTEREST.blurb}</p>
        <span class="strand-card-cta">${iDone ? "Completed" : iAnswered > 0 ? `Resume (${iAnswered} of ${interestTotal} answered) &rsaquo;` : `Start questionnaire (${interestTotal} questions) &rsaquo;`}</span>
      </span>
    `;
    if (!iDone) iCard.addEventListener("click", startInterest);
    grid.appendChild(iCard);
  }

  // The pledge locks/unlocks the unfinished test cards (finished ones are always locked: no retakes)
  const pledgeBox = document.getElementById("hub-pledge");
  pledgeBox.addEventListener("change", () => {
    if (!pledgeBox.checked) { pledgeBox.checked = true; return; }   // once ticked it stays ticked
    pledged = true;
    savePledge();
    applyPledge();
  });
  applyPledge();

  // "See Overall Results" stays locked until every module is finished
  const resultsBtn = document.getElementById("hub-results-btn");
  resultsBtn.disabled = !allDone();
  resultsBtn.addEventListener("click", showResults);
}

/* Lock or unlock the hub's test cards to match the honesty pledge */
function applyPledge() {
  const grid = document.getElementById("hub-grid");
  if (!grid) return;
  grid.querySelectorAll(".strand-card").forEach(card => {
    const finished = isDone(card.dataset.code);
    card.disabled = finished || !pledged;
    card.classList.toggle("strand-card-locked", !finished && !pledged);
  });
  const hint = document.getElementById("hub-lock-hint");
  if (hint) hint.hidden = pledged || countDone() === MODULE_ORDER.length;
  const box = document.getElementById("hub-honesty");
  if (box) box.classList.toggle("hub-honesty-signed", pledged);

  // Once pledged, the tick is locked in for the rest of the browser session
  const pledgeBox = document.getElementById("hub-pledge");
  if (pledgeBox) {
    pledgeBox.checked = pledged;
    pledgeBox.disabled = pledged;
    const label = pledgeBox.closest(".hub-pledge");
    label.classList.toggle("hub-pledge-locked", pledged);
    label.querySelector(".hub-pledge-text").textContent =
      pledged ? "You've pledged to answer honestly." : "I will answer on my own and honestly.";
  }
}

/* =========================================================
   SUB-TEST  (view-assessment)
   ========================================================= */
const stepperEl = document.getElementById("stepper");
const qProgressFill = document.getElementById("q-progress-fill");
const qProgressLabel = document.getElementById("q-progress-label");
const qCard = document.getElementById("question-card");
const btnBack = document.getElementById("btn-back");
const btnNext = document.getElementById("btn-next");

const assessView = document.getElementById("view-assessment");

/* Hub -> rules screen for the chosen test (the test itself starts on "Begin test") */
function startModule(code) {
  ist.active = false;
  if (isDone(code) || !pledged) return;       // no retakes, and the honesty pledge comes first
  const saved = state.progress[code];
  if (validProgress(code, saved) && saved.draft.some(a => a !== null)) {   // left earlier with answers: pick up exactly where they stopped
    state.activeModule = code;
    state.current = saved.current;
    state.draft = saved.draft.slice();
    state.optionOrder = saved.optionOrder.map(o => o.slice());
    renderQuestion();
    showView("view-assessment");
    return;
  }
  const bank = MODULES[code].questions;
  state.activeModule = code;
  state.current = 0;
  state.draft = new Array(bank.length).fill(null);
  state.optionOrder = bank.map(q => shuffle(q.options.map((_, i) => i)));
  renderIntro();
  showView("view-assessment");
}

/* Rules screen shown before the first question of a test */
function renderIntro() {
  const code = state.activeModule;
  const mod = MODULES[code];
  const total = mod.questions.length;
  state.phase = "intro";
  assessView.classList.add("intro-mode");

  stepperEl.innerHTML = stepperHTML(code);
  qProgressFill.style.width = "0%";
  qProgressLabel.textContent = `${code} \u2014 Before you begin`;

  qCard.classList.remove("card-in");
  void qCard.offsetWidth; // restart animation
  qCard.innerHTML = `
    <p class="q-eyebrow">${mod.title}</p>
    <h2 class="q-text">Read this before you start</h2>
    <p class="intro-meta">${total} questions &middot; one attempt</p>
    <p class="intro-about">${mod.blurb}</p>
    <ul class="intro-rules">
      <li>Choose the best answer. Only one is correct.</li>
      <li>Take your time and think each question through.</li>
      <li>Use <strong>Back</strong> to change earlier answers before you finish.</li>
      <li>You can leave with <strong>Save &amp; back to hub</strong> and continue later. Your answers are kept until you close this tab.</li>
      <li>Once you press <strong>Finish test</strong>, your answers are locked and this test can't be retaken.</li>
      ${["STEM", "BM", "ICT", "IA"].includes(code) ? "<li><strong>Scratch paper is allowed.</strong> If a question needs calculating or working out, write it down on paper. That is part of solving it.</li>" : ""}
      <li>Answer on your own: no searching, no asking, no AI.</li>
    </ul>
    <div class="intro-actions">
      <button class="btn btn-ghost" id="intro-back">Back to hub</button>
      <button class="btn btn-primary" id="intro-begin">Begin test</button>
    </div>
  `;
  qCard.classList.add("card-in");

  document.getElementById("intro-begin").addEventListener("click", () => {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("intro-back").addEventListener("click", () => {
    // step back through history when the previous entry is the hub, so Back/Forward stay tidy
    if (history.state && history.state.view === "view-assessment") history.back();
    else openHub();
  });
  saveSession();
}

/* Splits a question into context (passage, scenario, flowchart) and the actual question.
   - Text before the last blank line is context.
   - A long single paragraph is split before its final "?" sentence when there is real context.
   Context blocks with indentation or arrow flowcharts keep their spacing in a monospace box. */
function splitQuestion(raw) {
  const paras = raw.split(/\n\s*\n/);
  if (paras.length > 1) return { context: paras.slice(0, -1), question: paras[paras.length - 1] };
  if (raw.length > 110 && !raw.includes("\n")) {
    const m = raw.match(/^([\s\S]{40,}?[.!?\u201D"])\s+([A-Z][^.!?]*\?)$/);
    if (m && m[2].length >= 12) return { context: [m[1]], question: m[2] };
  }
  return { context: [], question: raw };
}
const looksLikeBlock = text => /^[ \t]{2,}\S/m.test(text) || (text.match(/^\u2192/gm) || []).length >= 2;

function questionHTML(raw) {
  const { context, question } = splitQuestion(raw);
  const ctx = context.length ? `
    <div class="q-context">
      ${context.map(c => looksLikeBlock(c)
        ? `<pre class="q-block">${c}</pre>`
        : `<p>${c.replace(/\n/g, "<br>")}</p>`).join("")}
    </div>` : "";
  return `${ctx}<h2 class="q-text${context.length ? " q-text-split" : ""}${!context.length && question.length > 110 ? " q-text-long" : ""}">${question.replace(/\n/g, "<br>")}</h2>`;
}

function renderQuestion() {
  const code = state.activeModule;
  const mod = MODULES[code];
  const total = mod.questions.length;
  const q = mod.questions[state.current];
  const chosen = state.draft[state.current];
  const shown = state.optionOrder[state.current].map(i => ({ idx: i, text: q.options[i] }));

  state.phase = "question";
  assessView.classList.remove("intro-mode");
  stepperEl.innerHTML = stepperHTML(code);
  qProgressFill.style.width = (state.current / total * 100) + "%";
  qProgressLabel.textContent = `${code} — Question ${state.current + 1} of ${total}`;

  qCard.classList.remove("card-in");
  void qCard.offsetWidth; // restart animation

  qCard.innerHTML = `
    <button class="q-exit" id="q-exit" type="button">&larr; Save &amp; back to hub</button>
    <p class="q-eyebrow">${mod.title}${q.topic ? `<span class="q-topic">${q.topic}</span>` : ""}</p>
    <p class="q-instruction">Choose the best answer.</p>
    ${questionHTML(q.q)}
    <div class="options" role="radiogroup">
      ${shown.map((opt, i) => `
        <label class="option${chosen === opt.idx ? " option-selected" : ""}" data-idx="${opt.idx}">
          <input type="radio" name="q${state.current}" value="${opt.idx}" ${chosen === opt.idx ? "checked" : ""}>
          <span class="option-letter">${OPTION_LETTERS[i]}</span>
          <span class="option-text">${opt.text}</span>
        </label>
      `).join("")}
    </div>
  `;
  qCard.classList.add("card-in");

  document.getElementById("q-exit").addEventListener("click", exitToHub);

  qCard.querySelectorAll(".option").forEach(label => {
    label.addEventListener("click", () => {
      qCard.querySelectorAll(".option").forEach(l => l.classList.remove("option-selected"));
      label.classList.add("option-selected", "option-pulse");
      setTimeout(() => label.classList.remove("option-pulse"), 350);
      state.draft[state.current] = Number(label.dataset.idx);   // ORIGINAL option index
      saveSession();
      btnNext.disabled = false;
    });
  });

  btnBack.disabled = state.current === 0;
  btnNext.disabled = chosen === null;
  btnNext.textContent = state.current === total - 1 ? "Finish test" : "Next";
  saveSession();
}

/* Question screen -> Hub, keeping the answers so the test can be resumed */
function exitToHub() {
  if (ist.active) { saveInterest(); ist.active = false; }
  saveProgress();
  state.activeModule = null;
  state.phase = null;
  state.current = 0;
  state.draft = [];
  state.optionOrder = [];
  if (history.state && history.state.view === "view-assessment") {
    history.back();   // the entry before a test is the hub, so Back/Forward stay tidy
    setTimeout(() => { if (currentViewId === "view-assessment") openHub("replace"); }, 250);   // fallback if there was nothing to go back to
  } else {
    openHub("replace");
  }
}

btnBack.addEventListener("click", () => {
  if (ist.active) return interestBack();
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
});

btnNext.addEventListener("click", () => {
  if (ist.active) return interestNext();
  if (state.draft[state.current] === null) return;
  const total = MODULES[state.activeModule].questions.length;
  if (state.current < total - 1) {
    state.current++;
    renderQuestion();
  } else {
    finishModule();
  }
});

/* Sub-test -> Hub. Scores the module objectively, locks it, shows no answers. */
function finishModule() {
  const code = state.activeModule;
  const bank = MODULES[code].questions;
  const correct = bank.reduce((n, q, i) => n + (state.draft[i] === q.correctAnswerIndex ? 1 : 0), 0);

  state.scores[code] = { correct, total: bank.length };
  saveState();
  delete state.progress[code];      // finished: nothing left to resume
  persistProgress();

  state.activeModule = null;
  state.phase = null;
  state.draft = [];
  state.optionOrder = [];
  openHub("replace");   // replaces the locked test's history entry so Back never lands on it
}

/* =========================================================
   INTEREST QUESTIONNAIRE  (runs in view-assessment, like a skill test)
   Part A: rate statements 1-5. Part B: pick "most" and "least" from one activity per strand.
   Nothing here is "correct" or "wrong", so it has its own save/restore and scoring.
   ========================================================= */
const nPartA = () => INTEREST.statements.length;
const nPartB = () => INTEREST.forced.length;

function validInterestProg(p) {
  const nA = nPartA(), nB = nPartB();
  const perm = (arr, n) => Array.isArray(arr) && arr.length === n && [...Array(n).keys()].every(i => arr.includes(i));
  return Boolean(p) && ["A", "transition", "B"].includes(p.phase) &&
    Number.isInteger(p.pos) && p.pos >= 0 && p.pos < nA + nB &&
    perm(p.order, nA) &&
    Array.isArray(p.a) && p.a.length === nA && p.a.every(v => v === null || (Number.isInteger(v) && v >= 1 && v <= 5)) &&
    Array.isArray(p.bOrder) && p.bOrder.length === nB && p.bOrder.every(o => Array.isArray(o) && o.length === STRAND_ORDER.length && STRAND_ORDER.every(c => o.includes(c))) &&
    Array.isArray(p.b) && p.b.length === nB && p.b.every(x => x === null || (x && STRAND_ORDER.includes(x.most) && STRAND_ORDER.includes(x.least) && x.most !== x.least));
}

function validInterestDone(d) {
  if (!d || !d.a || !d.b) return false;
  const cnt = {};
  INTEREST.statements.forEach(s => { cnt[s.strand] = (cnt[s.strand] || 0) + 1; });
  return STRAND_ORDER.every(c => Number.isInteger(d.a[c]) && d.a[c] >= cnt[c] && d.a[c] <= 5 * cnt[c] &&
    Number.isInteger(d.b[c]) && Math.abs(d.b[c]) <= nPartB());
}

function loadInterest() {
  try {
    const d = JSON.parse(sessionStorage.getItem(INTEREST_KEY) || "null");
    if (validInterestDone(d)) state.interest = d;
    const p = JSON.parse(sessionStorage.getItem(INTEREST_PROG_KEY) || "null");
    if (!state.interest && validInterestProg(p)) state.iprog = p;
  } catch (e) { /* storage blocked or corrupt: start fresh */ }
}

function interestAnswered(p) {
  return p.a.filter(v => v !== null).length + p.b.filter(x => x !== null).length;
}

function saveInterest() {
  if (!ist.active || !["A", "transition", "B"].includes(ist.phase)) return;
  const p = { phase: ist.phase, pos: ist.pos, order: ist.order, a: ist.a, bOrder: ist.bOrder, b: ist.b };
  state.iprog = JSON.parse(JSON.stringify(p));
  try { sessionStorage.setItem(INTEREST_PROG_KEY, JSON.stringify(p)); } catch (e) { /* keep going in memory */ }
}

function resumeInterestFromSaved() {
  if (!state.iprog || !validInterestProg(state.iprog)) return false;
  const p = JSON.parse(JSON.stringify(state.iprog));
  Object.assign(ist, { active: true, phase: p.phase, pos: p.pos, order: p.order, a: p.a, bOrder: p.bOrder, b: p.b });
  state.activeModule = null;
  return true;
}

function startInterest() {
  if (state.interest || !pledged) return;   // no retakes, and the honesty pledge comes first
  if (state.iprog && interestAnswered(state.iprog) > 0 && resumeInterestFromSaved()) {
    renderInterest();
    showView("view-assessment");
    return;
  }
  state.activeModule = null;
  Object.assign(ist, {
    active: true, phase: "intro", pos: 0,
    order: shuffle(INTEREST.statements.map((_, i) => i)),
    a: new Array(nPartA()).fill(null),
    bOrder: INTEREST.forced.map(() => shuffle(STRAND_ORDER)),
    b: INTEREST.forced.map(() => null)
  });
  renderInterestIntro();
  showView("view-assessment");
}

function renderInterest() {
  if (ist.phase === "transition") renderInterestTransition();
  else renderInterestItem();
}

function interestCardReset() {
  stepperEl.innerHTML = stepperHTML("INTEREST");
  qCard.classList.remove("card-in");
  void qCard.offsetWidth;   // restart animation
}

function renderInterestIntro() {
  ist.phase = "intro";
  state.phase = null;
  assessView.classList.add("intro-mode");
  interestCardReset();
  qProgressFill.style.width = "0%";
  qProgressLabel.textContent = "Interests \u2014 Before you begin";
  qCard.innerHTML = `
    <p class="q-eyebrow">${INTEREST.title}</p>
    <h2 class="q-text">Read this before you start</h2>
    <p class="intro-meta">${nPartA() + nPartB()} questions &middot; two parts &middot; one attempt</p>
    <p class="intro-about">This is about what you enjoy, not what you are good at.</p>
    <ul class="intro-rules">
      <li><strong>There are no right or wrong answers.</strong> Nothing here is scored as correct.</li>
      <li><strong>Part A:</strong> ${nPartA()} statements. Rate how much each one sounds like you, from 1 to 5.</li>
      <li><strong>Part B:</strong> ${nPartB()} short scenarios. Pick the activity you would want <em>most</em> and the one you would want <em>least</em>.</li>
      <li>Answer for yourself, not for what sounds impressive or what others expect of you.</li>
      <li>Use <strong>Back</strong> to change earlier answers before you finish. You can leave with <strong>Save &amp; back to hub</strong> and continue later (answers are kept until you close this tab).</li>
      <li>Once you press <strong>Finish questionnaire</strong>, your answers are locked and it can't be retaken.</li>
    </ul>
    <div class="intro-actions">
      <button class="btn btn-ghost" id="intro-back">Back to hub</button>
      <button class="btn btn-primary" id="intro-begin">Begin</button>
    </div>
  `;
  qCard.classList.add("card-in");
  document.getElementById("intro-begin").addEventListener("click", () => {
    ist.phase = "A"; ist.pos = 0;
    renderInterestItem();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("intro-back").addEventListener("click", () => {
    ist.active = false;
    if (history.state && history.state.view === "view-assessment") history.back();
    else openHub();
  });
  saveSession();
}

function renderInterestTransition() {
  ist.phase = "transition";
  state.phase = null;
  assessView.classList.add("intro-mode");
  interestCardReset();
  qProgressFill.style.width = (nPartA() / (nPartA() + nPartB()) * 100) + "%";
  qProgressLabel.textContent = "Interests \u2014 Part A complete";
  qCard.innerHTML = `
    <p class="q-eyebrow">${INTEREST.title}<span class="q-topic">Part B</span></p>
    <h2 class="q-text">Part A done. Part B works differently.</h2>
    <p class="intro-about">Each question describes six activities. You can't like everything equally, so choose:</p>
    <ul class="intro-rules">
      <li><strong>Most:</strong> the one you would most want to do.</li>
      <li><strong>Least:</strong> the one you would least want to do.</li>
      <li>Leave the other four unmarked. Pick different activities for most and least.</li>
    </ul>
    <div class="intro-actions">
      <button class="btn btn-ghost" id="trans-back">Back to Part A</button>
      <button class="btn btn-primary" id="trans-go">Start Part B</button>
    </div>
  `;
  qCard.classList.add("card-in");
  document.getElementById("trans-back").addEventListener("click", () => { ist.pos = nPartA() - 1; renderInterestItem(); });
  document.getElementById("trans-go").addEventListener("click", () => { ist.pos = nPartA(); renderInterestItem(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  saveInterest();
  saveSession();
}

const interestItemDone = () => {
  const nA = nPartA();
  return ist.pos < nA ? ist.a[ist.pos] !== null : ist.b[ist.pos - nA] !== null;
};

function renderInterestItem() {
  const nA = nPartA(), nB = nPartB(), total = nA + nB, pos = ist.pos;
  const isA = pos < nA;
  ist.phase = isA ? "A" : "B";
  state.phase = null;
  assessView.classList.remove("intro-mode");
  interestCardReset();
  qProgressFill.style.width = (pos / total * 100) + "%";
  qProgressLabel.textContent = isA
    ? `Interests \u2014 Part A: ${pos + 1} of ${nA}`
    : `Interests \u2014 Part B: ${pos - nA + 1} of ${nB}`;

  const exit = `<button class="q-exit" id="q-exit" type="button">&larr; Save &amp; back to hub</button>`;
  if (isA) {
    const stmt = INTEREST.statements[ist.order[pos]];
    const chosen = ist.a[pos];
    qCard.innerHTML = `
      ${exit}
      <p class="q-eyebrow">${INTEREST.title}<span class="q-topic">Part A</span></p>
      <p class="q-instruction">How much does this sound like you? There is no right answer.</p>
      <h2 class="q-text">${stmt.text}</h2>
      <div class="rate-row" role="radiogroup">
        ${INTEREST.ratingLabels.map((l, i) => `
          <button type="button" class="rate-btn${chosen === i + 1 ? " rate-selected" : ""}" data-v="${i + 1}">
            <span class="rate-num">${i + 1}</span><span class="rate-label">${l}</span>
          </button>`).join("")}
      </div>`;
    qCard.querySelectorAll(".rate-btn").forEach(btn => btn.addEventListener("click", () => {
      qCard.querySelectorAll(".rate-btn").forEach(b => b.classList.remove("rate-selected"));
      btn.classList.add("rate-selected");
      ist.a[pos] = Number(btn.dataset.v);
      saveInterest(); saveSession();
      btnNext.disabled = false;
    }));
  } else {
    const bi = pos - nA;
    const item = INTEREST.forced[bi];
    qCard.innerHTML = `
      ${exit}
      <p class="q-eyebrow">${INTEREST.title}<span class="q-topic">Part B</span></p>
      <p class="q-instruction">Pick one activity you'd want <strong>most</strong> and one you'd want <strong>least</strong>.</p>
      <h2 class="q-text">${item.prompt}</h2>
      <div class="pick-list">
        ${ist.bOrder[bi].map(code => `
          <div class="pick-item" data-code="${code}">
            <span class="pick-text">${item.options[code]}</span>
            <span class="pick-btns">
              <button type="button" class="pick-btn pick-most" data-kind="most">Most</button>
              <button type="button" class="pick-btn pick-least" data-kind="least">Least</button>
            </span>
          </div>`).join("")}
      </div>`;
    // Working copy of the pair; written to ist.b only when both are chosen
    let most = ist.b[bi] ? ist.b[bi].most : null, least = ist.b[bi] ? ist.b[bi].least : null;
    const paint = () => {
      qCard.querySelectorAll(".pick-item").forEach(el => {
        const c = el.dataset.code;
        el.classList.toggle("pick-is-most", c === most);
        el.classList.toggle("pick-is-least", c === least);
        el.querySelector(".pick-most").classList.toggle("pick-on", c === most);
        el.querySelector(".pick-least").classList.toggle("pick-on", c === least);
      });
    };
    paint();
    qCard.querySelectorAll(".pick-btn").forEach(btn => btn.addEventListener("click", () => {
      const c = btn.closest(".pick-item").dataset.code;
      if (btn.dataset.kind === "most") { most = most === c ? null : c; if (least === c) least = null; }
      else { least = least === c ? null : c; if (most === c) most = null; }
      ist.b[bi] = most && least ? { most, least } : null;
      paint();
      saveInterest(); saveSession();
      btnNext.disabled = ist.b[bi] === null;
    }));
  }
  qCard.classList.add("card-in");
  document.getElementById("q-exit").addEventListener("click", exitToHub);

  btnBack.disabled = pos === 0;
  btnNext.disabled = !interestItemDone();
  btnNext.textContent = pos === total - 1 ? "Finish questionnaire" : "Next";
  saveInterest();
  saveSession();
}

function interestBack() {
  if (ist.pos > 0) { ist.pos--; renderInterestItem(); }
}

function interestNext() {
  if (!interestItemDone()) return;
  const nA = nPartA(), total = nA + nPartB();
  if (ist.pos === nA - 1) { ist.pos = nA; renderInterestTransition(); return; }   // Part A -> explain Part B
  if (ist.pos < total - 1) { ist.pos++; renderInterestItem(); }
  else finishInterest();
}

/* Locks the questionnaire: stores raw totals only (rating sum and most-minus-least per strand) */
function finishInterest() {
  const a = {}, b = {};
  STRAND_ORDER.forEach(c => { a[c] = 0; b[c] = 0; });
  ist.order.forEach((si, p) => { a[INTEREST.statements[si].strand] += ist.a[p]; });
  ist.b.forEach(x => { b[x.most] += 1; b[x.least] -= 1; });
  state.interest = { a, b };
  state.iprog = null;
  try {
    sessionStorage.setItem(INTEREST_KEY, JSON.stringify(state.interest));
    sessionStorage.removeItem(INTEREST_PROG_KEY);
  } catch (e) { /* keep going in memory */ }
  ist.active = false; ist.phase = null;
  openHub("replace");
}

/* Interest per strand, 0-100: Part A and Part B each converted to 0-100, then averaged 50/50 (provisional weights).
   Rank is 1 = most interested; equal percentages share a rank. */
const INTEREST_WEIGHT_A = 0.5;
function interestScores() {
  const cnt = {};
  INTEREST.statements.forEach(s => { cnt[s.strand] = (cnt[s.strand] || 0) + 1; });
  const nB = nPartB();
  const out = {};
  STRAND_ORDER.forEach(c => {
    const pa = (state.interest.a[c] - cnt[c]) / (4 * cnt[c]) * 100;
    const pb = (state.interest.b[c] + nB) / (2 * nB) * 100;
    out[c] = { pct: Math.round(pa * INTEREST_WEIGHT_A + pb * (1 - INTEREST_WEIGHT_A)) };
  });
  STRAND_ORDER.forEach(c => { out[c].rank = 1 + STRAND_ORDER.filter(o => out[o].pct > out[c].pct).length; });
  return out;
}

/* =========================================================
   SCORING + RESULTS  (view-results)
   ========================================================= */
/* Raw score and percentage per strand, sorted best-first.
   Equal scores keep STRAND_ORDER order (stable sort). */
function computeResults() {
  state.results = STRAND_ORDER.map(strand => {
    const { correct, total } = state.scores[strand];
    return { strand, correct, total, percentage: Math.round(correct / total * 100) };
  }).sort((a, b) => b.percentage - a.percentage);
  const isc = interestScores();
  state.results.forEach(r => { r.ipct = isc[r.strand].pct; r.irank = isc[r.strand].rank; });
}

/* Hub -> Results (only reachable when all 6 modules are done) */
function showResults() {
  if (!allDone()) return;
  computeResults();
  renderResults();
  showView("view-results");
}

/* Which strands to recommend. Everything tied at the top qualifies, but only 2 are ever shown.
   If more than 2 tie, interest breaks the tie (highest interest first). If interest cannot
   separate them either, the first two in strand order are kept and the text says so.
   Interest is used only as a tie-breaker here, never merged into the skill score. */
const MAX_RECOMMENDED = 2;
const LOW_SIGNAL_PCT = 35;   // top skill score below this is close to guessing level (25%); provisional until the pilot
function pickRecommended(results) {
  const tiedAll = results.filter(r => r.percentage === results[0].percentage);
  if (tiedAll.length <= MAX_RECOMMENDED) return { rec: tiedAll, tiedAll, byInterest: false, arbitrary: false };
  const sorted = tiedAll.slice().sort((a, b) => b.ipct - a.ipct);   // stable: equal interest keeps strand order
  const arbitrary = sorted[MAX_RECOMMENDED - 1].ipct === sorted[MAX_RECOMMENDED].ipct;
  return { rec: sorted.slice(0, MAX_RECOMMENDED), tiedAll, byInterest: !arbitrary, arbitrary };
}

/* Text comparing the strongest areas with the weakest */
function buildBreakdown(results, pick) {
  const fmt = r => `<strong>${STRANDS[r.strand].name}</strong> (${r.correct}/${r.total})`;
  const { rec, tiedAll } = pick;
  const first = results[0], low = results[results.length - 1];
  const shown = rec.map(r => `<strong>${STRANDS[r.strand].name}</strong>`).join(" and ");

  const tieNote = pick.arbitrary
    ? `${tiedAll.length} strands tied for your highest score (${tiedAll.map(fmt).join(", ")}), and your interest results could not separate them either, so two are shown here. Treat all ${tiedAll.length} as worth a look. `
    : pick.byInterest
      ? `${tiedAll.length} strands tied for your highest score (${tiedAll.map(fmt).join(", ")}). To keep your result clear, your interest results broke the tie, so ${shown} are shown. `
      : "";

  if (first.percentage === low.percentage) {
    return `You scored the same on all six tests (${first.percentage}%), so no single strand stands out on aptitude alone. ${pick.byInterest ? `The two strands shown are the ones you showed the most interest in. ` : pick.arbitrary ? `The two strands shown are simply the first two in the usual order. ` : ``}Use your interest results and the strand descriptions below to decide.`;
  }

  let text = "";
  if (tieNote) {
    text += tieNote;
  } else if (tiedAll.length > 1) {
    text += `${tiedAll.map(fmt).join(" and ")} came out level at the top, so treat them as equally strong fits. `;
  }
  const top2 = rec.length > 1 ? rec : [results[0], results[1]];
  text += `Your highest scores were in ${fmt(top2[0])} and ${fmt(top2[1])}, which point to ${APTITUDE[top2[0].strand].strength} and ${APTITUDE[top2[1].strand].strength}.`;

  text += `<br><br>`;
  if (low.percentage >= 70) {
    text += `Even your lowest score, ${fmt(low)}, is solid, so you have a well-rounded profile.`;
  } else {
    text += `Your lowest was ${fmt(low)}, so ${APTITUDE[low.strand].practice} may need more practice before it feels comfortable.`;
  }
  return text;
}


/* ---------- Skills vs interests (results) ---------- */
const STRAND_DEMANDS = {
  STEM: "math- and science-heavy, so strengthening that would be the main task",
  ASSH: "reading- and writing-heavy, so building reading and argument skills would be the main task",
  BM:   "number-heavy, so strengthening percentages and money math would be the main task",
  ICT:  "built on step-by-step logic, so practicing logic and tracing code would be the main task",
  IA:   "built on mechanical and circuit reasoning, so practicing that and reading diagrams would be the main task",
  HT:   "about judgment under pressure, so practicing real service situations would be the main task"
};
const ordinal = n => ["", "1st", "2nd", "3rd", "4th", "5th", "6th"][n] || n + "th";

/* One main message, chosen by priority. Thresholds are provisional until the pilot. */
function interestMessage(results, rec) {
  const nm = list => list.map(r => `<strong>${STRANDS[r.strand].name}</strong>`).join(" and ");
  const maxS = results[0].percentage;
  const topS = rec || results.filter(r => r.percentage === maxS);
  const maxI = Math.max(...results.map(r => r.ipct)), minI = Math.min(...results.map(r => r.ipct));
  const topI = results.filter(r => r.ipct === maxI);

  if (maxI - minI <= INTEREST_FLAT_SPREAD) {
    return `Your interests are spread fairly evenly across the strands, so your skill results may be the clearer guide right now. Explore each strand's page to see what appeals to you.`;
  }
  const both = topS.filter(r => topI.includes(r));
  if (both.length) return `<strong>Strong match:</strong> your skills and your interests both point to ${nm(both)}.`;

  const gap = topI.find(r => r.percentage < 50 && maxS - r.percentage >= 25);
  if (gap) {
    return `You showed the highest interest in ${nm(topI)}, but scored lower on ${topI.length > 1 ? "their tests" : "its test"}. A short test with no preparation shows where you are today, not where you can get to. ${STRANDS[gap.strand].name} here is ${STRAND_DEMANDS[gap.strand]}. Read its strand page to see if the daily work appeals to you.`;
  }
  if (topS.every(r => r.irank >= 4)) {
    return `You could do well in ${nm(topS)}, your strongest skill area, but your interest in ${topS.length > 1 ? "them ranked" : "it ranked"} only ${ordinal(Math.min(...topS.map(r => r.irank)))} of six. Check whether you'd enjoy the daily work before choosing ${topS.length > 1 ? "either" : "it"}.`;
  }
  return `Your strongest skill is in ${nm(topS)}, while your strongest interest is in ${nm(topI)}. Neither is wrong: skills can be built, and interest is what keeps you going. Read both strand pages before deciding.`;
}

const SKILL_HIGH_PCT = 50;     // skill counts as "high" at or above this (guessing level is 25%); provisional until the pilot
const INTEREST_FLAT_SPREAD = 15; // best minus worst interest at or below this = interests too flat to guide
const interestLabel = p => p >= 75 ? "High interest" : p >= 50 ? "Some interest" : "Lower interest";

/* Per-strand reasoning for the "Why" cards: skill result, interest, how they fit, next step.
   Skill and interest are compared but never merged. Thresholds are provisional until the pilot. */
function strandReasoning(r, results, ctx) {
  const info = STRANDS[r.strand], nm = info.name;
  const ids = results.map(x => x.ipct);
  const flat = Math.max(...ids) - Math.min(...ids) <= INTEREST_FLAT_SPREAD;

  /* skill result */
  const skillRank = 1 + results.filter(o => o.percentage > r.percentage).length;
  const level = results.filter(o => o !== r && o.percentage === r.percentage).map(o => STRANDS[o.strand].name);
  let rankText;
  if (level.length) rankText = skillRank === 1 ? `level with ${level.join(" and ")} at the top` : `${ordinal(skillRank)} of six, level with ${level.join(" and ")}`;
  else if (skillRank === 1) rankText = `your highest of the six, ${r.percentage - results[1].percentage} percentage points ahead of your next strand`;
  else rankText = `${ordinal(skillRank)} of six`;
  let skill = `You scored ${r.correct}/${r.total} (${r.percentage}%) on the ${nm} test: ${rankText}.`;
  skill += r.percentage >= SKILL_HIGH_PCT
    ? ` That points to ${APTITUDE[r.strand].strength}.`
    : skillRank === 1 ? ` It is your strongest area compared with the others, but not a high score on its own.` : ``;
  if (ctx && ctx.extras && ctx.extras.includes(r)) skill += ` That is ${results[0].percentage - r.percentage} percentage points below your top skill ${ctx.rec.length > 1 ? "strands" : "strand"}.`;
  if (r.percentage < LOW_SIGNAL_PCT) skill += ` This is close to what random guessing would give (about 25%), so treat it as a weak signal.`;

  /* interest */
  let interest = `Your interest in ${nm} ranked ${ordinal(r.irank)} of six (${interestLabel(r.ipct).toLowerCase()}).`;
  if (flat) interest += ` Your interests were spread fairly evenly, so this ranking is a weak guide.`;

  /* how they fit + next step */
  const skillHigh = r.percentage >= SKILL_HIGH_PCT;
  const lvl = flat ? "flat" : r.irank <= 2 ? "high" : r.irank >= 5 ? "low" : "mid";
  const isExtra = !!(ctx && ctx.extras && ctx.extras.includes(r));
  const where = ctx && ctx.shown.length > 1
    ? `Open the <b class="lk">${nm}</b> button below.`
    : `Read about ${nm} in the section below.`;
  let fit, next;
  if (lvl === "flat") {
    fit = `Because your interests don't separate the strands clearly, your skill result is the clearer guide for ${nm} right now.`;
    next = `Read each strand's page and notice which daily work appeals to you.`;
  } else if (isExtra && skillHigh && lvl === "high") {
    fit = `Interest ahead of your top skill: your ${nm} score is solid, though another strand scored higher. Interest is what keeps you going, so ${nm} is worth a serious look.`;
    next = `${where} Would you be happy working on those subjects even when they're hard?`;
  } else if (skillHigh && lvl === "high") {
    fit = `Strong match: your skills and your interest both point to ${nm}.`;
    next = `${where} If its subjects still sound good, this is a strong match to look into.`;
  } else if (skillHigh) {
    fit = `Skills ahead of interest: you could do well in ${nm}, but your interest in it ranked only ${ordinal(r.irank)}. Doing well and enjoying the work are different things.`;
    next = `${where} Do its subjects sound interesting, or like a chore?`;
  } else if (lvl === "high") {
    fit = `Interest ahead of skills: you're drawn to ${nm} but scored lower on its test. A short test with no preparation shows where you are today, not where you can get to. ${nm} is ${STRAND_DEMANDS[r.strand]}.`;
    next = `${where} Would you be happy working on those subjects even when they're hard?`;
  } else {
    fit = `Neither your skill score nor your interest points strongly to ${nm}. It is shown because it was among your highest skill scores, not because your interest points to it.`;
    next = `${where} Compare it with the strand you're most interested in before deciding. ${nm} is ${STRAND_DEMANDS[r.strand]}.`;
  }
  return { skill, interest, fit, next };
}

/* What the "What your results say" box shows.
   rec    = top skill strand(s), 1 or 2.
   intSet = top interest strand(s), 1 or 2 (empty when interests are flat). If 3+ tie for top interest,
            the two with the higher skill score are kept and the rest go in alsoTop (a one-line note).
   Folder tabs (Interests | Skills) appear unless interests are flat or intSet is exactly the same strands
   as rec. A strand in both sets simply appears in both tabs.
   shown  = every strand that gets a card or a chip (union of the two sets, max 4). */
function pickShown(results, rec) {
  const ids = results.map(x => x.ipct);
  const maxI = Math.max(...ids);
  const flat = maxI - Math.min(...ids) <= INTEREST_FLAT_SPREAD;
  const topAll = flat ? [] : results.filter(r => r.ipct === maxI);   // results is sorted by skill, highest first
  const intSet = topAll.slice(0, MAX_RECOMMENDED);
  const alsoTop = topAll.slice(MAX_RECOMMENDED);
  const sameSet = intSet.length === rec.length && intSet.every(r => rec.includes(r));
  const tabbed = !flat && !sameSet;
  const extras = intSet.filter(r => !rec.includes(r));   // interest strands that are not top-skill strands
  const shown = tabbed ? rec.concat(extras) : rec;
  return { rec, intSet, extras, extra: extras[0] || null, alsoTop, tabbed, shown, flat, maxI };
}

/* Short plain-language picture of each strand's daily work, used in the "Quick check" question */
const STRAND_DAY = {
  STEM: "math, science",
  ASSH: "reading, writing, arguing a point",
  BM:   "business, numbers, money",
  HT:   "service, food, tourism",
  ICT:  "logic, coding",
  IA:   "electrical work, installing, repairing"
};

/* Tag on each card. `tab` is "skills" or "interests" (the tab the card is in). */
function cardTag(r, ps, tab) {
  const skillTop = ps.rec.includes(r), intTop = ps.intSet.includes(r);
  const tiedS = ps.rec.length > 1, tiedI = ps.intSet.length > 1;
  if (tab === "interests") {
    if (skillTop && intTop) return tiedI ? "Tied for top interest \u00B7 Top skill" : "Skills and interest match";
    return tiedI ? "Tied for top interest" : "Your top interest strand";
  }
  if (skillTop && intTop) return tiedS ? "Tied for top skill \u00B7 Top interest" : "Skills and interest match";
  return tiedS ? "Tied for top skill" : "Your top skill strand";
}

const strandNames = list => list.map(r => STRANDS[r.strand].name).join(" and ");

/* The cards for one tab: 1 or 2 strands (skills tab = ps.rec, interests tab = ps.intSet) */
function whyCardsHTML(results, pick, ps, tab) {
  const list = tab === "interests" ? ps.intSet : ps.rec;
  const ctx = { rec: ps.rec, shown: ps.shown, extra: ps.extra, extras: ps.extras };
  const cards = list.map(r => {
    const info = STRANDS[r.strand], t = strandReasoning(r, results, ctx);
    return `
      <div class="why-card" style="--sc:${info.color}">
        <span class="why-tag" style="background:${info.color}">${cardTag(r, ps, tab)}</span>
        <h4 class="why-title"><span class="dot" style="background:${info.color}"></span>${info.name}</h4>
        <div class="parts">
          <div class="why-part"><span class="why-label">Your skill result</span><p>${t.skill}</p></div>
          <div class="why-part"><span class="why-label">Your interest</span><p>${t.interest}</p></div>
          <div class="why-part"><span class="why-label">How they fit together</span><p>${t.fit}</p></div>
          <div class="why-part"><span class="why-label">Try this next</span><p>${t.next}</p></div>
        </div>
      </div>`;
  }).join("");

  // 3+ strands tied for top interest: only two get cards, so say so (shown on the page that carries interest)
  const showNote = ps.alsoTop.length && (tab === "interests" || !ps.tabbed);
  const many = ps.alsoTop.length > 1;
  const note = showNote
    ? `<p class="why-note">Your interest in ${strandNames(ps.alsoTop)} also tied for the top, level with ${strandNames(ps.intSet)}. ${many ? "They have" : "It has"} no card here only to keep this page short, not because ${many ? "they fit" : "it fits"} you less. You can read ${many ? "their pages" : "its page"} under Explore Strands in the menu.</p>`
    : "";
  return `<div class="why-grid" data-n="${list.length}">${cards}</div>${note}`;
}

/* Quick check: its own small block under the folder box, only when the tabs are showing */
function quickCheckHTML(ps) {
  if (!ps.tabbed) return "";
  const opts = ps.shown.map(r => `${STRANDS[r.strand].name} work (${STRAND_DAY[r.strand]})`);
  const list = opts.length > 2 ? opts.slice(0, -1).join(", ") + ", or " + opts[opts.length - 1] : opts.join(" or ");
  return `<div class="quick-check"><b>Quick check</b><p>Picture a normal school day. Would you rather spend it on ${list}? Your gut answer is useful information.</p></div>`;
}

/* "What your results say": heading on the page, then a yellow folder box. When interests and skills point to
   different strands the box has two tabs (Interests | Skills); otherwise it is a single page. */
function renderExplain(results, pick, ps) {
  const root = document.getElementById("explain-why");
  const title = `<h3 class="explain-title">What your results say</h3>`;
  const lead = html => `<p class="explain-lead">${html}</p>`;

  const pointer = ps.tabbed
    ? `<br><br>Your top interest ${ps.intSet.length > 1 ? "strands are" : "strand is"} <strong>${strandNames(ps.intSet)}</strong>. See the <button type="button" class="tab-link" data-goto="interests">Interests</button> tab to compare.`
    : "";
  const skillsHTML = lead(buildBreakdown(results, pick) + pointer) + whyCardsHTML(results, pick, ps, "skills");

  if (!ps.tabbed) {
    root.innerHTML = `${title}<div class="folder-wrap"><div class="folder-box">${skillsHTML}</div></div>`;
    return;
  }

  const apart = ps.extras.length === ps.intSet.length;   // none of the top interest strands is a top skill strand
  const intLead = (ps.intSet.length > 1
    ? `Your interests tied: <strong>${strandNames(ps.intSet)}</strong> came out highest.`
    : `Your highest interest is in <strong>${strandNames(ps.intSet)}</strong>.`)
    + (apart ? ` Your skills and your interests point to different strands.` : ``);
  const interestsHTML = lead(intLead) + whyCardsHTML(results, pick, ps, "interests");

  root.innerHTML = `${title}
    <div class="folder-wrap has-tabs">
      <div class="folder-tabs" role="tablist" aria-label="Interests or skills">
        <button type="button" class="folder-tab" role="tab" id="ftab-skills" data-tab="skills" aria-selected="true">Skills</button>
        <button type="button" class="folder-tab" role="tab" id="ftab-interests" data-tab="interests" aria-selected="false">Interests<span class="tab-dot" aria-hidden="true"></span></button>
      </div>
      <div class="folder-box" id="folder-panel" role="tabpanel"></div>
    </div>
    ${quickCheckHTML(ps)}`;

  const panel = root.querySelector("#folder-panel");
  const tabs = root.querySelectorAll(".folder-tab");
  let current = null;
  const open = which => {
    if (which === current) return;
    const first = current === null;
    current = which;
    tabs.forEach(t => t.setAttribute("aria-selected", String(t.dataset.tab === which)));
    panel.setAttribute("aria-labelledby", "ftab-" + which);
    panel.dataset.dir = which === "interests" ? "right" : "left";   // content slides in from the side of the tab
    panel.classList.toggle("is-first", first);
    panel.innerHTML = `<div class="folder-content">${which === "interests" ? interestsHTML : skillsHTML}</div>`;
    if (which === "interests") { const d = root.querySelector(".tab-dot"); if (d) d.remove(); }   // seen it
  };
  tabs.forEach(t => t.addEventListener("click", () => open(t.dataset.tab)));
  panel.addEventListener("click", e => {
    const link = e.target.closest(".tab-link");
    if (link) open(link.dataset.goto);
  });
  open("skills");
}

function renderInterestSection(results, rec) {
  const el = document.getElementById("interest-section");
  const label = interestLabel;
  el.innerHTML = `
    <h3>Your skills and your interests, side by side</h3>
    <p class="explain-lead">${interestMessage(results, rec)}</p>
    <div class="si-grid">
      ${results.map(r => {
        const info = STRANDS[r.strand];
        return `
        <div class="si-row" style="--sc:${info.color}">
          <span class="si-name"><span class="dot" style="background:${info.color}"></span>${info.name}</span>
          <div class="si-line"><span class="si-tag">Skill</span><div class="si-track"><div class="si-fill" style="width:${r.percentage}%"></div></div><span class="si-val">${r.percentage}%</span></div>
          <div class="si-line"><span class="si-tag">Interest</span><div class="si-track"><div class="si-fill si-fill-int" style="width:${r.ipct}%"></div></div><span class="si-val">${ordinal(r.irank)} &middot; ${label(r.ipct)}</span></div>
        </div>`;
      }).join("")}
    </div>
    <p class="si-note">Skill shows how you did on short tests today, a rough indicator and not a verdict. Interest is ranked against your own other strands, so "1st" means your strongest interest, not a fixed score. The two are never combined, so any gap between them stays visible.</p>
  `;
}

/* Shows the recommended strand(s) on the results page using the same layout as the strand page
   (minus its closing panel). One strand: just the page. Two: a tab bar above it. */
function renderRecommendedInfo(ps) {
  const rec = ps.shown;
  const tabsEl = document.getElementById("strand-tabs");
  const panel = document.getElementById("strand-panel");
  const titleEl = document.getElementById("strand-header-title");
  const subEl = document.getElementById("strand-header-sub");

  const show = code => {
    panel.innerHTML = strandPageHTML(code, false);
    initStrandTypewriter(panel, STRANDS[code], "view-results");
    initStrandMotion(panel);
    tabsEl.querySelectorAll(".chip").forEach(c => {
      const on = c.dataset.code === code;
      c.classList.toggle("chip-active", on);
      c.setAttribute("aria-selected", String(on));
    });
  };

  if (rec.length < 2) {
    const info = STRANDS[rec[0].strand];
    titleEl.innerHTML = `Get to know <span style="color:${info.color}">${info.name}</span>`;
    subEl.textContent = "Here's what it covers, what you'd learn, and where it can lead.";
    tabsEl.hidden = true;
    tabsEl.innerHTML = "";
    panel.removeAttribute("role");
    show(rec[0].strand);
    return;
  }

  const countWord = ["", "", "two", "three", "four"][rec.length];
  titleEl.textContent = ps.tabbed ? "Get to know your strands" : "Get to know your recommended strands";
  subEl.textContent = !ps.tabbed
    ? "Your skills tied, so here are two to compare. Switch between them below."
    : rec.length === 2
      ? "Your skills and interests point to different strands. Switch between them below."
      : `Your skills and interests point to ${countWord} strands. Switch between them below.`;
  tabsEl.hidden = false;
  tabsEl.innerHTML = `<div class="chip-row" role="tablist" aria-label="Your strands"></div>`;
  panel.setAttribute("role", "tabpanel");
  const row = tabsEl.querySelector(".chip-row");
  rec.forEach(r => {
    const info = STRANDS[r.strand];
    const tab = document.createElement("button");
    tab.className = "chip";
    tab.dataset.code = r.strand;
    tab.setAttribute("role", "tab");
    tab.style.setProperty("--chip-color", info.color);
    tab.textContent = info.name;
    if (ps.tabbed) {
      const tag = document.createElement("span");
      tag.className = "tabtag";
      const sk = ps.rec.includes(r), it = ps.intSet.includes(r);
      tag.textContent = sk && it ? "Skill & interest" : it ? "Top interest" : "Top skill";
      tab.appendChild(tag);
    }
    tab.addEventListener("click", () => show(r.strand));
    row.appendChild(tab);
  });
  show(rec[0].strand);
}

/* ---------- Results hero: strand stickers ----------
   Shows the recommended strand(s) as stickers (icon + name in the strand's color) with the skill
   score on a stamp. rec always holds 1 or 2 strands (see pickRecommended), and when there are 2
   they are tied, so the score is shown once. Sets data-count (1 or 2) and --rc1 / --rc2 on
   .results-hero for style2.css. A low skill score gets calmer wording and no confetti. */
function renderResultsHero(pick, results, lowSignal) {
  const hero = document.querySelector(".results-hero");
  const h1 = document.getElementById("result-headline");
  if (!hero || !h1) return;

  const rec = pick.rec;
  const two = rec.length > 1;
  const colors = rec.map(r => STRANDS[r.strand].color);
  const pct = results[0].percentage;
  const tie = pick.tiedAll.length > 1;

  hero.dataset.count = String(rec.length);
  hero.classList.toggle("res-low", lowSignal);
  hero.style.setProperty("--rc1", colors[0]);
  hero.style.setProperty("--rc2", colors[1] || colors[0]);

  const sticker = (r, i) => {
    const info = STRANDS[r.strand];
    const tilt = two && i === 1 ? "2.5deg" : "-3deg";
    const stamp = two ? "" : `<span class="res-stamp"><b>${pct}%</b><small>Skill score</small></span>`;
    return `<span class="res-item${i ? " res-item-b" : ""}">
      <span class="res-sticker" style="--sc:${info.color};--tilt:${tilt}">
        <span class="res-icon" aria-hidden="true">${STRAND_ICONS[r.strand]}</span>
        <span class="res-name">${info.name}</span>
      </span>${stamp}
    </span>`;
  };

  const label = lowSignal
    ? (two ? "Your highest scores" : "Your highest score")
    : (tie ? "It\u2019s a tie \u00B7 your top matches" : "Your top match");
  const items = two
    ? `${sticker(rec[0], 0)}<span class="res-and" aria-hidden="true">&amp;</span>${sticker(rec[1], 1)}`
    : sticker(rec[0], 0);
  const pill = two
    ? `<span class="res-pill"><b>${pct}%</b><span>Both scored the same</span></span>`
    : "";
  const line = lowSignal ? "may be worth exploring." : "may be worth exploring based on your skill scores.";

  h1.innerHTML = `<span class="res-match">
      <span class="res-label">${label}</span>
      <span class="res-row">${items}</span>${pill}
    </span><span class="res-line">${line}</span>`;

  /* Background layer: two color blobs, sparkles, and (once per visit) a small confetti burst */
  const old = hero.querySelector(".res-decor");
  if (old) old.remove();
  const decor = document.createElement("div");
  decor.className = "res-decor";
  decor.setAttribute("aria-hidden", "true");
  decor.innerHTML = `<span class="res-blob res-blob-a"></span><span class="res-blob res-blob-b"></span>
    <span class="res-spark s1">\u2726</span><span class="res-spark s2">\u2726</span>
    <span class="res-spark s3">\u2726</span><span class="res-spark s4">\u2726</span>`;
  hero.insertBefore(decor, hero.firstChild);

  const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!lowSignal && !calm) {
    const palette = colors.concat(["#FFD25E", "#22262B"]);
    for (let i = 0; i < 24; i++) {
      const c = document.createElement("span");
      const a = Math.random() * Math.PI * 2, d = 140 + Math.random() * 190;
      c.className = "res-confetti";
      c.style.setProperty("--dx", Math.round(Math.cos(a) * d * 1.3) + "px");
      c.style.setProperty("--dy", Math.round(Math.sin(a) * d * 0.8 + 60) + "px");
      c.style.setProperty("--rot", Math.round(Math.random() * 720 - 360) + "deg");
      c.style.background = palette[i % palette.length];
      c.style.animationDelay = (0.5 + Math.random() * 0.2) + "s";
      if (i % 3 === 0) c.style.borderRadius = "50%";
      c.addEventListener("animationend", () => c.remove());
      decor.appendChild(c);
    }
  }
}

function renderResults() {
  const results = state.results;
  const pick = pickRecommended(results);
  const rec = pick.rec;
  const top = rec[0];
  const lowSignal = results[0].percentage < LOW_SIGNAL_PCT;
  renderResultsHero(pick, results, lowSignal);
  document.getElementById("result-sub").textContent = lowSignal
    ? `Your skill scores were low and close together, so they don't point strongly to any strand. Lean on your interest results below and explore each strand's page. This is a starting point, not a final decision \u2014 you know yourself best.`
    : `This is a starting point for exploration, not a final decision \u2014 you know yourself best. It's only as accurate as your answers.`;

  /* Bar chart: bar height = percentage correct, label shows the raw score */
  const chart = document.getElementById("bar-chart");
  chart.innerHTML = "";
  results.forEach(r => {
    const info = STRANDS[r.strand];
    const bar = document.createElement("div");
    bar.className = "bar-col";
    bar.innerHTML = `
      <div class="bar-pct">${r.percentage}%</div>
      <div class="bar-track">
        <div class="bar-fill" style="background:${info.color};" data-target="${r.percentage}"></div>
      </div>
      <div class="bar-label">${info.name}<br>${r.correct}/${r.total}</div>
    `;
    chart.appendChild(bar);
  });
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll(".bar-fill").forEach(el => {
        el.style.height = el.dataset.target + "%";
      });
    }, 50);
  });

  renderInterestSection(results, rec);

  const ps = pickShown(results, rec);
  renderExplain(results, pick, ps);

  renderRecommendedInfo(ps);

  renderFAQ(pick);
}

/* ---------- FAQ ---------- */
function renderFAQ(pick) {
  const { rec, tiedAll } = pick;
  const top = rec[0], topInfo = STRANDS[top.strand];
  const names = list => list.map(r => STRANDS[r.strand].name).join(" and ");
  const faqs = [
    {
      q: "How was my score calculated?",
      a: `Each of the six skill tests has multiple-choice questions with one correct answer. Your score for a strand is the number you got right, shown as a raw score and a percentage. The strand with the highest percentage is your top skill strand.`
    },
    {
      q: "How was my interest result calculated?",
      a: `The Interests questionnaire has no right or wrong answers. Part A (ratings) and Part B (most and least) are each turned into a 0 to 100 score per strand and averaged. Your strands are then ranked against each other, so the result shows what you prefer compared with your own other strands. It is kept separate from your skill score on purpose.`
    },
    {
      q: rec.length > 1 ? "Why were these strands recommended for me?" : "Why was this strand recommended for me?",
      a: pick.arbitrary
        ? `${names(tiedAll)} all tied for your highest score (${top.correct}/${top.total}, ${top.percentage}%), and your interest results could not separate them either. Only two strands are shown at a time, so ${names(rec)} appear here. Treat all ${tiedAll.length} as worth exploring.`
        : pick.byInterest
          ? `${names(tiedAll)} all tied for your highest score (${top.correct}/${top.total}, ${top.percentage}%). Only two strands are shown at a time, so your interest results were used to choose ${names(rec)}. The other tied strands are not ruled out.`
          : rec.length > 1
            ? `${names(rec)} tied for your highest score (${top.correct}/${top.total}, ${top.percentage}%), so both are equally strong matches on this assessment.`
            : `${topInfo.name} was your highest-scoring test at ${top.correct}/${top.total} (${top.percentage}%).`
    },
    {
      q: "Does a low score mean I can't take that strand?",
      a: `No. Each test is a short snapshot of your current skills, not a limit. Skills can be built with practice, and a strand you enjoy may be worth choosing even if you scored lower there.`
    },
    {
      q: `What subjects are included in ${names(rec)}?`,
      a: rec.map(r => `${STRANDS[r.strand].name} typically includes subjects like ${STRANDS[r.strand].subjects.join(", ")}.`).join(" ")
    },
    {
      q: "What college courses are related to this strand?",
      a: rec.length > 1
        ? `Common related courses include ${rec.map(r => `${STRANDS[r.strand].courses.join(", ")} (${STRANDS[r.strand].name})`).join("; ")} — though many courses accept graduates from other strands too.`
        : `Common related courses include ${topInfo.courses.join(", ")} — though many courses accept graduates from other strands too.`
    },
    {
      q: "Can I still choose another strand?",
      a: `Yes. This result is a suggestion based on how you performed today, not a requirement. Strand choice is ultimately yours, and it's worth talking it over with your parents, teachers, or guidance counselor.`
    }
  ];

  const faqEl = document.getElementById("faq-list");
  faqEl.innerHTML = "";
  faqs.forEach(item => {
    const wrap = document.createElement("div");
    wrap.className = "faq-item";
    wrap.innerHTML = `
      <button class="faq-question" aria-expanded="false">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    `;
    const btn = wrap.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = wrap.classList.toggle("faq-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
    faqEl.appendChild(wrap);
  });
}

/* ---------- Hero decoration: 8 sparkles (they twinkle via style2.css) ----------
   The sparkles are real elements (not background paint) so they can animate smoothly.
   Positions and timing live in style2.css. Always created, even with reduced motion.
   (The colored dots were removed on purpose; the typewriter line carries the strand colors.) */
function initHeroDecor() {
  const hero = document.querySelector(".home-hero");
  if (!hero || hero.querySelector(".hero-twinkle")) return;
  const layer = document.createElement("div");
  layer.className = "hero-twinkle";
  layer.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 8; i++) {
    const star = document.createElement("span");
    star.className = "twinkle-star " + (i % 2 === 0 ? "star-amber" : "star-white");
    star.textContent = "\u2726";
    layer.appendChild(star);
  }
  hero.insertBefore(layer, hero.firstChild);
}

/* ---------- Home hero: typewriter line ("Are you a future Engineer?") ----------
   Sits between the headline and the paragraph. One career per strand, typed in that strand's color.
   The line is built here (like the sparkles), so index2.html stays untouched.
   Centering: the box around the sentence is sized to the CURRENT career's full sentence, so the
   whole line is centered for short words ("Chef") and long ones ("Software Developer") alike.
   While a word is typed the box stays put (nothing wobbles); in the pause between words,
   when the word is empty, the box glides to the next sentence's width.
   Screen readers get one plain sentence. Pauses while the tab is hidden or the home page isn't
   showing; "reduce motion" shows one static career. */
const HERO_CAREERS = [
  { text: "Engineer",           strand: "STEM" },
  { text: "Lawyer",             strand: "ASSH" },
  { text: "Entrepreneur",       strand: "BM"   },
  { text: "Chef",               strand: "HT"   },
  { text: "Software Developer", strand: "ICT"  },
  { text: "Electrician",        strand: "IA"   }
];

function initHeroType() {
  const hero = document.querySelector(".home-hero");
  const h1 = hero && hero.querySelector("h1");
  if (!h1 || hero.querySelector(".hero-type")) return;

  const prefix = "Are you a future ";
  const names = HERO_CAREERS.map(c => c.text);
  const spoken = "Are you a future " + names.slice(0, -1).join(", ") + ", or " + names[names.length - 1] + "?";

  const p = document.createElement("p");
  p.className = "hero-type";
  p.innerHTML = `
    <span class="sd-sr">${spoken}</span>
    <span class="hero-type-box" aria-hidden="true">
      <span class="hero-type-line">${prefix}<span class="hero-type-word"></span><span class="hero-type-caret"></span>?</span>
    </span>
    <span class="hero-type-measure" aria-hidden="true"></span>`;
  h1.insertAdjacentElement("afterend", p);

  const box = p.querySelector(".hero-type-box");
  const word = p.querySelector(".hero-type-word");
  const caret = p.querySelector(".hero-type-caret");
  const measure = p.querySelector(".hero-type-measure");   // invisible copy used only to measure widths
  const paint = c => { p.style.setProperty("--wc", STRANDS[c.strand].color); };

  /* Width of the whole sentence for one career (+4px of slack so it never wraps by a sub-pixel) */
  function sentenceWidth(text) {
    measure.innerHTML = `${prefix}<span class="hero-type-word">${text}</span>?`;
    return measure.getBoundingClientRect().width + 4;
  }

  let w = 0;   // index of the career currently shown
  let wasHidden = true;   // true while the home page is not showing (a hidden element measures 0px wide)
  function fit() {
    const avail = p.clientWidth;
    // Home page hidden (display:none): everything measures 0. Writing that would squeeze the box
    // to 0px and wrap the sentence word by word, so leave the last good width alone.
    if (!avail) { wasHidden = true; return; }
    const target = Math.min(Math.ceil(sentenceWidth(HERO_CAREERS[w].text)), avail) + "px";
    if (wasHidden) {
      // Just came back (or first paint): snap to the right width instead of gliding from the old one
      box.style.transition = "none";
      box.style.width = target;
      void box.offsetWidth;          // flush so the snap isn't animated
      box.style.transition = "";
      wasHidden = false;
    } else {
      box.style.width = target;
    }
    // on a very narrow screen the longest sentence wraps to two lines: keep room for that
    const widest = Math.max(...HERO_CAREERS.map(c => sentenceWidth(c.text)));
    p.classList.toggle("hero-type-wrap", widest > avail);
  }
  // Re-measure whenever the line's own size changes: window resize AND the home page
  // appearing again after another screen (display:none -> block), which "resize" never reports.
  if ("ResizeObserver" in window) new ResizeObserver(fit).observe(p);
  else window.addEventListener("resize", fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);   // re-measure once web fonts load

  paint(HERO_CAREERS[0]);
  fit();

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    word.textContent = HERO_CAREERS[0].text;
    caret.hidden = true;
    return;
  }

  const homeView = document.getElementById("view-home");
  let n = 0, deleting = false;
  function tick() {
    if (document.hidden || !homeView.classList.contains("active")) { setTimeout(tick, 500); return; }
    const cur = HERO_CAREERS[w];
    let delay;
    if (!deleting) {
      n++;
      word.textContent = cur.text.slice(0, n);
      if (n === cur.text.length) { deleting = true; delay = 1600; } else { delay = 80; }
    } else {
      n--;
      word.textContent = cur.text.slice(0, n);
      if (n === 0) {
        deleting = false;
        w = (w + 1) % HERO_CAREERS.length;
        paint(HERO_CAREERS[w]);
        fit();                 // the box glides to the next sentence's width during this pause
        delay = 400;
      } else { delay = 40; }
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 1300);   // after the hero entrance animations have played
}

/* ---------- Home page motion (works with the ANIM blocks at the end of style2.css) ----------
   Adds .reveal / .reveal-in classes as the student scrolls.
   Skipped entirely if the device asks for reduced motion. */
function initHomeMotion() {
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // Scroll reveal: "How it works" box + steps, the Explore heading, and the strand cards
  if ("IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".manual, .manual-list li, .explore-strands-section .section-title, " +
      ".explore-strands-section .section-sub, #strand-grid .strand-card"
    );
    const io = new IntersectionObserver(entries => {
      let n = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty("--rd", (n++ * 0.09) + "s");   // small stagger inside a batch
        entry.target.classList.add("reveal-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }
}

/* ---------- Back / Forward buttons ----------
   Rebuilds the screen stored in the history entry. Screens that are no longer valid
   (a finished test, or Results before all six tests are done) fall back to the hub. */
window.addEventListener("popstate", e => {
  const s = e.state;
  if (!s || !s.view || !document.getElementById(s.view)) { showView("view-home", "none"); return; }

  switch (s.view) {
    case "view-strand-detail":
      if (STRANDS[s.strand]) { renderStrandDetail(s.strand); showView(s.view, "none"); }
      else showView("view-home", "replace");
      break;

    case "view-assessment": {
      const code = state.activeModule;
      const inProgress = code && s.module === code && !isDone(code) &&
        state.draft.length === MODULES[code].questions.length;
      if (inProgress) { (state.phase === "intro" ? renderIntro : renderQuestion)(); showView(s.view, "none"); }
      else openHub("replace");
      break;
    }

    case "view-hub":
      renderHub();
      showView(s.view, "none");
      break;

    case "view-results":
      if (allDone()) { computeResults(); renderResults(); showView(s.view, "none"); }
      else openHub("replace");
      break;

    default:
      showView(s.view, "none");
  }
});

/* ---------- init ---------- */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";   // we scroll to top ourselves
validateQuestionBank();
loadState();
loadProgress();
loadInterest();
/* Homepage badge: counts come from the question data so they can't go stale */
(function setHeroBadge() {
  const hero = document.querySelector(".home-hero");
  if (!hero) return;
  const parts = MODULE_ORDER.length + 1;
  const total = MODULE_ORDER.reduce((n, c) => n + MODULES[c].questions.length, 0) + INTEREST.statements.length + INTEREST.forced.length;
  hero.style.setProperty("--hero-badge", JSON.stringify(`\u2726 ${parts} parts \u00B7 ${total} questions \u2726`));
})();
renderStrandGrid();
initHeroDecor();
initHeroType();
initHomeMotion();
if (!restoreSession()) showView("view-home");