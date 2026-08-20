// Scroll-cinematic scenarios.
// Each shot: { img, t, p, video? }
//  - img   : still shown as background AND as the <video> poster (always required)
//  - video : OPTIONAL mp4/webm path in /public. When present, Cinematic plays the
//            clip for that shot and falls back to `img` while it loads.
// The images below are the REAL sliced panels from your two Gemini grids.
// To animate a shot: generate a clip from its img (see the video prompts), drop the
// file in /public, and add `video: '/clip.mp4'` to that shot. Nothing else changes.

export const scenario1 = {
  id: 'ore-to-value',
  shots: [
    { img: '/s1-ore.jpg',      video: '/v-s1-ore.mp4',   t: 'It starts with raw ore.',      p: 'Every operation begins with the material — and the money — in the ground.' },
    { img: '/p-mine-ops.jpg',  video: '/v-mine-ops.mp4', t: 'We move earth to unlock value.', p: 'Extraction at scale — where efficiency is measured in millions.' },
    { img: '/s1-smelt.jpg',   video: '/v-s1-smelt.mp4', t: 'We engineer the process.',     p: 'From mineral processing to metal recovery, across the value chain.' },
    { img: '/s1-process.jpg', video: '/v-s1-process.mp4', t: 'Inside the plant.',            p: 'Where recovery, throughput and cost are won or lost.' },
    { img: '/s1-read.jpg',    video: '/v-s1-read.mp4',    t: 'We read where value is lost.', p: 'Engineering plus AI turn plant data into insight — in real time.' },
    { img: '/s1-measure.jpg', t: 'Recovery up. Cost down.',      p: 'Measured improvements — not promises.' },
    { img: '/s1-metal.jpg',   t: 'From ore to metal — measured.',p: 'Practical solutions that deliver value you can bank.' },
  ],
}

export const scenario3 = {
  id: 'four-capabilities',
  shots: [
    { img: '/cap-emblem.jpg',       video: '/v-cap-emblem.mp4', t: 'Engineering. Intelligence. Digital. Research.', p: 'Four capabilities, under one roof.' },
    { img: '/cap-engineering.jpg', video: '/v-cap-engineering.mp4', t: 'We optimise your operations.', p: 'Mining, metallurgy and process engineering.' },
    { img: '/cap-intelligence.jpg', video: '/v-cap-intelligence.mp4', t: 'We turn data into decisions.',     p: 'AI, data, automation and simulation.' },
    { img: '/cap-digital.jpg',      t: 'We make you impossible to ignore.',p: 'Premium websites, 3D and commercial video.' },
    { img: '/cap-academy.jpg',      video: '/v-cap-academy.mp4',      t: 'We build the next generation.',    p: 'Research mentoring and AI training — ethically.' },
    { img: '/cap-team.jpg',         t: 'One team. Measurable value.',      p: 'We turn engineering, data and technology into results.' },
  ],
}
