// French hero copy, overlays ./scrollFrames.js so every frame dir, count, video,
// poster and carousel media path is inherited (only the words change).
// FR is a first draft, flag for client review.
import { scrollFrames as en, homeHero as enHome } from './scrollFrames'

const CAROUSEL_LABELS_FR = {
  engineering: ['Ingénierie à l’usine', 'Minerai brut', 'Extraction à grande échelle', 'Fusion & récupération', 'Au cœur de l’usine', 'Du minerai au métal'],
}

const withCarousel = (slug) =>
  en[slug].carousel
    ? en[slug].carousel.map((c, i) => ({ ...c, label: (CAROUSEL_LABELS_FR[slug] || [])[i] || c.label }))
    : undefined

export const homeHero = {
  ...enHome,
  beats: [
    { t: 'Ingénierie, intelligence\net solutions concrètes.', p: 'Nous transformons l’ingénierie, les données et la technologie en résultats mesurables, pour les entreprises, les mines et l’industrie en Afrique du Sud et en RDC.' },
    { t: 'Quatre expertises. Une équipe.', p: 'Ingénierie · Intelligence · Numérique · Recherche.' },
    { t: 'Une valeur mesurable.', p: 'Du minerai au métal, des données aux décisions.' },
  ],
  cta: [
    { label: 'Commencer par une conversation', href: '#contact' },
    { label: 'Explorer nos divisions', href: '#divisions', ghost: true },
  ],
}

export const scrollFrames = {
  engineering: {
    ...en.engineering,
    scrub: {
      ...en.engineering.scrub,
      kicker: 'LWC · Ingénierie des procédés',
      beats: [
        { t: 'Tout commence par le minerai brut.', p: 'Chaque opération débute avec la matière, et la valeur, dans le sol.' },
        { t: 'Nous déplaçons la terre pour libérer la valeur.', p: 'Une extraction à grande échelle, où l’efficacité se mesure en millions.' },
        { t: 'Nous concevons le procédé.', p: 'Du traitement du minerai à la récupération des métaux, sur toute la chaîne de valeur.' },
        { t: 'Au cœur de l’usine.', p: 'Là où la récupération, le débit et les coûts se gagnent ou se perdent.' },
        { t: 'Nous voyons où la valeur se perd.', p: 'L’ingénierie et l’IA transforment les données d’usine en informations, en temps réel.' },
        { t: 'Du minerai au métal, mesuré.', p: 'Des solutions concrètes qui livrent une valeur bancable.' },
      ],
    },
    vTitle: 'Du minerai à une valeur mesurable.',
    vSub: 'Optimisez la récupération, le débit et les coûts, prouvé par les chiffres.',
    carousel: withCarousel('engineering'),
  },
  intelligence: {
    ...en.intelligence,
    scrub: {
      ...en.intelligence.scrub,
      kicker: 'LWC Intelligence',
      beats: [
        { t: 'Des données aux décisions.', p: 'IA, données, automatisation et simulation.' },
        { t: 'Ingénierie + IA, en temps réel.', p: 'Les données d’usine deviennent des informations, à l’instant même.' },
        { t: 'Nous voyons où la valeur se perd.', p: 'La fiabilité rencontre l’intelligence, sur le terrain.' },
        { t: 'Des informations exploitables.', p: 'Tableaux de bord, prévisions et jumeaux numériques, dans votre main.' },
      ],
    },
    vTitle: 'Des données aux décisions.',
    vSub: 'IA, tableaux de bord et jumeaux numériques qui transforment les données d’usine en action.',
  },
  digital: {
    ...en.digital,
    scrub: {
      ...en.digital.scrub,
      kicker: 'LWC Numérique',
      beats: [
        { t: 'Nous racontons l’histoire qui vend.', p: 'Une étude de cas, les services d’une entreprise d’énergie, présentés à notre façon.' },
        { t: 'De l’installation à l’impact.', p: 'Vidéo premium et 3D qui mettent le travail en valeur.' },
        { t: 'Stockez l’énergie. Ne tombez jamais dans le noir.', p: 'Le produit, montré sous son meilleur jour.' },
        { t: 'Impossible à ignorer.', p: 'Sites web, 3D et vidéo commerciale qui portent votre valeur.' },
      ],
    },
    vTitle: 'Nous racontons l’histoire qui vend.',
    vSub: 'Des expériences numériques premium qui rendent votre valeur impossible à ignorer.',
  },
  academy: {
    ...en.academy,
    scrub: {
      ...en.academy.scrub,
      kicker: 'LWC Académie',
      beats: [
        { t: 'Le parcours de recherche.', p: 'Proposition, revue systématique, méthodologie.' },
        { t: 'Nous formons la prochaine génération.', p: 'Un accompagnement sur tout le parcours, de façon éthique.' },
        { t: 'Une meilleure recherche, en moins de temps.', p: 'Une IA qui réduit le travail répétitif, jamais la rigueur.' },
      ],
    },
    vTitle: 'Nous formons la prochaine génération.',
    vSub: 'Mentorat de recherche et formation à l’IA, éthiquement, sans jamais faire votre travail à votre place.',
  },
}
