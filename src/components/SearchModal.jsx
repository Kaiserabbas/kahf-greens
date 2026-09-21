"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ArrowRight,
  ArrowLeft,
  History,
  AlertCircle,
  Sparkles,
  Layers,
  Trees,
  Sprout,
  Building2,
  CornerDownLeft,
  Trash2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import { useLanguage } from '../contexts/LanguageContext';

// ────────────────────────────────────────────────
// Comprehensive Bilingual Search Index
// ────────────────────────────────────────────────
const searchIndex = [
  // --- Main / Corporate Pages ---
  {
    name: 'Home',
    nameAr: 'الرئيسية',
    path: '/',
    category: 'Company',
    categoryAr: 'الشركة',
    keywords: [
      'kahf greens', 'home', 'welcome', 'sustainable landscaping', 'agriculture uae', 'villas', 'estates', 'dubai',
      'كهف جرينز', 'الرئيسية', 'تنسيق حدائق', 'زراعة', 'دبي', 'أبوظبي', 'الإمارات', 'مزارع', 'فلل'
    ],
    snippet:
      'Welcome to Kahf Greens — your trusted partner for premium sustainable landscaping and agriculture solutions across the UAE. Over 20 years of excellence in desert greening.',
    snippetAr:
      'مرحباً بكم في كهف جرينز — شريككم الموثوق لحلول تنسيق الحدائق المستدامة والتقنيات الزراعية في كافة أنحاء الإمارات لأكثر من 20 عاماً.',
  },
  {
    name: 'About Us',
    nameAr: 'من نحن',
    path: '/about',
    category: 'Company',
    categoryAr: 'الشركة',
    keywords: [
      'about', 'who we are', 'history', 'team', 'mission', 'vision', '20 years', 'leadership', 'credentials',
      'من نحن', 'عن الشركة', 'تاريخنا', 'فريق العمل', 'رؤيتنا', 'رسالتنا', 'الخبرة', '20 عام'
    ],
    snippet:
      'With over 20 years of excellence, Kahf Greens is the UAE leading provider of sustainable landscaping and agricultural solutions for government, commercial, and private clients.',
    snippetAr:
      'بخبرة تمتد لأكثر من 20 عاماً، تعد شركة كهف جرينز الرائدة في دولة الإمارات في تقديم الحلول الزراعية وتنسيق الحدائق للمؤسسات والفلل.',
  },
  {
    name: 'Contact Us',
    nameAr: 'اتصل بنا',
    path: '/contact',
    category: 'Company',
    categoryAr: 'الشركة',
    keywords: [
      'contact', 'get in touch', 'phone', 'email', 'location', 'whatsapp', 'ras al khor', 'quote', 'inquiry',
      'اتصل بنا', 'تواصل معنا', 'رقم الهاتف', 'البريد', 'الموقع', 'واتساب', 'رأس الخور', 'عرض سعر', 'استشارة'
    ],
    snippet:
      'Reach our team in Ras Al Khor, Dubai. Call +971 4 224 0733 / +971 56 509 6880, or submit a request for expert advice and customized quotations.',
    snippetAr:
      'تواصل مع فريقنا في رأس الخور بدبي. اتصل على 0733 224 4 971+ أو راسلنا عبر واتساب للحصول على استشارة وعرض سعر مخصص.',
  },
  {
    name: 'Partners & Clients',
    nameAr: 'شركاؤنا والجهات المعتمدة',
    path: '/partners',
    category: 'Company',
    categoryAr: 'الشركة',
    keywords: [
      'partners', 'clients', 'collaborations', 'dubai municipality', 'dewa', 'sewa', 'government', 'approvals',
      'شركاؤنا', 'الشركاء', 'بلدية دبي', 'ديوا', 'سيوا', 'دبي الجنوب', 'اعتمادات حكومية', 'جهات معتمدة'
    ],
    snippet:
      'Proudly trusted by Dubai Municipality, DEWA, SEWA, Dubai South, Sharjah Municipality, Ajman Municipality, and leading private developers across the UAE.',
    snippetAr:
      'معتمدون ومحل ثقة بلدية دبي، ديوا، سيوا، دبي الجنوب، بلدية الشارقة، وبلدية عجمان وكبرى شركات التطوير العقاري في الإمارات.',
  },
  {
    name: 'Projects & Portfolio',
    nameAr: 'المشاريع وسابقة الأعمال',
    path: '/projects',
    category: 'Company',
    categoryAr: 'الشركة',
    keywords: [
      'projects', 'portfolio', 'case studies', 'dubai marina', 'palm jumeirah', 'university campus', 'villa gardens',
      'مشاريع', 'سابقة الأعمال', 'معرض الصور', 'جي بي آر', 'دبي مارينا', 'خورفكان', 'حدائق الفلل'
    ],
    snippet:
      'Browse our portfolio of completed projects — luxury residential villa landscapes, university campuses, shopping malls, government complexes, and beach resorts across the Emirates.',
    snippetAr:
      'تصفح ألبوم مشاريعنا المنفذة — حدائق الفلل السكنية الفاخرة، المجمعات الحكومية، والمماشي الساحلية والمزارع في مختلف إمارات الدولة.',
  },

  // --- Landscaping Division ---
  {
    name: 'Landscaping Division',
    nameAr: 'قطاع تنسيق الحدائق',
    path: '/landscaping',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'landscaping', 'landscape design', 'garden design', 'outdoor spaces', 'villas', 'contractor dubai',
      'تنسيق حدائق', 'تصميم حدائق', 'لاندسكيب', 'حدائق منزلية', 'مساحات خارجية', 'مقاول حدائق دبي'
    ],
    snippet:
      'Turnkey landscape design, construction, and ongoing maintenance for UAE villas, commercial developments, and public spaces.',
    snippetAr:
      'تصميم وتنفيذ متكامل للحدائق وصيانتها الدورية للفلل السكنية الفاخرة، والمشاريع التجارية، والمساحات العامة في الإمارات.',
  },
  {
    name: 'Garden Maintenance Services',
    nameAr: 'خدمات صيانة الحدائق',
    path: '/landscaping/maintenance',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'maintenance', 'garden care', 'lawn mowing', 'shrub trimming', 'turf care', 'indoor plant care', 'pruning', 'pest control',
      'صيانة الحدائق', 'قص العشب', 'تقليم الأشجار', 'مكافحة الآفات', 'عقود صيانة سنوية', 'ري النباتات'
    ],
    snippet:
      'Professional ongoing villa and estate maintenance: scheduled garden care, precision shrub and hedge trimming, turf aeration, and interior plant management.',
    snippetAr:
      'خدمات صيانة متخصصة للفلل والقصور: رعاية دورية مجدولة، تهذيب الشجيرات، فحص شبكات الري، وتسميد التربة.',
  },
  {
    name: 'New Installation Services',
    nameAr: 'خدمات التنسيق الحديثة',
    path: '/landscaping/new-services',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'new services', 'sustainable landscaping', 'tree planting', 'living green walls', 'artificial green walls', 'artificial grass', 'synthetic turf', 'artificial plants',
      'عشب صناعي', 'جدران خضراء', 'زراعة أشجار', 'نباتات صناعية', 'تنسيق حديث', 'عشب جداري'
    ],
    snippet:
      'Transform outdoor areas with sustainable xeriscaping, mature tree planting, premium turf installation, automated living green walls, and UV-resistant artificial foliage.',
    snippetAr:
      'تطوير المساحات الخارجية بتصاميم الزيريسكيب، غرس الأشجار المعمرة، تركيب العشب الصناعي الفاخر، والجدران الخضراء المقاومة للحرارة.',
  },
  {
    name: 'Landscape Systems',
    nameAr: 'الأنظمة الذكية للحدائق',
    path: '/landscaping/systems',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'systems', 'smart irrigation', 'landscape lighting', 'led lights', 'pathway lighting', 'automated timers', 'water conservation',
      'أنظمة ذكية', 'إضاءة حدائق', 'ري آلي', 'مؤقتات ذكية', 'كشافات ليد', 'إنارة الممرات'
    ],
    snippet:
      'Intelligent outdoor systems: Wi-Fi weather-adaptive smart irrigation controllers, leak detection networks, and energy-efficient LED architectural landscape lighting.',
    snippetAr:
      'أنظمة خارجية ذكية: أجهزة تحكم بالري متصلة بالواي فاي ومتوافقة مع الطقس، شبكات كشف التسرب، وأنظمة إضاءة معمارية موفرة للطاقة.',
  },
  {
    name: 'Outdoor Living Spaces',
    nameAr: 'الجلسات والمظلات الخارجية',
    path: '/landscaping/outdoor-living',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'outdoor living', 'pergola', 'gazebo', 'seating areas', 'shade structure', 'tensile sails', 'fencing', 'privacy panels', 'canopies',
      'برجولات', 'مظلات', 'جلسات خارجية', 'جلسات حدائق', 'أشرعة تظليل', 'سواتر خشبية', 'برجولة ألمنيوم'
    ],
    snippet:
      'Custom pergolas, gazebos, architectural tensile shade structures, built-in sunken seating lounges, and decorative laser-cut privacy fencing for UAE villas.',
    snippetAr:
      'برجولات مصممة خصيصاً، مظلات تظليل معمارية، جلسات غائرة مدمجة، وسواتر خصوصية خشبية ومعدنية مقاومة لحرارة الصيف في الإمارات.',
  },
  {
    name: 'Planters & Urban Dividers',
    nameAr: 'أحواض نباتات وقواطع ديكورية',
    path: '/landscaping/planters',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'planters', 'indoor planters', 'outdoor planters', 'street planters', 'urban dividers', 'planter benches', 'grc pots', 'fiberglass pots',
      'أحواض نباتات', 'أصص زراعية', 'فايبر جلاس', 'أحواض GRC', 'قواطع حدائق', 'أحواض داخلية وخارجية'
    ],
    snippet:
      'Architectural fiberglass and GRC planters for villas, commercial streetscapes, hotel plazas, café divider screens, and custom integrated planter bench seating.',
    snippetAr:
      'أحواض معمارية مصنوعة من الفايبر جلاس والـ GRC للفلل، والمراكز التجارية، وساحات الفنادق مع مقاعد مدمجة وقواطع نباتية أنيقة.',
  },
  {
    name: 'Water Saving (Landscaping)',
    nameAr: 'توفير المياه لتنسيق الحدائق',
    path: '/landscaping/water-saving',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'water saving', 'lite strips', 'lite net', 'super absorbent textiles', 'granules', 'soil moisture', 'hydrogels', 'drought',
      'توفير المياه', 'لايت ستريبس', 'لايت نت', 'شبكات حفظ الرطوبة', 'بوليمرات زراعية', 'ترشيد الري', 'زيريسكيب'
    ],
    snippet:
      'Super-absorbent polymer geotextile strips for pots, underground net rolls for lawns, tree root kits, and water-retaining granules cutting irrigation by up to 50%.',
    snippetAr:
      'شرائح بوليمر جيوتكستايل فائقة الامتصاص للأحواض، شبكات تحت سطحية للعشب، ومحببات حفظ رطوبة التربة تقلل استهلاك الري بنسبة تصل إلى 50%.',
  },
  {
    name: 'Balcony Gardens & Packages',
    nameAr: 'حدائق وباقات الشرفات',
    path: '/landscaping/balcony',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'balcony', 'balcony garden', 'zen starter', 'urban oasis', 'royal retreat', 'apartment terrace', 'penthouse', 'artificial grass', 'green wall dubai',
      'شرفات', 'حدائق الشرفات', 'تراس', 'بنتهاوس', 'شقق دبي', 'عشب جداري', 'عشب صناعي للشرفة'
    ],
    snippet:
      'Turnkey balcony garden packages for Dubai apartments & penthouses: The Zen Starter, The Urban Oasis, and The Royal Retreat with custom green walls and turf.',
    snippetAr:
      'باقات متكاملة لتحويل شرفات الشقق والبنتهاوس إلى واحات خضراء: باقة زين، الواحة الحضرية، والمنتجع الملكي مع جدران نباتية وعشب راقٍ.',
  },
  {
    name: 'Balcony Gallery',
    nameAr: 'معرض صور حدائق الشرفات',
    path: '/landscaping/balcony-gallery',
    category: 'Landscaping',
    categoryAr: 'تنسيق الحدائق',
    keywords: [
      'balcony gallery', 'photos', 'designs', 'high rise balconies', 'terrace ideas', 'dubai apartments',
      'معرض الشرفات', 'صور حدائق الشرفات', 'تصاميم بلكونات', 'أفكار تيراس'
    ],
    snippet:
      'Visual gallery of transformed apartment balconies, luxury sky terraces, and compact urban gardens executed across Dubai and Abu Dhabi.',
    snippetAr:
      'ألبوم صور يعرض نماذج لشرفات الأبراج والشقق السكنية الفاخرة والحدائق المعلقة المنفذة في دبي وأبوظبي.',
  },

  // --- Agriculture Division ---
  {
    name: 'Agriculture Solutions',
    nameAr: 'الحلول والتقنيات الزراعية',
    path: '/agriculture',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'agriculture', 'farming', 'greenhouse', 'irrigation', 'planter pots', 'water saving', 'commercial farm', 'desert agriculture',
      'زراعة', 'تقنيات زراعية', 'بيوت محمية', 'ري زراعي', 'أحواض زراعية', 'مزارع تجارية', 'معدات مزارع'
    ],
    snippet:
      'Complete agricultural technologies engineered for Gulf climatic conditions: commercial greenhouses, precision irrigation, heavy pumps, pots, bags, and machinery.',
    snippetAr:
      'منظومة تقنيات زراعية شاملة مصممة لبيئة الخليج: بيوت محمية تجارية، شبكات ري دقيقة، مضخات، أحواض، أكياس زراعية، ومعدات متطورة.',
  },
  {
    name: 'Planter Pots (Agriculture)',
    nameAr: 'أواني وأحواض الزراعة الحقلية',
    path: '/agriculture/planter-pots',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'planter pots', 'pots', 'containers', 'outdoor growing', 'vertical farming', 'fruit growing', 'large trees', 'date palms',
      'أحواض زراعية', 'أصص زراعية كبيرة', 'زراعة النخيل', 'أواني مشاتل', 'حاويات زراعية', 'زراعة عمودية'
    ],
    snippet:
      'Heavy-duty UV-stabilized agricultural planter pots engineered for outdoor crop cultivation, vertical farming towers, fruit trees, and mature date palms.',
    snippetAr:
      'أحواض زراعية متينة مقاومة للأشعة فوق البنفسجية مصممة للزراعة الحقلية، أبراج الزراعة الرأسية، أشجار الفاكهة، ونخيل التمر.',
  },
  {
    name: 'Planter Bags',
    nameAr: 'أكياس الزراعة والشتلات (جروباج)',
    path: '/agriculture/planter-bags',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'planter bags', 'grow bags', 'woven bags', 'non-woven bags', 'fabric pots', 'nursery bags', 'root aeration',
      'أكياس زراعة', 'جروباج', 'أكياس قماشية', 'مشاتل', 'تهوية الجذور', 'أكياس شتلات'
    ],
    snippet:
      'Woven and non-woven fabric grow bags providing superior root aeration, thermal regulation, and air pruning for commercial tree nurseries and crop farms.',
    snippetAr:
      'أكياس زراعة منسوجة وغير منسوجة توفر تهوية مثالية للجذور وتنظيماً حرارياً عالي الكفاءة لمشاتل الأشجار والمزارع التجارية.',
  },
  {
    name: 'Greenhouses & Accessories',
    nameAr: 'البيوت المحمية والتبريد ومستلزماتها',
    path: '/agriculture/green-houses',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'greenhouses', 'cooling pads', 'shade nets', 'ground covers', 'protected agriculture', 'evaporative cooling', 'polycarbonate',
      'بيوت محمية', 'صوب زراعية', 'وسائد تبريد', 'شباك تظليل', 'أغطية أرضية', 'زراعة محمية', 'بولي كربونات'
    ],
    snippet:
      'Commercial greenhouse structures, evaporative cellulose cooling pads, high-density UV-treated shade nets, and woven ground covers for desert heat mitigation.',
    snippetAr:
      'هياكل بيوت محمية تجارية، وسائد تبريد سليلوزية، شباك تظليل عالية الكثافة مقاومة للشمس، وأغطية أرضية للحد من حرارة الصيف.',
  },
  {
    name: 'Agricultural Irrigation',
    nameAr: 'أنظمة شبكات الري الزراعي',
    path: '/agriculture/irrigation',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'irrigation', 'smart irrigation', 'drip irrigation', 'pipe fittings', 'misting', 'nozzles', 'sprinklers', 'automation',
      'ري زراعي', 'ري بالتنقيط', 'رشاشات زراعية', 'أذرع الري', 'موزعات الري', 'أنظمة التغبيش والضباب'
    ],
    snippet:
      'High-efficiency agricultural drip networks, misting systems, precision spray nozzles, compression fittings, and automated irrigation control valves.',
    snippetAr:
      'شبكات ري زراعي بالتنقيط عالية الكفاءة، أنظمة ضباب وتبريد رذاذي، فوهات رش دقيقة، وصمامات تحكم أوتوماتيكية.',
  },
  {
    name: 'Pumps & Hoses',
    nameAr: 'المضخات وخراطيم المياه الزراعية',
    path: '/agriculture/pumps-and-hoses',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'pumps', 'hoses', 'suction hose', 'delivery hose', 'agricultural pumps', 'submersible pump', 'centrifugal pump',
      'مضخات زراعية', 'مضخات غاطسة', 'خراطيم مياه', 'خراطيم سحب', 'مضخات طرد مركزي', 'مضخات ضغط عالي'
    ],
    snippet:
      'Submersible deep-well pumps, high-pressure centrifugal surface pumps, armored suction hoses, and heavy-duty lay-flat water delivery hoses.',
    snippetAr:
      'مضخات آبار غاطسة، مضخات سطحية عالية الضغط، خراطيم سحب مقواة، وخراطيم تسليم مسطحة متينة للمزارع والمشاريع الكبرى.',
  },
  {
    name: 'Agricultural Machinery',
    nameAr: 'المعدات والآلات الزراعية وميكنة المشاتل',
    path: '/agriculture/machinery',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'machinery', 'pot transportation', 'tray system', 'tree lifting', 'greenhouse equipment', 'nursery logistics', 'automation',
      'آلات زراعية', 'تلقيح النخيل', 'نقل الأحواض', 'سيور الصواني', 'معدات المشاتل', 'عربات نقل الشتلات'
    ],
    snippet:
      'Logistics automation for commercial nurseries: seedling tray transport belts, motorized pot movers, hydraulic tree lifters, and greenhouse sprayers.',
    snippetAr:
      'ميكنة لوجستية للمشاتل والمزارع: سيور نقل صواني الشتلات، ناقلات أحواض آلية، روافع هيدروليكية للأشجار، وأجهزة تلقيح النخيل.',
  },
  {
    name: 'Water Saving (Agriculture)',
    nameAr: 'تقنيات توفير مياه الزراعة',
    path: '/agriculture/water-saving',
    category: 'Agriculture',
    categoryAr: 'الحلول الزراعية',
    keywords: [
      'water saving', 'super absorbent textiles', 'lite net', 'hydrogel', 'granules', 'soil moisture', 'arid farming',
      'توفير مياه الزراعة', 'شبكات لايت نت', 'بوليمر زراعي', 'حفظ رطوبة التربة', 'الزراعة الصحراوية'
    ],
    snippet:
      'Advanced polymer geotextile subterranean nets, root-zone moisture reservoirs, and soil conditioning hydrogel granules designed for harsh desert soils.',
    snippetAr:
      'شبكات بوليمر جيوتكستايل تحت سطحية متطورة، خزانات رطوبة لمنطقة الجذور، ومحببات تحسين التربة المصممة للأراضي الصحراوية.',
  },
];

// ────────────────────────────────────────────────
// Fuse.js Instance
// ────────────────────────────────────────────────
const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'name', weight: 0.35 },
    { name: 'nameAr', weight: 0.35 },
    { name: 'keywords', weight: 0.3 },
    { name: 'snippet', weight: 0.15 },
    { name: 'snippetAr', weight: 0.15 },
    { name: 'category', weight: 0.1 },
    { name: 'categoryAr', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  shouldSort: true,
  ignoreLocation: true,
  minMatchCharLength: 2,
});

const POPULAR_SEARCHES_EN = [
  'Smart Irrigation',
  'Balcony Gardens',
  'Living Green Walls',
  'Pergolas & Gazebos',
  'Planter Pots',
  'Cooling Pads & Shade Nets',
  'Water Saving Hydrogels',
  'Garden Maintenance',
];

const POPULAR_SEARCHES_AR = [
  'أنظمة الري الذكية',
  'حدائق الشرفات',
  'الجدران الخضراء',
  'البرجولات والمظلات',
  'أحواض الزراعة',
  'وسائد التبريد والشباك',
  'تقنيات توفير المياه',
  'صيانة الحدائق',
];

const CATEGORIES_DATA = [
  { key: 'All', labelEn: 'All Results', labelAr: 'جميع النتائج' },
  { key: 'Landscaping', labelEn: 'Landscaping', labelAr: 'تنسيق الحدائق' },
  { key: 'Agriculture', labelEn: 'Agriculture', labelAr: 'الحلول الزراعية' },
  { key: 'Company', labelEn: 'Company', labelAr: 'الشركة' },
];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const resultsContainerRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const navigate = useNavigate();
  const { isRTL } = useLanguage();

  const popularSearches = isRTL ? POPULAR_SEARCHES_AR : POPULAR_SEARCHES_EN;

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('kahf_recent_searches');
      if (stored) {
        setRecentSearches(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load recent searches from localStorage', e);
    }
  }, []);

  const saveRecentSearch = useCallback((searchTerm) => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.query.toLowerCase() !== trimmed.toLowerCase());
      const updated = [{ query: trimmed, timestamp: Date.now() }, ...filtered].slice(0, 6);
      try {
        localStorage.setItem('kahf_recent_searches', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save recent search to localStorage', e);
      }
      return updated;
    });
  }, []);

  const handleClearRecent = useCallback(() => {
    setRecentSearches([]);
    try {
      localStorage.removeItem('kahf_recent_searches');
    } catch (e) {
      console.error('Failed to clear recent searches', e);
    }
  }, []);

  const handleRemoveRecentItem = useCallback((e, queryToRemove) => {
    e.stopPropagation();
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item.query !== queryToRemove);
      try {
        localStorage.setItem('kahf_recent_searches', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to remove recent item', err);
      }
      return updated;
    });
  }, []);

  // Filter & Perform Search
  const performSearch = useCallback((q, cat) => {
    const trimmed = q.trim();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const fuseResults = fuse.search(trimmed);
    let matchedItems = fuseResults.map((r) => r.item);

    // Apply category filter
    if (cat !== 'All') {
      matchedItems = matchedItems.filter((item) => item.category === cat);
    }

    setResults(matchedItems);
    setSelectedIndex(0);
  }, []);

  // Handle Query Changes with Debounce
  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      performSearch(val, activeCategory);
    }, 150);
  };

  // Re-run search if category changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    performSearch(query, cat);
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Navigate to item
  const handleResultClick = useCallback((path) => {
    if (query.trim()) {
      saveRecentSearch(query);
    }
    onClose();
    navigate(path);
  }, [query, saveRecentSearch, onClose, navigate]);

  // Keyboard Navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (results.length > 0) {
          setSelectedIndex((prev) => (prev + 1) % results.length);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (results.length > 0) {
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results.length > 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex].path);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [isOpen, results, selectedIndex, handleResultClick, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsContainerRef.current && results.length > 0) {
      const activeEl = resultsContainerRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, results]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Landscaping':
        return <Trees size={13} className="text-emerald-600" />;
      case 'Agriculture':
        return <Sprout size={13} className="text-amber-600" />;
      case 'Company':
      default:
        return <Building2 size={13} className="text-blue-600" />;
    }
  };

  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case 'Landscaping':
        return 'bg-emerald-50 text-emerald-800 border border-emerald-200/80';
      case 'Agriculture':
        return 'bg-amber-50 text-amber-900 border border-amber-200/80';
      case 'Company':
      default:
        return 'bg-blue-50 text-blue-800 border border-blue-200/80';
    }
  };

  const highlightMatch = (text, q) => {
    if (!text || !q.trim()) return text;
    const escaped = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    return text.replace(regex, '<mark class="bg-amber-100 text-gray-900 font-semibold px-0.5 rounded">$1</mark>');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={isRTL ? 'نافذة البحث الشامل' : 'Search Website'}
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 py-3.5 border-b border-gray-100 gap-3">
              <Search size={20} className="text-[#1a4d2e] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleQueryChange}
                placeholder={
                  isRTL
                    ? 'ابحث في المشاريع، الخدمات، المعدات، أو التقنيات... (اضغط ESC للإغلاق)'
                    : 'Search projects, services, equipment, or guides... (Press ESC to close)'
                }
                className="w-full text-base text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery('');
                    setResults([]);
                    if (inputRef.current) inputRef.current.focus();
                  }}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label={isRTL ? 'مسح البحث' : 'Clear search'}
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={onClose}
                className="px-2 py-1 text-xs font-semibold text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-gray-50/70 border-b border-gray-100 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-1 pr-2 flex items-center gap-1">
                <Layers size={12} />
                <span>{isRTL ? 'الفئات:' : 'Filter:'}</span>
              </span>
              {CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex-shrink-0 ${
                    activeCategory === cat.key
                      ? 'bg-[#1a4d2e] text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-200/70 border border-gray-200/80'
                  }`}
                >
                  {isRTL ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div
              ref={resultsContainerRef}
              className="overflow-y-auto flex-1 p-2 md:p-4 divide-y divide-gray-50"
            >
              {query.trim() === '' ? (
                <div className="py-6 px-2 space-y-6">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3 px-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                          <History size={14} /> {isRTL ? 'عمليات البحث الأخيرة' : 'Recent Searches'}
                        </span>
                        <button
                          onClick={handleClearRecent}
                          className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                        >
                          <Trash2 size={12} /> {isRTL ? 'مسح الكل' : 'Clear all'}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((s) => (
                          <div
                            key={s.query}
                            onClick={() => {
                              setQuery(s.query);
                              performSearch(s.query, activeCategory);
                            }}
                            className="group flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-[#e8f5e9] text-gray-700 hover:text-[#1a4d2e] rounded-full text-xs font-medium cursor-pointer transition-colors"
                          >
                            <span>{s.query}</span>
                            <button
                              onClick={(e) => handleRemoveRecentItem(e, s.query)}
                              className="text-gray-400 hover:text-gray-700 transition-colors"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <Sparkles size={14} className="text-amber-500" /> {isRTL ? 'اقتراحات شائعة في الإمارات' : 'Popular Suggestions in UAE'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            setQuery(item);
                            performSearch(item, activeCategory);
                          }}
                          className="px-3 py-1.5 bg-emerald-50/60 hover:bg-[#1a4d2e] text-[#1a4d2e] hover:text-white border border-emerald-200/60 rounded-full text-xs font-medium transition-all"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center py-4 text-xs text-gray-400 border-t border-gray-100 mt-4">
                    {isRTL ? (
                      <>
                        تلميح: استخدم <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↑</kbd>{' '}
                        <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↓</kbd> للتنقل بين النتائج، واضغط{' '}
                        <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">Enter</kbd> للانتقال المباشر.
                      </>
                    ) : (
                      <>
                        Tip: Use <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↑</kbd>{' '}
                        <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">↓</kbd> to navigate results, and{' '}
                        <kbd className="px-1.5 py-0.5 bg-gray-100 border rounded">Enter</kbd> to select.
                      </>
                    )}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <AlertCircle size={40} className="mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-700 font-semibold text-base">
                    {isRTL ? `لم يتم العثور على نتائج لـ "${query}"` : `No results found for "${query}"`}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
                    {isRTL
                      ? 'يرجى التأكد من صحة الكلمات أو استكشاف موضوعات مثل "الري"، "الشرفات"، "الأحواض"، أو "البيوت المحمية".'
                      : 'Try checking your spelling or explore suggested topics like "irrigation", "balcony", "planters", or "greenhouses".'}
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    const displayName = isRTL ? item.nameAr || item.name : item.name;
                    const displaySnippet = isRTL ? item.snippetAr || item.snippet : item.snippet;
                    const displayCategory = isRTL ? item.categoryAr || item.category : item.category;

                    const highlightedName = highlightMatch(displayName, query);
                    const highlightedSnippet = highlightMatch(displaySnippet, query);

                    return (
                      <div
                        key={item.path}
                        data-index={idx}
                        onClick={() => handleResultClick(item.path)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`p-3.5 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#e8f5e9] text-[#1a4d2e] shadow-sm'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${getCategoryBadgeStyle(
                                item.category
                              )}`}
                            >
                              {getCategoryIcon(item.category)}
                              {displayCategory}
                            </span>
                            <h4
                              className="text-sm md:text-base font-bold text-gray-900 truncate"
                              dangerouslySetInnerHTML={{ __html: highlightedName }}
                            />
                          </div>
                          <p
                            className="text-xs text-gray-600 line-clamp-2 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: highlightedSnippet }}
                          />
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0 pt-1 text-gray-400">
                          {isSelected && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#1a4d2e] font-semibold">
                              <CornerDownLeft size={12} className={isRTL ? 'rotate-180' : ''} />
                              {isRTL ? 'انتقال' : 'Select'}
                            </span>
                          )}
                          <ArrowRight
                            size={16}
                            className={`transition-transform ${
                              isRTL ? 'rotate-180' : ''
                            } ${
                              isSelected ? 'text-[#1a4d2e] translate-x-1' : ''
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Status Bar */}
            <div className="px-4 md:px-6 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>
                {results.length > 0 ? (
                  isRTL ? (
                    <>
                      <strong className="text-gray-700">{results.length}</strong> {results.length === 1 ? 'نتيجة مطابقة' : 'نتائج مطابقة'}
                    </>
                  ) : (
                    <>
                      <strong className="text-gray-700">{results.length}</strong> matching page{results.length > 1 ? 's' : ''}
                    </>
                  )
                ) : (
                  isRTL ? 'التنقل السريع في كهف جرينز' : 'Kahf Greens Fast Navigation'
                )}
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <span>{isRTL ? 'اضغط' : 'Press'}</span>
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[11px]">ESC</kbd>
                <span>{isRTL ? 'للإغلاق' : 'to exit'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
