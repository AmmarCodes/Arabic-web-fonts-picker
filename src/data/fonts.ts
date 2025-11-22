export interface Font {
  name: string;
  arabicName: string;
  value: string; // CSS font-family value
  url: string; // Google Fonts URL
  category: 'serif' | 'sans-serif' | 'display' | 'handwriting';
}

export interface FontCombination {
  name: string;
  heading: Font;
  body: Font;
  description: string;
}

export const fonts: Font[] = [
  {
    name: 'Cairo',
    arabicName: 'القاهرة',
    value: '"Cairo", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Tajawal',
    arabicName: 'تجوال',
    value: '"Tajawal", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Almarai',
    arabicName: 'المراعي',
    value: '"Almarai", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'IBM Plex Sans Arabic',
    arabicName: 'آي بي إم بليكس',
    value: '"IBM Plex Sans Arabic", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Noto Kufi Arabic',
    arabicName: 'نوتو كوفي',
    value: '"Noto Kufi Arabic", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Noto Naskh Arabic',
    arabicName: 'نوتو نسخ',
    value: '"Noto Naskh Arabic", serif',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap',
    category: 'serif',
  },
  {
    name: 'Amiri',
    arabicName: 'الأميري',
    value: '"Amiri", serif',
    url: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    category: 'serif',
  },
  {
    name: 'Aref Ruqaa',
    arabicName: 'عارف رقعة',
    value: '"Aref Ruqaa", serif',
    url: 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap',
    category: 'serif',
  },
  {
    name: 'Lalezar',
    arabicName: 'لاليزار',
    value: '"Lalezar", display',
    url: 'https://fonts.googleapis.com/css2?family=Lalezar&display=swap',
    category: 'display',
  },
  {
    name: 'Rakkas',
    arabicName: 'رقاص',
    value: '"Rakkas", display',
    url: 'https://fonts.googleapis.com/css2?family=Rakkas&display=swap',
    category: 'display',
  },
   {
    name: 'Changa',
    arabicName: 'تشانغا',
    value: '"Changa", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Changa:wght@200..800&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'El Messiri',
    arabicName: 'المسيري',
    value: '"El Messiri", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400..700&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Mada',
    arabicName: 'مدى',
    value: '"Mada", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Mada:wght@200..900&display=swap',
    category: 'sans-serif',
  },
  {
    name: 'Readex Pro',
    arabicName: 'ريدكس برو',
    value: '"Readex Pro", sans-serif',
    url: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap',
    category: 'sans-serif',
  }
];

export const combinations: FontCombination[] = [
  {
    name: 'عصري ونظيف',
    heading: fonts.find(f => f.name === 'Cairo')!,
    body: fonts.find(f => f.name === 'Almarai')!,
    description: 'مزيج شائع للمواقع التقنية والشركات الناشئة الحديثة.',
  },
  {
    name: 'كلاسيكي ومقروء',
    heading: fonts.find(f => f.name === 'Amiri')!,
    body: fonts.find(f => f.name === 'Noto Naskh Arabic')!,
    description: 'مثالي للمدونات، المواقع الإخبارية، والمحتوى الأدبي.',
  },
  {
    name: 'جريء وهندسي',
    heading: fonts.find(f => f.name === 'Lalezar')!,
    body: fonts.find(f => f.name === 'Tajawal')!,
    description: 'تأثير قوي للعناوين الرئيسية وصفحات التسويق.',
  },
  {
    name: 'رسمي ومهني',
    heading: fonts.find(f => f.name === 'IBM Plex Sans Arabic')!,
    body: fonts.find(f => f.name === 'IBM Plex Sans Arabic')!,
    description: 'موثوق ومحايد، ممتاز لتطبيقات المؤسسات والشركات.',
  },
  {
    name: 'ودود وناعم',
    heading: fonts.find(f => f.name === 'El Messiri')!,
    body: fonts.find(f => f.name === 'Mada')!,
    description: 'مرحب وجذاب، مناسب للعلامات التجارية العصرية ونمط الحياة.',
  }
];
