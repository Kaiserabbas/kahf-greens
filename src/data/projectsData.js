// Central Projects Data
// Images live in /public/images/projects/<folder>/

const buildImages = (folder, count, ext = 'jpg') =>
  Array.from({ length: count }, (_, i) =>
    `/images/projects/${folder}/${folder}-${String(i).padStart(3, '0')}.${ext}`
  );

export const realProjects = [
  {
    id: 'jbr-exterior',
    slug: 'jbr-exterior',
    title: '1 JBR – Landscaping Works (Exterior)',
    titleAr: '1 جي بي آر – أعمال تنسيق الحدائق والإضاءة الخارجية',
    description:
      'Comprehensive exterior landscaping and electrical works at the iconic 1 JBR residential tower, Dubai. Scope covered outdoor lighting installation, hardscape detailing, planters, and full soft-landscape for the tower\'s exterior podium and ground-level amenity zones.',
    descriptionAr:
      'أعمال متكاملة لتنسيق الحدائق الخارجية وتمديدات الإضاءة الكهربائية لبرج 1 JBR الفاخر — تشمل الأحواض الزراعية، الأشجار التجميلية، الممرات والإضاءة المقاومة للعوامل الجوية.',
    longDescription:
      'The 1 JBR Exterior project combined two major disciplines: electrical infrastructure for outdoor lighting and power distribution, and full exterior soft & hard landscaping. Works included installation of weather-resistant lighting fixtures, conduit routing, and control panels alongside planting beds, lawn areas, ornamental trees, and decorative stone pathways along the beachfront promenade façade.',
    longDescriptionAr:
      'جمع مشروع 1 JBR الخارجي بين تخصصين رئيسيين: البنية التحتية الكهربائية للإضاءة الخارجية وتوزيع الطاقة، وتنسيق الحدائق الخارجية الصلبة والناعمة. شملت الأعمال تركيب وحدات إضاءة مقاومة للطقس، وتمديد الأنابيب، ولوحات التحكم، إلى جانب الأحواض الزراعية، والمساحات الخضراء، والأشجار التجميلية، والممرات الحجرية المزخرفة.',
    category: 'Residential',
    categoryAr: 'سكني',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    year: '2026',
    images: [
      ...buildImages('1jbr-electrical', 12, 'jpg'),
      ...buildImages('1jbr-exteriors', 81, 'jpg'),
    ],
    coverImage: '/images/projects/1jbr-exteriors/1jbr-exteriors-000.jpg',
  },
  {
    id: 'jbr-interior',
    slug: 'jbr-interior',
    title: '1 JBR – Landscaping Works (Interiors)',
    titleAr: '1 جي بي آر – التنسيق الداخلي والتصميم الأخضر',
    description:
      'Interior soft-landscaping and planting design for the premium lobby, corridors, and amenity spaces of 1 JBR tower, creating lush, curated green environments inside a luxury high-rise.',
    descriptionAr:
      'تنسيق داخلي بتصاميم نباتية مخصصة لردهات وممرات ومرافق برج 1 JBR — نباتات استوائية، أحواض فاخرة وجدران طحالب خضراء مجهزة للمساحات السكنية الراقية.',
    longDescription:
      'Interior landscaping at 1 JBR involved the supply and installation of tropical and subtropical indoor plant species, custom planter arrangements, moss walls, and bespoke pot selections. Each level\'s planting scheme was designed to complement the interior design palette while ensuring low-maintenance longevity in climate-controlled indoor conditions.',
    longDescriptionAr:
      'شمل التنسيق الداخلي في برج 1 JBR توريد وتركيب أنواع نباتية استوائية وشبه استوائية داخلية، وتنسيقات أحواض مخصصة، وجدران طحالب طبيعية. تم تصميم المخطط النباتي لكل دور ليتناغم مع الديكور الداخلي مع ضمان استدامة النباتات وسهولة الصيانة في البيئات المكيفة.',
    category: 'Residential',
    categoryAr: 'سكني',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    year: '2026',
    images: buildImages('1jbr-interiors', 58, 'jpg'),
    coverImage: '/images/projects/1jbr-interiors/1jbr-interiors-000.jpg',
  },
  {
    id: 'jbr-planters-movement',
    slug: 'jbr-planters-movement',
    title: '1 JBR – Planter Movement (Podium to Ground Floor)',
    titleAr: '1 جي بي آر – نقل الأحواض النباتية (من البوديوم إلى الأرضي)',
    description:
      'Careful relocation and reinstallation of large decorative planters from the podium level to the ground-floor promenade at 1 JBR, including soil replacement, root-ball management, and re-planting.',
    descriptionAr:
      'نقل وإعادة تركيب دقيقة للأحواض النباتية الكبيرة من مستوى البوديوم إلى الممشى الأرضي في 1 JBR، بما في ذلك استبدال التربة والعناية بالجذور.',
    longDescription:
      'This specialist operation involved assessing the health of mature specimen plants in oversized planters, safely extracting and transporting them from upper-podium level to the ground floor using lifting equipment, refreshing soil media, and replanting with structural support. The project maintained 100% plant survival and minimised disruption to residents and the public.',
    longDescriptionAr:
      'تضمنت هذه العملية التخصصية تقييم صحة النباتات المعمرة في الأحواض الضخمة، واستخراجها ونقلها بأمان من منصة البوديوم إلى الطابق الأرضي باستخدام معدات رفع حديثة، وتجديد التربة وإعادة زراعتها مع توفير الدعامات الهيكلية. حقق المشروع نسبة نجاح 100% في الحفاظ على النباتات.',
    category: 'Residential',
    categoryAr: 'سكني',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    year: '2026',
    images: buildImages('1jbr-planters-movement', 15, 'jpg'),
    coverImage: '/images/projects/1jbr-planters-movement/1jbr-planters-movement-000.jpg',
  },
  {
    id: 'jbr-ramp-planters',
    slug: 'jbr-ramp-planters',
    title: '1 JBR – Ramp Planter near Security Office',
    titleAr: '1 جي بي آر – أحواض منحدر السيارات بجوار مكتب الأمن',
    description:
      'Design and installation of bespoke planters along the vehicle ramp adjacent to the security office at 1 JBR, enhancing the arrival experience with lush, structured greenery.',
    descriptionAr:
      'تصميم وتركيب أحواض زراعية مخصصة على طول منحدر السيارات الملازم لمكتب الأمن في 1 JBR، مما يعزز مظهر مدخل البرج بنباتات كثيفة ومدروسة.',
    longDescription:
      'The ramp planter project required careful structural assessment of load-bearing capacity before installing custom GRP planters filled with lightweight growing media. Plant selection focused on heat-tolerant, low-maintenance species that provide year-round visual appeal and a sense of arrival for residents and visitors entering the 1 JBR building.',
    longDescriptionAr:
      'تطلب مشروع الأحواض الزراعية للمنحدر تقييماً هيكلياً دقيقاً لسعة تحمل الوزن قبل تركيب أحواض GRP المخصصة المحشوة بوسط زراعي خفيف الوزن. ركز اختيار النباتات على الأنواع المتحملة للحرارة والتي توفر مظهراً جميلاً على مدار العام.',
    category: 'Residential',
    categoryAr: 'سكني',
    location: 'JBR, Dubai Marina, Dubai',
    locationAr: 'جي بي آر، دبي مارينا، دبي',
    year: '2026',
    images: buildImages('1jbr-ramp-planters', 25, 'jpg'),
    coverImage: '/images/projects/1jbr-ramp-planters/1jbr-ramp-planters-000.jpg',
  },
  {
    id: 'jbr-marjan-plinth',
    slug: 'jbr-marjan-plinth',
    title: 'JBR Marjan – Concrete Plinth, Bench Stones & Pebble Works',
    titleAr: 'جي بي آر مرجان – القواعد الخرسانية ومقاعد الأحجار والحصى',
    description:
      'Construction and finishing of concrete plinths, decorative bench stones, and pebble feature works along the JBR Marjan Walk promenade, blending functionality with coastal aesthetic design.',
    descriptionAr:
      'بناء وتشطيب القواعد الخرسانية والمقاعد الحجرية وأعمال الحصى التجميلية على طول ممشى جي بي آر مرجان، بمزيج هندسي يقاوم البيئة الساحلية.',
    longDescription:
      'The JBR Marjan Concrete Plinth project delivered robust, weather-resistant concrete structures that serve as seating plinths and decorative landscape elements along one of Dubai\'s most frequented beachfront walks. Works included formwork, concrete pours, stone cladding with natural bench stones, and decorative pebble-wash finishes designed to withstand the UAE coastal environment.',
    longDescriptionAr:
      'قدم مشروع ممشى جي بي آر مرجان هياكل خرسانية متينة ومقاومة للعوامل الجوية تُستخدم كمقاعد وعناصر جمالية على طول واحد من أكثر المماشي البحرية حيوية في دبي. شملت الأعمال القوالب الخرسانية، والكسوة الحجرية بالأحجار الطبيعية، وتشطيبات الحصى المزخرفة.',
    category: 'Commercial',
    categoryAr: 'تجاري',
    location: 'JBR Marjan Walk, Dubai',
    locationAr: 'ممشى مرجان جي بي آر، دبي',
    year: '2026',
    images: buildImages('jbr-marjan-plinth', 22, 'jpg'),
    coverImage: '/images/projects/jbr-marjan-plinth/jbr-marjan-plinth-000.jpg',
  },
  {
    id: 'khorfakkan-lite-soil',
    slug: 'khorfakkan-lite-soil',
    title: 'Lite Soil Trials – Khorfakkan Agriculture & Parks',
    titleAr: 'تجارب التربة الخفيفة – دائرة الزراعة والحدائق بخورفكان',
    description:
      'Agricultural trials testing lightweight soil media formulations across parks and green zones managed by the Khorfakkan Agriculture & Parks Department, evaluating plant performance and water retention in UAE conditions.',
    descriptionAr:
      'تجارب زراعية واختبارات لمزيج التربة الخفيفة عبر الحدائق والمناطق الخضراء التابعة لدائرة الزراعة والحدائق بخورفكان لتقييم كفاءة احتفاظ المياه.',
    longDescription:
      'This technical project partnered with the Khorfakkan Municipality Agriculture & Parks Department to trial Kahf Greens\' proprietary Lite Soil mix — a lightweight, perlite-enriched growing media engineered for rooftop, podium, and planter applications. Trials were conducted across multiple park sites, monitoring plant establishment rates, drainage behaviour, and irrigation efficiency over a growing season. Results demonstrated significant weight savings and improved water retention versus conventional soil.',
    longDescriptionAr:
      'شراكة تقنية مع دائرة الزراعة والحدائق ببلدية خورفكان لاختبار تربة "لايت سويل" المبتكرة من كهف جرينز — وهي تربة مخصصة للأسطح والأحواض والبوديوم. أظهرت النتائج توفيراً كبيراً في الوزن وتحسيناً ملحوظاً في قدرة التربة على الاحتفاظ بالماء مقارنة بالتربة التقليدية.',
    category: 'Government',
    categoryAr: 'حكومي',
    location: 'Khorfakkan, Sharjah',
    locationAr: 'خورفكان، الشارقة',
    year: '2026',
    images: buildImages('khorfakkan-lite-soil', 86, 'jpg'),
    coverImage: '/images/projects/khorfakkan-lite-soil/khorfakkan-lite-soil-000.jpg',
  },
];

export const getTranslatedProject = (project, isRTL) => {
  if (!project) return null;
  if (!isRTL) return project;
  return {
    ...project,
    title: project.titleAr || project.title,
    description: project.descriptionAr || project.description,
    longDescription: project.longDescriptionAr || project.longDescription,
    category: project.categoryAr || project.category,
    location: project.locationAr || project.location,
  };
};

export const allProjects = realProjects;
