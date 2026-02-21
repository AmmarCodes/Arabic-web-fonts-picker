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
      <Card className="space-y-4 p-6">
        <h2 className="mb-4 text-xl font-semibold">تخصيص الخطوط</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="heading-font-select">خط العناوين</Label>
            <Select
              value={headingFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onHeadingFontChange(font);
              }}
            >
              <SelectTrigger id="heading-font-select">
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
            <Label htmlFor="body-font-select">خط النصوص</Label>
            <Select
              value={bodyFont.name}
              onValueChange={(val) => {
                const font = fonts.find((f) => f.name === val);
                if (font) onBodyFontChange(font);
              }}
            >
              <SelectTrigger id="body-font-select">
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

        <div className="space-y-4 border-t pt-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label id="heading-size-label" htmlFor="heading-size-slider">
                حجم العناوين
              </Label>
              <span className="text-muted-foreground text-sm">
                {headingSize}px
              </span>
            </div>
            <Slider
              id="heading-size-slider"
              aria-labelledby="heading-size-label"
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
              <Label id="body-size-label" htmlFor="body-size-slider">
                حجم النصوص
              </Label>
              <span className="text-muted-foreground text-sm">
                {bodySize}px
              </span>
            </div>
            <Slider
              id="body-size-slider"
              aria-labelledby="body-size-label"
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
        <div className="grid grid-cols-1 gap-4">
          <TooltipProvider>
            {combinations.map((combo) => {
              const isSelected =
                combo.heading.name === headingFont.name &&
                combo.body.name === bodyFont.name;
              const isInComparison = comparisonCombos.some(
                (c) =>
                  c.heading.name === combo.heading.name &&
                  c.body.name === combo.body.name,
              );

              return (
                <div
                  key={combo.name}
                  className={cn(
                    "group bg-card text-card-foreground hover:border-primary/50 relative cursor-pointer overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md",
                    isSelected &&
                      "border-primary ring-primary bg-primary/5 shadow-md ring-1",
                  )}
                >
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Tooltip>
                        <TooltipTrigger
                          delay={200}
                          render={
                            <div className="flex cursor-pointer items-center">
                              <Checkbox
                                checked={isInComparison}
                                onCheckedChange={() =>
                                  onToggleComparison(combo)
                                }
                                disabled={
                                  !isInComparison &&
                                  comparisonCombos.length >= 3
                                }
                                className="bg-background cursor-pointer disabled:cursor-not-allowed"
                              />
                            </div>
                          }
                        ></TooltipTrigger>
                        <TooltipContent>
                          <p>أضف للمقارنة</p>
                        </TooltipContent>
                      </Tooltip>
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onApplyCombination(combo)}
                      className="focus-visible:ring-primary/50 w-full cursor-pointer rounded-md text-start focus-visible:ring-2 focus-visible:outline-none"
                      aria-label={`تطبيق توليفة ${combo.name}`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <h3
                          className={cn(
                            "text-lg font-bold transition-colors",
                            isSelected
                              ? "text-primary"
                              : "group-hover:text-primary",
                          )}
                        >
                          {combo.name}
                        </h3>
                        {combo.badge && (
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-xs font-medium",
                              combo.badge === "موصى به" &&
                                "bg-teal-500/30 text-teal-800",
                              combo.badge === "عصري" &&
                                "bg-sky-500/20 text-sky-800 dark:text-sky-300",
                              combo.badge === "تقليدي" &&
                                "bg-slate-500/30 text-slate-700 dark:text-slate-300",
                              combo.badge === "هندسي" &&
                                "bg-indigo-500/20 text-indigo-800 dark:text-indigo-300",
                              combo.badge === "رسمي" &&
                                "bg-teal-500/30 text-teal-800 dark:text-teal-300",
                              combo.badge === "إبداعي" &&
                                "bg-cyan-500/20 text-cyan-800 dark:text-cyan-300",
                            )}
                          >
                            {combo.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                        {combo.description}
                      </p>
                      <div className="space-y-2">
                        <div className="bg-muted/50 flex items-center justify-between rounded-md p-2 text-sm">
                          <span className="text-muted-foreground">العنوان</span>
                          <span className="bg-background rounded border px-2 py-0.5 font-mono text-xs font-medium">
                            {combo.heading.name}
                          </span>
                        </div>
                        <div className="bg-muted/50 flex items-center justify-between rounded-md p-2 text-sm">
                          <span className="text-muted-foreground">النص</span>
                          <span className="bg-background rounded border px-2 py-0.5 font-mono text-xs font-medium">
                            {combo.body.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                  {!isSelected && (
                    <div className="bg-primary/5 pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
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
