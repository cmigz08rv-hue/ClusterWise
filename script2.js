// note to self : every strand fact lives in here. change the words here and the strand pages follow lol
const STRANDS = {
  STEM: {
    name: "STEM",
    full: "Science, Technology, Engineering & Mathematics",
    color: "#1E8578",
    overview: "STEM is built for learners who like asking why something works and proving it. Expect heavy math, laboratory science, and a lot of problem sets.",
    focus: "Deep, theory-first study of the natural and physical sciences, paired with advanced mathematics.",
    highlight: "theory-first",
    subjects: ["Pre-Calculus & Basic Calculus", "General Physics", "General Chemistry", "General Biology", "Research"],
    subjectNotes: {
      "Pre-Calculus & Basic Calculus": "You work with functions, graphs, and trigonometry, then learn how quantities change using limits and derivatives.",
      "General Physics": "You study motion, forces, energy, electricity, and waves, and use math to explain how the physical world behaves.",
      "General Chemistry": "You explore what everything is made of, how substances react, and why, with hands-on lab work.",
      "General Biology": "You study living things, from cells and genetics to evolution and ecosystems, and how life systems work.",
      "Research": "You plan and carry out your own small investigation, from asking a question to presenting what you found.",
    },
    skills: ["Analytical & logical reasoning", "Data interpretation", "Scientific methodology", "Precision & patience with detail"],
    courses: ["Engineering (all branches)", "Computer Science", "Medicine & Allied Health Sciences", "Nursing", "Architecture", "Applied Mathematics"],
    careers: ["Engineer", "Researcher / Scientist", "Doctor", "Nurse", "Architect", "Data Analyst"],
    videoId: "NO-INaxhY-w",
    videoCaption: "A quick recap of what STEM learners actually study and build."
  },
  ASSH: {
    name: "ASSH",
    full: "Arts, Social Sciences, and Humanities",
    color: "#C2457F",
    formerly: "HUMMS",
    overview: "ASSH is for learners drawn to people, culture, language, and ideas: how societies work and how to write and argue well about them.",
    focus: "The study of human behavior, society, communication, and the humanities.",
    highlight: "human behavior, society",
    subjects: ["Creative Writing", "Philosophy", "Communication", "Politics & Governance", "Disciplines & Ideas in Social Sciences"],
    subjectNotes: {
      "Creative Writing": "You write stories, poems, and essays, and learn what makes writing stand out.",
      "Philosophy": "You ask big questions about truth, right and wrong, and how we know what we know.",
      "Communication": "You study how people share ideas, and practice speaking, presenting, and reading media critically.",
      "Politics & Governance": "You learn how governments work, how decisions get made, and how citizens take part.",
      "Disciplines & Ideas in Social Sciences": "You get a first look at fields like psychology, sociology, and anthropology.",
    },
    skills: ["Writing & public speaking", "Critical & reflective thinking", "Research & interviewing", "Empathy & cultural awareness"],
    courses: ["Communication / Journalism", "Political Science", "Education", "Psychology", "Law (pre-law)"],
    careers: ["Teacher / Professor", "Lawyer", "Journalist", "Psychologist", "Public Servant"],
    videoId: "QjYIQNZpRyw",
    videoCaption: "A quick recap of what ASSH learners read, discuss, and write about."
  },
  BM: {
    name: "BM",
    full: "Business and Management",
    color: "#E4572E",
    formerly: "ABM",
    overview: "BM suits learners curious about how businesses run, how money moves, and how to lead or manage an organization.",
    focus: "The fundamentals of business operations, finance, and management practices.",
    highlight: "business operations, finance",
    subjects: ["Fundamentals of ABM", "Business Finance", "Organization & Management", "Applied Economics", "Business Math"],
    subjectNotes: {
      "Fundamentals of ABM": "You learn the basics of accounting and how a business keeps track of what it earns and spends.",
      "Business Finance": "You learn how businesses raise, manage, and invest money, and how to read financial statements.",
      "Organization & Management": "You study how businesses are organized and led, including planning, teamwork, and decision-making.",
      "Applied Economics": "You use ideas like supply, demand, and cost to understand real business and market situations.",
      "Business Math": "You practice the everyday math of business, like percentages, interest, profit, and pricing.",
    },
    skills: ["Budgeting & financial literacy", "Planning & organizing", "Negotiation & leadership", "Numerical reasoning"],
    courses: ["Accountancy", "Business Administration", "Entrepreneurship", "Marketing Management", "Economics"],
    careers: ["Accountant", "Entrepreneur", "Marketing Manager", "Financial Analyst", "Human Resources Officer"],
    videoId: "4Oog3D2xK10",
    videoCaption: "A quick recap of how BM learners learn to plan, manage, and grow a business."
  },
  HT: {
    name: "HT",
    full: "Hospitality and Tourism",
    color: "#3457D5",
    formerly: "HE",
    overview: "HT is a practical, service-oriented track covering cooking, hotel and restaurant operations, and tourism skills you can apply right away.",
    focus: "Hands-on training in food, service, hospitality, and tourism-related work.",
    highlight: "food, service, hospitality",
    subjects: ["Cookery", "Food & Beverage Services", "Housekeeping", "Tourism Promotion", "Caregiving"],
    subjectNotes: {
      "Cookery": "You learn to prepare food, from knife skills and cooking methods to kitchen safety and plating.",
      "Food & Beverage Services": "You practice serving guests in a restaurant: setting tables, taking orders, serving drinks, and handling customers.",
      "Housekeeping": "You learn how hotels and lodgings keep rooms clean, ready, and comfortable for guests.",
      "Tourism Promotion": "You study tourist destinations and learn how places, culture, and attractions are promoted to travelers.",
      "Caregiving": "You learn the basics of caring for children, older adults, and people who need help, with safety and respect first.",
    },
    skills: ["Practical service skills", "Attention to hygiene & detail", "Customer care", "Teamwork under pressure"],
    courses: ["Hotel & Restaurant Management", "Tourism Management", "Nutrition & Dietetics", "Nursing", "Culinary Arts"],
    careers: ["Chef / Cook", "Hotel & Restaurant Staff", "Tour Coordinator", "Caregiver", "Flight Attendant"],
    videoId: "j7XlkEx2IHA",
    videoCaption: "A quick recap of the hands-on service skills HT learners practice."
  },
  ICT: {
    name: "ICT",
    full: "Information and Communications Technology",
    color: "#6A3EA1",
    overview: "ICT fits learners who like building and fixing digital things, such as apps, websites, networks, and systems.",
    focus: "Practical, skills-based training in computer systems, software, and digital media.",
    highlight: "skills-based training",
    subjects: ["Computer Programming", "Computer Systems Servicing", "Animation", "Technical Drafting", "Web/App Development"],
    subjectNotes: {
      "Computer Programming": "You learn to write code that tells a computer what to do, starting with logic and simple programs.",
      "Computer Systems Servicing": "You assemble, install, and troubleshoot computers and networks, and fix common hardware and software problems.",
      "Animation": "You make moving images, from drawing and storyboarding to bringing characters and scenes to life on a computer.",
      "Technical Drafting": "You learn to draw precise plans and technical drawings, by hand and with software.",
      "Web/App Development": "You build websites and apps, designing how they look and coding how they work.",
    },
    skills: ["Programming & logic building", "Troubleshooting", "Digital design", "Systematic thinking"],
    courses: ["Computer Science", "Information Technology", "Multimedia Arts", "Computer Engineering", "Digital Design"],
    careers: ["Software Developer", "IT Support Specialist", "UI/UX Designer", "Network Administrator", "Game Developer"],
    videoId: "7uVoBJf70m0",
    videoCaption: "A quick recap of what ICT learners build, code, and design."
  },
  IA: {
    name: "IA",
    full: "Industrial Arts",
    color: "#B71C1C",
    formerly: "EIM",
    overview: "IA is a hands-on technical track for learners who like building, wiring, and fixing things with tools and machinery.",
    focus: "Technical-vocational training in electrical systems, installation, and maintenance work.",
    highlight: "Technical-vocational training",
    subjects: ["Electrical Installation", "Industrial Wiring", "Occupational Health & Safety", "Technical Drawing", "Electronics"],
    subjectNotes: {
      "Electrical Installation": "You learn to install and maintain wiring and electrical systems in homes and buildings, safely.",
      "Industrial Wiring": "You work with the wiring, motors, and controls used in factories and larger buildings.",
      "Occupational Health & Safety": "You learn to spot hazards and keep a workplace safe, including proper gear and procedures.",
      "Technical Drawing": "You read and make technical drawings for machines and structures, using standard symbols and measurements.",
      "Electronics": "You learn how circuits and electronic parts work, and practice building, testing, and repairing simple devices.",
    },
    skills: ["Manual dexterity & precision", "Practical troubleshooting", "Safety-conscious work habits", "Tool & equipment handling"],
    courses: ["Electrical Engineering", "Electronics Engineering", "Industrial Technology", "Mechanical Technology", "Automotive Technology"],
    careers: ["Electrician", "Electrical Technician", "Maintenance Engineer", "Industrial Electrician", "Building Technician"],
    videoId: "2GhjbMmD56o",
    videoCaption: "A quick recap of the hands-on electrical and technical work IA learners do."
  }
};

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

const APTITUDE = {
  STEM: { strength: "math and natural-science reasoning", practice: "math and science problem solving" },
  ASSH: { strength: "reading comprehension and spotting flawed arguments", practice: "close reading and judging arguments" },
  BM:   { strength: "quantitative and financial reasoning", practice: "numerical and financial reasoning" },
  ICT:  { strength: "algorithmic, step-by-step logic", practice: "algorithm and flowchart logic" },
  IA:   { strength: "mechanical reasoning, tool safety, and reading schematics", practice: "mechanical and schematic reasoning" },
  HT:   { strength: "sound judgment in service situations", practice: "handling customer and service situations" }
};

let RFIL = false;
let RERENDER = false;
let resultsLang = null;
const R = (en, fil) => RFIL ? fil : en;
const filNow = () => !!(window.CW_i18n && window.CW_i18n.lang() === "fil");
const FIL_APTITUDE = {
  STEM: { strength: "pangangatwiran sa math at likas na agham", practice: "pagsagot ng mga problema sa math at science" },
  ASSH: { strength: "pag-unawa sa binasa at pagtukoy ng mali sa argumento", practice: "masusing pagbasa at pagsusuri ng mga argumento" },
  BM:   { strength: "pangangatwirang numerikal at pampinansyal", practice: "pangangatwirang numerikal at pampinansyal" },
  ICT:  { strength: "lohikang hakbang-hakbang (algorithmic)", practice: "lohika ng algorithm at flowchart" },
  IA:   { strength: "pangangatwirang mekanikal, kaligtasan sa paggamit ng tool, at pagbasa ng schematic", practice: "pangangatwirang mekanikal at schematic" },
  HT:   { strength: "mahusay na paghuhusga sa mga sitwasyon ng serbisyo", practice: "pagharap sa mga sitwasyon ng customer at serbisyo" }
};
const apt = (code, key) => RFIL ? FIL_APTITUDE[code][key] : APTITUDE[code][key];

// the keys still say "strandwise" on purpose. dont rename them or saved progress breaks. nouuuu
const STORAGE_KEY = "strandwise.hub.v1";
const SESSION_KEY = "strandwise.session.v1";
const PLEDGE_KEY = "strandwise.pledge.v1";
const PROGRESS_KEY = "strandwise.progress.v1";
let currentViewId = "view-home";

const state = {
  activeModule: null,
  phase: null,
  current: 0,
  draft: [],
  optionOrder: [],
  scores: {},
  progress: {},
  results: null,
  interest: null,
  iprog: null
};

const INTEREST_KEY = "strandwise.interest.v1";
const INTEREST_PROG_KEY = "strandwise.interestprog.v1";
const ist = { active: false, phase: null, pos: 0, order: [], a: [], bOrder: [], b: [] };

function saveState() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state.scores)); } catch (e) { }
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    MODULE_ORDER.forEach(code => {
      const s = saved[code];
      const bank = MODULES[code] && MODULES[code].questions;
      if (s && bank && Number.isInteger(s.correct) && s.total === bank.length && s.correct >= 0 && s.correct <= s.total) {
        state.scores[code] = { correct: s.correct, total: s.total };
      }
    });
  } catch (e) { state.scores = {}; }
}

let pledged = false;
try { pledged = sessionStorage.getItem(PLEDGE_KEY) === "1"; } catch (e) { pledged = false; }
function savePledge() {
  try { sessionStorage.setItem(PLEDGE_KEY, pledged ? "1" : "0"); } catch (e) { }
}

const isDone = code => code === "INTEREST" ? Boolean(state.interest) : Boolean(state.scores[code]);
const countDone = () => MODULE_ORDER.filter(isDone).length;
const allDone = () => countDone() === MODULE_ORDER.length && Boolean(state.interest);

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
  } catch (e) { }
}

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
  try { sessionStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress)); } catch (e) { }
}

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

// note to self : puts you back where you were after a refresh. says false when theres nothing to restore
function restoreSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    if (!s) return false;

    if (s.view === "view-assessment") {
      if (s.interest && !state.interest && resumeInterestFromSaved()) { renderInterest(); showView("view-assessment"); return true; }
      if (s.phase === "intro") { openHub(); return true; }
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
    if (s.view === "view-stakes") { openStakes(); return true; }
    if (s.view === "view-hub") { openHub(); return true; }
    if (s.view === "view-results" && allDone()) { showResults(); return true; }
    if (s.view === "view-loading") {
      if (allDone()) { showResults(); return true; }
      openHub("replace");
      return true;
    }
  } catch (e) { }
  return false;
}

// quick check that the question bank is set up right. mwehehehe
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

// shuffles a copy so the original order stays safe. rlly literally just a swap loop
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let currentStrand = null;

function historyState(id) {
  return {
    view: id,
    strand: id === "view-strand-detail" ? currentStrand : null,
    module: id === "view-assessment" ? state.activeModule : null
  };
}

function recordHistory(id, mode) {
  if (mode === "none") return;
  try {
    const next = historyState(id);
    const cur = history.state;
    if (mode === "replace" || !cur) {
      history.replaceState(next, "");
    } else if (cur.view !== next.view || (cur.strand || null) !== (next.strand || null)) {
      history.pushState(next, "");
    }
  } catch (e) { }
}

function showView(id, mode = "push") {
  if (unlock.active) endUnlock();
  if (id !== "view-stakes" && stakesTimer) stopStakesTimer();
  if (id !== "view-loading" && loader.active) stopLoader();
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  if (id === "view-results" && resultsLang && state.results && resultsLang !== (filNow() ? "fil" : "en")) renderResults();
  document.getElementById(id).classList.add("active");
  currentViewId = id;
  recordHistory(id, mode);
  saveSession();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openHub(mode) {
  if (typeof gradeLocked === "function" && gradeLocked()) { openGate("blocked"); return; }
  renderHub();
  showView("view-hub", typeof mode === "string" ? mode : "push");
}

const GRADE_KEY = "strandwise.grade.v1";
const gradeStore = () => sessionStorage;
let gradeMem = null;
function gradeGet() { try { return gradeStore().getItem(GRADE_KEY) || gradeMem; } catch (e) { return gradeMem; } }
function gradeSet(v) { gradeMem = v; try { gradeStore().setItem(GRADE_KEY, v); } catch (e) { } }
const gradeLocked = () => gradeGet() === "locked";

function applyGradeLock() {
  const locked = gradeLocked();
  document.body.classList.toggle("grade-locked", locked);
  document.querySelectorAll("#start-btn, #start-btn-2, #sd-start").forEach(btn => {
    if (locked) btn.setAttribute("aria-disabled", "true"); else btn.removeAttribute("aria-disabled");
  });
}

let cwGate = null, cwGateReturnFocus = null;

function closeGate(restoreFocus) {
  cwGate.hidden = true;
  document.body.classList.remove("cw-modal-open");
  if (restoreFocus && cwGateReturnFocus && document.contains(cwGateReturnFocus)) cwGateReturnFocus.focus();
}

function showGateStep(step) {
  const ask = cwGate.querySelector("#cw-gate-ask");
  const blocked = cwGate.querySelector("#cw-gate-blocked");
  ask.hidden = step !== "ask";
  blocked.hidden = step !== "blocked";
  cwGate.querySelector(".cw-gate-card").setAttribute("aria-labelledby", step === "ask" ? "cw-gate-title-ask" : "cw-gate-title-blocked");
  if (step === "ask") {
    cwGate.querySelectorAll('input[name="cw-grade"]').forEach(r => { r.checked = false; });
    cwGate.querySelector("#cw-gate-continue").disabled = true;
    cwGate.querySelector('input[name="cw-grade"]').focus();
  } else {
    cwGate.querySelector("#cw-gate-explore").focus();
  }
}

function openGate(step) {
  if (!cwGate) buildGate();
  cwGateReturnFocus = document.activeElement;
  document.body.classList.add("cw-modal-open");
  cwGate.hidden = false;
  showGateStep(step);
}

function buildGate() {
  cwGate = document.createElement("div");
  cwGate.className = "cw-modal";
  cwGate.hidden = true;
  cwGate.innerHTML = `
    <div class="cw-modal-card cw-gate-card" role="dialog" aria-modal="true">
      <div id="cw-gate-ask">
        <h3 id="cw-gate-title-ask">Which grade are you in?</h3>
        <p>ClusterWise is made for learners who have not chosen a Senior High School strand yet.</p>
        <fieldset class="cw-gate-radios">
          <legend class="cw-gate-sr">Your grade level</legend>
          <label class="cw-gate-opt">
            <input type="radio" name="cw-grade" value="ok">
            <span class="cw-gate-face">
              <span class="cw-gate-check" aria-hidden="true"></span>
              <span class="cw-gate-opt-title">Grade 10 or below</span>
              <span class="cw-gate-opt-sub">Still choosing a strand</span>
            </span>
          </label>
          <label class="cw-gate-opt">
            <input type="radio" name="cw-grade" value="locked">
            <span class="cw-gate-face">
              <span class="cw-gate-check" aria-hidden="true"></span>
              <span class="cw-gate-opt-title">Grade 11–12</span>
              <span class="cw-gate-opt-sub">Already in a strand</span>
            </span>
          </label>
        </fieldset>
        <div class="cw-modal-actions"><button type="button" class="btn btn-primary" id="cw-gate-continue" disabled>Continue</button></div>
      </div>
      <div id="cw-gate-blocked" hidden>
        <h3 id="cw-gate-title-blocked">ClusterWise is for Grade 10 and below</h3>
        <p>Learners in Grade 11 and 12 are already in a strand, and PCSHS does not allow switching, so these results could not change anything for you. You can still read about each strand.</p>
        <div class="cw-gate-options">
          <button type="button" class="cw-gate-btn" id="cw-gate-explore">Explore strands</button>
          <button type="button" class="cw-gate-btn" id="cw-gate-faq">FAQ</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(cwGate);

  const cont = cwGate.querySelector("#cw-gate-continue");
  cwGate.querySelectorAll('input[name="cw-grade"]').forEach(r => r.addEventListener("change", () => {
    cont.disabled = false;
  }));
  cont.addEventListener("click", () => {
    const picked = cwGate.querySelector('input[name="cw-grade"]:checked');
    if (!picked) return;
    if (picked.value === "ok") { gradeSet("ok"); closeGate(false); proceedAfterGrade(); }
    else { gradeSet("locked"); applyGradeLock(); showGateStep("blocked"); }
  });
  cwGate.querySelector("#cw-gate-explore").addEventListener("click", () => { closeGate(false); document.getElementById("nav-explore").click(); });
  cwGate.querySelector("#cw-gate-faq").addEventListener("click", () => { closeGate(false); document.getElementById("nav-faq").click(); });

  cwGate.addEventListener("click", e => { if (e.target === cwGate) closeGate(true); });
  cwGate.addEventListener("keydown", e => { if (e.key === "Escape") { e.preventDefault(); closeGate(true); } });
  document.addEventListener("focusin", e => {
    if (cwGate.hidden || cwGate.contains(e.target)) return;
    const step = cwGate.querySelector("#cw-gate-ask").hidden ? "#cw-gate-explore" : 'input[name="cw-grade"]';
    cwGate.querySelector(step).focus();
  });
}

const STAKES_KEY = "strandwise.stakes.v1";
const STAKES_WAIT_MS = 5000;
let stakesSeen = false;
try { stakesSeen = sessionStorage.getItem(STAKES_KEY) === "1"; } catch (e) { stakesSeen = false; }
let stakesTimer = null;

function stopStakesTimer() {
  if (stakesTimer) { clearInterval(stakesTimer); stakesTimer = null; }
  const v = document.getElementById("view-stakes");
  if (v) v.classList.remove("stakes-locked");
}

// the continue button stays locked for a few seconds so people actually read the notice. the countdown thingy
function runStakesCountdown() {
  const btn = document.getElementById("stakes-continue");
  stopStakesTimer();
  if (stakesSeen) { btn.disabled = false; btn.textContent = "Continue"; return; }
  const end = Date.now() + STAKES_WAIT_MS;
  btn.disabled = true;
  document.getElementById("view-stakes").classList.add("stakes-locked");
  const tick = () => {
    const left = Math.ceil((end - Date.now()) / 1000);
    if (left <= 0) { stopStakesTimer(); btn.disabled = false; btn.textContent = "Continue"; return; }
    btn.textContent = `Continue (${left})`;
  };
  tick();
  stakesTimer = setInterval(tick, 250);
}

function openStakes(mode) {
  if (gradeGet() !== "ok") { startAssessment(); return; }
  runStakesCountdown();
  showView("view-stakes", typeof mode === "string" ? mode : "push");
}

function proceedAfterGrade() {
  if (stakesSeen) openHub(); else openStakes();
}

document.getElementById("stakes-continue").addEventListener("click", () => {
  if (document.getElementById("stakes-continue").disabled) return;
  stakesSeen = true;
  try { sessionStorage.setItem(STAKES_KEY, "1"); } catch (e) { }
  openHub();
});

function startAssessment() {
  const g = gradeGet();
  if (g === "ok") { proceedAfterGrade(); return; }
  openGate(g === "locked" ? "blocked" : "ask");
}
applyGradeLock();

document.getElementById("start-btn").addEventListener("click", startAssessment);
document.getElementById("start-btn-2").addEventListener("click", startAssessment);
document.getElementById("nav-home").addEventListener("click", () => confirmLeave(() => showView("view-home")));
document.getElementById("nav-explore").addEventListener("click", () => confirmLeave(() => {
  showView("view-home");
  setTimeout(() => {
    document.getElementById("explore-strands").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}));

document.getElementById("nav-faq").addEventListener("click", () => confirmLeave(() => {
  showView("view-home");
  setTimeout(() => {
    document.getElementById("faq").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
}));

const STRAND_GROUPS = [
  { label: "Academic", codes: ["STEM", "ASSH", "BM"] },
  { label: "TechPro",  codes: ["HT", "ICT", "IA"] }
];

// draws all the strand cards on the home page. wowowowow so many cards
function renderStrandGrid() {
  const grid = document.getElementById("strand-grid");
  grid.innerHTML = "";
  STRAND_GROUPS.forEach(group => {
    const label = document.createElement("h3");
    label.className = "strand-group-label";
    label.textContent = group.label;
    grid.appendChild(label);

    group.codes.forEach(code => {
      const info = STRANDS[code];
      const card = document.createElement("button");
      card.className = "strand-card";
      card.style.setProperty("--sc", info.color);
      card.innerHTML = `
        <span class="strand-card-badge" aria-hidden="true">${STRAND_ICONS[code]}</span>
        <span class="strand-card-content">
          <span class="strand-card-head">
            <span class="strand-card-name">${info.name}</span>
            ${info.formerly ? `<span class="strand-card-former">Formerly ${info.formerly}</span>` : ""}
          </span>
          <span class="strand-card-full">${info.full}</span>
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
  });
}

function withArticle(word) {
  if (/^(u[ix]|uni|use|eu)/i.test(word)) return "a " + word;
  return (/^[aeiou]/i.test(word) ? "an " : "a ") + word;
}

let sdTypeToken = 0;
function initStrandTypewriter(root, info, viewId = "view-strand-detail") {
  const token = ++sdTypeToken;
  const out = root.querySelector(".sd-type-word");
  if (!out) return;
  const reduced = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const i18n = () => (window.CW_i18n && window.CW_i18n.lang() === "fil") ? window.CW_i18n : null;
  const wordsNow = () => { const t = i18n(); return t ? t.careerWords(info.careers) : info.careers.map(withArticle); };
  const prefixNow = () => { const t = i18n(); return t ? t.typePrefix(info.name) : `${info.name} can take you to becoming `; };
  let words = wordsNow();

  const line = out.closest(".sd-type");
  function reserve(list) {
    if (!line || !line.clientWidth) return;
    const probe = document.createElement("span");
    probe.setAttribute("aria-hidden", "true");
    probe.style.cssText = "position:absolute;left:0;top:0;width:calc(100% - 8px);visibility:hidden;pointer-events:none;";
    line.appendChild(probe);
    let tallest = 0;
    list.forEach(wd => {
      probe.textContent = prefixNow() + wd;
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
    const onLang = () => {
      if (token !== sdTypeToken || !root.isConnected) { window.removeEventListener("cw-langchange", onLang); return; }
      words = wordsNow();
      lastW = 0; refit();
      if (reduced) out.textContent = words[0];
    };
    window.addEventListener("cw-langchange", onLang);
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
    if (!view.classList.contains("active")) return;
    if (document.hidden) { setTimeout(tick, 500); return; }
    words = wordsNow();
    if (w >= words.length) w = 0;
    const word = words[w];
    if (n > word.length) n = word.length;
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

const ICT_THEMES = [
  { sq: "#7A56D1", ci: "#FFD36E", sp: "#C39BFF" },
  { sq: "#C39BFF", ci: "#5B3FA8", sp: "#FFD36E" },
  { sq: "#FFD36E", ci: "#7A56D1", sp: "#C39BFF" },
  { sq: "#5B3FA8", ci: "#C39BFF", sp: "#FFD36E" }
];
const ICT_HOPS = [[2, 0], [1, 1], [3, 2], [0, 3]];
let ictToken = 0;
function initIctFrame(root, viewId = "view-strand-detail") {
  const frame = root.querySelector(".fr-ict");
  if (!frame) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const view = document.getElementById(viewId);
  const token = ++ictToken;
  const alive = () => token === ictToken && frame.isConnected && view && view.classList.contains("active");

  const q = sel => frame.querySelector(sel);
  const qa = sel => Array.from(frame.querySelectorAll(sel));
  const lines = qa(".ict-line"), blocks = qa(".ict-b"), layers = qa(".ict-li"), dots = qa(".ict-sw i"), grips = qa(".ict-hs rect");
  const cv = q(".ict-cv"), dot = q(".ict-dot"), spk = q(".ict-spk"), hs = q(".ict-hs"), cur = q(".ict-cur");
  const fill = q(".ict-fill"), pct = q(".ict-pct");
  let timers = [], raf = 0;

  const setP = n => { fill.style.width = n + "%"; pct.textContent = n; };
  const layer = i => layers.forEach((el, k) => el.classList.toggle("act", k === i));
  const pick = n => dots.forEach((el, k) => el.classList.toggle("sel", k === n));
  const theme = n => { const t = ICT_THEMES[n]; frame.style.setProperty("--sq", t.sq); frame.style.setProperty("--ci", t.ci); frame.style.setProperty("--sp", t.sp); };
  const place = (x, y) => cur.setAttribute("transform", "translate(" + x + "," + y + ")");
  const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const grab = (x, y, w, h) => [[x, y], [x + w, y], [x, y + h], [x + w, y + h]].forEach((p, i) => {
    grips[i].setAttribute("x", p[0] - 3); grips[i].setAttribute("y", p[1] - 3);
  });
  function hop(dotIdx, layerIdx) {
    pick(dotIdx); theme(dotIdx); layer(layerIdx);
    blocks.filter(b => Number(b.dataset.g) === layerIdx).forEach(b => b.classList.add("on"));
  }

  function reset() {
    timers.forEach(clearTimeout); timers = []; cancelAnimationFrame(raf);
    frame.classList.add("ict-snap", "ict-live");
    frame.classList.remove("ict-fade", "ict-done", "ict-sw-on");
    lines.forEach(el => el.classList.remove("on"));
    blocks.forEach(b => b.classList.remove("on", "ol"));
    cv.classList.remove("done"); cv.setAttribute("width", 0); cv.setAttribute("height", 0);
    dot.setAttribute("r", 0);
    spk.setAttribute("transform", "translate(97,40) scale(0)");
    hs.style.opacity = 0; cur.style.opacity = 0; place(25, 70);
    pick(-1); theme(0); layer(-1); setP(0);
    void frame.offsetWidth;
    frame.classList.remove("ict-snap");
  }

  function draw() {
    const t0 = performance.now();
    cur.style.opacity = 1;
    function f(now) {
      if (!alive()) return;
      const e = now - t0;
      let t;
      if (e < 300) { t = ease(e / 300); place(25 + 15 * t, 70 - 42 * t); }
      else if (e < 1000) {
        t = ease((e - 300) / 700);
        const w = 70 * t, h = 48 * t;
        cv.setAttribute("width", w); cv.setAttribute("height", h);
        hs.style.opacity = 1; grab(40, 28, w, h); place(40 + w, 28 + h);
      }
      else if (e < 1300) { t = ease((e - 1000) / 300); place(110 - 28 * t, 76 - 20 * t); }
      else if (e < 1650) { t = Math.min((e - 1300) / 350, 1); cv.classList.add("done"); dot.setAttribute("r", 11 * ease(t)); }
      else if (e < 1900) { t = ease((e - 1650) / 250); place(82 + 15 * t, 56 - 12 * t); }
      else if (e < 2200) { t = ease((e - 1900) / 300); spk.setAttribute("transform", "translate(97,40) scale(" + t + ")"); }
      else { cur.style.opacity = 0; hs.style.opacity = 0; return; }
      raf = requestAnimationFrame(f);
    }
    raf = requestAnimationFrame(f);
  }

  function run() {
    if (!alive()) return;
    reset();
    const at = (ms, fn) => timers.push(setTimeout(() => { if (alive()) fn(); }, ms));
    const type = i => lines[i].classList.add("on");
    at(300,  () => type(0));
    at(900,  () => { type(1); setP(10); });
    at(1500, () => type(2));
    at(2100, () => type(3));
    at(2900, () => { type(4); setP(25); });
    at(3800, () => { type(5); blocks.forEach(b => b.classList.add("ol")); setP(45); });
    at(4700, () => { type(6); draw(); setP(70); });
    at(7100, () => { type(7); blocks.forEach(b => b.classList.remove("ol")); frame.classList.add("ict-sw-on"); });
    ICT_HOPS.forEach((h, n) => at(7700 + n * 550, () => hop(h[0], h[1])));
    at(9900,  () => { layer(-1); setP(100); frame.classList.add("ict-done"); });
    at(13000, () => frame.classList.add("ict-fade"));
    at(13500, run);
  }
  setTimeout(() => { if (alive()) run(); }, 600);
}

function initStrandMotion(root) {
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  const targets = root.querySelectorAll(
    ".sd-focus-text, .sd-stage .sd-h, .sd-stage .sd-video, .sd-cols .sd-h, .sd-subjects li, .sd-chip, .sd-path .sd-h, .sd-path-sub, " +
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

const STRAND_SCENES = {
};

const FR_OPEN = '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" focusable="false">';
const STRAND_FRAMES = {
  STEM: FR_OPEN + `
    <path class="k" d="M36 14V186M18 104H306"/>
    <path class="fr-wave k4 sc-s" pathLength="1" d="M36 104C66 44 96 44 126 104S186 164 216 104S276 44 306 104"/>
    <g transform="rotate(-35 262 40)"><ellipse class="k" fill="none" cx="262" cy="40" rx="27" ry="11"/>
      <g class="fr-ey"><circle class="fr-ex k sc" cx="262" cy="40" r="4.5"/></g></g>
    <ellipse class="k" fill="none" cx="262" cy="40" rx="27" ry="11" transform="rotate(35 262 40)"/>
    <circle class="k sc" cx="262" cy="40" r="6"/>
    <g class="fr-sprout">
      <path class="k" style="stroke-width:3" d="M72 184V152"/>
      <path class="k sc-l" d="M72 164C58 164 49 155 49 144C62 144 72 152 72 164Z"/>
      <path class="k sc" d="M72 154C72 139 84 129 99 129C99 144 88 154 72 154Z"/>
    </g>
    <path class="k" d="M50 186Q72 175 94 186"/>
    <g class="fr-cell">
      <path class="k sc-l" d="M236 150C236 128 256 120 274 122C294 124 304 140 302 156C300 174 282 180 264 178C246 176 236 168 236 150Z"/>
      <circle class="k sc fr-nuc" cx="265" cy="148" r="11"/>
      <circle cx="262" cy="145" r="3.2" fill="#fff"/>
      <g class="fr-mito"><ellipse class="k yl" style="stroke-width:1.8" cx="287" cy="163" rx="9" ry="5" transform="rotate(-20 287 163)"/>
        <path class="k" style="stroke-width:1.2" d="M281 164q2-4 3 0t3 0 3 0"/></g>
      <path class="k" style="stroke-width:1.7" d="M243 162q4-6 8 0t8 0"/>
      <circle cx="283" cy="137" r="1.9" style="fill:var(--ink)"/><circle cx="245" cy="143" r="1.9" style="fill:var(--ink)"/><circle cx="276" cy="171" r="1.9" style="fill:var(--ink)"/>
    </g>
  </svg>`,

  ASSH: FR_OPEN + `
    <circle class="k wh" cx="262" cy="42" r="24"/>
    <ellipse class="fr-globe sc-s" cx="262" cy="42" rx="24" ry="24" fill="none" stroke-width="1.8"/>
    <ellipse class="sc-s" cx="262" cy="42" rx="24" ry="9" fill="none" stroke-width="1.8"/>
    <path class="sc-s" d="M262 18V66" stroke-width="1.8"/>
    <g class="fr-pop" style="--d:0s"><rect class="k yl" x="14" y="12" width="90" height="40" rx="14"/><path class="k yl" d="M30 52l-6 11 18-11z"/><text x="59" y="31" text-anchor="middle">Kultura</text><text class="fr-sub" x="59" y="45" text-anchor="middle">culture</text></g>
    <g class="fr-pop" style="--d:.9s"><rect class="k wh" x="122" y="26" width="80" height="40" rx="14"/><path class="k wh" d="M148 66l-2 11 14-11z"/><text x="162" y="45" text-anchor="middle">Sining</text><text class="fr-sub" x="162" y="59" text-anchor="middle">arts</text></g>
    <g class="fr-pop" style="--d:1.8s"><rect class="k wh" x="14" y="74" width="112" height="40" rx="14"/><path class="k wh" d="M96 114l6 11 4-11z"/><text x="70" y="93" text-anchor="middle">Panitikan</text><text class="fr-sub" x="70" y="107" text-anchor="middle">literature</text></g>
    <g class="fr-pop" style="--d:2.7s"><rect class="k wh" x="222" y="86" width="64" height="30" rx="14"/><circle class="fr-dot sc" cx="242" cy="101" r="3.5"/><circle class="fr-dot sc" style="--d:.18s" cx="254" cy="101" r="3.5"/><circle class="fr-dot sc" style="--d:.36s" cx="266" cy="101" r="3.5"/></g>
    <g class="fr-pop" style="--d:3.6s"><rect class="k yl" x="14" y="130" width="136" height="40" rx="14"/><path class="k yl" d="M40 170l-6 11 18-11z"/><text x="82" y="149" text-anchor="middle">Pagpapahayag</text><text class="fr-sub" x="82" y="163" text-anchor="middle">expression</text></g>
    <path class="k wh" d="M204 176V146Q228 138 248 146V176Q228 168 204 176Z"/>
    <path class="fr-page k wh" d="M248 146Q268 138 290 146V176Q268 168 248 176Z"/>
    <path class="sc-s" d="M212 154Q228 150 240 154M212 162Q228 158 240 162" fill="none" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  BM: FR_OPEN + `
    <rect class="fr-bar k sc-l" style="--d:0s"   x="22"  y="116" width="34" height="48"/>
    <rect class="fr-bar k sc-l" style="--d:.15s" x="70"  y="98"  width="34" height="66"/>
    <rect class="fr-bar k sc-l" style="--d:.3s"  x="118" y="124" width="34" height="40"/>
    <rect class="fr-bar k sc-l" style="--d:.45s" x="166" y="130" width="34" height="34"/>
    <rect class="fr-bar k sc"   style="--d:.6s"  x="214" y="148" width="34" height="16"/>
    <path class="fr-line" pathLength="1" d="M30 100L88 70L136 82L192 44L252 20"/>
    <g class="fr-coin"><circle class="k yl" cx="284" cy="66" r="22"/><text x="284" y="74" text-anchor="middle" class="fr-peso">&#8369;</text></g>
    <rect class="sc" x="0" y="176" width="320" height="24"/>
    <g class="fr-tick">
      <text class="fr-tk" x="0" y="193" textLength="170" lengthAdjust="spacing">+8%  &#8369;  +12%  &#8369;  -3%  &#8369;</text>
      <text class="fr-tk" x="190" y="193" textLength="170" lengthAdjust="spacing">+8%  &#8369;  +12%  &#8369;  -3%  &#8369;</text>
      <text class="fr-tk" x="380" y="193" textLength="170" lengthAdjust="spacing">+8%  &#8369;  +12%  &#8369;  -3%  &#8369;</text>
    </g>
  </svg>`,

  HT: FR_OPEN + `
    <g class="fr-steamg">
      <path class="fr-steam" d="M222 90c-7-9 7-16 0-26"/>
      <path class="fr-steam" style="--d:.7s" d="M236 90c-7-9 7-16 0-26"/>
      <path class="fr-steam" style="--d:1.4s" d="M250 90c-7-9 7-16 0-26"/>
    </g>
    <circle class="fr-rip sc-s" cx="110" cy="92" r="10"/>
    <circle class="fr-rip sc-s" style="--d:.25s" cx="110" cy="92" r="10"/>
    <g class="fr-bellg">
      <g class="fr-plunger"><rect class="k wh" x="106" y="94" width="8" height="10"/><circle class="k yl" cx="110" cy="90" r="7"/></g>
      <path class="k yl" d="M62 150a48 48 0 0 1 96 0Z"/>
      <rect class="k wh" x="54" y="150" width="112" height="10" rx="4"/>
    </g>
    <text class="fr-ding" x="140" y="64">ding!</text>
    <g class="fr-dish fr-dish-a">
      <path class="k" style="fill:#7CC36A" d="M202 150C198 138 208 130 218 133C222 122 238 120 244 130C256 126 266 138 262 150Z"/>
      <circle class="k" style="fill:#E4572E;stroke-width:1.8" cx="222" cy="141" r="6"/>
      <circle class="k" style="fill:#FFD66B;stroke-width:1.8" cx="246" cy="140" r="5"/>
      <path class="k" style="stroke:#8E4BB5;stroke-width:2.4" d="M229 135q6-6 12 0"/>
      <path class="k" style="fill:#5FAE4E;stroke-width:1.8" d="M232 128q-3-11 9-13q3 11-9 13z"/>
    </g>
    <g class="fr-dish fr-dish-b">
      <rect class="k" style="fill:#FFE3C2" x="206" y="135" width="52" height="15" rx="3"/>
      <rect class="k" style="fill:#F7A8C8" x="214" y="121" width="36" height="14" rx="3"/>
      <path class="k" style="fill:#fff;stroke-width:1.8" d="M212 127H252V129Q250 134 247 129Q244 135 241 129Q238 135 235 129Q232 135 229 129Q226 135 223 129Q220 134 217 129Q214 133 212 129Z"/>
      <path class="k" style="stroke-width:1.6" d="M206 143Q214 139 222 143T238 143T254 143"/>
      <rect class="k" style="fill:#7CC3E8;stroke-width:1.6" x="231" y="109" width="4" height="12" rx="1"/>
      <path class="k" style="fill:#FFD66B;stroke-width:1.4" d="M233 100Q238 106 233 108Q228 106 233 100Z"/>
      <circle cx="221" cy="126" r="1.6" style="fill:#E4572E"/><circle cx="243" cy="125" r="1.6" style="fill:#3457D5"/><circle cx="249" cy="143" r="1.6" style="fill:#E4572E"/><circle cx="214" cy="145" r="1.6" style="fill:#3457D5"/>
    </g>
    <g class="fr-sparkg">
      <g transform="translate(194 130)"><path class="fr-sp" style="--d:0s" d="M0-7L2-2 7 0 2 2 0 7-2 2-7 0-2-2Z"/></g>
      <g transform="translate(272 128)"><path class="fr-sp" style="--d:.5s" d="M0-7L2-2 7 0 2 2 0 7-2 2-7 0-2-2Z"/></g>
      <g transform="translate(263 108)"><path class="fr-sp" style="--d:1s" d="M0-5L1.4-1.4 5 0 1.4 1.4 0 5-1.4 1.4-5 0-1.4-1.4Z"/></g>
    </g>
    <g class="fr-cloche">
      <path class="k wh" d="M188 150a44 44 0 0 1 88 0Z"/>
      <circle class="k yl" cx="232" cy="102" r="5"/>
    </g>
    <rect class="k wh" x="180" y="150" width="104" height="9" rx="4"/>
    <rect x="0" y="160" width="320" height="40" style="fill:#C98B52"/>
    <path d="M0 176H320M0 190H320" style="stroke:#A66B3A;stroke-width:2;fill:none"/>
    <path d="M70 160V176M210 176V190M120 190V200" style="stroke:#A66B3A;stroke-width:2;fill:none"/>
    <path class="k" d="M0 160H320"/>
  </svg>`,

  ICT: `<div class="fr-ict">
    <div class="ict-main">
      <div class="ict-pnl ict-term">
        <div class="ict-bar"><i style="background:#6B44A8"></i><i style="background:#9A73E6"></i><i style="background:#D9CCFF"></i><span>~/ict</span></div>
        <div class="ict-line" style="--n:17">&gt; javac Main.java</div>
        <div class="ict-line" style="--n:12">compiling...</div>
        <div class="ict-line" style="--n:11">&gt; java Main</div>
        <div class="ict-line ict-out" style="--n:13">Hello, PCSHS!</div>
        <div class="ict-line" style="--n:9">&gt; java <span class="ict-ok">ok</span></div>
        <div class="ict-line" style="--n:16">&gt; web/app dev <span class="ict-ok">ok</span></div>
        <div class="ict-line" style="--n:14">&gt; animation <span class="ict-ok">ok</span></div>
        <div class="ict-line" style="--n:17">&gt; ui/ux design <span class="ict-ok">ok</span></div>
      </div>
      <div class="ict-right">
        <div class="ict-row2">
          <div class="ict-pnl"><span class="ict-lb">design</span>
            <svg viewBox="18 12 108 86" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path d="M20 30H140M20 60H140M20 85H140" stroke="#3A2A63" stroke-width="2" stroke-linecap="round" stroke-dasharray="0 30" fill="none"/>
              <rect class="ict-cv done" x="40" y="28" width="70" height="48" rx="8" stroke-width="1.5"/>
              <circle class="ict-dot" cx="68" cy="56" r="11"/>
              <path class="ict-spk" d="M0-7L2-2L7 0L2 2L0 7L-2 2L-7 0L-2-2Z" transform="translate(97,40) scale(1)"/>
              <g class="ict-hs"><rect width="6" height="6"/><rect width="6" height="6"/><rect width="6" height="6"/><rect width="6" height="6"/></g>
              <g class="ict-cur" transform="translate(25,70)"><path d="M0 0L0 13L4 10L7 16L9 15L6 9L11 9Z" fill="#fff" stroke="#1B1230" stroke-width="1"/><rect x="10" y="14" width="24" height="10" rx="2.5" fill="#C39BFF"/><text x="13.5" y="21.6">you</text></g>
            </svg>
          </div>
        </div>
        <div class="ict-row3">
          <div class="ict-pnl ict-lay"><span class="ict-lb">layers</span>
            <div class="ict-li">Header</div><div class="ict-li">Image</div><div class="ict-li">Text</div><div class="ict-li">Button</div>
          </div>
          <div class="ict-pnl ict-wf"><span class="ict-lb">index.html</span>
            <div class="ict-b ict-hdr" data-g="0"></div>
            <div class="ict-b ict-img" data-g="1"><i></i></div>
            <div class="ict-b ict-t" data-g="2"></div>
            <div class="ict-b ict-t" data-g="2"></div>
            <div class="ict-b ict-t ict-t-short" data-g="2"></div>
            <div class="ict-b ict-btn" data-g="3"></div>
            <div class="ict-sw"><i class="sel" style="background:#7A56D1"></i><i style="background:#C39BFF"></i><i style="background:#FFD36E"></i><i style="background:#5B3FA8"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ict-prog">
      <span class="ict-lab"><span class="ict-lab-run">compiling / rendering… <span class="ict-pct">100</span>%</span><span class="ict-lab-done">build complete</span></span>
      <div class="ict-track"><div class="ict-fill"></div></div>
    </div>
  </div>`,

  IA: FR_OPEN + `
    <g class="fr-gridl" stroke-width="1"><path d="M0 40H320M0 80H320M0 120H320M0 160H320M53 0V200M107 0V200M160 0V200M213 0V200M267 0V200"/></g>

    <rect class="k fr-panel" x="22" y="22" width="76" height="58" rx="7"/>
    <rect class="k fr-slot" x="32" y="32" width="14" height="38" rx="3"/><rect class="k fr-slot" x="55" y="32" width="14" height="38" rx="3"/><rect class="k fr-slot" x="78" y="32" width="14" height="38" rx="3"/>
    <rect class="k wh fr-tog" style="--d:0s" x="32" y="34" width="14" height="16" rx="3"/>
    <rect class="k wh fr-tog" style="--d:-1.4s" x="55" y="34" width="14" height="16" rx="3"/>
    <rect class="k wh fr-tog" style="--d:-2.8s" x="78" y="34" width="14" height="16" rx="3"/>

    <circle class="fr-glow" cx="254" cy="68" r="46"/>
    <g class="fr-rays" fill="none" stroke="#FFD66B" stroke-width="3" stroke-linecap="round"><path d="M254 28V16M222 38L214 30M286 38L294 30M212 68H200M296 68H308"/></g>

    <rect class="k fr-socket" x="6" y="116" width="14" height="48" rx="4"/>
    <path class="k" style="stroke-width:5" d="M26 132H14M26 148H14"/>
    <rect class="k wh" x="26" y="122" width="36" height="34" rx="8"/>

    <path class="k" style="stroke-width:4" d="M62 140H110M152 140H254V112"/>
    <path class="fr-pulse" pathLength="1" d="M62 140H254V112"/>

    <g class="fr-lever"><path class="k" style="stroke-width:5" d="M110 140H150"/><circle class="k yl" cx="134" cy="140" r="6"/></g>
    <circle class="k wh" cx="110" cy="140" r="5"/><circle class="k wh" cx="152" cy="140" r="5"/>
    <path class="fr-sparkb" fill="none" stroke="#FFD66B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M150 130l4-9 3 6 5-9M158 142l9-2-4 6 8-1"/>

    <circle class="k fr-bulb" cx="254" cy="68" r="26"/>
    <path class="fr-fil" fill="none" d="M247 96V86L251 78L255 86L259 78L263 86V96"/>
    <rect class="k fr-base" x="243" y="94" width="22" height="18" rx="3"/>
    <path class="k" style="stroke-width:1.8" d="M243 100H265M243 106H265"/>
  </svg>`
};

function strandSceneHTML(code) {
  const scene = STRAND_SCENES[code];
  if (!scene || !scene.bubbles) return "";
  const bubbles = scene.bubbles.map((w, i) => `<span class="sd-bub sd-bub-${i + 1}"><span>${w}</span></span>`).join("");
  return `<div class="sd-scene sd-scene-bubbles" aria-hidden="true">${bubbles}</div>`;
}

function strandPageHTML(code, withClosing = true) {
  const info = STRANDS[code];
  const li = arr => arr.map(s => `<li>${s}</li>`).join("");
  const subjLi = info => info.subjects.map(s => {
    const note = info.subjectNotes && info.subjectNotes[s];
    return `<li><span class="sd-subj-text"><span class="sd-subj-name">${s}</span>${note ? `<span class="sd-subj-desc">${note}</span>` : ""}</span></li>`;
  }).join("");
  const others = STRAND_ORDER.filter(s => s !== code);
  const nameTag = withClosing ? "h1" : "h2";

  return `
    <div class="sd" data-strand="${code}" style="--sc:${info.color}">

      <div class="sd-hero">
        <span class="sd-ring" aria-hidden="true"><span class="sd-ring-rings"></span><span class="sd-ring-spin"></span><span class="sd-ring-star">&#10022;</span></span>
        ${strandSceneHTML(code)}
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
          <div class="sd-frame" aria-hidden="true">${STRAND_FRAMES[code]}</div>
        </div>
      </div>

      <div class="sd-stage">
        <div class="wrap sd-stage-inner">
          <div class="sd-focus-block">
            <div class="sd-focus-rule" aria-hidden="true"></div>
            <p class="sd-focus-label">What it focuses on</p>
            <p class="sd-focus-text">${info.highlight ? info.focus.replace(info.highlight, `<span class="sd-focus-hl">${info.highlight}</span>`) : info.focus}</p>
          </div>
          <h2 class="sd-h sd-stage-h">Watch the recap</h2>
          <div class="sd-stage-grid">
            ${renderStrandVideo(info)}
          </div>
        </div>
      </div>

      <div class="wrap sd-cols">
        <div>
          <h2 class="sd-h">Possible subjects you may take</h2>
          <p class="sd-note">These are typical for the strand. The subjects PCSHS actually offers can vary by school year.</p>
          <ul class="sd-subjects">${subjLi(info)}</ul>
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
  initIctFrame(root);
  initStrandMotion(root);
  root.querySelector("#sd-start").addEventListener("click", startAssessment);
  applyGradeLock();
  root.querySelector("#sd-back").addEventListener("click", () => showView("view-home"));
  root.querySelectorAll(".sd-other").forEach(btn => {
    btn.addEventListener("click", () => {
      renderStrandDetail(btn.dataset.strand);
      recordHistory("view-strand-detail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

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
  const totalSteps = MODULE_ORDER.length + 1;
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
      <p class="hub-tab-note" id="hub-tab-note"><span aria-hidden="true">&#9888;</span> Keep this tab open. Your answers are only kept while it stays open, and closing it means starting over.</p>
      <div class="strand-grid" id="hub-grid"></div>
    </div>
    <div class="wrap results-footer">
      <button class="btn btn-primary" id="hub-results-btn" disabled aria-describedby="hub-results-note"></button>
      <p class="hub-results-note" id="hub-results-note"></p>
    </div>
  `;

  document.getElementById("hub-progress").style.width = (done / totalSteps * 100) + "%";

  const grid = document.getElementById("hub-grid");
  MODULE_ORDER.forEach(code => {
    const info = STRANDS[code];
    const mod = MODULES[code];
    const finished = isDone(code);
    const inProgress = !finished && validProgress(code, state.progress[code]) && answeredCount(code) > 0;
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

  const pledgeBox = document.getElementById("hub-pledge");
  pledgeBox.addEventListener("change", () => {
    if (!pledgeBox.checked) { pledgeBox.checked = true; return; }
    pledged = true;
    savePledge();
    applyPledge();
  });
  applyPledge();

  const resultsBtn = document.getElementById("hub-results-btn");
  resultsBtn.disabled = !allDone();
  resultsBtn.addEventListener("click", startResultsLoading);
  const svgOpen = '<svg class="results-lock" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  const lockIcon = allDone()
    ? svgOpen + '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></svg>'
    : svgOpen + '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
  resultsBtn.innerHTML = lockIcon + "<span>See Overall Results</span>";

  const note = document.getElementById("hub-results-note");
  const left = [...MODULE_ORDER, "INTEREST"].filter(c => !isDone(c));
  if (left.length === 0) note.textContent = "All seven parts are done. Your results are ready.";
  else if (left.length === totalSteps) note.textContent = `Finish all ${totalSteps} parts to unlock your results.`;
  else note.textContent = `${left.length} ${left.length === 1 ? "part" : "parts"} left: ${left.map(c => STEP_LABELS[c]).join(", ")}.`;
}

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

const stepperEl = document.getElementById("stepper");
const qProgressFill = document.getElementById("q-progress-fill");
const qProgressLabel = document.getElementById("q-progress-label");
const qCard = document.getElementById("question-card");
const btnBack = document.getElementById("btn-back");
const btnNext = document.getElementById("btn-next");

const assessView = document.getElementById("view-assessment");

function startModule(code) {
  ist.active = false;
  if (isDone(code) || !pledged) return;
  const saved = state.progress[code];
  if (validProgress(code, saved) && saved.draft.some(a => a !== null)) {
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

function renderIntro() {
  const code = state.activeModule;
  const mod = MODULES[code];
  const total = mod.questions.length;
  state.phase = "intro";
  assessView.classList.add("intro-mode");

  stepperEl.innerHTML = stepperHTML(code);
  qProgressFill.style.width = "0%";
  qProgressLabel.textContent = `${code}: Before you begin`;

  qCard.classList.remove("card-in");
  void qCard.offsetWidth;
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
    if (history.state && history.state.view === "view-assessment") history.back();
    else openHub();
  });
  saveSession();
}

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
  qProgressLabel.textContent = `${code}: Question ${state.current + 1} of ${total}`;

  qCard.classList.remove("card-in");
  void qCard.offsetWidth;

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

  document.getElementById("q-exit").addEventListener("click", () => confirmLeave(exitToHub));

  qCard.querySelectorAll(".option").forEach(label => {
    label.addEventListener("click", () => {
      qCard.querySelectorAll(".option").forEach(l => l.classList.remove("option-selected"));
      label.classList.add("option-selected", "option-pulse");
      setTimeout(() => label.classList.remove("option-pulse"), 350);
      state.draft[state.current] = Number(label.dataset.idx);
      saveSession();
      btnNext.disabled = false;
    });
  });

  btnBack.disabled = state.current === 0;
  btnNext.disabled = chosen === null;
  btnNext.textContent = state.current === total - 1 ? "Finish test" : "Next";
  saveSession();
}

function exitToHub() {
  if (ist.active) { saveInterest(); ist.active = false; }
  saveProgress();
  state.activeModule = null;
  state.phase = null;
  state.current = 0;
  state.draft = [];
  state.optionOrder = [];
  if (history.state && history.state.view === "view-assessment") {
    history.back();
    setTimeout(() => { if (currentViewId === "view-assessment") openHub("replace"); }, 250);
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

function finishModule() {
  const code = state.activeModule;
  const bank = MODULES[code].questions;
  const correct = bank.reduce((n, q, i) => n + (state.draft[i] === q.correctAnswerIndex ? 1 : 0), 0);

  state.scores[code] = { correct, total: bank.length };
  saveState();
  delete state.progress[code];
  persistProgress();

  state.activeModule = null;
  state.phase = null;
  state.draft = [];
  state.optionOrder = [];
  openHub("replace");
  playUnlockIfFirst();
}

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
  } catch (e) { }
}

function interestAnswered(p) {
  return p.a.filter(v => v !== null).length + p.b.filter(x => x !== null).length;
}

function saveInterest() {
  if (!ist.active || !["A", "transition", "B"].includes(ist.phase)) return;
  const p = { phase: ist.phase, pos: ist.pos, order: ist.order, a: ist.a, bOrder: ist.bOrder, b: ist.b };
  state.iprog = JSON.parse(JSON.stringify(p));
  try { sessionStorage.setItem(INTEREST_PROG_KEY, JSON.stringify(p)); } catch (e) { }
}

function resumeInterestFromSaved() {
  if (!state.iprog || !validInterestProg(state.iprog)) return false;
  const p = JSON.parse(JSON.stringify(state.iprog));
  Object.assign(ist, { active: true, phase: p.phase, pos: p.pos, order: p.order, a: p.a, bOrder: p.bOrder, b: p.b });
  state.activeModule = null;
  return true;
}

function startInterest() {
  if (state.interest || !pledged) return;
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
  void qCard.offsetWidth;
}

function renderInterestIntro() {
  ist.phase = "intro";
  state.phase = null;
  assessView.classList.add("intro-mode");
  interestCardReset();
  qProgressFill.style.width = "0%";
  qProgressLabel.textContent = "Interests: Before you begin";
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
  qProgressLabel.textContent = "Interests, Part A complete";
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
    ? `Interests, Part A: ${pos + 1} of ${nA}`
    : `Interests, Part B: ${pos - nA + 1} of ${nB}`;

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
  document.getElementById("q-exit").addEventListener("click", () => confirmLeave(exitToHub));

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
  if (ist.pos === nA - 1) { ist.pos = nA; renderInterestTransition(); return; }
  if (ist.pos < total - 1) { ist.pos++; renderInterestItem(); }
  else finishInterest();
}

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
  } catch (e) { }
  ist.active = false; ist.phase = null;
  openHub("replace");
  playUnlockIfFirst();
}

// note to self : part a and part b both turn into 0-100 per strand, then get mixed with this weight. 0.5 = 50/50
const INTEREST_WEIGHT_A = 0.5;
// da resultz part 1 : score every strand from the interests answers, then rank them yisyisyis
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

const UNLOCK_KEY = "strandwise.unlock.v1";
const UNLOCK_TITLE = "You did it!";
const UNLOCK_TEXT = "All seven parts are complete. Your skills and interests are ready to compare.";
const UNLOCK_HINT = "Tap anywhere to continue";
const UNLOCK_AT = { pop: 300, shake: 700, open: 1150, title: 1250, text: 1550, hint: 2000, end: 3400 };
const UNLOCK_FADE_MS = 350;
const unlock = { active: false, timers: [], el: null };

function unlockSeen() { try { return sessionStorage.getItem(UNLOCK_KEY) === "1"; } catch (e) { return false; } }
function markUnlockSeen() { try { sessionStorage.setItem(UNLOCK_KEY, "1"); } catch (e) { } }

function setResultsLockIcon(open) {
  const path = document.querySelector("#hub-results-btn .results-lock path");
  if (path) path.setAttribute("d", open ? "M8 11V7a4 4 0 0 1 7.5-2" : "M8 11V7a4 4 0 0 1 8 0v4");
}

function playUnlockIfFirst() {
  if (unlock.active || !allDone() || unlockSeen()) return;
  markUnlockSeen();
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const btn = document.getElementById("hub-results-btn");
  if (reduce || !btn) return;

  btn.classList.add("unlock-hold");
  setResultsLockIcon(false);

  const el = document.createElement("div");
  el.className = "unlock-overlay";
  el.tabIndex = -1;
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-label", UNLOCK_TITLE);
  el.innerHTML = `
    <div class="uc-lock" aria-hidden="true">
      <svg viewBox="0 0 200 240" focusable="false">
        <defs><clipPath id="uc-clip"><rect x="30" y="100" width="140" height="110" rx="16"/></clipPath></defs>
        <circle class="uc-ring" cx="100" cy="155" r="40" fill="none" stroke="#FFE9A8" stroke-width="4"/>
        <g class="uc-shackle">
          <path d="M60 102 V72 a40 40 0 0 1 80 0 V102" fill="none" stroke="#22262B" stroke-width="22"/>
          <path d="M60 102 V72 a40 40 0 0 1 80 0 V102" fill="none" stroke="#C9CDD4" stroke-width="12"/>
        </g>
        <rect x="30" y="100" width="140" height="110" rx="16" fill="#D98E2B" stroke="#22262B" stroke-width="5"/>
        <g clip-path="url(#uc-clip)"><polygon class="uc-glint" points="14,90 40,90 20,220 -6,220" fill="#FFFFFF" fill-opacity=".6"/></g>
        <circle cx="100" cy="155" r="26" fill="#FFE9A8" stroke="#22262B" stroke-width="3"/>
        <polygon points="100,138 106,155 94,155" fill="#B5711A"/>
        <polygon points="100,172 106,155 94,155" fill="#1D2B45"/>
        <circle cx="100" cy="155" r="3.5" fill="#FFFFFF" stroke="#22262B" stroke-width="1.5"/>
        <polygon class="uc-sp" points="34,56 40,64 34,72 28,64" fill="#FFE9A8" style="--dx:-30px;--dy:-30px"/>
        <polygon class="uc-sp" points="169,50 175,58 169,66 163,58" fill="#FFE9A8" style="--dx:30px;--dy:-34px"/>
        <polygon class="uc-sp" points="22,134 28,141 22,148 16,141" fill="#D98E2B" style="--dx:-34px;--dy:0px"/>
        <polygon class="uc-sp" points="178,134 184,141 178,148 172,141" fill="#D98E2B" style="--dx:34px;--dy:4px"/>
        <polygon class="uc-sp" points="100,14 106,21 100,28 94,21" fill="#FFFFFF" style="--dx:0px;--dy:-30px"/>
      </svg>
    </div>
    <p class="uc-title uc-fade" aria-hidden="true">${UNLOCK_TITLE}</p>
    <p class="uc-text uc-fade" aria-hidden="true">${UNLOCK_TEXT}</p>
    <p class="uc-hint uc-fade" aria-hidden="true">${UNLOCK_HINT}</p>
    <p class="uc-sr" role="status" aria-live="polite"></p>`;
  document.body.appendChild(el);
  document.body.classList.add("cw-modal-open");
  unlock.active = true;
  unlock.el = el;

  const lock = el.querySelector(".uc-lock");
  const [title, text, hint] = ["uc-title", "uc-text", "uc-hint"].map(c => el.querySelector("." + c));
  const at = (ms, fn) => unlock.timers.push(setTimeout(fn, ms));

  void el.offsetWidth;
  el.classList.add("show");
  el.focus({ preventScroll: true });

  at(UNLOCK_AT.pop,   () => lock.classList.add("pop"));
  at(UNLOCK_AT.shake, () => lock.classList.add("shake"));
  at(UNLOCK_AT.open,  () => { lock.classList.add("open"); el.querySelector(".uc-sr").textContent = UNLOCK_TITLE + " " + UNLOCK_TEXT; });
  at(UNLOCK_AT.title, () => title.classList.add("in"));
  at(UNLOCK_AT.text,  () => text.classList.add("in"));
  at(UNLOCK_AT.hint,  () => hint.classList.add("in"));
  at(UNLOCK_AT.end,   endUnlock);

  el.addEventListener("click", endUnlock);
  el.addEventListener("keydown", e => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") { e.preventDefault(); endUnlock(); }
  });
}

function endUnlock() {
  if (!unlock.active) return;
  unlock.timers.forEach(clearTimeout);
  unlock.timers = [];
  const el = unlock.el;
  unlock.active = false;
  unlock.el = null;
  el.classList.remove("show");
  setTimeout(() => {
    el.remove();
    document.body.classList.remove("cw-modal-open");
    const btn = document.getElementById("hub-results-btn");
    if (!btn) return;
    btn.classList.remove("unlock-hold");
    setResultsLockIcon(true);
    if (currentViewId === "view-hub") {
      btn.classList.add("unlock-pulse");
      setTimeout(() => btn.classList.remove("unlock-pulse"), 2000);
      btn.focus({ preventScroll: true });
    }
  }, UNLOCK_FADE_MS);
}

// skill scores into percentages, sorted high to low, then the interest score gets stuck on each one. skill and interest stay separate tho
function computeResults() {
  state.results = STRAND_ORDER.map(strand => {
    const { correct, total } = state.scores[strand];
    return { strand, correct, total, percentage: Math.round(correct / total * 100) };
  }).sort((a, b) => b.percentage - a.percentage);
  const isc = interestScores();
  state.results.forEach(r => { r.ipct = isc[r.strand].pct; r.irank = isc[r.strand].rank; });
}

// results stay locked until all seven parts are done
function showResults() {
  if (!allDone()) return;
  computeResults();
  renderResults();
  showView("view-results");
}

// timings for the results loading screen. play with these if it feels too slow lol
const LOADER_KEY = "strandwise.loader.v1";
const LOADER_BAR_MS = 3800;
const LOADER_HOLD_MS = 700;
const LOADER_TITLE = "Working on your results…";
const LOADER_TILE_AT = [14, 28, 42, 56, 70, 80];
const LOADER_CHECK_AT = [30, 62];
const LOADER_DONE_PHRASE = "Got it! Opening your results…";
const LOADER_STOPS = [[0, 0], [0.25, 30], [0.55, 62], [0.75, 80], [0.88, 82], [1, 100]];
const loader = { active: false, raf: 0, timer: 0, swap: 0 };

function loaderSeen() { try { return sessionStorage.getItem(LOADER_KEY) === "1"; } catch (e) { return false; } }
function markLoaderSeen() { try { sessionStorage.setItem(LOADER_KEY, "1"); } catch (e) { } }

function loaderPct(p) {
  for (let i = 1; i < LOADER_STOPS.length; i++) {
    const a = LOADER_STOPS[i - 1], b = LOADER_STOPS[i];
    if (p <= b[0]) return a[1] + (b[1] - a[1]) * ((p - a[0]) / (b[0] - a[0]));
  }
  return 100;
}

function stopLoader() {
  cancelAnimationFrame(loader.raf);
  clearTimeout(loader.timer);
  clearTimeout(loader.swap);
  loader.active = false;
}

function buildLoaderTiles() {
  const box = document.getElementById("load-tiles");
  box.innerHTML = STRAND_ORDER.map(code => `
    <span class="load-tile" style="--sc:${STRANDS[code].color}">
      <span class="load-tile-box">${STRAND_ICONS[code]}</span>
      <span class="load-tile-name">${STRANDS[code].name}</span>
    </span>`).join("");
  return Array.from(box.querySelectorAll(".load-tile"));
}

function loaderBurst(host) {
  const n = 10;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const s = document.createElement("span");
    s.className = "load-spark" + (i % 2 ? " alt" : "");
    s.style.setProperty("--dx", Math.round(Math.cos(a) * 66) + "px");
    s.style.setProperty("--dy", Math.round(Math.sin(a) * 66) + "px");
    host.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
}

function startResultsLoading() {
  if (loader.active || !allDone()) return;
  if (loaderSeen()) { showResults(); return; }

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const barMs = reduce ? 1200 : LOADER_BAR_MS;
  const holdMs = reduce ? 400 : LOADER_HOLD_MS;

  const card = document.querySelector("#view-loading .load-card");
  const needle = document.getElementById("load-needle");
  const phrase = document.getElementById("load-phrase");
  const fill = document.getElementById("load-fill");
  const pct = document.getElementById("load-pct");
  const btn = document.getElementById("hub-results-btn");
  const compass = document.querySelector("#view-loading .load-compass");
  const tiles = buildLoaderTiles();
  const checks = Array.from(document.querySelectorAll("#load-checks li"));
  checks.forEach(li => li.classList.remove("on"));
  fill.classList.remove("is-done");
  compass.classList.remove("is-popping");

  function setPhrase(text) {
    clearTimeout(loader.swap);
    phrase.classList.add("is-swapping");
    loader.swap = setTimeout(() => { phrase.textContent = text; phrase.classList.remove("is-swapping"); }, 200);
  }

  function finish() {
    needle.classList.remove("is-searching");
    needle.classList.add("is-done");
    card.classList.remove("is-searching");
    card.classList.add("is-finished");
    fill.classList.add("is-done");
    checks[2].classList.add("on");
    tiles.forEach(t => t.classList.add("on"));
    if (!reduce) { compass.classList.add("is-popping"); loaderBurst(compass); }
    setPhrase(LOADER_DONE_PHRASE);
    loader.timer = setTimeout(() => {
      stopLoader();
      markLoaderSeen();
      showResults();
    }, holdMs);
  }

  fill.style.width = "0%";
  pct.textContent = "0%";
  phrase.textContent = LOADER_TITLE;
  card.classList.remove("is-finished");
  phrase.classList.remove("is-swapping");
  needle.classList.remove("is-done");
  needle.classList.add("is-searching");
  card.classList.add("is-searching");
  if (btn) btn.disabled = true;

  loader.active = true;
  showView("view-loading", "none");

  const t0 = performance.now();
  const tick = now => {
    if (!loader.active) return;
    const p = Math.min((now - t0) / barMs, 1);
    const v = loaderPct(p);
    fill.style.width = v + "%";
    pct.textContent = Math.round(v) + "%";
    tiles.forEach((t, i) => { if (v >= LOADER_TILE_AT[i]) t.classList.add("on"); });
    LOADER_CHECK_AT.forEach((at, i) => { if (v >= at) checks[i].classList.add("on"); });
    if (p < 1) loader.raf = requestAnimationFrame(tick);
    else finish();
  };
  loader.raf = requestAnimationFrame(tick);
}

const MAX_RECOMMENDED = 2;
const LOW_SIGNAL_PCT = 35;
function pickRecommended(results) {
  const tiedAll = results.filter(r => r.percentage === results[0].percentage);
  if (tiedAll.length <= MAX_RECOMMENDED) return { rec: tiedAll, tiedAll, byInterest: false, arbitrary: false };
  const sorted = tiedAll.slice().sort((a, b) => b.ipct - a.ipct);
  const arbitrary = sorted[MAX_RECOMMENDED - 1].ipct === sorted[MAX_RECOMMENDED].ipct;
  return { rec: sorted.slice(0, MAX_RECOMMENDED), tiedAll, byInterest: !arbitrary, arbitrary };
}

function buildBreakdown(results, pick) {
  const fmt = r => `<strong>${STRANDS[r.strand].name}</strong> (${r.correct}/${r.total})`;
  const AND = R(" and ", " at ");
  const { rec, tiedAll } = pick;
  const first = results[0], low = results[results.length - 1];
  const shown = rec.map(r => `<strong>${STRANDS[r.strand].name}</strong>`).join(AND);

  const tieNote = pick.arbitrary
    ? R(`${tiedAll.length} strands tied for your highest score (${tiedAll.map(fmt).join(", ")}), and your interest results could not separate them either, so two are shown here. Treat all ${tiedAll.length} as worth a look. `,
        `${tiedAll.length} strand ang magkapantay sa iyong pinakamataas na score (${tiedAll.map(fmt).join(", ")}), at hindi rin sila napaghiwalay ng iyong resulta sa interes, kaya dalawa ang ipinapakita rito. Sulit tingnan ang lahat ng ${tiedAll.length}. `)
    : pick.byInterest
      ? R(`${tiedAll.length} strands tied for your highest score (${tiedAll.map(fmt).join(", ")}). To keep your result clear, your interest results broke the tie, so ${shown} are shown. `,
          `${tiedAll.length} strand ang magkapantay sa iyong pinakamataas na score (${tiedAll.map(fmt).join(", ")}). Para manatiling malinaw ang resulta, ang iyong resulta sa interes ang ginamit na pantukoy, kaya ipinapakita ang ${shown}. `)
      : "";

  if (first.percentage === low.percentage) {
    return R(`You scored the same on all six tests (${first.percentage}%), so no single strand stands out on aptitude alone. ${pick.byInterest ? `The two strands shown are the ones you showed the most interest in. ` : pick.arbitrary ? `The two strands shown are simply the first two in the usual order. ` : ``}Use your interest results and the strand descriptions below to decide.`,
             `Pareho ang score mo sa lahat ng anim na test (${first.percentage}%), kaya walang iisang strand na namumukod-tangi batay sa kakayahan lamang. ${pick.byInterest ? `Ang dalawang strand na ipinapakita ay ang pinakagusto mo. ` : pick.arbitrary ? `Ang dalawang strand na ipinapakita ay ang unang dalawa sa karaniwang pagkakasunod-sunod. ` : ``}Gamitin ang iyong resulta sa interes at ang mga paglalarawan ng strand sa ibaba para magdesisyon.`);
  }

  let text = "";
  if (tieNote) {
    text += tieNote;
  } else if (tiedAll.length > 1) {
    text += R(`${tiedAll.map(fmt).join(" and ")} came out level at the top, so treat them as equally strong fits. `,
              `Magkapantay sa tuktok ang ${tiedAll.map(fmt).join(" at ")}, kaya ituring silang parehong malakas na tugma. `);
  }
  const top2 = rec.length > 1 ? rec : [results[0], results[1]];
  text += R(`Your highest scores were in ${fmt(top2[0])} and ${fmt(top2[1])}, which point to ${apt(top2[0].strand, "strength")} and ${apt(top2[1].strand, "strength")}.`,
            `Pinakamataas ang mga score mo sa ${fmt(top2[0])} at ${fmt(top2[1])}, na nagpapakita ng ${apt(top2[0].strand, "strength")} at ${apt(top2[1].strand, "strength")}.`);

  text += `<br><br>`;
  if (low.percentage >= 70) {
    text += R(`Even your lowest score, ${fmt(low)}, is solid, so you have a well-rounded profile.`,
              `Kahit ang pinakamababa mong score, ${fmt(low)}, ay maayos, kaya balanse ang iyong profile.`);
  } else {
    text += R(`Your lowest was ${fmt(low)}, so ${apt(low.strand, "practice")} may need more practice before it feels comfortable.`,
              `Ang pinakamababa mo ay ${fmt(low)}, kaya maaaring kailanganin pa ng praktis sa ${apt(low.strand, "practice")} bago ka maging komportable.`);
  }
  return text;
}

const STRAND_DEMANDS = {
  STEM: "math- and science-heavy, so strengthening that would be the main task",
  ASSH: "reading- and writing-heavy, so building reading and argument skills would be the main task",
  BM:   "number-heavy, so strengthening percentages and money math would be the main task",
  ICT:  "built on step-by-step logic, so practicing logic and tracing code would be the main task",
  IA:   "built on mechanical and circuit reasoning, so practicing that and reading diagrams would be the main task",
  HT:   "about judgment under pressure, so practicing real service situations would be the main task"
};
const FIL_DEMANDS = {
  STEM: "puno ng math at science, kaya ang pagpapalakas nito ang pangunahing gagawin",
  ASSH: "maraming pagbasa at pagsulat, kaya ang pagpapalakas ng kasanayan sa pagbasa at pangangatwiran ang pangunahing gagawin",
  BM:   "maraming numero, kaya ang pagpapalakas ng percentage at math sa pera ang pangunahing gagawin",
  ICT:  "nakabatay sa hakbang-hakbang na lohika, kaya ang pagsasanay sa lohika at pagsubaybay ng code ang pangunahing gagawin",
  IA:   "nakabatay sa pangangatwirang mekanikal at circuit, kaya ang pagsasanay nito at pagbasa ng diagram ang pangunahing gagawin",
  HT:   "tungkol sa paghuhusga habang may pressure, kaya ang pagsasanay sa totoong sitwasyon ng serbisyo ang pangunahing gagawin"
};
const demand = code => RFIL ? FIL_DEMANDS[code] : STRAND_DEMANDS[code];
const ordinal = n => RFIL ? "ika-" + n : ["", "1st", "2nd", "3rd", "4th", "5th", "6th"][n] || n + "th";

function interestMessage(results, rec) {
  const nm = list => list.map(r => `<strong>${STRANDS[r.strand].name}</strong>`).join(R(" and ", " at "));
  const maxS = results[0].percentage;
  const topS = rec || results.filter(r => r.percentage === maxS);
  const maxI = Math.max(...results.map(r => r.ipct)), minI = Math.min(...results.map(r => r.ipct));
  const topI = results.filter(r => r.ipct === maxI);

  if (maxI - minI <= INTEREST_FLAT_SPREAD) {
    return R(`Your interests are spread fairly evenly across the strands, so your skill results may be the clearer guide right now. Explore each strand's page to see what appeals to you.`,
             `Pantay-pantay ang iyong mga interes sa mga strand, kaya baka mas malinaw na gabay ang iyong skill results sa ngayon. Buksan ang pahina ng bawat strand para makita kung alin ang nakakaakit sa iyo.`);
  }
  const both = topS.filter(r => topI.includes(r));
  if (both.length) return R(`<strong>Strong match:</strong> your skills and your interests both point to ${nm(both)}.`,
                            `<strong>Malakas na tugma:</strong> ang iyong kakayahan at interes ay parehong tumuturo sa ${nm(both)}.`);

  const gap = topI.find(r => r.percentage < 50 && maxS - r.percentage >= 25);
  if (gap) {
    return R(`You showed the highest interest in ${nm(topI)}, but scored lower on ${topI.length > 1 ? "their tests" : "its test"}. A short test with no preparation shows where you are today, not where you can get to. ${STRANDS[gap.strand].name} here is ${STRAND_DEMANDS[gap.strand]}. Read its strand page to see if the daily work appeals to you.`,
             `Pinakamataas ang interes mo sa ${nm(topI)}, ngunit mas mababa ang score mo sa ${topI.length > 1 ? "mga test nito" : "test nito"}. Ipinapakita ng maikling test na walang paghahanda kung nasaan ka ngayon, hindi kung hanggang saan ka makakarating. Ang ${STRANDS[gap.strand].name} ay ${FIL_DEMANDS[gap.strand]}. Basahin ang pahina ng strand nito para makita kung gusto mo ang pang-araw-araw na gawain.`);
  }
  if (topS.every(r => r.irank >= 4)) {
    return R(`You could do well in ${nm(topS)}, your strongest skill area, but your interest in ${topS.length > 1 ? "them ranked" : "it ranked"} only ${ordinal(Math.min(...topS.map(r => r.irank)))} of six. Check whether you'd enjoy the daily work before choosing ${topS.length > 1 ? "either" : "it"}.`,
             `Maaari kang maging mahusay sa ${nm(topS)}, ang iyong pinakamalakas na skill area, ngunit ${ordinal(Math.min(...topS.map(r => r.irank)))} lamang sa anim ang ranggo ng interes mo rito. Alamin muna kung masisiyahan ka sa pang-araw-araw na gawain bago piliin ${topS.length > 1 ? "ang alinman sa dalawa" : "ito"}.`);
  }
  return R(`Your strongest skill is in ${nm(topS)}, while your strongest interest is in ${nm(topI)}. Neither is wrong: skills can be built, and interest is what keeps you going. Read both strand pages before deciding.`,
           `Ang pinakamalakas mong skill ay nasa ${nm(topS)}, habang ang pinakamalakas mong interes ay nasa ${nm(topI)}. Walang mali sa alinman: puwedeng hubugin ang skill, at ang interes ang nagpapatuloy sa iyo. Basahin ang pahina ng parehong strand bago magdesisyon.`);
}

const SKILL_HIGH_PCT = 50;
const INTEREST_FLAT_SPREAD = 15;
const interestLabel = p => p >= 75 ? R("High interest", "Mataas na interes") : p >= 50 ? R("Some interest", "May interes") : R("Lower interest", "Mas mababang interes");

function strandReasoning(r, results, ctx) {
  const info = STRANDS[r.strand], nm = info.name;
  const ids = results.map(x => x.ipct);
  const flat = Math.max(...ids) - Math.min(...ids) <= INTEREST_FLAT_SPREAD;

  const skillRank = 1 + results.filter(o => o.percentage > r.percentage).length;
  const level = results.filter(o => o !== r && o.percentage === r.percentage).map(o => STRANDS[o.strand].name);
  const AND = R(" and ", " at ");
  let rankText;
  if (level.length) rankText = skillRank === 1
    ? R(`level with ${level.join(AND)} at the top`, `kapantay ng ${level.join(AND)} sa tuktok`)
    : R(`${ordinal(skillRank)} of six, level with ${level.join(AND)}`, `${ordinal(skillRank)} sa anim, kapantay ng ${level.join(AND)}`);
  else if (skillRank === 1) rankText = R(`your highest of the six, ${r.percentage - results[1].percentage} percentage points ahead of your next strand`,
                                         `pinakamataas mo sa anim, ${r.percentage - results[1].percentage} percentage point na nangunguna sa susunod mong strand`);
  else rankText = R(`${ordinal(skillRank)} of six`, `${ordinal(skillRank)} sa anim`);
  let skill = R(`You scored ${r.correct}/${r.total} (${r.percentage}%) on the ${nm} test: ${rankText}.`,
                `Nakakuha ka ng ${r.correct}/${r.total} (${r.percentage}%) sa ${nm} test: ${rankText}.`);
  skill += r.percentage >= SKILL_HIGH_PCT
    ? R(` That points to ${apt(r.strand, "strength")}.`, ` Nagpapakita ito ng ${apt(r.strand, "strength")}.`)
    : skillRank === 1 ? R(` It is your strongest area compared with the others, but not a high score on its own.`, ` Ito ang pinakamalakas mong larangan kumpara sa iba, ngunit hindi ito mataas na score kung mag-isa.`) : ``;
  if (ctx && ctx.extras && ctx.extras.includes(r)) skill += R(` That is ${results[0].percentage - r.percentage} percentage points below your top skill ${ctx.rec.length > 1 ? "strands" : "strand"}.`,
                                                              ` Mas mababa ito nang ${results[0].percentage - r.percentage} percentage point kaysa sa iyong top skill na strand.`);
  if (r.percentage < LOW_SIGNAL_PCT) skill += R(` This is close to what random guessing would give (about 25%), so treat it as a weak signal.`,
                                                ` Malapit ito sa makukuha sa basta paghula (mga 25%), kaya ituring itong mahinang batayan.`);

  let interest = R(`Your interest in ${nm} ranked ${ordinal(r.irank)} of six (${interestLabel(r.ipct).toLowerCase()}).`,
                   `Ang interes mo sa ${nm} ay pumuwesto bilang ${ordinal(r.irank)} sa anim (${interestLabel(r.ipct).toLowerCase()}).`);
  if (flat) interest += R(` Your interests were spread fairly evenly, so this ranking is a weak guide.`,
                          ` Pantay-pantay ang iyong mga interes, kaya mahinang gabay ang ranggong ito.`);

  const skillHigh = r.percentage >= SKILL_HIGH_PCT;
  const lvl = flat ? "flat" : r.irank <= 2 ? "high" : r.irank >= 5 ? "low" : "mid";
  const isExtra = !!(ctx && ctx.extras && ctx.extras.includes(r));
  const where = ctx && ctx.shown.length > 1
    ? R(`Open the <b class="lk">${nm}</b> button below.`, `Buksan ang <b class="lk">${nm}</b> na button sa ibaba.`)
    : R(`Read about ${nm} in the section below.`, `Basahin ang tungkol sa ${nm} sa seksyon sa ibaba.`);
  const hard = R(`Would you be happy working on those subjects even when they're hard?`, `Magiging masaya ka bang pag-aralan ang mga asignaturang iyon kahit mahirap?`);
  let fit, next;
  if (lvl === "flat") {
    fit = R(`Because your interests don't separate the strands clearly, your skill result is the clearer guide for ${nm} right now.`,
            `Dahil hindi malinaw na napaghihiwalay ng iyong mga interes ang mga strand, ang iyong skill result ang mas malinaw na gabay para sa ${nm} sa ngayon.`);
    next = R(`Read each strand's page and notice which daily work appeals to you.`, `Basahin ang pahina ng bawat strand at pansinin kung aling pang-araw-araw na gawain ang gusto mo.`);
  } else if (isExtra && skillHigh && lvl === "high") {
    fit = R(`Interest ahead of your top skill: your ${nm} score is solid, though another strand scored higher. Interest is what keeps you going, so ${nm} is worth a serious look.`,
            `Nangunguna ang interes kaysa sa iyong top skill: maayos ang score mo sa ${nm}, bagaman mas mataas ang sa ibang strand. Ang interes ang nagpapatuloy sa iyo, kaya sulit na seryosong tingnan ang ${nm}.`);
    next = `${where} ${hard}`;
  } else if (skillHigh && lvl === "high") {
    fit = R(`Strong match: your skills and your interest both point to ${nm}.`, `Malakas na tugma: ang iyong kakayahan at interes ay parehong tumuturo sa ${nm}.`);
    next = R(`${where} If its subjects still sound good, this is a strong match to look into.`, `${where} Kung maganda pa rin ang dating ng mga asignatura nito, malakas na tugma ito na dapat tingnan.`);
  } else if (skillHigh) {
    fit = R(`Skills ahead of interest: you could do well in ${nm}, but your interest in it ranked only ${ordinal(r.irank)}. Doing well and enjoying the work are different things.`,
            `Nangunguna ang kakayahan kaysa interes: maaari kang maging mahusay sa ${nm}, ngunit ${ordinal(r.irank)} lamang ang ranggo ng interes mo rito. Magkaiba ang paghusay at ang pag-enjoy sa gawain.`);
    next = R(`${where} Do its subjects sound interesting, or like a chore?`, `${where} Kawili-wili ba ang mga asignatura nito, o parang pabigat lang?`);
  } else if (lvl === "high") {
    fit = R(`Interest ahead of skills: you're drawn to ${nm} but scored lower on its test. A short test with no preparation shows where you are today, not where you can get to. ${nm} is ${STRAND_DEMANDS[r.strand]}.`,
            `Nangunguna ang interes kaysa kakayahan: naaakit ka sa ${nm} ngunit mas mababa ang score mo sa test nito. Ipinapakita ng maikling test na walang paghahanda kung nasaan ka ngayon, hindi kung hanggang saan ka makakarating. Ang ${nm} ay ${FIL_DEMANDS[r.strand]}.`);
    next = `${where} ${hard}`;
  } else {
    fit = R(`Neither your skill score nor your interest points strongly to ${nm}. It is shown because it was among your highest skill scores, not because your interest points to it.`,
            `Hindi malakas na tumuturo sa ${nm} ang iyong skill score o interes. Ipinapakita ito dahil kabilang ito sa pinakamataas mong skill score, hindi dahil tumuturo rito ang iyong interes.`);
    next = R(`${where} Compare it with the strand you're most interested in before deciding. ${nm} is ${STRAND_DEMANDS[r.strand]}.`,
             `${where} Ihambing ito sa strand na pinakainteresado ka bago magdesisyon. Ang ${nm} ay ${FIL_DEMANDS[r.strand]}.`);
  }
  return { skill, interest, fit, next };
}

function pickShown(results, rec) {
  const ids = results.map(x => x.ipct);
  const maxI = Math.max(...ids);
  const flat = maxI - Math.min(...ids) <= INTEREST_FLAT_SPREAD;
  const topAll = flat ? [] : results.filter(r => r.ipct === maxI);
  const intSet = topAll.slice(0, MAX_RECOMMENDED);
  const alsoTop = topAll.slice(MAX_RECOMMENDED);
  const sameSet = intSet.length === rec.length && intSet.every(r => rec.includes(r));
  const tabbed = !flat && !sameSet;
  const extras = intSet.filter(r => !rec.includes(r));
  const shown = tabbed ? rec.concat(extras) : rec;
  return { rec, intSet, extras, extra: extras[0] || null, alsoTop, tabbed, shown, flat, maxI };
}

const STRAND_DAY = {
  STEM: "math, science",
  ASSH: "reading, writing, arguing a point",
  BM:   "business, numbers, money",
  HT:   "service, food, tourism",
  ICT:  "logic, coding",
  IA:   "electrical work, installing, repairing"
};
const FIL_DAY = {
  STEM: "math, science",
  ASSH: "pagbasa, pagsulat, pagpapaliwanag ng paninindigan",
  BM:   "negosyo, numero, pera",
  HT:   "serbisyo, pagkain, turismo",
  ICT:  "lohika, coding",
  IA:   "gawaing elektrikal, pag-install, pagkukumpuni"
};

function cardTag(r, ps, tab) {
  const skillTop = ps.rec.includes(r), intTop = ps.intSet.includes(r);
  const tiedS = ps.rec.length > 1, tiedI = ps.intSet.length > 1;
  const SEP = " \u00B7 ";
  if (tab === "interests") {
    if (skillTop && intTop) return tiedI ? R("Tied for top interest" + SEP + "Top skill", "Magkapantay sa top interes" + SEP + "Top skill") : R("Skills and interest match", "Tugma ang kakayahan at interes");
    return tiedI ? R("Tied for top interest", "Magkapantay sa top interes") : R("Your top interest strand", "Iyong top interest na strand");
  }
  if (skillTop && intTop) return tiedS ? R("Tied for top skill" + SEP + "Top interest", "Magkapantay sa top skill" + SEP + "Top interes") : R("Skills and interest match", "Tugma ang kakayahan at interes");
  return tiedS ? R("Tied for top skill", "Magkapantay sa top skill") : R("Your top skill strand", "Iyong top skill na strand");
}

const strandNames = list => list.map(r => STRANDS[r.strand].name).join(R(" and ", " at "));

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
          <div class="why-part"><span class="why-label">${R("Your skill result", "Iyong skill result")}</span><p>${t.skill}</p></div>
          <div class="why-part"><span class="why-label">${R("Your interest", "Iyong interes")}</span><p>${t.interest}</p></div>
          <div class="why-part"><span class="why-label">${R("How they fit together", "Paano sila nagtutugma")}</span><p>${t.fit}</p></div>
          <div class="why-part"><span class="why-label">${R("Try this next", "Subukan ito sa susunod")}</span><p>${t.next}</p></div>
        </div>
      </div>`;
  }).join("");

  const showNote = ps.alsoTop.length && (tab === "interests" || !ps.tabbed);
  const many = ps.alsoTop.length > 1;
  const note = showNote
    ? `<p class="why-note">${R(
        `Your interest in ${strandNames(ps.alsoTop)} also tied for the top, level with ${strandNames(ps.intSet)}. ${many ? "They have" : "It has"} no card here only to keep this page short, not because ${many ? "they fit" : "it fits"} you less. You can read ${many ? "their pages" : "its page"} under Explore Strands in the menu.`,
        `Pumantay rin sa pinakamataas ang interes mo sa ${strandNames(ps.alsoTop)}, kapantay ng ${strandNames(ps.intSet)}. Walang card dito para lang maging maikli ang pahinang ito, hindi dahil mas hindi ${many ? "sila" : "ito"} angkop sa iyo. Mababasa mo ang ${many ? "mga pahina nila" : "pahina nito"} sa Explore Strands sa menu.`)}</p>`
    : "";
  return `<div class="why-grid" data-n="${list.length}">${cards}</div>${note}`;
}

function quickCheckHTML(ps) {
  if (!ps.tabbed) return "";
  const opts = ps.shown.map(r => R(`${STRANDS[r.strand].name} work (${STRAND_DAY[r.strand]})`, `gawaing ${STRANDS[r.strand].name} (${FIL_DAY[r.strand]})`));
  const or = R(", or ", ", o "), orShort = R(" or ", " o ");
  const list = opts.length > 2 ? opts.slice(0, -1).join(", ") + or + opts[opts.length - 1] : opts.join(orShort);
  return `<div class="quick-check"><b>${R("Quick check", "Mabilis na tsek")}</b><p>${R(
    `Picture a normal school day. Would you rather spend it on ${list}? Your gut answer is useful information.`,
    `Isipin ang isang karaniwang araw sa paaralan. Alin ang mas gusto mong pagkaabalahan: ${list}? Mahalagang impormasyon ang una mong sagot.`)}</p></div>`;
}

function renderExplain(results, pick, ps) {
  const root = document.getElementById("explain-why");
  const title = `<h3 class="explain-title">${R("What your results say", "Ano ang sinasabi ng iyong resulta")}</h3>`;
  const lead = html => `<p class="explain-lead">${html}</p>`;

  const pointer = ps.tabbed
    ? R(`<br><br>Your top interest ${ps.intSet.length > 1 ? "strands are" : "strand is"} <strong>${strandNames(ps.intSet)}</strong>. See the <button type="button" class="tab-link" data-goto="interests">Interests</button> tab to compare.`,
        `<br><br>Ang iyong top interes ay <strong>${strandNames(ps.intSet)}</strong>. Tingnan ang <button type="button" class="tab-link" data-goto="interests">Interes</button> tab para maghambing.`)
    : "";
  const skillsHTML = lead(buildBreakdown(results, pick) + pointer) + whyCardsHTML(results, pick, ps, "skills");

  if (!ps.tabbed) {
    root.innerHTML = `${title}<div class="folder-wrap"><div class="folder-box">${skillsHTML}</div></div>`;
    return;
  }

  const apart = ps.extras.length === ps.intSet.length;
  const intLead = (ps.intSet.length > 1
    ? R(`Your interests tied: <strong>${strandNames(ps.intSet)}</strong> came out highest.`, `Magkapantay ang iyong mga interes: pinakamataas ang <strong>${strandNames(ps.intSet)}</strong>.`)
    : R(`Your highest interest is in <strong>${strandNames(ps.intSet)}</strong>.`, `Pinakamataas ang interes mo sa <strong>${strandNames(ps.intSet)}</strong>.`))
    + (apart ? R(` Your skills and your interests point to different strands.`, ` Magkaiba ang tinutukoy na strand ng iyong kakayahan at interes.`) : ``);
  const interestsHTML = lead(intLead) + whyCardsHTML(results, pick, ps, "interests");

  root.innerHTML = `${title}
    <div class="folder-wrap has-tabs">
      <div class="folder-tabs" role="tablist" aria-label="${R("Interests or skills", "Interes o skill")}">
        <button type="button" class="folder-tab" role="tab" id="ftab-skills" data-tab="skills" aria-selected="true">${R("Skills", "Skill")}</button>
        <button type="button" class="folder-tab" role="tab" id="ftab-interests" data-tab="interests" aria-selected="false">${R("Interests", "Interes")}<span class="tab-dot" aria-hidden="true"></span></button>
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
    panel.dataset.dir = which === "interests" ? "right" : "left";
    panel.classList.toggle("is-first", first);
    panel.innerHTML = `<div class="folder-content">${which === "interests" ? interestsHTML : skillsHTML}</div>`;
    if (which === "interests") { const d = root.querySelector(".tab-dot"); if (d) d.remove(); }
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

function renderRecommendedInfo(ps) {
  const rec = ps.shown;
  const tabsEl = document.getElementById("strand-tabs");
  const panel = document.getElementById("strand-panel");
  const titleEl = document.getElementById("strand-header-title");
  const subEl = document.getElementById("strand-header-sub");

  const show = code => {
    panel.innerHTML = strandPageHTML(code, false);
    initStrandTypewriter(panel, STRANDS[code], "view-results");
    initIctFrame(panel, "view-results");
    initStrandMotion(panel);
    tabsEl.querySelectorAll(".chip").forEach(c => {
      const on = c.dataset.code === code;
      c.classList.toggle("chip-active", on);
      c.setAttribute("aria-selected", String(on));
    });
  };

  if (rec.length < 2) {
    const info = STRANDS[rec[0].strand];
    titleEl.innerHTML = `${R("Get to know", "Kilalanin ang")} <span style="color:${info.color}">${info.name}</span>`;
    subEl.textContent = R("Here's what it covers, what you'd learn, and where it can lead.", "Narito ang saklaw nito, ang matututunan mo, at kung saan ito maaaring humantong.");
    tabsEl.hidden = true;
    tabsEl.innerHTML = "";
    panel.removeAttribute("role");
    show(rec[0].strand);
    return;
  }

  const countWord = R(["", "", "two", "three", "four"], ["", "", "dalawang", "tatlong", "apat na"])[rec.length];
  titleEl.textContent = ps.tabbed ? R("Get to know your strands", "Kilalanin ang iyong mga strand") : R("Get to know your recommended strands", "Kilalanin ang iyong mga inirerekomendang strand");
  subEl.textContent = !ps.tabbed
    ? R("Your skills tied, so here are two to compare. Switch between them below.", "Magkapantay ang iyong mga skill, kaya may dalawang pagkukumparahan dito. Lumipat sa pagitan nila sa ibaba.")
    : rec.length === 2
      ? R("Your skills and interests point to different strands. Switch between them below.", "Magkaiba ang tinutukoy na strand ng iyong kakayahan at interes. Lumipat sa pagitan nila sa ibaba.")
      : R(`Your skills and interests point to ${countWord} strands. Switch between them below.`, `Ang iyong kakayahan at interes ay tumuturo sa ${countWord} strand. Lumipat sa pagitan nila sa ibaba.`);
  tabsEl.hidden = false;
  tabsEl.innerHTML = `<div class="chip-row" role="tablist" aria-label="${R("Your strands", "Iyong mga strand")}"></div>`;
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
      tag.textContent = sk && it ? R("Skill & interest", "Skill at interes") : it ? R("Top interest", "Top interes") : "Top skill";
      tab.appendChild(tag);
    }
    tab.addEventListener("click", () => show(r.strand));
    row.appendChild(tab);
  });
  show(rec[0].strand);
}

function renderResultsHero(pick, results, lowSignal, m) {
  const hero = document.querySelector(".results-hero");
  const h1 = document.getElementById("result-headline");
  if (!hero || !h1) return;

  const c = m.c, rec = pick.rec, ints = m.ps.intSet, ui = rvCaseUI(m);
  const lead = c.family === "merged" ? [c.shared[0]] : c.family === "shared" ? c.shared.concat(c.sOnly, c.iOnly) : rec.concat(ints);
  const colors = lead.map(r => STRANDS[r.strand].color);
  hero.dataset.count = c.family === "columns" ? "2" : "1";
  hero.dataset.layout = c.family;
  hero.dataset.case = String(c.caseNo);
  hero.classList.toggle("res-low", lowSignal);
  hero.classList.toggle("res-perfect", c.caseNo === 1);
  hero.classList.toggle("res-calm", c.calm);
  hero.style.setProperty("--rc1", colors[0] || "#D98E2B");
  hero.style.setProperty("--rc2", colors[1] || colors[0] || "#D98E2B");

  const stk = (r, tilt) => { const info = STRANDS[r.strand]; return `<span class="res-sticker" style="--sc:${info.color};--tilt:${tilt}"><span class="res-icon" aria-hidden="true">${STRAND_ICONS[r.strand]}</span><span class="res-name">${info.name}</span></span>`; };
  const cap = t => `<span class="rv-cap">${t}</span>`;
  const star = c.calm ? "" : `<span class="rv-star" aria-hidden="true">\u2605</span>`;
  const withStar = (r, tilt) => `<span class="rv-wrap">${stk(r, tilt)}${star}</span>`;
  let items;

  if (c.family === "merged") {
    const r = c.shared[0];
    items = `<span class="res-item"><span class="rv-cap rv-cap-top">${R("Top skill and top interest", "Top skill at top interes")}</span>${stk(r, "-3deg")}<span class="res-stamp"><b>${r.percentage}%</b><small>Skill score</small></span></span>`;
  } else if (c.family === "shared") {
    if (c.caseNo === 8) {
      items = `<span class="rv-duo">${c.shared.map((r, i) => `<span class="res-item rv-side">${cap(R("On both lists", "Nasa parehong listahan"))}${withStar(r, i ? "2.5deg" : "-3deg")}<span class="rv-sub">${R("Tied on both", "Magkapantay sa dalawa")}</span></span>`).join("")}</span>`;
    } else {
      const r = c.shared[0];
      const sub = R(`${r.percentage}% skill, ${c.iTied ? "tied " : ""}${ordinal(r.irank)} interest`, `${r.percentage}% skill, ${c.iTied ? "magkapantay sa " : ""}${ordinal(r.irank)} sa interes`);
      const faded = (list, label, tilt) => list.map(o => `<span class="res-item rv-faded">${cap(label)}${stk(o, tilt)}</span>`).join("");
      items = `<span class="rv-main">${cap(R("On both lists", "Nasa parehong listahan"))}${withStar(r, "-3deg")}<span class="rv-sub">${sub}</span></span>`
        + (c.sOnly.length || c.iOnly.length ? `<span class="rv-others">${faded(c.sOnly, R("Skill only", "Skill lang"), "-3deg")}${faded(c.iOnly, R("Interest only", "Interes lang"), "2.5deg")}</span>` : "");
    }
  } else {
    const none = `<span class="res-sticker res-none" style="--sc:var(--ink-soft);--tilt:2.5deg"><span class="res-name">${R("None yet", "Wala pa")}</span></span>`;
    const stack = (list, tilt) => `<span class="rv-stk${list.length > 1 ? " rv-stack" : ""}">${list.map((r, i) => (i ? `<span class="rv-eq" aria-hidden="true">=</span>` : "") + stk(r, tilt)).join("")}</span>`;
    const side = (capTxt, inner, sub) => `<span class="res-item rv-side">${cap(capTxt)}${inner}<span class="rv-sub">${sub}</span></span>`;
    const iNone = !ints.length, p0 = results[0].percentage;
    items = side(c.sTied ? R("Top skills, tied", "Top skill, magkapantay") : "Top skill", c.flatSkill ? none : stack(rec, "-3deg"), c.flatSkill ? R("Same score on all six", "Pareho ang score sa anim") : c.sTied ? R(`${p0}% on both`, `${p0}% sa dalawa`) : R(`${p0}% on its test`, `${p0}% sa test nito`))
      + `<span class="res-and" aria-hidden="true">${ui.mid}</span>`
      + side(c.iTied ? R("Top interests, tied", "Top interes, magkapantay") : R("Top interest", "Top interes"), iNone ? none : stack(ints, "2.5deg"), iNone ? R("Spread evenly", "Pantay-pantay") : c.iTied ? R(`Tied ${ordinal(ints[0].irank)}`, `Magkapantay sa ${ordinal(ints[0].irank)}`) : R(`${ordinal(ints[0].irank)} of six`, `${ordinal(ints[0].irank)} sa anim`));
  }

  const label = ui.label ? `<span class="res-label">${ui.label}</span>` : "";
  h1.innerHTML = `<span class="res-match">${label}<span class="res-row">${items}</span><span class="res-pill"><b aria-hidden="true">${ui.sym}</b><span>${ui.pill}</span></span></span><span class="res-line">${ui.line}</span>`;

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
  const n = CONFETTI_COUNT[c.confetti] || 0;
  if (n && !lowSignal && !calm && !RERENDER) {
    const palette = colors.concat(["#FFD25E", "#22262B"]);
    for (let i = 0; i < n; i++) {
      const p = document.createElement("span");
      const a = Math.random() * Math.PI * 2, d = 140 + Math.random() * 190;
      p.className = "res-confetti";
      p.style.setProperty("--dx", Math.round(Math.cos(a) * d * 1.3) + "px");
      p.style.setProperty("--dy", Math.round(Math.sin(a) * d * 0.8 + 60) + "px");
      p.style.setProperty("--rot", Math.round(Math.random() * 720 - 360) + "deg");
      p.style.background = palette[i % palette.length];
      p.style.animationDelay = (0.5 + Math.random() * 0.2) + "s";
      if (i % 3 === 0) p.style.borderRadius = "50%";
      p.addEventListener("animationend", () => p.remove());
      decor.appendChild(p);
    }
  }
}

const CONFETTI_COUNT = { full: 48, medium: 28, small: 14 };
const rvNames = list => list.map(r => `<strong>${STRANDS[r.strand].name}</strong>`).join(R(" and ", " at "));
const rvChip = r => { const i = STRANDS[r.strand]; return `<span class="rv-chip" style="--sc:${i.color}"><span class="rv-ico" aria-hidden="true">${STRAND_ICONS[r.strand]}</span><span class="rv-name">${i.name}</span></span>`; };

function resultsCase(results, pick, ps) {
  const rec = pick.rec, ints = ps.intSet;
  const flatSkill = results[0].percentage === results[results.length - 1].percentage;
  const sCount = flatSkill ? results.length : pick.tiedAll.length;
  const iCount = ps.flat ? 0 : ints.length + ps.alsoTop.length;
  const sTied = !flatSkill && sCount > 1, iTied = iCount > 1;
  const shared = (flatSkill || ps.flat) ? [] : rec.filter(r => ints.includes(r));
  const sOnly = rec.filter(r => !shared.includes(r)), iOnly = ints.filter(r => !shared.includes(r));
  const high = shared.length > 0 && shared[0].percentage >= SKILL_HIGH_PCT;
  let caseNo;
  if (flatSkill) caseNo = 13;
  else if (ps.flat) caseNo = sTied ? 12 : 11;
  else if (!sTied && !iTied) caseNo = shared.length ? (high ? 1 : 2) : 3;
  else if (!sTied) caseNo = shared.length ? 4 : 5;
  else if (!iTied) caseNo = shared.length ? 6 : 7;
  else caseNo = shared.length >= 2 ? 8 : shared.length === 1 ? 9 : 10;
  const family = caseNo <= 2 ? "merged" : [4, 6, 8, 9].includes(caseNo) ? "shared" : "columns";
  const calm = shared.length > 0 && !high;
  const confetti = calm || caseNo >= 11 ? "none" : caseNo === 1 ? "full" : family === "shared" ? "medium" : "small";
  return { caseNo, family, shared, sOnly, iOnly, sTied, iTied, sCount, iCount, flatSkill, flatInt: ps.flat, high, calm, confetti };
}

function resultsModel(results, pick) {
  const ps = pickShown(results, pick.rec);
  const c = resultsCase(results, pick, ps);
  const sRank = r => 1 + results.filter(o => o.percentage > r.percentage).length;
  let kind;
  if (c.caseNo >= 11) kind = "flat";
  else if (c.caseNo === 1) kind = "perfect";
  else if (c.caseNo === 2) kind = "building";
  else if (c.family === "shared") kind = "shared";
  else if (c.caseNo === 3) kind = (pick.rec.some(r => r.irank <= 2) || ps.intSet.some(r => sRank(r) <= 2)) ? "near" : "apart";
  else kind = "split";
  return { ps, kind, both: c.shared, c, low: results[0].percentage < LOW_SIGNAL_PCT };
}

const tiedWord = n => RFIL ? ({ 2: "Dalawang", 3: "Tatlong", 4: "Apat na", 5: "Limang", 6: "Anim na" }[n] || String(n)) : ({ 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six" }[n] || String(n));
function rvCaseUI(m) {
  const c = m.c, ints = m.ps.intSet, nm = r => STRANDS[r.strand].name;
  const sh = c.shared[0], topS = m.ps.rec[0];
  const lab = m.low ? R("Your highest skill and interest", "Iyong pinakamataas na skill at interes") : R("Your top skill and your top interest", "Iyong top skill at top interes");
  const allCount = new Set(m.ps.rec.concat(ints).map(r => r.strand)).size;
  const allN = RFIL ? String(allCount) : tiedWord(allCount).toLowerCase();
  const t = {
    1:  { sym: "\u2713", pill: R("Perfect match", "Perpektong tugma"), line: R("Your skills and your interest agree.", "Magkasundo ang iyong kakayahan at interes."), label: R("A perfect match", "Isang perpektong tugma") },
    2:  { sym: "~", pill: R("Same pick, skills still building", "Parehong pinili, hinuhubog pa ang skill"), line: R("Same pick. Your skills are still building.", "Parehong pinili. Hinuhubog pa ang iyong skill."), label: lab },
    3:  m.kind === "near"
        ? { sym: "\u2248", pill: R("Close: one step apart", "Malapit: isang hakbang ang pagitan"), line: R("Your top picks sit one step apart.", "Isang hakbang lang ang pagitan ng iyong mga top pick."), label: lab }
        : { sym: "\u2260", pill: R("Different paths", "Magkaibang landas"), line: R("Your skills and interests point different ways.", "Magkaiba ang tinutukoy ng iyong kakayahan at interes."), label: lab },
    4:  sh && { sym: "=", pill: R("Your skill broke the tie", "Ang skill mo ang nagpasya"), line: R(`${tiedWord(c.iCount)} strands tied on interest. Your skill points to ${nm(sh)}.`, `${tiedWord(c.iCount)} strand ang magkapantay sa interes. Ang iyong skill ay tumuturo sa ${nm(sh)}.`) },
    5:  { sym: "\u2260", pill: R("Different paths", "Magkaibang landas"), line: R(`Your skill points to ${nm(topS)}. Your interests are tied.`, `Ang iyong skill ay tumuturo sa ${nm(topS)}. Magkapantay ang iyong mga interes.`) },
    6:  sh && { sym: "=", pill: R("Your interest broke the tie", "Ang interes mo ang nagpasya"), line: R(`${tiedWord(c.sCount)} strands tied on skill. Your interest points to ${nm(sh)}.`, `${tiedWord(c.sCount)} strand ang magkapantay sa skill. Ang iyong interes ay tumuturo sa ${nm(sh)}.`) },
    7:  { sym: "\u2260", pill: R("Different paths", "Magkaibang landas"), line: R(`Your interest points to ${ints[0] ? nm(ints[0]) : "one strand"}. Your skills are tied.`, `Ang iyong interes ay tumuturo sa ${ints[0] ? nm(ints[0]) : "iisang strand"}. Magkapantay ang iyong mga skill.`) },
    8:  { sym: "\u2713", pill: R("Double match", "Dobleng tugma"), line: R("Both strands tie on skill and on interest.", "Magkapantay ang dalawang strand sa skill at sa interes.") },
    9:  sh && { sym: "=", pill: R("One strand on both lists", "Isang strand sa parehong listahan"), line: R(`${nm(sh)} shows up in both.`, `Lumabas ang ${nm(sh)} sa dalawa.`) },
    10: { sym: "\u2260", pill: R("Wide open", "Bukas ang daan"), line: R(`No strand overlaps. All ${allN} are worth a look.`, `Walang magkapatong na strand. Sulit tingnan ang lahat ng ${allN}.`) },
    11: { sym: "\u2026", pill: R("Skills lead the way", "Skill ang nangunguna"), line: R("Your skills are the clearer guide right now.", "Ang iyong skill ang mas malinaw na gabay sa ngayon."), label: lab },
    12: { sym: "\u2026", pill: R("Skills lead the way", "Skill ang nangunguna"), line: R("Your skills are the clearer guide right now.", "Ang iyong skill ang mas malinaw na gabay sa ngayon."), label: lab },
    13: c.flatInt
        ? { sym: "\u2026", pill: R("Explore to decide", "Tuklasin para makapagpasya"), line: R("Nothing stands out yet. Explore each strand.", "Wala pang namumukod-tangi. Tuklasin ang bawat strand."), label: lab }
        : { sym: "\u2026", pill: R("Interests lead the way", "Interes ang nangunguna"), line: R("Your interests are the clearer guide right now.", "Ang iyong interes ang mas malinaw na gabay sa ngayon."), label: lab }
  }[c.caseNo];
  return Object.assign({ mid: c.flatInt || c.flatSkill ? "\u2026" : "\u2260", label: "" }, t);
}

function rvMessage(m, results, pick) {
  const r = m.both[0], nm = r ? rvNames([r]) : "";
  if (m.kind === "perfect") return R(`Your skills and your interests both put ${nm} first. That is the strongest signal this assessment can give, though it is still a snapshot, not a verdict.`,
                                     `Parehong inuuna ng iyong kakayahan at interes ang ${nm}. Iyan ang pinakamalakas na senyales na maibibigay ng assessment na ito, bagaman snapshot pa rin ito, hindi hatol.`);
  if (m.kind === "building") return R(`Your skills and your interests both put ${nm} first, but your skill score is still modest. Interest is a great start. ${STRANDS[r.strand].name} is ${STRAND_DEMANDS[r.strand]}.`,
                                      `Parehong inuuna ng iyong kakayahan at interes ang ${nm}, ngunit katamtaman pa ang iyong skill score. Magandang simula ang interes. Ang ${STRANDS[r.strand].name} ay ${FIL_DEMANDS[r.strand]}.`);
  const c = m.c;
  if (c.flatSkill) {
    const same = R(`You scored the same on all six tests (${results[0].percentage}%), so your skills don't point to one strand.`,
                   `Pareho ang score mo sa lahat ng anim na test (${results[0].percentage}%), kaya hindi tumuturo sa iisang strand ang iyong mga skill.`);
    return c.flatInt
      ? R(`${same} Your interests are spread evenly too, so nothing stands out yet. Explore each strand's page to see what appeals to you.`,
          `${same} Pantay-pantay rin ang iyong mga interes, kaya wala pang namumukod-tangi. Buksan ang pahina ng bawat strand para makita kung alin ang nakakaakit sa iyo.`)
      : R(`${same} Your strongest interest is in ${rvNames(m.ps.intSet)}. Use that and the strand pages to see which daily work appeals to you.`,
          `${same} Pinakamalakas ang interes mo sa ${rvNames(m.ps.intSet)}. Gamitin iyon at ang mga pahina ng strand para makita kung aling pang-araw-araw na gawain ang gusto mo.`);
  }
  if (m.kind === "shared") {
    const sNames = rvNames(pick.rec), iNames = rvNames(m.ps.intSet);
    const lead = R({
      4: `Your interests tied across ${iNames}, and your skill result points to ${nm}.`,
      6: `Your skills tied across ${sNames}, and your interest points to ${nm}.`,
      8: `${rvNames(c.shared)} tie on skill and on interest, so neither beats the other.`,
      9: `Your skills tied across ${sNames} and your interests tied across ${iNames}. ${nm} is the one on both lists.`
    }, {
      4: `Magkapantay ang iyong mga interes sa ${iNames}, at ang iyong skill result ay tumuturo sa ${nm}.`,
      6: `Magkapantay ang iyong mga skill sa ${sNames}, at ang iyong interes ay tumuturo sa ${nm}.`,
      8: `Magkapantay ang ${rvNames(c.shared)} sa skill at sa interes, kaya walang nangunguna sa dalawa.`,
      9: `Magkapantay ang iyong mga skill sa ${sNames} at magkapantay ang iyong mga interes sa ${iNames}. Ang ${nm} ang nasa parehong listahan.`
    })[c.caseNo];
    return c.calm
      ? R(`${lead} Your skill score is still modest, so read the strand page to see whether the practice it asks for would be worth it.`,
          `${lead} Katamtaman pa ang iyong skill score, kaya basahin ang pahina ng strand para makita kung sulit ang praktis na hinihingi nito.`)
      : R(`${lead} That overlap is a good sign, though it is still a snapshot, not a verdict.`,
          `${lead} Magandang senyales ang pagtutugma na iyon, bagaman snapshot pa rin ito, hindi hatol.`);
  }
  return interestMessage(results, pick.rec);
}

function renderRvCharts(m, results) {
  const root = document.getElementById("bar-chart");
  const byInt = results.slice().sort((a, b) => b.ipct - a.ipct);
  const col = (r, pct, sub) => `<div class="bar-col"><div class="bar-pct">${pct}%</div><div class="bar-track"><div class="bar-fill" style="background:${STRANDS[r.strand].color};" data-target="${pct}"></div></div><div class="bar-label">${STRANDS[r.strand].name}<br>${sub}</div></div>`;
  root.innerHTML = `<div class="rv-chart"><span class="rv-tab">Skill<small>${R("how you did on the tests", "kung paano ka sa mga test")}</small></span><div class="bar-chart">${results.map(r => col(r, r.percentage, `${r.correct}/${r.total}`)).join("")}</div></div>
    <div class="rv-chart rv-int"><span class="rv-tab">${R("Interest", "Interes")}<small>${R("ranked against your own strands", "iniranggo laban sa sarili mong mga strand")}</small></span><div class="bar-chart">${byInt.map(r => col(r, r.ipct, ordinal(r.irank))).join("")}</div></div>`;
  requestAnimationFrame(() => setTimeout(() => root.querySelectorAll(".bar-fill").forEach(el => { el.style.height = el.dataset.target + "%"; }), 50));
}

function renderRvRows(m, results) {
  const root = document.getElementById("interest-section"), { ps } = m;
  root.innerHTML = `<h3>${R("Skills and interests, strand by strand", "Mga skill at interes, bawat strand")}</h3>
    <div class="si-grid">${results.map(r => {
      const info = STRANDS[r.strand], ts = ps.rec.includes(r), ti = ps.intSet.includes(r);
      const badges = (ts ? `<span class="rv-badge">Top skill</span>` : "") + (ti ? `<span class="rv-badge rv-badge-i">${R("Top interest", "Top interes")}</span>` : "");
      return `<div class="si-row${ts || ti ? " rv-row-top" : ""}" style="--sc:${info.color}">
        <span class="si-name"><span class="dot" style="background:${info.color}"></span>${info.name}${badges}</span>
        <div class="si-line"><span class="si-tag">Skill</span><div class="si-track"><div class="si-fill" data-w="${r.percentage}" style="width:0"></div></div><span class="si-val">${r.percentage}%</span></div>
        <div class="si-line"><span class="si-tag">${R("Interest", "Interes")}</span><div class="si-track"><div class="si-fill si-fill-int" data-w="${r.ipct}" style="width:0"></div></div><span class="si-val">${ordinal(r.irank)}, ${interestLabel(r.ipct).toLowerCase()}</span></div></div>`;
    }).join("")}</div>
    <p class="si-note">${R(`Solid bars are skill, striped bars are interest. Interest is ranked against your own other strands, so "1st" means your strongest interest, not a fixed score. The two are never combined, so any gap stays visible.`,
                           `Ang solidong bar ay skill, ang may guhit ay interes. Iniranggo ang interes laban sa iba mong strand, kaya ang "ika-1" ay nangangahulugang pinakamalakas mong interes, hindi nakapirming score. Hindi pinagsasama ang dalawa, kaya nananatiling nakikita ang anumang agwat.`)}</p>`;
  requestAnimationFrame(() => setTimeout(() => root.querySelectorAll(".si-fill").forEach(el => { el.style.width = el.dataset.w + "%"; }), 60));
}

function renderRvFaq(m, results, pick) {
  const { ps, kind } = m, rec = pick.rec, top = rec[0];
  const names = list => list.map(r => STRANDS[r.strand].name).join(R(" and ", " at "));
  const sName = names(rec), iName = ps.intSet.length ? names(ps.intSet) : "";
  const focus = m.both[0];
  const fa = focus ? names([focus]) : "";
  const c = m.c, iAll = ps.intSet.concat(ps.alsoTop);
  const sNames = names(pick.tiedAll), iNames = names(iAll), pct = focus ? focus.percentage : 0;
  const kindMap = {
    perfect: () => ({
      q: R("Does a perfect match guarantee I'll do well?", "Ginagarantiya ba ng perpektong tugma na magiging mahusay ako?"),
      a: R(`No. It means ${fa} came first in both your skills (${focus.percentage}%) and your interests, which is a strong sign. But it is based on ${focus.total} questions and a questionnaire, not a promise. Read the strand page to check that the daily work still appeals to you.`,
           `Hindi. Ibig sabihin lang nito na ang ${fa} ang nauna sa parehong skill (${focus.percentage}%) at interes mo, na malakas na senyales. Ngunit nakabatay ito sa ${focus.total} tanong at isang talatanungan, hindi pangako. Basahin ang pahina ng strand para tiyaking gusto mo pa rin ang pang-araw-araw na gawain.`) }),
    building: () => ({
      q: R(`My interest in ${fa} is high but my skills are modest. Should I still choose it?`, `Mataas ang interes ko sa ${fa} pero katamtaman ang skill ko. Dapat ko pa rin ba itong piliin?`),
      a: R(`You can. Interest is what keeps people going when work gets hard, and your ${focus.percentage}% shows where you are today, not your limit. ${fa} is ${STRAND_DEMANDS[focus.strand]}. Ask yourself whether you would put in that practice.`,
           `Puwede. Ang interes ang nagpapatuloy sa tao kapag mahirap na ang gawain, at ang ${focus.percentage}% mo ay nagpapakita kung nasaan ka ngayon, hindi ang iyong hangganan. Ang ${fa} ay ${FIL_DEMANDS[focus.strand]}. Tanungin ang sarili kung handa kang magsanay nang ganoon.`) }),
    near: () => ({
      q: R("My skills and interests are one step apart. What does that mean?", "Isang hakbang ang pagitan ng skill at interes ko. Ano ang ibig sabihin nito?"),
      a: R(`Your strongest skill is ${sName} and your strongest interest is ${iName}, but each ranks near the top on the other measure. That makes both realistic options, so compare the two strand pages and picture the daily work.`,
           `Pinakamalakas ang skill mo sa ${sName} at pinakamalakas ang interes mo sa ${iName}, ngunit parehong malapit sa tuktok ang bawat isa sa kabilang sukatan. Kaya parehong makatotohanang opsyon ang dalawa; ihambing ang dalawang pahina ng strand at isipin ang pang-araw-araw na gawain.`) }),
    apart: () => ({
      q: R("Why did my skills and interests point to different strands?", "Bakit magkaibang strand ang tinutukoy ng skill at interes ko?"),
      a: R(`Being good at something and wanting to spend your days on it are different things. Your strongest skill is ${sName} and your strongest interest is ${iName}. Neither is wrong: skills can be built, and interest is what keeps you going.`,
           `Magkaiba ang pagiging mahusay sa isang bagay at ang pagnanais na gugulin ang mga araw mo rito. Pinakamalakas ang skill mo sa ${sName} at pinakamalakas ang interes mo sa ${iName}. Walang mali sa alinman: puwedeng hubugin ang skill, at ang interes ang nagpapatuloy sa iyo.`) }),
    flat: () => ({
      q: R("Why didn't my interests point to one strand?", "Bakit hindi tumuro sa iisang strand ang mga interes ko?"),
      a: R(`Your interest scores were close together across all six strands, so no single one stood out. That is common and not a problem. Use your skill results as the guide for now, and read each strand page to notice what appeals to you.`,
           `Magkakalapit ang mga interes mo sa lahat ng anim na strand, kaya walang iisang namukod-tangi. Karaniwan iyon at hindi problema. Gamitin muna ang iyong skill results bilang gabay, at basahin ang pahina ng bawat strand para mapansin kung alin ang nakakaakit sa iyo.`) }),
    flatSkill: () => ({
      q: R("Why didn't my skills point to one strand?", "Bakit hindi tumuro sa iisang strand ang mga skill ko?"),
      a: R(`You scored the same on all six tests, so no strand stood out on skills. That can happen with short tests. Use your interest results and the strand pages as your guide for now.`,
           `Pareho ang score mo sa lahat ng anim na test, kaya walang strand na namukod-tangi sa skill. Puwede itong mangyari sa maiikling test. Gamitin muna ang iyong resulta sa interes at ang mga pahina ng strand bilang gabay.`) }),
    split: () => ({
      q: R("Why don't my skills and interests share a strand?", "Bakit walang strand na pareho sa skill at interes ko?"),
      a: R(`Your top skill result is ${sName} and your top interest is ${iName}, so no strand is on both lists. That is common: skills can be built, and interest is what keeps you going. Compare the strand pages and picture the daily work.`,
           `Ang top skill result mo ay ${sName} at ang top interes mo ay ${iName}, kaya walang strand sa parehong listahan. Karaniwan iyon: puwedeng hubugin ang skill, at ang interes ang nagpapatuloy sa iyo. Ihambing ang mga pahina ng strand at isipin ang pang-araw-araw na gawain.`) }),
    s4: () => ({
      q: R(`Why did ${iNames} tie on interest, and why does ${fa} lead?`, `Bakit magkapantay ang ${iNames} sa interes, at bakit nangunguna ang ${fa}?`),
      a: R(`${iNames} landed on the same interest score. Your skill test put ${fa} ahead (${pct}%), so it is the strand on both lists. The others are not ruled out.`,
           `Pareho ang interes score ng ${iNames}. Inuna ng skill test mo ang ${fa} (${pct}%), kaya ito ang strand na nasa parehong listahan. Hindi tinatanggal ang iba.`) }),
    s6: () => ({
      q: R(`Why did ${sNames} tie on skill, and why does ${fa} lead?`, `Bakit magkapantay ang ${sNames} sa skill, at bakit nangunguna ang ${fa}?`),
      a: R(`${sNames} scored the same on their tests (${pct}%). Your interest ranked ${fa} first, so it is on both lists. The other tied strand is still a strong skill result.`,
           `Pareho ang score ng ${sNames} sa kanilang mga test (${pct}%). Inuna ng interes mo ang ${fa}, kaya nasa parehong listahan ito. Malakas pa ring skill result ang kabilang strand na magkapantay.`) }),
    s8: () => ({
      q: R("What does a double match mean?", "Ano ang ibig sabihin ng dobleng tugma?"),
      a: R(`${names(c.shared)} tied on both your skills and your interests, so neither beats the other. Treat both as equally good fits and read both strand pages.`,
           `Magkapantay ang ${names(c.shared)} sa parehong skill at interes mo, kaya walang nangunguna. Ituring na parehong angkop ang dalawa at basahin ang pahina ng dalawa.`) }),
    s9: () => ({
      q: R(`Why is ${fa} highlighted?`, `Bakit naka-highlight ang ${fa}?`),
      a: R(`Your skills tied across ${sNames} and your interests tied across ${iNames}. ${fa} is the only strand on both lists, so it gets the star. The others are still worth a look.`,
           `Magkapantay ang mga skill mo sa ${sNames} at ang mga interes mo sa ${iNames}. Ang ${fa} lang ang nasa parehong listahan, kaya ito ang may star. Sulit pa ring tingnan ang iba.`) })
  };
  const kindQ = kindMap[c.flatSkill ? "flatSkill" : kind === "shared" ? "s" + c.caseNo : kind]();
  const tieQ = pick.tiedAll.length > 1 && !c.flatSkill ? {
    q: R(`Why were ${names(rec)} shown for my skills?`, `Bakit ipinakita ang ${names(rec)} para sa skill ko?`),
    a: pick.arbitrary
      ? R(`${names(pick.tiedAll)} tied for your highest score (${top.percentage}%), and your interests could not separate them. Only two are shown, so treat all ${pick.tiedAll.length} as worth exploring.`,
          `Magkapantay ang ${names(pick.tiedAll)} sa pinakamataas mong score (${top.percentage}%), at hindi sila napaghiwalay ng iyong mga interes. Dalawa lang ang ipinapakita, kaya sulit tuklasin ang lahat ng ${pick.tiedAll.length}.`)
      : R(`${names(pick.tiedAll)} tied for your highest score (${top.percentage}%).${pick.byInterest ? " Only two can be shown, so your interest results chose them. The others are not ruled out." : " Treat them as equally strong fits."}`,
          `Magkapantay ang ${names(pick.tiedAll)} sa pinakamataas mong score (${top.percentage}%).${pick.byInterest ? " Dalawa lang ang maipapakita, kaya ang resulta mo sa interes ang pumili. Hindi tinatanggal ang iba." : " Ituring silang parehong malakas na tugma."}`) } : null;
  const iTieQ = c.iTied && (kind !== "shared" || ps.alsoTop.length) ? {
    q: R(`Why are ${iNames} tied for interest?`, `Bakit magkapantay ang ${iNames} sa interes?`),
    a: R(`After the two parts of the questionnaire were combined and rounded, ${iNames} landed on the same score (${iAll[0].ipct}%). ${ps.alsoTop.length ? `Only two can be shown, so your skill scores chose which appear (${names(ps.alsoTop)} also tied). ` : ""}Treat them as equally appealing.`,
         `Matapos pagsamahin at i-round ang dalawang bahagi ng talatanungan, pareho ang score ng ${iNames} (${iAll[0].ipct}%). ${ps.alsoTop.length ? `Dalawa lang ang maipapakita, kaya ang skill scores mo ang pumili kung alin ang lalabas (magkapantay rin ang ${names(ps.alsoTop)}). ` : ""}Ituring silang parehong kaakit-akit.`) } : null;
  const groups = [
    { title: R("About your result", "Tungkol sa iyong resulta"), items: [
      { q: R("How was my skill score calculated?", "Paano kinuwenta ang skill score ko?"),
        a: R(`Each skill test has multiple-choice questions with one correct answer. Your score for a strand is the number you got right, shown as a raw score and a percentage.`,
             `May multiple-choice na mga tanong ang bawat skill test na may isang tamang sagot. Ang score mo sa isang strand ay ang bilang ng nasagot mong tama, ipinapakita bilang raw score at percentage.`) },
      { q: R("How was my interest result calculated?", "Paano kinuwenta ang resulta ko sa interes?"),
        a: R(`The questionnaire has no right or wrong answers. Part A (ratings) and Part B (most and least) are each turned into a 0 to 100 score per strand, then averaged. Strands are ranked against each other, so the result shows what you prefer compared with your own other strands.`,
             `Walang tama o maling sagot ang talatanungan. Ang Bahagi A (mga rating) at Bahagi B (pinakagusto at pinakaayaw) ay ginagawang 0 hanggang 100 na score bawat strand, saka ina-average. Iniranggo ang mga strand laban sa isa't isa, kaya ipinapakita ng resulta kung ano ang mas gusto mo kumpara sa iba mong strand.`) },
      kindQ, tieQ, iTieQ ].filter(i => i && i.a) },
    { title: R("About your strands", "Tungkol sa iyong mga strand"), items: [
      { q: R(`What subjects are in ${names(ps.shown)}?`, `Anu-anong asignatura ang nasa ${names(ps.shown)}?`),
        a: ps.shown.map(r => R(`${STRANDS[r.strand].name} typically includes ${STRANDS[r.strand].subjects.join(", ")}.`, `Karaniwang kasama sa ${STRANDS[r.strand].name} ang ${STRANDS[r.strand].subjects.join(", ")}.`)).join(" ") },
      { q: R("What college courses are related?", "Anong mga kurso sa kolehiyo ang kaugnay?"),
        a: ps.shown.map(r => `${STRANDS[r.strand].name}: ${STRANDS[r.strand].courses.join(", ")}.`).join(" ") + R(" Many courses accept graduates from other strands too.", " Maraming kurso ang tumatanggap din ng nagtapos mula sa ibang strand.") } ] },
    { title: R("What to do next", "Ano ang susunod na gagawin"), items: [
      { q: R("Does a low score mean I can't take that strand?", "Ibig bang sabihin ng mababang score ay hindi ko na puwedeng kunin ang strand na iyon?"),
        a: R(`No. Each test is a short snapshot of your current skills, not a limit. Skills can be built with practice, and a strand you enjoy may be worth choosing even if you scored lower there.`,
             `Hindi. Maikling snapshot lamang ng kasalukuyan mong kakayahan ang bawat test, hindi limitasyon. Puwedeng hubugin ang skill sa praktis, at maaaring sulit piliin ang strand na gusto mo kahit mas mababa ang score mo roon.`) },
      { q: R("Can I still choose another strand?", "Puwede ko pa bang piliin ang ibang strand?"),
        a: R(`Yes. This result is a suggestion based on today, not a requirement. Talk it over with your parents, teachers, or guidance counselor.`,
             `Oo. Mungkahi lang ang resultang ito batay sa ngayon, hindi kailangang sundin. Pag-usapan ito kasama ang iyong mga magulang, guro, o guidance counselor.`) } ] }
  ];
  const el = document.getElementById("faq-list");
  el.innerHTML = groups.map(g => `<div class="rv-faq-group"><h4 class="rv-faq-title">${g.title}</h4>${g.items.map(it => `
    <div class="faq-item"><button class="faq-question" aria-expanded="false"><span>${it.q}</span><span class="faq-icon">+</span></button>
    <div class="faq-answer"><p>${it.a}</p></div></div>`).join("")}</div>`).join("");
  el.querySelectorAll(".faq-item").forEach(w => {
    const b = w.querySelector(".faq-question");
    b.addEventListener("click", () => b.setAttribute("aria-expanded", String(w.classList.toggle("faq-open"))));
  });
}

function renderResults() {
  RFIL = filNow();
  try {
    const results = state.results, pick = pickRecommended(results), m = resultsModel(results, pick);
    renderResultsHero(pick, results, m.low, m);
    document.getElementById("result-sub").innerHTML = rvMessage(m, results, pick) + `<br><small>${m.low ? R("Your skill scores were low and close together, so lean on your interests and explore each strand. ", "Mababa at magkakalapit ang iyong mga skill score, kaya umasa sa iyong mga interes at tuklasin ang bawat strand. ") : ""}${R("This is a starting point, not a final decision. You know yourself best.", "Panimulang gabay lamang ito, hindi pinal na desisyon. Ikaw ang pinakakilala sa sarili mo.")}</small>`;
    renderRvCharts(m, results);
    renderRvRows(m, results);
    renderExplain(results, pick, m.ps);
    renderRecommendedInfo(m.ps);
    renderRvFaq(m, results, pick);
    resultsLang = RFIL ? "fil" : "en";
  } finally {
    RFIL = false;
  }
}

window.addEventListener("cw-langchange", () => {
  const view = document.getElementById("view-results");
  if (!view || !view.classList.contains("active") || !state.results) return;
  const y = window.pageYOffset;
  const tab = document.querySelector("#explain-why .folder-tab[aria-selected='true']");
  const chip = document.querySelector("#strand-tabs .chip-active");
  const wasOpen = Array.from(document.querySelectorAll("#faq-list .faq-item")).map(el => el.classList.contains("faq-open"));
  RERENDER = true;
  try { renderResults(); } finally { RERENDER = false; }
  const still = document.querySelector("#explain-why .folder-tab[data-tab='" + (tab ? tab.dataset.tab : "") + "']");
  if (still && still.getAttribute("aria-selected") !== "true") still.click();
  const chipNow = chip && document.querySelector("#strand-tabs .chip[data-code='" + chip.dataset.code + "']");
  if (chipNow) chipNow.click();
  document.querySelectorAll("#faq-list .faq-item").forEach((el, i) => {
    if (!wasOpen[i]) return;
    el.classList.add("faq-open");
    const b = el.querySelector(".faq-question"); if (b) b.setAttribute("aria-expanded", "true");
  });
  const quiet = els => { els.forEach(el => { el.style.transition = "none"; }); requestAnimationFrame(() => requestAnimationFrame(() => els.forEach(el => { el.style.transition = ""; }))); };
  const bars = Array.from(document.querySelectorAll("#bar-chart .bar-fill")), rows = Array.from(document.querySelectorAll("#interest-section .si-fill"));
  quiet(bars.concat(rows));
  bars.forEach(el => { el.style.height = el.dataset.target + "%"; });
  rows.forEach(el => { el.style.width = el.dataset.w + "%"; });
  window.scrollTo({ top: y, behavior: "instant" });
});

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

  const fil = () => !!(window.CW_i18n && window.CW_i18n.lang() === "fil");
  const prefixNow = () => fil() ? "Ikaw ba ang susunod na " : "Are you a future ";
  const wordNow = i => fil() ? window.CW_i18n.career(HERO_CAREERS[i].text) : HERO_CAREERS[i].text;
  const spokenNow = () => {
    const names = HERO_CAREERS.map((c, i) => wordNow(i));
    return prefixNow() + names.slice(0, -1).join(", ") + (fil() ? ", o " : ", or ") + names[names.length - 1] + "?";
  };

  const p = document.createElement("p");
  p.className = "hero-type";
  p.setAttribute("data-no-i18n", "");
  p.innerHTML = `
    <span class="sd-sr"></span>
    <span class="hero-type-box" aria-hidden="true">
      <span class="hero-type-line"><span class="hero-type-prefix"></span><span class="hero-type-word"></span><span class="hero-type-caret"></span>?</span>
    </span>
    <span class="hero-type-measure" aria-hidden="true"></span>`;
  h1.insertAdjacentElement("afterend", p);

  const sr = p.querySelector(".sd-sr");
  const box = p.querySelector(".hero-type-box");
  const prefixEl = p.querySelector(".hero-type-prefix");
  const word = p.querySelector(".hero-type-word");
  const caret = p.querySelector(".hero-type-caret");
  const measure = p.querySelector(".hero-type-measure");
  const paint = c => { p.style.setProperty("--wc", STRANDS[c.strand].color); };
  const setTexts = () => { prefixEl.textContent = prefixNow(); sr.textContent = spokenNow(); };
  setTexts();

  function sentenceWidth(text) {
    measure.innerHTML = `${prefixNow()}<span class="hero-type-word">${text}</span>?`;
    return measure.getBoundingClientRect().width + 4;
  }

  let w = 0;
  let wasHidden = true;
  function fit(snap) {
    const avail = p.clientWidth;
    if (!avail) { wasHidden = true; return; }
    const target = Math.min(Math.ceil(sentenceWidth(wordNow(w))), avail) + "px";
    if (wasHidden || snap === true) {
      box.style.transition = "none";
      box.style.width = target;
      void box.offsetWidth;
      box.style.transition = "";
      wasHidden = false;
    } else {
      box.style.width = target;
    }
    const widest = Math.max(...HERO_CAREERS.map((c, i) => sentenceWidth(wordNow(i))));
    p.classList.toggle("hero-type-wrap", widest > avail);
  }
  const refit = () => fit();
  if ("ResizeObserver" in window) new ResizeObserver(refit).observe(p);
  else window.addEventListener("resize", refit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);

  paint(HERO_CAREERS[0]);
  fit();

  const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  let n = 0, deleting = false;

  window.addEventListener("cw-langchange", () => {
    setTexts();
    n = 0; deleting = false;
    word.textContent = reduced ? wordNow(0) : "";
    fit(true);
  });

  if (reduced) {
    word.textContent = wordNow(0);
    caret.hidden = true;
    return;
  }

  const homeView = document.getElementById("view-home");
  function tick() {
    if (document.hidden || !homeView.classList.contains("active")) { setTimeout(tick, 500); return; }
    const full = wordNow(w);
    let delay;
    if (!deleting) {
      n++;
      word.textContent = full.slice(0, n);
      if (n >= full.length) { n = full.length; deleting = true; delay = 1600; } else { delay = 80; }
    } else {
      n--;
      word.textContent = full.slice(0, Math.max(n, 0));
      if (n <= 0) {
        n = 0;
        deleting = false;
        w = (w + 1) % HERO_CAREERS.length;
        paint(HERO_CAREERS[w]);
        fit();
        delay = 400;
      } else { delay = 40; }
    }
    setTimeout(tick, delay);
  }
  setTimeout(tick, 1300);
}

function initHomeMotion() {
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if ("IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".manual, .manual-list li, .explore-strands-section .section-title, " +
      ".explore-strands-section .section-sub, #strand-grid .strand-group-label, #strand-grid .strand-card, .explore-cta"
    );
    const io = new IntersectionObserver(entries => {
      let n = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.setProperty("--rd", (n++ * 0.09) + "s");
        entry.target.classList.add("reveal-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }
}

let cwModal = null, cwModalResolve = null, cwModalReturnFocus = null;

function buildModal() {
  cwModal = document.createElement("div");
  cwModal.className = "cw-modal";
  cwModal.hidden = true;
  cwModal.innerHTML = `
    <div class="cw-modal-card" role="alertdialog" aria-modal="true" aria-labelledby="cw-modal-title" aria-describedby="cw-modal-body">
      <h3 id="cw-modal-title"></h3>
      <p id="cw-modal-body"></p>
      <div class="cw-modal-actions">
        <button type="button" class="btn btn-ghost" id="cw-modal-leave"></button>
        <button type="button" class="btn btn-primary" id="cw-modal-stay"></button>
      </div>
    </div>`;
  document.body.appendChild(cwModal);

  const stayBtn = cwModal.querySelector("#cw-modal-stay");
  const leaveBtn = cwModal.querySelector("#cw-modal-leave");
  const close = ok => {
    cwModal.hidden = true;
    document.body.classList.remove("cw-modal-open");
    const resolve = cwModalResolve;
    cwModalResolve = null;
    if (!ok && cwModalReturnFocus && document.contains(cwModalReturnFocus)) cwModalReturnFocus.focus();
    if (resolve) resolve(ok);
  };
  stayBtn.addEventListener("click", () => close(false));
  leaveBtn.addEventListener("click", () => close(true));
  cwModal.addEventListener("click", e => { if (e.target === cwModal) close(false); });
  cwModal.addEventListener("keydown", e => {
    if (e.key === "Escape") { e.preventDefault(); close(false); return; }
    if (e.key !== "Tab") return;
    const first = leaveBtn, last = stayBtn;
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

function askConfirm({ title, body, leave, stay }) {
  if (!cwModal) buildModal();
  cwModal.querySelector("#cw-modal-title").textContent = title;
  cwModal.querySelector("#cw-modal-body").textContent = body;
  cwModal.querySelector("#cw-modal-leave").textContent = leave;
  cwModal.querySelector("#cw-modal-stay").textContent = stay;
  cwModalReturnFocus = document.activeElement;
  document.body.classList.add("cw-modal-open");
  cwModal.hidden = false;
  cwModal.querySelector("#cw-modal-stay").focus();
  return new Promise(resolve => { cwModalResolve = resolve; });
}

function hasAnswersInRun() {
  if (ist.active) return ist.a.some(v => v !== null) || ist.b.some(x => x !== null);
  if (state.activeModule && state.phase === "question") return state.draft.some(a => a !== null);
  return false;
}

function confirmLeave(go) {
  if (currentViewId !== "view-assessment" || !hasAnswersInRun()) { go(); return; }
  askConfirm({
    title: ist.active ? "Leave the questionnaire?" : "Leave this test?",
    body: "Your answers so far are saved. You can pick up right where you stopped, as long as you keep this browser tab open.",
    leave: "Save & leave",
    stay: "Keep going"
  }).then(ok => { if (ok) go(); });
}

function hasProgressToLose() {
  return countDone() > 0 || Boolean(state.interest) ||
    MODULE_ORDER.some(c => answeredCount(c) > 0) ||
    Boolean(state.iprog && interestAnswered(state.iprog) > 0) ||
    hasAnswersInRun();
}
window.addEventListener("beforeunload", e => {
  if (currentViewId === "view-results" || !hasProgressToLose()) return;
  e.preventDefault();
  e.returnValue = "";
});

const assessBodyEl = document.querySelector("#view-assessment .assess-body");
const kbdHint = document.createElement("p");
kbdHint.className = "kbd-hint";
kbdHint.hidden = true;
if (assessBodyEl) assessBodyEl.appendChild(kbdHint);

function updateKbdHint() {
  let txt = "";
  if (qCard.querySelector(".option")) txt = "Keyboard: A\u2013D to answer \u00B7 Enter for next \u00B7 \u2190 \u2192 to move";
  else if (qCard.querySelector(".rate-btn")) txt = "Keyboard: 1\u20135 to rate \u00B7 Enter for next \u00B7 \u2190 \u2192 to move";
  else if (qCard.querySelector(".pick-list")) txt = "Keyboard: Enter for next \u00B7 \u2190 \u2192 to move";
  else if (qCard.querySelector("#intro-begin, #trans-go")) txt = "Press Enter to continue";
  kbdHint.textContent = txt;
  kbdHint.hidden = !txt;
}
new MutationObserver(updateKbdHint).observe(qCard, { childList: true });

document.addEventListener("keydown", e => {
  if (currentViewId !== "view-assessment") return;
  if (cwModal && !cwModal.hidden) return;
  if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
  const t = e.target, tag = t && t.tagName;
  if (tag === "TEXTAREA" || tag === "SELECT" || (t && t.isContentEditable) ||
      (tag === "INPUT" && t.type !== "radio" && t.type !== "checkbox")) return;
  const key = e.key;

  const opts = qCard.querySelectorAll(".option");
  const rates = qCard.querySelectorAll(".rate-btn");
  if (opts.length) {
    let i = -1;
    if (/^[a-d]$/i.test(key)) i = key.toLowerCase().charCodeAt(0) - 97;
    else if (/^[1-4]$/.test(key)) i = Number(key) - 1;
    if (opts[i]) { e.preventDefault(); opts[i].click(); return; }
  } else if (rates.length && /^[1-5]$/.test(key) && rates[Number(key) - 1]) {
    e.preventDefault(); rates[Number(key) - 1].click(); return;
  }

  if (e.repeat) return;

  const begin = qCard.querySelector("#intro-begin, #trans-go");
  if (begin) {
    if (key === "Enter" && tag !== "BUTTON" && tag !== "A") { e.preventDefault(); begin.click(); }
    return;
  }

  const isLink = tag === "BUTTON" || tag === "A";
  const chosenBtn = Boolean(t && t.matches && t.matches(".rate-selected, .pick-on"));
  const goNext = (key === "Enter" && (!isLink || (chosenBtn && !btnNext.disabled))) || key === "ArrowRight";
  const goBack = key === "ArrowLeft";
  if (goNext) {
    if (btnNext.disabled) return;
    e.preventDefault();
    if (/^Finish/.test(btnNext.textContent)) btnNext.focus();
    else btnNext.click();
  } else if (goBack && !btnBack.disabled) {
    e.preventDefault();
    btnBack.click();
  }
});

// back / forward buttons. if the saved page is missing it just goes home. nouuuu no blank screens
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

    case "view-stakes":
      runStakesCountdown();
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

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
validateQuestionBank();
loadState();
loadProgress();
loadInterest();
// open one faq question and the others close. rlly literally just that
(function initFaqAccordion() {
  const items = document.querySelectorAll(".hfaq-list .hfaq-item");
  items.forEach(item => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      items.forEach(other => { if (other !== item) other.open = false; });
    });
  });
})();
renderStrandGrid();
initHeroDecor();
initHeroType();
initHomeMotion();
if (!restoreSession()) showView("view-home");
// links like /#strands and /#faq open the home page at that section. yasssss
(function openFromHash() {
  const target = { "#strands": "nav-explore", "#faq": "nav-faq" }[location.hash];
  if (!target) return;
  history.replaceState(null, "", location.pathname + location.search);
  document.getElementById(target).click();
})();
