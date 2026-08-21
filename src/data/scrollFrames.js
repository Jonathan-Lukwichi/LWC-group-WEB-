// Per-service heroes.
//  chero  = looping "carousel" video hero (auto-plays, slows on scroll). Optional
//           time-synced captions {at, t, p}. Otherwise a title/sub.
//  vVideo = second hero clip in a device frame (phone 9:16 or tablet 4:3),
//           vVariant 'phone'|'tablet', vSide 'left'|'right', with vTitle/vSub.
export const scrollFrames = {
  engineering: {
    chero: {
      video: '/v-eng-process.mp4', poster: '/p-eng-process.jpg', kicker: 'LWC Process Engineering',
      captions: [
        { at: 0,  t: 'It starts with raw ore.',        p: 'Every operation begins with the material — and the money — in the ground.' },
        { at: 5,  t: 'We move earth to unlock value.',  p: 'Extraction at scale, where efficiency is measured in millions.' },
        { at: 9,  t: 'We engineer the process.',        p: 'From mineral processing to metal recovery, across the value chain.' },
        { at: 14, t: 'Inside the plant.',               p: 'Where recovery, throughput and cost are won or lost.' },
        { at: 19, t: 'We read where value is lost.',    p: 'Engineering plus AI turn plant data into insight, in real time.' },
        { at: 24, t: 'From ore to metal — measured.',   p: 'Practical solutions that deliver value you can bank.' },
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
    chero: {
      video: '/v-intel-montage.mp4', poster: '/p-intel-montage.jpg',
      kicker: 'Division 02 · LWC Intelligence', title: 'From data to decisions.', sub: 'AI · Data · Automation · Simulation',
    },
    vVideo: '/v-cap-intelligence.mp4', vPoster: '/cap-intelligence.jpg', vVariant: 'phone', vSide: 'right',
    vTitle: 'From data to decisions.', vSub: 'AI, dashboards and digital twins that turn plant data into action.',
  },
  digital: {
    chero: {
      video: '/v-digital-energy.mp4', poster: '/p-digital-energy.jpg',
      kicker: 'Division 03 · LWC Digital', title: 'Impossible to ignore.',
      sub: 'Websites, 3D and video — like this energy-company story we produced.',
    },
    vVideo: '/v-digital-energy.mp4', vPoster: '/p-digital-energy.jpg', vVariant: 'tablet', vSide: 'right',
    vTitle: 'We tell the story that sells.', vSub: 'Premium digital experiences that make your value impossible to ignore.',
  },
  academy: {
    chero: {
      video: '/v-cap-academy.mp4', poster: '/cap-academy.jpg',
      kicker: 'Division 04 · LWC Academy', title: 'We build the next generation.', sub: 'Research · Training · Enablement',
    },
    vVideo: '/v-cap-academy.mp4', vPoster: '/cap-academy.jpg', vVariant: 'phone', vSide: 'right',
    vTitle: 'We build the next generation.', vSub: 'Research mentoring and AI training — ethically, never doing your work for you.',
  },
}
