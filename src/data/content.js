// All site copy in one place, the LWC Group multidisciplinary profile.
// Honest by default: no invented clients, projects or guaranteed results.

export const brand = {
  name: 'LWC GROUP',
  slogan: 'King of Engineering Solutions',
  tagline: 'We turn engineering, data and technology into practical solutions that deliver measurable results.',
  email: 'lwcgroup30@gmail.com',
  phone: '+27 84 731 4600',
  whatsapp: '27847314600',
  instagram: 'https://www.instagram.com/slukwichi',
  instagramHandle: '@slukwichi',
  regions: 'South Africa · DRC',
  languages: 'English · Français',
}

export const nav = [
  { label: 'Engineering', href: '#engineering' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Digital', href: '#digital' },
  { label: 'Academy', href: '#academy' },
  { label: 'Contact', href: '#contact' },
]

export const home = {
  hero: {
    bg: '/p-plant-night.jpg',
    kicker: 'King of Engineering Solutions',
    title: 'Engineering, intelligence\nand practical solutions.',
    sub: 'We turn engineering, data and technology into practical solutions that deliver measurable results, for businesses, mines and industrial operations across South Africa and the DRC.',
  },
  about: {
    kicker: 'Who we are',
    title: 'Four capabilities. One purpose: create measurable value.',
    body: 'LWC Group is a South African engineering and technology company that helps businesses, mines and industrial organisations improve performance, reduce costs and make better decisions. We combine engineering, artificial intelligence, data, metallurgy, simulation and digital design under one roof, and we work in English and French.',
  },
  approach: [
    { n: '1', name: 'Understand', p: 'the problem' },
    { n: '2', name: 'Analyse', p: 'data & process' },
    { n: '3', name: 'Engineer', p: 'the solution' },
    { n: '4', name: 'Prove', p: 'the result' },
    { n: '5', name: 'Scale', p: 'what works' },
  ],
  proof: {
    kicker: 'Proven value',
    title: 'We don’t just talk about results. We measure them.',
    body: 'In one applied MSc project, we turned real hospital data into an ML forecast, decision tools, a simulation and a digital twin with a deployed app.',
    kpi: 'R170,000 / R915,000',
    kpiLabel: 'Potential annual savings indicated by the analysis',
    kpiNote: 'Illustrative range based on the analysed scenarios, not a guaranteed saving.',
  },
}

export const divisions = [
  {
    slug: 'engineering', no: '01', name: 'LWC Engineering',
    tag: 'Mining · Metallurgy · Process Optimisation',
    hero: '/p-plant-interior.jpg',
    lead: 'Optimise processes. Improve recovery. Reduce losses.',
    intro: 'Our Mining & Metallurgy capability covers the minerals value chain, from mineral processing and extractive metallurgy to hydrometallurgy and metal recovery. We make your plant data meaningful and turn complex metallurgical processes into measurable value.',
    pillars: [
      { t: 'Mineral Processing', items: ['Crushing & Grinding', 'Classification', 'Flotation', 'Dewatering', 'Process Design', 'Mass Balancing'] },
      { t: 'Extractive Metallurgy', items: ['Pyrometallurgy', 'Hydrometallurgy', 'Leaching & Recovery', 'Solvent Extraction', 'Smelting & Refining', 'Metallurgical Accounting'] },
      { t: 'Hydrometallurgy', items: ['Acid & Alkaline Leaching', 'Solid/Liquid Separation', 'Ion Exchange', 'Precipitation', 'Electrowinning', 'Solution Purification'] },
    ],
    chain: ['Comminution', 'Concentration', 'Leaching', 'S/L Separation', 'Recovery', 'Refining'],
    deliver: ['Process optimisation & efficiency', 'Metallurgical accounting & mass balance', 'Recovery & process analysis', 'Failure analysis', 'Quality control & sampling', 'Safe, sustainable operations'],
  },
  {
    slug: 'intelligence', no: '02', name: 'LWC Intelligence',
    tag: 'AI · Data · Automation · Simulation',
    hero: '/p-server.jpg',
    lead: 'From complex data to better decisions.',
    intro: 'We apply AI, machine learning and simulation to engineering and operations, automating the modelling, the repetitive analysis, the optimisation and the decisions. We climb the Data Value Ladder only as far as it pays.',
    ladder: ['Digitalise', 'Dashboard', 'Decision tool', 'Predictive model', 'Simulation', 'Digital twin'],
    pillars: [
      { t: 'Data & Analytics', items: ['Data cleaning & structuring', 'Dashboards & KPIs', 'Statistical analysis', 'Operational accounting', 'Reporting automation'] },
      { t: 'AI & Machine Learning', items: ['Demand forecasting', 'Predictive models', 'Anomaly detection', 'AI automation', 'Decision support'] },
      { t: 'Simulation & Digital Twins', items: ['Discrete-event & agent-based', 'System dynamics (AnyLogic / SimPy)', 'Digital twins', 'Optimisation', 'Test before you invest'] },
    ],
    tools: [
      'Programming for AI solutions & automation',
      'Simulation software for process analysis & design',
      'Dashboards & data visualisation',
      'Cloud & machine-learning platforms',
      'Continuous-improvement methods',
    ],
    deliver: ['Dashboards', 'Forecasts', 'Optimisation', 'AI automations', 'Digital twins', 'Decision-support tools'],
  },
  {
    slug: 'digital', no: '03', name: 'LWC Digital',
    tag: 'Websites · 3D · Video · Digital Experiences',
    hero: '/p-website.jpg',
    lead: 'Make your business impossible to ignore.',
    intro: 'We combine technology and visual communication to help businesses build a stronger digital presence, premium websites, 3D experiences and high-impact commercial content that communicate the value you create.',
    services: ['Premium Websites', '3D Websites & Product Visualisation', 'Commercial Video', 'AI-Assisted Advertising', 'Digital Experiences', 'English & French Content'],
  },
  {
    slug: 'academy', no: '04', name: 'LWC Academy',
    tag: 'Research · Training · Enablement',
    hero: '/p-research.jpg',
    lead: 'Do better research, in less time.',
    intro: 'For postgraduate students and working professionals, mentoring, technical support and tools across the whole research journey. We build your capability; we never do your work for you.',
    offers: [
      { t: 'Research Mentoring & Technical Support', p: 'Proposal · systematic review · methodology · simulation (AnyLogic · COMSOL · MATLAB · Python) · analysis.' },
      { t: 'AI Research-Workflow Automation', p: 'Automate the repetitive parts, search, references, formatting, data, boilerplate code, saving up to 50% of mechanical time, ethically.' },
      { t: 'Training & Workshops', p: 'We teach engineers and teams to build their own AI automation for research, reporting, modelling and optimisation.' },
    ],
    promise: 'We help you learn, progress and produce better work, in line with academic integrity. We build your skills; we never do your work for you.',
  },
]

export const team = {
  kicker: 'Our Team',
  title: 'Engineering minds. Business focus.',
  members: [
    { name: 'Jonathan Lukwichi', role: 'Founder & CEO', photo: '/team-jonathan.jpg', bio: 'MSc candidate in Industrial Engineering; AI, data & simulation, turning complex data and operational challenges into practical solutions.', email: 'jonathanlukwichi29@gmail.com', phone: '+27 84 731 4600' },
    { name: 'Christian Emmanuel Lukwichi', role: 'Director · Mining & Metallurgy', photo: '/team-christian.jpg', bio: 'BEng Tech (Hons) Metallurgical Engineering, extractive metallurgy, mineral processing, hydrometallurgy and process optimisation.', email: 'chrislukwichi@gmail.com', phone: '+27 61 660 2809' },
    { name: 'Samuel Lukwichi', role: 'Director · Finance & Administration', photo: '/team-samuel.jpg', bio: 'Finance, administration and client relations. EN · FR.', email: 'samylukwichi@gmail.com', phone: '+27 84 746 2893' },
  ],
}

export const contact = {
  kicker: 'Let’s work together',
  title: 'Your problem could be our next solution.',
  body: 'Whether you need to optimise a process, improve recovery, understand your data, automate a task, reduce costs or strengthen your digital presence, LWC Group can help.',
}
