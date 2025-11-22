import { useState, useEffect } from "react";
import { fonts } from "@/data/fonts";
import { useFontLoader } from "@/hooks/use-font-loader";
import { FontControls } from "./font-controls";
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
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="container mx-auto py-12 px-4 space-y-12 max-w-7xl">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent pb-2">
          منسق الخطوط العربية
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          اكتشف التوليفة المثالية لمشروعك القادم من مجموعة مختارة من خطوط جوجل
          العربية.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] items-start">
        <div className="order-2 lg:order-1 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
          <div className="relative rounded-xl border bg-card text-card-foreground shadow-xl overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <Button
                variant="secondary"
                size="sm"
                className="shadow-sm backdrop-blur-sm bg-background/80 hover:bg-background"
                onClick={handleCopyCSS}
              >
                {copied ? (
                  <>
                    <Check className="ml-2 h-4 w-4 text-green-500" />
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

            <div className="p-8 md:p-16 flex flex-col justify-center space-y-10 min-h-[600px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]">
              <div className="space-y-6">
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
                  style={{ fontFamily: headingFont.value }}
                  contentEditable
                  suppressContentEditableWarning
                  dir="rtl"
                >
                  {previewText.heading}
                </h1>
                <h2
                  className="text-2xl md:text-3xl text-muted-foreground font-medium"
                  style={{ fontFamily: headingFont.value }}
                  contentEditable
                  suppressContentEditableWarning
                  dir="rtl"
                >
                  {previewText.subheading}
                </h2>
              </div>

              <Separator className="bg-border/50" />

              <div className="space-y-6">
                <blockquote
                  className="mt-8 border-r-4 border-primary/50 pr-6 py-2 text-xl md:text-2xl text-muted-foreground bg-muted/30"
                  style={{ fontFamily: headingFont.value }}
                  contentEditable
                  suppressContentEditableWarning
                  dir="rtl"
                >
                  {previewText.poem}
                </blockquote>

                <p
                  className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl ml-auto"
                  style={{ fontFamily: bodyFont.value }}
                  contentEditable
                  suppressContentEditableWarning
                  dir="rtl"
                >
                  {previewText.paragraph}
                </p>
                <p
                  className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl ml-auto"
                  style={{ fontFamily: bodyFont.value }}
                  contentEditable
                  suppressContentEditableWarning
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

        <div className="order-1 lg:order-2">
          <div className="sticky top-8">
            <FontControls
              headingFont={headingFont}
              bodyFont={bodyFont}
              onHeadingFontChange={setHeadingFont}
              onBodyFontChange={setBodyFont}
              onApplyCombination={(combo) => {
                setHeadingFont(combo.heading);
                setBodyFont(combo.body);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
