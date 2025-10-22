
import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit?: string;
}

export const Slider: React.FC<SliderProps> = ({ label, value, min, max, step, onChange, unit }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center text-sm">
        <label className="font-medium text-slate-300">{label}</label>
        <span className="px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-200">
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer range-sm accent-indigo-500"
      />
    </div>
  );
};
