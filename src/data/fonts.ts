export interface Font {
  name: string;
  value: string; // CSS font-family value
  url: string; // Google Fonts URL
  category: 'serif' | 'sans-serif' | 'display' | 'handwriting';
}

export interface FontCombination {
  name: string;
  heading: Font;
  body: Font;
  description: string;
  // Added 'رسمي' (Formal) and 'إبداعي' (Creative) to give you more descriptive options
  badge?: "موصى به" | "عصري" | "تقليدي" | "هندسي" | "رسمي" | "إبداعي"; 
}

export const fonts: Font[] = [
  {
    name: 'Cairo',
    value: '"Cairo", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Tajawal',
    value: '"Tajawal", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Almarai',
    value: '"Almarai", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'IBM Plex Sans Arabic',
    value: '"IBM Plex Sans Arabic", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Noto Kufi Arabic',
    value: '"Noto Kufi Arabic", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Noto Naskh Arabic',
    value: '"Noto Naskh Arabic", serif',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap',
    category: 'serif',
  },
  {
    name: 'Amiri',
    value: '"Amiri", serif',
    url: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    category: 'serif',
  },
  {
    name: 'Aref Ruqaa',
    value: '"Aref Ruqaa", serif',
    url: 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap',
    category: 'serif',
  },
  {
    name: 'Lalezar',
    value: '"Lalezar", display',
    url: 'https://fonts.googleapis.com/css2?family=Lalezar&display=swap',
    category: 'display',
  },
  {
    name: 'Rakkas',
    value: '"Rakkas", display',
    url: 'https://fonts.googleapis.com/css2?family=Rakkas&display=swap',
    category: 'display',
  },
   {
    name: 'Changa',
    value: '"Changa", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'El Messiri',
    value: '"El Messiri", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Mada',
    value: '"Mada", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Mada:wght@200..900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Readex Pro',
    value: '"Readex Pro", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap',
    category: 'sans-serif',
  }
];

export const combinations: FontCombination[] = [
  {
    name: 'حداثة وبساطة',
    heading: fonts.find(f => f.name === 'Readex Pro')!,
    body: fonts.find(f => f.name === 'Noto Kufi Arabic')!,
    description: 'خيار مثالي للواجهات التقنية، التطبيقات، والمشاريع الناشئة التي تتطلب وضوحاً عالياً.',
    badge: 'موصى به',
  },
  {
    name: 'تراثي رصين',
    heading: fonts.find(f => f.name === 'Amiri')!, // Swapped Heading to Amiri (better contrast)
    body: fonts.find(f => f.name === 'Noto Naskh Arabic')!, // Naskh is better for long body text
    description: 'تجربة قراءة مريحة للعين، تناسب المدونات، الصحف الرقمية، والنصوص الأدبية الطويلة.',
    badge: 'تقليدي',
  },
  {
    name: 'طابع هندسي',
    heading: fonts.find(f => f.name === 'Cairo')!,
    body: fonts.find(f => f.name === 'Tajawal')!,
    description: 'توازن بصري يجمع بين الجرأة في العناوين والبساطة في النصوص، ممتاز للهويات البصرية.',
    badge: 'هندسي',
  },
  {
    name: 'لمسة إبداعية', 
    heading: fonts.find(f => f.name === 'Lalezar')!,
    body: fonts.find(f => f.name === 'Mada')!,
    description: 'تباين ملفت للنظر بين العناوين الاستعراضية والنصوص الهادئة، مثالي للإعلانات والملصقات.',
    badge: 'إبداعي', 
  },
  {
    name: 'احترافي وجاد',
    heading: fonts.find(f => f.name === 'IBM Plex Sans Arabic')!,
    body: fonts.find(f => f.name === 'IBM Plex Sans Arabic')!,
    description: 'مظهر حيادي وموثوق، المصدر الأول للوحات التحكم، الأنظمة الإدارية، وقطاع الأعمال.',
    badge: 'رسمي', 
  },
  {
    name: 'انسيابية عصرية',
    heading: fonts.find(f => f.name === 'El Messiri')!,
    body: fonts.find(f => f.name === 'Almarai')!,
    description: 'طابع إنساني دافئ، يلائم المجلات المنوعة، ومواقع أسلوب الحياة والعلامات التجارية الشخصية.',
    badge: 'عصري',
  },
];