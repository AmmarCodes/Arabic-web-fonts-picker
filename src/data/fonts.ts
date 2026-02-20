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
    name: "Alexandria",
    value: '"Alexandria", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Almarai",
    value: '"Almarai", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",
    category: "sans-serif",
  },
  {
    name: "Alyamama",
    value: '"Alyamama", serif',
    url: "https://fonts.googleapis.com/css2?family=Alyamama:wght@300..900&display=swap",
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
    name: "Cairo",
    value: '"Cairo", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
    category: "sans-serif",
  },
  {
    name: "El Messiri",
    value: '"El Messiri", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap",
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
    name: "IBM Plex Sans Arabic",
    value: '"IBM Plex Sans Arabic", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
    category: "sans-serif",
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
    name: "Rakkas",
    value: '"Rakkas", display',
    url: "https://fonts.googleapis.com/css2?family=Rakkas&display=swap",
    category: "display",
  },
  {
    name: "Readex Pro",
    value: '"Readex Pro", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Reem Kufi",
    value: '"Reem Kufi", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap",
    category: "sans-serif",
  },
  {
    name: "Rubik",
    value: '"Rubik", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap",
    category: "sans-serif",
  },
  {
    name: "Scheherazade New",
    value: '"Scheherazade New", serif',
    url: "https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap",
    category: "serif",
  },
  {
    name: "Tajawal",
    value: '"Tajawal", sans-serif',
    url: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
    category: "sans-serif",
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
    name: "توازن عملي",
    heading: fonts.find((f) => f.name === "Tajawal")!,
    body: fonts.find((f) => f.name === "Vazirmatn")!,
    description:
      "يركز على راحة العين أثناء القراءة الطويلة بأسلوب طباعي حديث ومنظم.",
    badge: "موصى به",
  },
  {
    name: "بساطة تقنية",
    heading: fonts.find((f) => f.name === "IBM Plex Sans Arabic")!,
    body: fonts.find((f) => f.name === "Noto Sans Arabic")!,
    description:
      "مزيج عالمي يضمن وضوحاً مثالياً وشاملاً عبر كافة الشاشات والمتصفحات.",
    badge: "عصري",
  },
  {
    name: "احترافي وجاد",
    heading: fonts.find((f) => f.name === "IBM Plex Sans Arabic")!,
    body: fonts.find((f) => f.name === "IBM Plex Sans Arabic")!,
    description:
      "تصميم تقني صارم وموثوق، مثالي للأنظمة الإدارية ولوحات التحكم البرمجية.",
    badge: "رسمي",
  },
  {
    name: "هندسي متكامل",
    heading: fonts.find((f) => f.name === "Cairo")!,
    body: fonts.find((f) => f.name === "Tajawal")!,
    description:
      "توازن بصري فائق يعتمد على الزوايا الحادة، ممتاز للهويات البصرية الحديثة.",
    badge: "هندسي",
  },
  {
    name: "انسيابية عصرية",
    heading: fonts.find((f) => f.name === "El Messiri")!,
    body: fonts.find((f) => f.name === "Almarai")!,
    description:
      "يجمع بين فخامة الخطوط الليّنة ووضوح القراءة في المواقع والمجلات الرقمية.",
    badge: "عصري",
  },
  {
    name: "أناقة مطبوعة",
    heading: fonts.find((f) => f.name === "Readex Pro")!,
    body: fonts.find((f) => f.name === "Alyamama")!,
    description:
      "مزيج فريد يجمع بين قوة العناوين الهندسية ودفء النصوص الطباعية الكلاسيكية.",
    badge: "عصري",
  },
  {
    name: "تراثي رصين",
    heading: fonts.find((f) => f.name === "Amiri")!,
    body: fonts.find((f) => f.name === "Scheherazade New")!,
    description:
      "مزيج كلاسيكي فاخر يجسد أصالة الكتب الأدبية والمحتوى الفكري العريق.",
    badge: "تقليدي",
  },
  {
    name: "سرد قصصي",
    heading: fonts.find((f) => f.name === "Aref Ruqaa")!,
    body: fonts.find((f) => f.name === "Markazi Text")!,
    description:
      "توليفة فنية بروح المخطوطات اليدوية، مخصصة للمقالات الطويلة والمدونات الثقافية.",
    badge: "إبداعي",
  },
  {
    name: "هوية بصرية مبتكرة",
    heading: fonts.find((f) => f.name === "Alexandria")!,
    body: fonts.find((f) => f.name === "Alyamama")!,
    description:
      "توليفة تجمع بين اتساع الخطوط العصرية وتفاصيل الخطوط الورقية لخلق طابع بصري فريد.",
    badge: "إبداعي",
  },
  {
    name: "عفوي وودود",
    heading: fonts.find((f) => f.name === "Playpen Sans Arabic")!,
    body: fonts.find((f) => f.name === "Harmattan")!,
    description:
      "طابع مرح يكسر الرسمية بلمسة يدوية، رائع للمحتوى التعليمي والتطبيقات التفاعلية.",
    badge: "إبداعي",
  },
];
