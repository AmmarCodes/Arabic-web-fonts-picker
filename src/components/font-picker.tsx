import { useState } from "react";
import { fonts } from "@/data/fonts";
import { useFontLoader } from "@/hooks/use-font-loader";
import { FontControls } from "./font-controls";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function FontPicker() {
  const [headingFont, setHeadingFont] = useState(fonts[0]);
  const [bodyFont, setBodyFont] = useState(fonts[2]); // Almarai as default body

  useFontLoader(fonts);

  const previewText = {
    heading: "الخط العربي هو فن وتصميم",
    subheading: "جماليات الحروف العربية وتنوعها",
    paragraph:
      "يعتبر الخط العربي من أبرز الفنون التي تميزت بها الحضارة العربية والإسلامية. يعتمد هذا الفن على جماليات الحروف العربية وقابليتها للتشكيل والمد والرجع. تتنوع الخطوط العربية بين الكوفي والنسخ والرقعة والديواني والثلث، ولكل منها استخداماته وجمالياته الخاصة.",
  };

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Arabic Font Picker
        </h1>
        <p className="text-muted-foreground text-lg">
          Find the perfect font combination for your next project
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px]">
        <div className="space-y-6 order-2 lg:order-1">
          <Card className="min-h-[500px] p-8 md:p-12 flex flex-col justify-center space-y-8 bg-background/50 backdrop-blur border-muted">
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: headingFont.value }}
                contentEditable
                suppressContentEditableWarning
                dir="rtl"
              >
                {previewText.heading}
              </h1>
              <h2
                className="text-2xl md:text-3xl text-muted-foreground"
                style={{ fontFamily: headingFont.value }}
                contentEditable
                suppressContentEditableWarning
                dir="rtl"
              >
                {previewText.subheading}
              </h2>
            </div>
            <Separator />
            <div className="space-y-4">
              <p
                className="text-lg md:text-xl leading-relaxed text-foreground/90"
                style={{ fontFamily: bodyFont.value }}
                contentEditable
                suppressContentEditableWarning
                dir="rtl"
              >
                {previewText.paragraph}
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed text-foreground/90"
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
          </Card>

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                const css = `
/* Heading Font */
@import url('${headingFont.url}');
h1, h2, h3, h4, h5, h6 { font-family: ${headingFont.value}; }

/* Body Font */
@import url('${bodyFont.url}');
body { font-family: ${bodyFont.value}; }
`;
                navigator.clipboard.writeText(css);
                alert("CSS copied to clipboard!");
              }}
            >
              Copy CSS
            </Button>
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
