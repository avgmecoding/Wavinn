"use client";

interface MathSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (val: number) => void;
  unit?: string;
}

export default function MathSlider({ 
  label, 
  value = 0, // Fallback to 0 if undefined
  min, 
  max, 
  step = 1, 
  onChange, 
  unit = "" 
}: MathSliderProps) {
  
  // Ensure we don't call toFixed on a non-number
  const displayValue = typeof value === 'number' ? value : 0;
  
  // Determine decimal places based on step
  const precision = step >= 1 ? 0 : 2;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          {label}
        </label>
        <span className="font-mono text-xs tabular-nums text-black dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">
          {displayValue.toFixed(precision)}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={displayValue}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-gray-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white"
      />
    </div>
  );
}