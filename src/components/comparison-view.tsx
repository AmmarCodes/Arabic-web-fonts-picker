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
    <div className="bg-background/95 fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">مقارنة الخطوط</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="إغلاق المقارنة"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {combinations.map((combo) => (
            <div
              key={`${combo.heading.name}-${combo.body.name}`}
              className="bg-card text-card-foreground space-y-4 rounded-xl border p-6 shadow-lg"
            >
              <div className="border-b pb-3">
                <h3 className="text-lg font-bold">{combo.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {combo.description}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground mb-1 text-xs">العنوان</p>
                  <h4
                    className="text-2xl font-bold"
                    style={{ fontFamily: combo.heading.value }}
                    dir="rtl"
                  >
                    {previewText.heading}
                  </h4>
                </div>

                <div>
                  <p className="text-muted-foreground mb-1 text-xs">
                    العنوان الفرعي
                  </p>
                  <h5
                    className="text-muted-foreground text-lg font-medium"
                    style={{ fontFamily: combo.heading.value }}
                    dir="rtl"
                  >
                    {previewText.subheading}
                  </h5>
                </div>

                <div>
                  <p className="text-muted-foreground mb-1 text-xs">النص</p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: combo.body.value }}
                    dir="rtl"
                  >
                    {previewText.paragraph.substring(0, 150)}...
                  </p>
                </div>
              </div>

              <div className="space-y-1 border-t pt-3 text-xs">
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
