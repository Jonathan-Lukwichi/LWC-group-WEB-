// Per-service heroes.
//  scrub  = immersive scroll-film hero (canvas driven by scroll + idle auto-play).
//           { frames:{dir,count}, video (mobile fallback), poster, kicker, beats, heightVh }
//  vVideo = second hero clip in a device frame (phone 9:16 / tablet 4:3).
//  carousel = optional slides for the CTA section.
export const scrollFrames = {
  engineering: {
    scrub: {
      frames: { dir: '/f-eng', count: 216 }, video: '/v-eng-process.mp4', poster: '/p-eng-process.jpg',
      kicker: 'LWC Process Engineering', heightVh: 460,
      beats: [
        { t: 'It starts with raw ore.',        p: 'Every operation begins with the material — and the money — in the ground.' },
        { t: 'We move earth to unlock value.',  p: 'Extraction at scale, where efficiency is measured in millions.' },
        { t: 'We engineer the process.',        p: 'From mineral processing to metal recovery, across the value chain.' },
        { t: 'Inside the plant.',               p: 'Where recovery, throughput and cost are won or lost.' },
        { t: 'We read where value is lost.',    p: 'Engineering plus AI turn plant data into insight, in real time.' },
        { t: 'From ore to metal — measured.',   p: 'Practical solutions that deliver value you can bank.' },
      ],
    },
    vVideo: '/v-smelt-4x3.mp4', vPoster: '/s1-smelt.jpg', vVariant: 'tablet', vSide: 'left',
    vTitle: 'From ore to measurable value.', vSub: 'Optimise recovery, throughput and cost — proven in the numbers.',
    carousel: [
      { video: '/v-cap-engineering.mp4', img: '/cap-engineering.jpg', label: 'Engineering at the plant' },
      { img: '/s1-ore.jpg',     label: 'Raw ore' },
      { img: '/p-mine-ops.jpg', label: 'Extraction at scale' },
      { img: '/s1-smelt.jpg',   label: 'Smelting & recovery' },
      { img: '/s1-process.jpg', label: 'Inside the plant' },
      { img: '/s1-metal.jpg',   label: 'From ore to metal' },
    ],
  },
  intelligence: {
    scrub: {
      frames: { dir: '/f-intel', count: 198 }, video: '/v-intel-montage.mp4', poster: '/p-intel-montage.jpg',
      kicker: 'LWC Intelligence', heightVh: 380,
      beats: [
        { t: 'From data to decisions.',         p: 'AI, data, automation and simulation.' },
        { t: 'Engineering + AI, in real time.', p: 'Plant data becomes insight, as it happens.' },
        { t: 'We read where value is lost.',    p: 'Reliability meets intelligence, on the floor.' },
        { t: 'Insight you can act on.',          p: 'Dashboards, forecasts and digital twins — in your hand.' },
      ],
    },
    vVideo: '/v-cap-intelligence.mp4', vPoster: '/cap-intelligence.jpg', vVariant: 'phone', vSide: 'right',
    vTitle: 'From data to decisions.', vSub: 'AI, dashboards and digital twins that turn plant data into action.',
  },
  digital: {
    scrub: {
      frames: { dir: '/f-digital', count: 148 }, video: '/v-digital-energy.mp4', poster: '/p-digital-energy.jpg',
      kicker: 'LWC Digital', heightVh: 340,
      beats: [
        { t: 'We tell the story that sells.', p: 'A case study — an energy company’s services, presented our way.' },
        { t: 'From install to impact.',       p: 'Premium video and 3D that make the work shine.' },
        { t: 'Store it. Never go dark.',      p: 'The product, shown at its best.' },
        { t: 'Impossible to ignore.',         p: 'Websites, 3D and commercial video that carry your value.' },
      ],
    },
    vVideo: '/v-digital-energy.mp4', vPoster: '/p-digital-energy.jpg', vVariant: 'tablet', vSide: 'right',
    vTitle: 'We tell the story that sells.', vSub: 'Premium digital experiences that make your value impossible to ignore.',
  },
  academy: {
    scrub: {
      frames: { dir: '/f-academy', count: 126 }, video: '/v-academy-montage.mp4', poster: '/p-academy-montage.jpg',
      kicker: 'LWC Academy', heightVh: 300,
      beats: [
        { t: 'The research journey.',            p: 'Proposal, systematic review, methodology.' },
        { t: 'We build the next generation.',    p: 'Mentoring across the whole journey — ethically.' },
        { t: 'Better research, in less time.',   p: 'AI that cuts the repetitive work, never the rigour.' },
      ],
    },
    vVideo: '/v-cap-academy.mp4', vPoster: '/cap-academy.jpg', vVariant: 'phone', vSide: 'right',
    vTitle: 'We build the next generation.', vSub: 'Research mentoring and AI training — ethically, never doing your work for you.',
  },
}

export const homeHero = {
  frames: { dir: '/f-home', count: 149 }, video: '/v-home-montage.mp4', poster: '/p-home-montage.jpg',
  kicker: 'King of Engineering Solutions', heightVh: 340,
  beats: [
    { t: 'Engineering, intelligence\nand practical solutions.', p: 'We turn engineering, data and technology into measurable results — for businesses, mines and industry across South Africa and the DRC.' },
    { t: 'Four capabilities. One team.', p: 'Engineering · Intelligence · Digital · Research.' },
    { t: 'Measurable value.', p: 'From ore to metal, from data to decisions.' },
  ],
  cta: [
    { label: 'Start with a conversation', href: '#contact' },
    { label: 'Explore our divisions', href: '#divisions', ghost: true },
  ],
}
