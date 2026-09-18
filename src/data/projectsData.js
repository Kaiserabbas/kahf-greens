// Central Projects Data
// Images live in /public/images/projects/<folder>/

const buildImages = (folder, count, ext) =>
  Array.from({ length: count }, (_, i) =>
    `/images/projects/${folder}/${folder}-${String(i).padStart(3, '0')}.${ext}`
  );

export const realProjects = [
  {
    id: 'jbr-exterior',
    slug: 'jbr-exterior',
    title: '1 JBR – Landscaping Works (Exterior)',
    description:
      'Comprehensive exterior landscaping and electrical works at the iconic 1 JBR residential tower, Dubai. Scope covered outdoor lighting installation, hardscape detailing, planters, and full soft-landscape for the tower\'s exterior podium and ground-level amenity zones.',
    longDescription:
      'The 1 JBR Exterior project combined two major disciplines: electrical infrastructure for outdoor lighting and power distribution, and full exterior soft & hard landscaping. Works included installation of weather-resistant lighting fixtures, conduit routing, and control panels alongside planting beds, lawn areas, ornamental trees, and decorative stone pathways along the beachfront promenade façade.',
    category: 'Residential',
    location: 'JBR, Dubai Marina, Dubai',
    year: '2026',
    images: [
      ...buildImages('1jbr-electrical', 12, 'jpeg'),
      ...buildImages('1jbr-exteriors', 81, 'jpg'),
    ],
    coverImage: '/images/projects/1jbr-exteriors/1jbr-exteriors-000.jpg',
  },
  {
    id: 'jbr-interior',
    slug: 'jbr-interior',
    title: '1 JBR – Landscaping Works (Interiors)',
    description:
      'Interior soft-landscaping and planting design for the premium lobby, corridors, and amenity spaces of 1 JBR tower, creating lush, curated green environments inside a luxury high-rise.',
    longDescription:
      'Interior landscaping at 1 JBR involved the supply and installation of tropical and subtropical indoor plant species, custom planter arrangements, moss walls, and bespoke pot selections. Each level\'s planting scheme was designed to complement the interior design palette while ensuring low-maintenance longevity in climate-controlled indoor conditions.',
    category: 'Residential',
    location: 'JBR, Dubai Marina, Dubai',
    year: '2026',
    images: buildImages('1jbr-interiors', 58, 'jpg'),
    coverImage: '/images/projects/1jbr-interiors/1jbr-interiors-000.jpg',
  },
  {
    id: 'jbr-planters-movement',
    slug: 'jbr-planters-movement',
    title: '1 JBR – Planter Movement (Podium to Ground Floor)',
    description:
      'Careful relocation and reinstallation of large decorative planters from the podium level to the ground-floor promenade at 1 JBR, including soil replacement, root-ball management, and re-planting.',
    longDescription:
      'This specialist operation involved assessing the health of mature specimen plants in oversized planters, safely extracting and transporting them from upper-podium level to the ground floor using lifting equipment, refreshing soil media, and replanting with structural support. The project maintained 100% plant survival and minimised disruption to residents and the public.',
    category: 'Residential',
    location: 'JBR, Dubai Marina, Dubai',
    year: '2026',
    images: buildImages('1jbr-planters-movement', 15, 'jpeg'),
    coverImage: '/images/projects/1jbr-planters-movement/1jbr-planters-movement-000.jpeg',
  },
  {
    id: 'jbr-ramp-planters',
    slug: 'jbr-ramp-planters',
    title: '1 JBR – Ramp Planter near Security Office',
    description:
      'Design and installation of bespoke planters along the vehicle ramp adjacent to the security office at 1 JBR, enhancing the arrival experience with lush, structured greenery.',
    longDescription:
      'The ramp planter project required careful structural assessment of load-bearing capacity before installing custom GRP planters filled with lightweight growing media. Plant selection focused on heat-tolerant, low-maintenance species that provide year-round visual appeal and a sense of arrival for residents and visitors entering the 1 JBR building.',
    category: 'Residential',
    location: 'JBR, Dubai Marina, Dubai',
    year: '2026',
    images: buildImages('1jbr-ramp-planters', 25, 'jpg'),
    coverImage: '/images/projects/1jbr-ramp-planters/1jbr-ramp-planters-000.jpg',
  },
  {
    id: 'jbr-murjan-plinth',
    slug: 'jbr-murjan-plinth',
    title: 'JBR Murjan – Concrete Plinth, Bench Stones & Pebble Works',
    description:
      'Construction and finishing of concrete plinths, decorative bench stones, and pebble feature works along the JBR Murjan Walk promenade, blending functionality with coastal aesthetic design.',
    longDescription:
      'The JBR Murjan Concrete Plinth project delivered robust, weather-resistant concrete structures that serve as seating plinths and decorative landscape elements along one of Dubai\'s most frequented beachfront walks. Works included formwork, concrete pours, stone cladding with natural bench stones, and decorative pebble-wash finishes designed to withstand the UAE coastal environment.',
    category: 'Commercial',
    location: 'JBR Murjan Walk, Dubai',
    year: '2026',
    images: buildImages('jbr-murjan-plinth', 22, 'jpg'),
    coverImage: '/images/projects/jbr-murjan-plinth/jbr-murjan-plinth-000.jpg',
  },
  {
    id: 'khorfakkan-lite-soil',
    slug: 'khorfakkan-lite-soil',
    title: 'Lite Soil Trials – Khorfakkan Agriculture & Parks',
    description:
      'Agricultural trials testing lightweight soil media formulations across parks and green zones managed by the Khorfakkan Agriculture & Parks Department, evaluating plant performance and water retention in UAE conditions.',
    longDescription:
      'This technical project partnered with the Khorfakkan Municipality Agriculture & Parks Department to trial Kahf Greens\' proprietary Lite Soil mix — a lightweight, perlite-enriched growing media engineered for rooftop, podium, and planter applications. Trials were conducted across multiple park sites, monitoring plant establishment rates, drainage behaviour, and irrigation efficiency over a growing season. Results demonstrated significant weight savings and improved water retention versus conventional soil.',
    category: 'Government',
    location: 'Khorfakkan, Sharjah',
    year: '2026',
    images: buildImages('khorfakkan-lite-soil', 86, 'jpeg'),
    coverImage: '/images/projects/khorfakkan-lite-soil/khorfakkan-lite-soil-000.jpeg',
  },
];

export const allProjects = realProjects;
