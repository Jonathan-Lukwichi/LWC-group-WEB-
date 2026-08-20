// Scrollable cinematic hero shots for each service page (fed to <Cinematic>).
// Videos fall back to their poster image until present.
export const serviceHeroes = {
  engineering: [
    { img: '/cap-engineering.jpg', video: '/v-cap-engineering.mp4', t: 'LWC Engineering', p: 'Mining · Metallurgy · Process Optimisation' },
    { img: '/p-eng-inspect.jpg',   video: '/v-eng-inspect.mp4',     t: 'Optimise processes.',   p: 'Improve recovery. Reduce losses.' },
    { img: '/s1-process.jpg',      video: '/v-s1-process.mp4',      t: 'From ore to metal.',    p: 'Across the minerals value chain.' },
    { img: '/s1-metal.jpg',        t: 'Measurable value.',          p: 'Recovery up. Cost down.' },
  ],
  intelligence: [
    { img: '/cap-intelligence.jpg', video: '/v-cap-intelligence.mp4', t: 'LWC Intelligence',        p: 'AI · Data · Automation · Simulation' },
    { img: '/s1-read.jpg',          video: '/v-s1-read.mp4',          t: 'From data to decisions.', p: 'Engineering + AI, in real time.' },
    { img: '/p-dashboards.jpg',     t: 'The Data Value Ladder.',      p: 'We climb only as far as it pays.' },
  ],
  digital: [
    { img: '/cap-digital.jpg', t: 'LWC Digital',            p: 'Websites · 3D · Video · Experiences' },
    { img: '/p-website.jpg',   t: 'Impossible to ignore.',  p: 'Premium websites and 3D experiences.' },
    { img: '/cap-emblem.jpg',  video: '/v-cap-emblem.mp4',  t: 'Commercial video.',      p: 'High-impact content that sells.' },
  ],
  academy: [
    { img: '/cap-academy.jpg', video: '/v-cap-academy.mp4', t: 'LWC Academy',            p: 'Research · Training · Enablement' },
    { img: '/p-research.jpg',  t: 'Better research, faster.', p: 'Mentoring across the whole journey — ethically.' },
  ],
}

// Vertical dynamic-marquee image sets per service (portrait tiles that auto-scroll).
export const marqueeImages = {
  engineering: ['/cap-engineering.jpg', '/p-mine-ops.jpg', '/s1-ore.jpg', '/s1-smelt.jpg', '/s1-process.jpg', '/s1-metal.jpg', '/p-eng-inspect.jpg', '/s1-read.jpg', '/p-plant-interior.jpg'],
  intelligence: ['/cap-intelligence.jpg', '/s1-read.jpg', '/p-dashboards.jpg', '/p-server.jpg', '/p-datacenter.jpg', '/p-architecture.jpg', '/s1-measure.jpg', '/cap-digital.jpg', '/p-eng-inspect.jpg'],
  digital: ['/cap-digital.jpg', '/p-website.jpg', '/p-architecture.jpg', '/cap-emblem.jpg', '/p-datacenter.jpg', '/cap-intelligence.jpg', '/p-dashboards.jpg', '/cap-engineering.jpg', '/s1-metal.jpg'],
  academy: ['/cap-academy.jpg', '/p-research.jpg', '/s1-read.jpg', '/p-dashboards.jpg', '/cap-intelligence.jpg', '/p-server.jpg', '/s1-measure.jpg', '/cap-digital.jpg', '/p-architecture.jpg'],
}
