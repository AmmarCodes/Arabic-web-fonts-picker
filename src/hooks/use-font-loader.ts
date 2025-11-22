import { useEffect } from 'react';
import { Font } from '../data/fonts';

export function useFontLoader(fonts: Font[]) {
  useEffect(() => {
    fonts.forEach(font => {
      const linkId = `font-${font.name.replace(/\s+/g, '-')}`;
      if (!document.getElementById(linkId)) {
        const link = document.createElement('link');
        link.id = linkId;
        link.href = font.url;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    });
  }, [fonts]);
}
