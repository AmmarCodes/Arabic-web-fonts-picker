import { useState, useEffect } from "react";
import { fonts } from "@/data/fonts";
import type { FontCombination } from "@/data/fonts";
import { useFontLoader } from "@/hooks/use-font-loader";
import { FontControls } from "./font-controls";
import { ThemeToggle } from "./theme-toggle";
import { ComparisonView } from "./comparison-view";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Copy } from "lucide-react";

export function FontPicker() {
  const [headingFont, setHeadingFont] = useState(() => {
    const saved = localStorage.getItem("headingFont");
    return saved ? fonts.find((f) => f.name === saved) || fonts[0] : fonts[0];
  });
  const [bodyFont, setBodyFont] = useState(() => {
    const saved = localStorage.getItem("bodyFont");
    return saved ? fonts.find((f) => f.name === saved) || fonts[2] : fonts[2];
  });
  const [headingSize, setHeadingSize] = useState(48);
  const [bodySize, setBodySize] = useState(18);
  const [copied, setCopied] = useState(false);
  const [comparisonCombos, setComparisonCombos] = useState<FontCombination[]>(
    [],
  );
  const [showComparison, setShowComparison] = useState(false);

  useFontLoader(fonts);

  useEffect(() => {
    localStorage.setItem("headingFont", headingFont.name);
    localStorage.setItem("bodyFont", bodyFont.name);
  }, [headingFont, bodyFont]);

  const handleCopyCSS = () => {
    const css = `
/* Heading Font */
@import url('${headingFont.url}');
h1, h2, h3, h4, h5, h6 { font-family: ${headingFont.value}; }

/* Body Font */
@import url('${bodyFont.url}');
body { font-family: ${bodyFont.value}; }
`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const previewText = {
    heading: "الخط العربي هو فن وتصميم",
    subheading: "جماليات الحروف العربية وتنوعها",
    paragraph:
      "يعتبر الخط العربي من أبرز الفنون التي تميزت بها الحضارة العربية والإسلامية. يعتمد هذا الفن على جماليات الحروف العربية وقابليتها للتشكيل والمد والرجع. تتنوع الخطوط العربية بين الكوفي والنسخ والرقعة والديواني والثلث، ولكل منها استخداماته وجمالياته الخاصة.",
    poem: "إِنَّ الَّـذي مَلَأَ اللّـغاتِ مَحـاسِناً .. جَعَلَ الجَمالَ وَسَرَّهُ في الضّادِ",
  };

  const handleToggleComparison = (combo: FontCombination) => {
    setComparisonCombos((prev) => {
      const exists = prev.some(
        (c) =>
          c.heading.name === combo.heading.name &&
          c.body.name === combo.body.name,
      );
      if (exists) {
        return prev.filter(
          (c) =>
            !(
              c.heading.name === combo.heading.name &&
              c.body.name === combo.body.name
            ),
        );
      } else {
        if (prev.length >= 3) return prev;
        return [...prev, combo];
      }
    });
  };

  return (
    <>
      {showComparison && comparisonCombos.length > 0 && (
        <ComparisonView
          combinations={comparisonCombos}
          onClose={() => setShowComparison(false)}
          previewText={previewText}
        />
      )}

      <div className="container mx-auto max-w-7xl space-y-12 px-4 py-12">
        <header className="relative space-y-4 text-center">
          <div className="absolute top-0 left-0">
            <ThemeToggle />
          </div>
          <h1
            className="relative inline-block pb-3 text-5xl font-extrabold tracking-tight text-slate-800 [text-shadow:0_1px_0_rgba(255,255,255,0.62)] before:absolute before:inset-x-8 before:-bottom-1.5 before:h-4 before:rounded-full before:bg-cyan-300/15 before:blur-lg before:content-[''] after:absolute after:inset-x-8 after:bottom-0 after:h-0.5 after:rounded-full after:bg-cyan-500/60 after:content-[''] dark:text-slate-100 dark:[text-shadow:0_1px_0_rgba(15,23,42,0.75)] dark:before:bg-cyan-400/15 dark:after:bg-cyan-300/65"
            style={{ fontFamily: '"Tajawal", sans-serif' }}
          >
            منسق الخطوط العربية
          </h1>
          <p
            className="text-muted-foreground mx-auto max-w-2xl text-xl"
            style={{ fontFamily: '"Vazirmatn", sans-serif' }}
          >
            اكتشف التوليفة المثالية لمشروعك القادم من مجموعة مختارة من خطوط جوجل
            العربية.
          </p>
        </header>

        <main
          id="main-content"
          className="grid items-start gap-8 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px]"
        >
          {/* Font Preview */}
          <div className="group lg:scrollbar-hide relative order-2 lg:sticky lg:top-16 lg:order-1 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
            <div className="bg-card text-card-foreground relative mx-4 overflow-hidden rounded-xl border shadow-xl">
              <div className="absolute top-4 left-4 z-10">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-background/80 hover:bg-background shadow-sm backdrop-blur-sm"
                  onClick={handleCopyCSS}
                >
                  {copied ? (
                    <>
                      <Check className="text-primary ml-2 h-4 w-4" />
                      تم النسخ
                    </>
                  ) : (
                    <>
                      <Copy className="ml-2 h-4 w-4" />
                      نسخ CSS
                    </>
                  )}
                </Button>
              </div>

              <div className="flex min-h-150 flex-col justify-center space-y-10 bg-[radial-gradient(#d7e3f0_1px,transparent_1px)] bg-size-[16px_16px] p-8 md:p-16 dark:bg-[radial-gradient(#243447_1px,transparent_1px)]">
                <p id="editable-preview-hint" className="sr-only">
                  يمكنك تعديل نصوص المعاينة مباشرة.
                </p>
                <div className="space-y-6">
                  <h2
                    className="text-foreground text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
                    style={{
                      fontFamily: headingFont.value,
                      fontSize: `${headingSize}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    aria-label="العنوان (قابل للتعديل)"
                    aria-describedby="editable-preview-hint"
                    dir="rtl"
                  >
                    {previewText.heading}
                  </h2>
                  <h3
                    className="text-muted-foreground text-2xl font-medium md:text-3xl"
                    style={{
                      fontFamily: headingFont.value,
                      fontSize: `${headingSize * 0.6}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    aria-label="العنوان الفرعي (قابل للتعديل)"
                    aria-describedby="editable-preview-hint"
                    dir="rtl"
                  >
                    {previewText.subheading}
                  </h3>
                </div>

                <Separator className="w-1/2!" />

                <div className="space-y-6">
                  <blockquote
                    className="border-primary/50 text-muted-foreground bg-muted/30 mt-8 border-r-4 py-2 pr-6 text-xl md:text-2xl"
                    style={{
                      fontFamily: bodyFont.value,
                      fontSize: `${bodySize * 1.2}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    aria-label="الاقتباس (قابل للتعديل)"
                    aria-describedby="editable-preview-hint"
                    dir="rtl"
                  >
                    {previewText.poem}
                  </blockquote>

                  <p
                    className="text-foreground/80 ml-auto max-w-3xl text-lg leading-relaxed md:text-xl"
                    style={{
                      fontFamily: bodyFont.value,
                      fontSize: `${bodySize}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    aria-describedby="editable-preview-hint"
                    dir="rtl"
                  >
                    {previewText.paragraph}
                  </p>
                  <p
                    className="text-foreground/80 ml-auto max-w-3xl text-lg leading-relaxed md:text-xl"
                    style={{
                      fontFamily: bodyFont.value,
                      fontSize: `${bodySize}px`,
                    }}
                    contentEditable
                    suppressContentEditableWarning
                    aria-describedby="editable-preview-hint"
                    dir="rtl"
                  >
                    يمكنك تجربة الكتابة هنا مباشرة لرؤية كيف يبدو الخط في النصوص
                    الطويلة. اختر التوليفة المناسبة لمشروعك واستمتع بتجربة بصرية
                    فريدة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Font picker and customization */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              <FontControls
                headingFont={headingFont}
                bodyFont={bodyFont}
                headingSize={headingSize}
                bodySize={bodySize}
                comparisonCombos={comparisonCombos}
                onHeadingFontChange={setHeadingFont}
                onBodyFontChange={setBodyFont}
                onHeadingSizeChange={setHeadingSize}
                onBodySizeChange={setBodySize}
                onToggleComparison={handleToggleComparison}
                onShowComparison={() => setShowComparison(true)}
                onApplyCombination={(combo) => {
                  setHeadingFont(combo.heading);
                  setBodyFont(combo.body);
                }}
              />
            </div>
          </div>
        </main>

        <footer className="text-muted-foreground border-t py-8 text-center">
          <p>
            طوّره{" "}
            <a
              href="https://ammar.codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              عمار العقاد
            </a>{" "}
            •{" "}
            <a
              href="https://github.com/AmmarCodes/arabic-web-fonts-picker"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
