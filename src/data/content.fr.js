// French copy — mirrors ./content.js. Media/asset paths are inherited from the
// English source by overlay, so only text can differ (no path drift).
// NOTE: FR is a first draft — flag for client review before treating as final.
import * as en from './content'

export const brand = {
  ...en.brand,
  tagline: 'Nous transformons l’ingénierie, les données et la technologie en solutions concrètes qui produisent des résultats mesurables.',
  regions: 'Afrique du Sud · RDC',
}

export const nav = [
  { label: 'Ingénierie', href: '#engineering' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Numérique', href: '#digital' },
  { label: 'Académie', href: '#academy' },
  { label: 'Équipe', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const home = {
  hero: {
    ...en.home.hero,
    title: 'Ingénierie, intelligence\net solutions concrètes.',
    sub: 'Nous transformons l’ingénierie, les données et la technologie en solutions concrètes qui produisent des résultats mesurables — pour les entreprises, les mines et les opérations industrielles en Afrique du Sud et en RDC.',
  },
  about: {
    kicker: 'Qui nous sommes',
    title: 'Quatre expertises. Un but : créer de la valeur mesurable.',
    body: 'LWC Group est une société sud-africaine d’ingénierie et de technologie qui aide les entreprises, les mines et les organisations industrielles à améliorer leurs performances, réduire leurs coûts et prendre de meilleures décisions. Nous réunissons l’ingénierie, l’intelligence artificielle, les données, la métallurgie, la simulation et la conception numérique sous un même toit — et nous travaillons en anglais et en français.',
  },
  approach: [
    { n: '1', name: 'Comprendre', p: 'le problème' },
    { n: '2', name: 'Analyser', p: 'données & procédés' },
    { n: '3', name: 'Concevoir', p: 'la solution' },
    { n: '4', name: 'Prouver', p: 'le résultat' },
    { n: '5', name: 'Déployer', p: 'ce qui fonctionne' },
  ],
  proof: {
    kicker: 'Valeur prouvée',
    title: 'Nous ne faisons pas que parler de résultats. Nous les mesurons.',
    body: 'Dans un projet de MSc appliqué, nous avons transformé des données hospitalières réelles en prévision par apprentissage automatique, outils de décision, simulation et jumeau numérique, avec une application déployée.',
    kpi: 'R170 000 – R915 000',
    kpiLabel: 'Économies annuelles potentielles indiquées par l’analyse',
    kpiNote: 'Fourchette illustrative basée sur les scénarios analysés — ce n’est pas une économie garantie.',
  },
}

// Per-division French overlays (keeps slug/no/name/hero image from EN).
const DIV_FR = {
  engineering: {
    tag: 'Mines · Métallurgie · Optimisation des procédés',
    lead: 'Optimiser les procédés. Améliorer la récupération. Réduire les pertes.',
    intro: 'Notre expertise Mines & Métallurgie couvre toute la chaîne de valeur des minerais — du traitement du minerai et de la métallurgie extractive à l’hydrométallurgie et à la récupération des métaux. Nous rendons vos données d’usine exploitables et transformons des procédés métallurgiques complexes en valeur mesurable.',
    pillars: [
      { t: 'Traitement du minerai', items: ['Concassage & broyage', 'Classification', 'Flottation', 'Décantation', 'Conception de procédés', 'Bilans matières'] },
      { t: 'Métallurgie extractive', items: ['Pyrométallurgie', 'Hydrométallurgie', 'Lixiviation & récupération', 'Extraction par solvant', 'Fusion & affinage', 'Comptabilité métallurgique'] },
      { t: 'Hydrométallurgie', items: ['Lixiviation acide & alcaline', 'Séparation solide–liquide', 'Échange d’ions', 'Précipitation', 'Électrolyse (electrowinning)', 'Purification des solutions'] },
    ],
    chain: ['Comminution', 'Concentration', 'Lixiviation', 'Séparation S–L', 'Récupération', 'Affinage'],
    deliver: ['Optimisation des procédés & efficacité', 'Comptabilité métallurgique & bilan matières', 'Analyse de récupération & de procédé', 'Analyse des défaillances', 'Contrôle qualité & échantillonnage', 'Opérations sûres et durables'],
  },
  intelligence: {
    tag: 'IA · Données · Automatisation · Simulation',
    lead: 'Des données complexes à de meilleures décisions.',
    intro: 'Nous appliquons l’IA, l’apprentissage automatique et la simulation à l’ingénierie et aux opérations — en automatisant la modélisation, l’analyse répétitive, l’optimisation et les décisions. Nous gravissons l’échelle de valeur des données seulement tant que cela rapporte.',
    ladder: ['Numériser', 'Tableau de bord', 'Outil de décision', 'Modèle prédictif', 'Simulation', 'Jumeau numérique'],
    pillars: [
      { t: 'Données & analytique', items: ['Nettoyage & structuration des données', 'Tableaux de bord & KPI', 'Analyse statistique', 'Comptabilité opérationnelle', 'Automatisation des rapports'] },
      { t: 'IA & apprentissage automatique', items: ['Prévision de la demande', 'Modèles prédictifs', 'Détection d’anomalies', 'Automatisation par IA', 'Aide à la décision'] },
      { t: 'Simulation & jumeaux numériques', items: ['Événements discrets & agents', 'Dynamique des systèmes (AnyLogic / SimPy)', 'Jumeaux numériques', 'Optimisation', 'Tester avant d’investir'] },
    ],
    tools: ['Python', 'Power BI', 'Azure ML', 'AnyLogic', 'SimPy', 'ONNX', 'Six Sigma'],
    deliver: ['Tableaux de bord', 'Prévisions', 'Optimisation', 'Automatisations IA', 'Jumeaux numériques', 'Outils d’aide à la décision'],
  },
  digital: {
    tag: 'Sites web · 3D · Vidéo · Expériences numériques',
    lead: 'Rendez votre entreprise impossible à ignorer.',
    intro: 'Nous combinons technologie et communication visuelle pour aider les entreprises à bâtir une présence numérique plus forte — sites web premium, expériences 3D et contenus commerciaux à fort impact qui communiquent la valeur que vous créez.',
    services: ['Sites web premium', 'Sites 3D & visualisation produit', 'Vidéo commerciale', 'Publicité assistée par IA', 'Expériences numériques', 'Contenu en anglais & français'],
  },
  academy: {
    tag: 'Recherche · Formation · Accompagnement',
    lead: 'Faites une meilleure recherche, en moins de temps.',
    intro: 'Pour les étudiants de troisième cycle et les professionnels — mentorat, soutien technique et outils tout au long du parcours de recherche. Nous développons vos compétences ; nous ne faisons jamais le travail à votre place.',
    offers: [
      { t: 'Mentorat de recherche & soutien technique', p: 'Proposition · revue systématique · méthodologie · simulation (AnyLogic · COMSOL · MATLAB · Python) · analyse.' },
      { t: 'Automatisation des flux de recherche par IA', p: 'Automatisez les tâches répétitives — recherche, références, mise en forme, données, code standard — en économisant jusqu’à 50 % du temps mécanique, de façon éthique.' },
      { t: 'Formations & ateliers', p: 'Nous apprenons aux ingénieurs et aux équipes à construire leur propre automatisation IA pour la recherche, les rapports, la modélisation et l’optimisation.' },
    ],
    promise: 'Nous vous aidons à apprendre, progresser et produire un meilleur travail — dans le respect de l’intégrité académique. Nous développons vos compétences ; nous ne faisons jamais le travail à votre place.',
  },
}

export const divisions = en.divisions.map((d) => ({ ...d, ...DIV_FR[d.slug] }))

const ROLES_FR = ['Fondateur & PDG', 'Directeur · Mines & Métallurgie', 'Directeur · Finance & Administration']
const BIOS_FR = [
  'Candidat au MSc en génie industriel ; IA, données & simulation — transformer des données complexes et des défis opérationnels en solutions concrètes.',
  'BEng Tech (Hons) en génie métallurgique — métallurgie extractive, traitement du minerai, hydrométallurgie et optimisation des procédés.',
  'Finance, administration et relations clients. EN · FR · Swahili · Lingala.',
]
export const team = {
  kicker: 'Notre équipe',
  title: 'Des esprits d’ingénieurs. Une vision business.',
  members: en.team.members.map((m, i) => ({ ...m, role: ROLES_FR[i], bio: BIOS_FR[i] })),
}

export const contact = {
  kicker: 'Travaillons ensemble',
  title: 'Votre problème pourrait être notre prochaine solution.',
  body: 'Que vous ayez besoin d’optimiser un procédé, d’améliorer la récupération, de comprendre vos données, d’automatiser une tâche, de réduire vos coûts ou de renforcer votre présence numérique — LWC Group peut vous aider.',
}
