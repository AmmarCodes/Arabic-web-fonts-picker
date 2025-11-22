import type { FontCombination } from "@/data/fonts";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ComparisonViewProps {
  combinations: FontCombination[];
  onClose: () => void;
  previewText: {
    heading: string;
    subheading: string;
    paragraph: string;
  };
}

export function ComparisonView({
  combinations,
  onClose,
  previewText,
}: ComparisonViewProps) {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">مقارنة الخطوط</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {combinations.map((combo, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card text-card-foreground shadow-lg p-6 space-y-4"
            >
              <div className="border-b pb-3">
                <h3 className="font-bold text-lg">{combo.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {combo.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">العنوان</p>
                  <h4
                    className="text-2xl font-bold"
                    style={{ fontFamily: combo.heading.value }}
                    dir="rtl"
                  >
                    {previewText.heading}
                  </h4>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    العنوان الفرعي
                  </p>
                  <h5
                    className="text-lg font-medium text-muted-foreground"
                    style={{ fontFamily: combo.heading.value }}
                    dir="rtl"
                  >
                    {previewText.subheading}
                  </h5>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">النص</p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: combo.body.value }}
                    dir="rtl"
                  >
                    {previewText.paragraph.substring(0, 150)}...
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">خط العنوان:</span>
                  <span className="font-medium">{combo.heading.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">خط النص:</span>
                  <span className="font-medium">{combo.body.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
