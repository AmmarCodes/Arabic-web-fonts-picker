import { cn } from "@/lib/utils";
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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Eye } from "lucide-react";

interface FontControlsProps {
  headingFont: Font;
  bodyFont: Font;
  headingSize: number;
  bodySize: number;
  comparisonCombos: FontCombination[];
  onHeadingFontChange: (font: Font) => void;
  onBodyFontChange: (font: Font) => void;
  onHeadingSizeChange: (size: number) => void;
  onBodySizeChange: (size: number) => void;
  onToggleComparison: (combo: FontCombination) => void;
  onShowComparison: () => void;
  onApplyCombination: (combo: FontCombination) => void;
}

export function FontControls({
  headingFont,
  bodyFont,
  headingSize,
  bodySize,
  comparisonCombos,
  onHeadingFontChange,
  onBodyFontChange,
  onHeadingSizeChange,
  onBodySizeChange,
  onToggleComparison,
  onShowComparison,
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

        <div className="pt-4 border-t space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>حجم العناوين</Label>
              <span className="text-sm text-muted-foreground">
                {headingSize}px
              </span>
            </div>
            <Slider
              value={[headingSize]}
              onValueChange={(value) => onHeadingSizeChange(value[0])}
              min={24}
              max={96}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>حجم النصوص</Label>
              <span className="text-sm text-muted-foreground">
                {bodySize}px
              </span>
            </div>
            <Slider
              value={[bodySize]}
              onValueChange={(value) => onBodySizeChange(value[0])}
              min={12}
              max={32}
              step={1}
              className="w-full"
            />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">توليفات شائعة</h2>
          {comparisonCombos.length > 0 && (
            <Button
              variant="default"
              size="sm"
              onClick={onShowComparison}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              مقارنة ({comparisonCombos.length})
            </Button>
          )}
        </div>
        <div className="grid gap-4 grid-cols-1">
          <TooltipProvider>
            {combinations.map((combo) => {
              const isSelected =
                combo.heading.name === headingFont.name &&
                combo.body.name === bodyFont.name;
              const isInComparison = comparisonCombos.some(
                (c) =>
                  c.heading.name === combo.heading.name &&
                  c.body.name === combo.body.name
              );

              return (
                <div
                  key={combo.name}
                  className={cn(
                    "group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50",
                    isSelected &&
                      "border-primary ring-1 ring-primary shadow-md bg-primary/5"
                  )}
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => onApplyCombination(combo)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center"
                            >
                              <Checkbox
                                checked={isInComparison}
                                onCheckedChange={() =>
                                  onToggleComparison(combo)
                                }
                                disabled={
                                  !isInComparison &&
                                  comparisonCombos.length >= 3
                                }
                                className="bg-background"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>أضف للمقارنة</p>
                          </TooltipContent>
                        </Tooltip>
                        <h3
                          className={cn(
                            "font-bold text-lg transition-colors",
                            isSelected
                              ? "text-primary"
                              : "group-hover:text-primary"
                          )}
                        >
                          {combo.name}
                        </h3>
                        {combo.badge && (
                          <span
                            className={cn(
                              "text-xs px-2 py-0.5 rounded-full font-medium",
                              combo.badge === "موصى به" &&
                                "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                              combo.badge === "عصري" &&
                                "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                              combo.badge === "تقليدي" &&
                                "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                              combo.badge === "هندسي" &&
                                "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                              combo.badge === "رسمي" &&
                                "bg-lime-500/10 text-lime-600 dark:text-lime-400",
                              combo.badge === "إبداعي" &&
                                "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                            )}
                          >
                            {combo.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                        )}
                      </div>
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
                  {!isSelected && (
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  )}
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
