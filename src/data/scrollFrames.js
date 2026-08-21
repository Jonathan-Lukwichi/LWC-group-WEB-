// Per-service heroes:
//  h      = scroll-scrubbed horizontal frame set (/public/f-<svc>-h). Counts must match disk.
//  vVideo = MOVING 9:16 clip auto-played inside the phone (second hero). vPoster = its still.
export const scrollFrames = {
  engineering: {
    h: { dir: '/f-eng-process-h', count: 186 },
    heroHeight: 420,
    kicker: 'LWC Process Engineering',
    captions: [
      { t: 'It starts with raw ore.',        p: 'Every operation begins with the material — and the money — in the ground.' },
      { t: 'We move earth to unlock value.',  p: 'Extraction at scale, where efficiency is measured in millions.' },
      { t: 'We engineer the process.',        p: 'From mineral processing to metal recovery, across the value chain.' },
      { t: 'Inside the plant.',               p: 'Where recovery, throughput and cost are won or lost.' },
      { t: 'We read where value is lost.',    p: 'Engineering plus AI turn plant data into insight, in real time.' },
      { t: 'From ore to metal — measured.',   p: 'Practical solutions that deliver value you can bank.' },
    ],
    vVideo: '/v-smelt-4x3.mp4', vPoster: '/s1-smelt.jpg', vVariant: 'tablet', vSide: 'left',
    title: 'LWC Process Engineering', sub: 'Mining · Metallurgy · Process Optimisation',
    vTitle: 'From ore to measurable value.', vSub: 'Optimise recovery, throughput and cost — proven in the numbers.',
  },
  intelligence: {
    h: { dir: '/f-intelligence-h', count: 44 },
    vVideo: '/v-int-9x16.mp4', vPoster: '/cap-intelligence.jpg',
    title: 'LWC Intelligence', sub: 'AI · Data · Automation · Simulation',
    vTitle: 'From data to decisions.', vSub: 'AI, dashboards and digital twins that turn plant data into action.',
  },
  digital: {
    h: { dir: '/f-digital-h', count: 55 },
    vVideo: '/v-dig-9x16.mp4', vPoster: '/cap-digital.jpg',
    title: 'LWC Digital', sub: 'Websites · 3D · Video · Experiences',
    vTitle: 'Impossible to ignore.', vSub: 'Premium websites, 3D and commercial video that sell your value.',
  },
  academy: {
    h: { dir: '/f-academy-h', count: 55 },
    vVideo: '/v-acad-9x16.mp4', vPoster: '/cap-academy.jpg',
    title: 'LWC Academy', sub: 'Research · Training · Enablement',
    vTitle: 'We build the next generation.', vSub: 'Research mentoring and AI training — ethically, never doing your work for you.',
  },
}
