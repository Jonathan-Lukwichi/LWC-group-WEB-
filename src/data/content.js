// All site copy in one place. Sourced from the LWC Group Maintenance Reliability
// proposal — deliberately grounded (no overclaim). Edit here to change the site.

export const brand = {
  name: 'LWC GROUP',
  tagline: 'King of Engineering Solutions',
  domain: 'jlwanalytic.com',
  email: 'info@jlwanalytic.com',
  phone: '', // TODO: add phone / WhatsApp
  regions: 'South Africa · DRC · Africa',
}

export const nav = [
  { label: 'The problem', href: '#problem' },
  { label: 'How we work', href: '#how' },
  { label: 'Investment', href: '#investment' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  kicker: 'Maintenance Reliability',
  title: 'We turn breakdowns no one can master\ninto reliability everyone can.',
  sub: 'Evidence-based maintenance and reliability for industrial plants — across South Africa, the DRC and wider Africa. We start small and prove the data before building anything on it.',
  cta: 'Book a plant review',
  ctaHref: '#contact',
}

export const problem = {
  kicker: 'The problem we address',
  title: 'Most plants maintain equipment out of habit — not evidence.',
  lead: 'A routine gets set. It gets followed. Nobody checks whether it prevents anything. Meanwhile the same three machines keep failing, artisans lose half their shift finding parts, and the maintenance budget grows every year without anyone able to say where the money went.',
  stat: { value: 30, prefix: '', suffix: '%', label: "of a shift is real maintenance work in poorly-prepared operations — against about 55% in a world-class one. It's not a workforce problem; it's a support problem." },
  points: [
    { h: 'The maintenance record is unusable.', p: 'Breakdowns logged in free text under pressure, or in a spreadsheet, or not at all. Failure codes default to "other". Downtime is recorded as repair time, not production loss.' },
    { h: 'Prevention does not match failures.', p: 'Scheduled maintenance is concentrated in one part of the plant. Breakdowns are concentrated somewhere else. Nobody has put the two side by side.' },
    { h: 'Routines are never tested.', p: 'A pump is inspected every three months and its bearings keep failing. The real question is whether that inspection could ever detect the problem in the first place.' },
    { h: 'Work is not prepared.', p: 'The delay begins long before the technician ever picks up a tool.' },
  ],
}

// The signature before -> after scroll mechanic (Mining / Reliability).
export const transformation = {
  kicker: 'Mining · Reliability',
  before: {
    label: 'Before',
    title: 'A breakdown no one can master',
    caption: 'Unpredictable failure. Alarms. Downtime. Money leaking — and a team that can only react.',
    img: '/mining-before.png', // Gemini BEFORE image (in /public)
  },
  after: {
    label: 'After',
    title: 'A breakdown everyone masters',
    caption: 'Predictable, prepared, controlled. The same team, now in command of the machine.',
    img: '/mining-after.png', // Gemini AFTER image (in /public)
  },
  metric: { value: 40, prefix: '−', suffix: '%', label: 'typical reduction in unplanned downtime*' },
  note: '*Industry benchmark for predictive-maintenance programmes. Your real figure is established in the diagnostic — never promised up front.',
}

export const how = {
  kicker: 'How we work',
  title: 'We start small, and prove the data before we build on it.',
  sub: 'Each stage tells you whether the next one is worth doing.',
  stages: [
    { n: '01', name: 'Maintenance System Review', meta: '1–2 days · no data required', p: 'We walk your plant and score the maintenance system against a structured checklist — governance, breakdowns, preventive and corrective work, spares, operator care, safety and documentation. You get two or three actions you can take immediately, at low cost.' },
    { n: '02', name: 'Maintenance Data Diagnostic', meta: '2–3 weeks · one data export', p: 'We turn your records into real mean-time-between-failures, worst assets ranked by true cost, and a comparison of where your prevention goes against where failures actually happen — plus an honest statement of whether the data can support anything further.' },
    { n: '03', name: 'Reliability Workbench', meta: 'conditional on Stage 2', p: 'Where the history is rich enough, we draft failure-mode analyses, root-cause reports and job plans for your engineers to review and approve. The purpose is to remove the assembly work, not the judgement.' },
    { n: '04', name: 'Condition & Prediction', meta: 'conditional · deliberately narrow', p: 'Only for the two or three worst asset classes the earlier stages identify. We never start here — predicting failures on equipment you have never properly recorded is not possible.' },
  ],
}

export const ai = {
  kicker: 'Honesty',
  title: 'Where we use AI — and where we do not.',
  use: 'We use machine learning and language models for the sorting work that has always been too slow to do by hand: reading tens of thousands of work-order records, classifying them consistently, drafting documents from your own history, and finding patterns across a whole asset fleet.',
  dont: 'We do not use it to make engineering decisions. Whether a three-monthly inspection can detect a failing bearing is a question about bearings — answered by an engineer who understands them. And we never write to your control systems. Everything we deliver is advisory and offline.',
}

export const wontClaim = {
  kicker: 'Trust',
  title: 'What we will not claim.',
  items: [
    'We will not promise reduced downtime before seeing your data.',
    'We will not recommend software, sensors or a platform in the first engagement.',
    'If the diagnostic shows your records cannot support further analysis, we will say so and stop — rather than build something on a foundation that will not hold.',
  ],
}

export const investment = {
  kicker: 'Investment',
  title: 'Fixed price where it counts. Quoted only when justified.',
  rows: [
    ['Stage 1 — Maintenance System Review', '1–2 days', 'Fixed fee'],
    ['Stage 2 — Maintenance Data Diagnostic', '2–3 weeks', 'Fixed fee'],
    ['Stage 3 — Reliability Workbench', 'Scoped after Stage 2', 'Quoted'],
    ['Stage 4 — Condition & Prediction', 'Scoped after Stage 3', 'Quoted'],
  ],
  note: 'Stages 1 and 2 are fixed price. Later stages are quoted only once the earlier work has shown they are justified.',
}

export const who = {
  kicker: 'Who we are',
  title: 'Two brothers. One sees the system, one sees the machine.',
  p: 'LWC Group is built by Jonathan and Christian Lukwichi. One works in industrial systems, simulation, data analysis and machine learning; the other in metallurgy, mineral processing and electromechanical systems. Between us we cover how a plant behaves as a system and how the equipment inside it actually fails. We work in English and French.',
}

export const contact = {
  kicker: 'Next step',
  title: 'A conversation — and if it is useful, one day on your plant.',
  cta: 'Start with a plant review',
}

// Honest hero trust-strip (no invented project counts — we are a new practice).
export const heroStats = [
  { top: 'Stages 1–2', label: 'Fixed fee. No surprises.' },
  { top: 'EN · FR', label: 'We work in two languages.' },
  { top: 'SA · DRC', label: 'and wider Africa.' },
  { top: 'Advisory', label: 'Offline. We never touch your controls.' },
]

// Scroll-scrub hero: the "rescue" video narrated as the visitor scrolls.
export const heroScroll = {
  cue: 'Scroll to see the rescue',
  scenes: [
    {
      tag: 'Mining · Reliability',
      title: 'A breakdown no one could master.',
      p: 'Unpredictable failure. Downtime. A team that can only react.',
    },
    {
      tag: 'The turn',
      title: 'Then LWC reads the plant’s own data.',
      p: 'Tens of thousands of maintenance records — sorted, understood, and turned into a clear picture of what is really failing.',
    },
    {
      tag: 'Prediction',
      title: 'And the failure is seen before it happens.',
      p: 'Condition and prediction on the assets that matter most — while there is still time to act.',
    },
    {
      tag: 'Mastered',
      title: 'A breakdown everyone masters.',
      p: 'The same team, now in command — with the numbers to prove it.',
    },
  ],
}

// Page 1 — the immersive story.
export const story = {
  brandLine: 'King of Engineering Solutions',
  introTitle: 'Reliability, engineered.',
  introSub: 'Scroll to see how a breakdown no one could master becomes one everyone can.',
  cue: 'Scroll',
  ctaLabel: 'See how we work',
  ctaTo: '/services',
}

// Page 2 — the details header.
export const detailsHead = {
  kicker: 'Maintenance Reliability',
  title: 'The method, the stages, and what it costs.',
  sub: 'Everything behind the story — how we work, what you receive, and how we price it. Evidence first; we prove the data before we build on it.',
}

// Capabilities (honest — what we do, not fabricated client references).
export const capabilities = {
  kicker: 'What we deliver',
  title: 'Reliability, built on your own evidence.',
  sub: 'Each capability maps to a stage of the method — and each is proven on your data before the next begins.',
  items: [
    {
      tag: 'Stage 2',
      title: 'Reliability diagnostics',
      p: 'We turn your maintenance history into real mean-time-between-failures, worst assets ranked by true cost, and a map of where prevention goes against where failures actually happen.',
      specs: [ ['Input', 'One data export'], ['Time', '2–3 weeks'] ],
    },
    {
      tag: 'Stage 3',
      title: 'Reliability workbench',
      p: 'AI drafts failure-mode analyses, root-cause reports and standard job plans from your own records; your engineers review and approve. We remove the assembly work, not the judgement.',
      specs: [ ['Output', 'FMEA · RCA · job plans'], ['Basis', 'Your history'] ],
    },
    {
      tag: 'Stage 4',
      title: 'Condition & prediction',
      p: 'Narrow and deliberate — only the two or three worst rotating assets, using motor current and temperature you already measure. No new instrumentation to begin.',
      specs: [ ['Scope', 'Worst assets only'], ['Data', 'Already collected'] ],
    },
  ],
}

// The two principals — the strongest, and entirely true.
export const team = {
  kicker: 'Talk to us directly',
  title: 'Two brothers. One sees the system, one sees the machine.',
  sub: 'Give us a call and rely on straight engineering advice to get your reliability programme right.',
  members: [
    {
      name: 'Jonathan Lukwichi',
      role: 'Industrial systems · simulation · data & ML',
      email: 'jonathan@jlwanalytic.com',
      langs: 'English · Français',
    },
    {
      name: 'Christian Lukwichi',
      role: 'Metallurgy · mineral processing · electromechanical',
      email: 'christian@jlwanalytic.com',
      langs: 'English · Français',
    },
  ],
}
