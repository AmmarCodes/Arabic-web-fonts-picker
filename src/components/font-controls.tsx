import { Font, FontCombination, combinations, fonts } from "@/data/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
        <h2 className="text-xl font-semibold mb-4">Custom Selection</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Heading Font</Label>
            <Select
              value={headingFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onHeadingFontChange(font);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select heading font" />
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
            <Label>Body Font</Label>
            <Select
              value={bodyFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onBodyFontChange(font);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select body font" />
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
        <h2 className="text-xl font-semibold">Popular Combinations</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {combinations.map((combo) => (
            <Card
              key={combo.name}
              className="p-4 cursor-pointer hover:border-primary transition-colors"
              onClick={() => onApplyCombination(combo)}
            >
              <h3 className="font-bold text-lg">{combo.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {combo.description}
              </p>
              <div className="space-y-1 text-sm bg-muted p-2 rounded">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Heading:</span>
                  <span className="font-medium">{combo.heading.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Body:</span>
                  <span className="font-medium">{combo.body.name}</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  onApplyCombination(combo);
                }}
              >
                Apply
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
