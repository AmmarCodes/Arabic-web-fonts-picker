export interface Font {
  name: string;
  value: string; // CSS font-family value
  url: string; // Google Fonts URL
  category: "serif" | "sans-serif" | "display" | "handwriting";
}

export interface FontCombination {
  name: string;
  heading: Font;
  body: Font;
  description: string;
  badge?: "موصى به" | "عصري" | "تقليدي" | "هندسي" | "رسمي" | "إبداعي";
}

export const fonts: Font[] = [
  {
    name: "Cairo",
    value: '"Cairo", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
    category: "sans-serif",
  },
  {
    name: "Tajawal",
    value: '"Tajawal", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Almarai",
    value: '"Almarai", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
    category: "sans-serif",
  },
  {
    name: "IBM Plex Sans Arabic",
    value: '"IBM Plex Sans Arabic", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Noto Kufi Arabic",
    value: '"Noto Kufi Arabic", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Noto Naskh Arabic",
    value: '"Noto Naskh Arabic", serif',
    url: "https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap",
    category: "serif",
  },
  {
    name: "Amiri",
    value: '"Amiri", serif',
    url: "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    category: "serif",
  },
  {
    name: "Aref Ruqaa",
    value: '"Aref Ruqaa", serif',
    url: "https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap",
    category: "serif",
  },
  {
    name: "Lalezar",
    value: '"Lalezar", display',
    url: "https://fonts.googleapis.com/css2?family=Lalezar&display=swap",
    category: "display",
  },
  {
    name: "Rakkas",
    value: '"Rakkas", display',
    url: "https://fonts.googleapis.com/css2?family=Rakkas&display=swap",
    category: "display",
  },
  {
    name: "El Messiri",
    value: '"El Messiri", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Mada",
    value: '"Mada", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Mada:wght@200..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Readex Pro",
    value: '"Readex Pro", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Alexandria",
    value: '"Alexandria", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Alyamama",
    value: '"Alyamama", serif',
    url: "https://fonts.googleapis.com/css2?family=Alyamama:wght@300..900&display=swap",
    category: "serif",
  },
  {
    name: "Amiri Quran",
    value: '"Amiri Quran", serif',
    url: "https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap",
    category: "serif",
  },
  {
    name: "Aref Ruqaa Ink",
    value: '"Aref Ruqaa Ink", serif',
    url: "https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink&display=swap",
    category: "serif",
  },
  {
    name: "Baloo Bhaijaan 2",
    value: '"Baloo Bhaijaan 2", display',
    url: "https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&display=swap",
    category: "display",
  },
  {
    name: "Beiruti",
    value: '"Beiruti", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Beiruti:wght@200..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Cairo Play",
    value: '"Cairo Play", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&display=swap",
    category: "sans-serif",
  },
  {
    name: "Fustat",
    value: '"Fustat", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap",
    category: "sans-serif",
  },
  {
    name: "Gulzar",
    value: '"Gulzar", serif',
    url: "https://fonts.googleapis.com/css2?family=Gulzar&display=swap",
    category: "serif",
  },
  {
    name: "Harmattan",
    value: '"Harmattan", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Harmattan&display=swap",
    category: "sans-serif",
  },
  {
    name: "Katibeh",
    value: '"Katibeh", display',
    url: "https://fonts.googleapis.com/css2?family=Katibeh&display=swap",
    category: "display",
  },
  {
    name: "Kufam",
    value: '"Kufam", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Kufam:wght@400..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Lateef",
    value: '"Lateef", serif',
    url: "https://fonts.googleapis.com/css2?family=Lateef&display=swap",
    category: "serif",
  },
  {
    name: "Marhey",
    value: '"Marhey", display',
    url: "https://fonts.googleapis.com/css2?family=Marhey:wght@300..700&display=swap",
    category: "display",
  },
  {
    name: "Markazi Text",
    value: '"Markazi Text", serif',
    url: "https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap",
    category: "serif",
  },
  {
    name: "Mirza",
    value: '"Mirza", serif',
    url: "https://fonts.googleapis.com/css2?family=Mirza&display=swap",
    category: "serif",
  },
  {
    name: "Noto Sans Arabic",
    value: '"Noto Sans Arabic", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Parastoo",
    value: '"Parastoo", serif',
    url: "https://fonts.googleapis.com/css2?family=Parastoo:wght@400..700&display=swap",
    category: "serif",
  },
  {
    name: "Playpen Sans Arabic",
    value: '"Playpen Sans Arabic", cursive',
    url: "https://fonts.googleapis.com/css2?family=Playpen+Sans+Arabic:wght@100..800&display=swap",
    category: "handwriting",
  },
  {
    name: "Reem Kufi",
    value: '"Reem Kufi", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Reem Kufi Ink",
    value: '"Reem Kufi Ink", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap",
    category: "sans-serif",
  },
  {
    name: "Rubik",
    value: '"Rubik", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Ruwudu",
    value: '"Ruwudu", serif',
    url: "https://fonts.googleapis.com/css2?family=Ruwudu&display=swap",
    category: "serif",
  },
  {
    name: "Scheherazade New",
    value: '"Scheherazade New", serif',
    url: "https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap",
    category: "serif",
  },
  {
    name: "Vazirmatn",
    value: '"Vazirmatn", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Zain",
    value: '"Zain", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Zain&display=swap",
    category: "sans-serif",
  },
];

export const combinations: FontCombination[] = [
  {
    name: "حداثة وبساطة",
    heading: fonts.find((f) => f.name === "Readex Pro")!,
    body: fonts.find((f) => f.name === "Alexandria")!,
    description:
      "خيار مثالي للواجهات التقنية، التطبيقات، والمشاريع الناشئة التي تتطلب وضوحاً عالياً.",
    badge: "موصى به",
  },
  {
    name: "تراثي رصين",
    heading: fonts.find((f) => f.name === "Amiri")!,
    body: fonts.find((f) => f.name === "Noto Naskh Arabic")!,
    description:
      "تجربة قراءة مريحة للعين، تناسب المدونات، الصحف الرقمية، والنصوص الأدبية الطويلة.",
    badge: "تقليدي",
  },
  {
    name: "طابع هندسي",
    heading: fonts.find((f) => f.name === "Cairo")!,
    body: fonts.find((f) => f.name === "Tajawal")!,
    description:
      "توازن بصري يجمع بين الجرأة في العناوين والبساطة في النصوص، ممتاز للهويات البصرية.",
    badge: "هندسي",
  },
  {
    name: "لمسة إبداعية",
    heading: fonts.find((f) => f.name === "Lalezar")!,
    body: fonts.find((f) => f.name === "Mada")!,
    description:
      "تباين ملفت للنظر بين العناوين الاستعراضية والنصوص الهادئة، مثالي للإعلانات والملصقات.",
    badge: "إبداعي",
  },
  {
    name: "احترافي وجاد",
    heading: fonts.find((f) => f.name === "IBM Plex Sans Arabic")!,
    body: fonts.find((f) => f.name === "IBM Plex Sans Arabic")!,
    description:
      "مظهر حيادي وموثوق، المصدر الأول للوحات التحكم، الأنظمة الإدارية، وقطاع الأعمال.",
    badge: "رسمي",
  },
  {
    name: "انسيابية عصرية",
    heading: fonts.find((f) => f.name === "El Messiri")!,
    body: fonts.find((f) => f.name === "Almarai")!,
    description:
      "طابع إنساني دافئ، يلائم المجلات المنوعة، ومواقع أسلوب الحياة والعلامات التجارية الشخصية.",
    badge: "عصري",
  },
  {
    name: "أناقة كلاسيكية",
    heading: fonts.find((f) => f.name === "Reem Kufi")!,
    body: fonts.find((f) => f.name === "Vazirmatn")!,
    description:
      "تباين رائع بين أصالة الخط الكوفي في العناوين ووضوح الخطوط المعاصرة في النصوص الطويلة.",
    badge: "تقليدي",
  },
  {
    name: "سرد قصصي",
    heading: fonts.find((f) => f.name === "Aref Ruqaa")!,
    body: fonts.find((f) => f.name === "Markazi Text")!,
    description:
      "مثالي للمدونات الشخصية، المجلات الثقافية، والمنصات التي تركز على المحتوى السردي والمقالات الطويلة.",
    badge: "تقليدي",
  },
];
