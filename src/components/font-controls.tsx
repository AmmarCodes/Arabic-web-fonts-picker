import { combinations, fonts } from "@/data/fonts";
import type { Font, FontCombination } from "@/data/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface FontControlsProps {
  headingFont: Font;
  bodyFont: Font;
  onHeadingFontChange: (font: Font) => void;
  onBodyFontChange: (font: Font) => void;
  onApplyCombination: (combo: FontCombination) => void;
}

export function FontControls({
  headingFont,
  bodyFont,
  onHeadingFontChange,
  onBodyFontChange,
  onApplyCombination,
}: FontControlsProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">تخصيص الخطوط</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>خط العناوين</Label>
            <Select
              value={headingFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onHeadingFontChange(font);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((font) => (
                  <SelectItem key={font.name} value={font.name}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>خط النصوص</Label>
            <Select
              value={bodyFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onBodyFontChange(font);
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fonts.map((font) => (
                  <SelectItem key={font.name} value={font.name}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">توليفات شائعة</h2>
        <div className="grid gap-4 grid-cols-1">
          {combinations.map((combo) => (
            <div
              key={combo.name}
              className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50 cursor-pointer"
              onClick={() => onApplyCombination(combo)}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {combo.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {combo.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded-md">
                    <span className="text-muted-foreground">العنوان</span>
                    <span className="font-medium font-mono text-xs bg-background px-2 py-0.5 rounded border">
                      {combo.heading.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded-md">
                    <span className="text-muted-foreground">النص</span>
                    <span className="font-medium font-mono text-xs bg-background px-2 py-0.5 rounded border">
                      {combo.body.name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
