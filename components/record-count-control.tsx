"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface RecordCountControlProps {
  count: number;
  setCount: (count: number) => void;
  min?: number;
  max?: number;
}

export function RecordCountControl({
  count,
  setCount,
  min = 1,
  max = 1000
}: RecordCountControlProps) {

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setCount(Math.max(min, Math.min(max, value)));
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <span className="text-sm font-medium">Number of records:</span>
      <div className="flex items-center max-w-[180px]">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-r-none"
          onClick={handleDecrement}
          disabled={count <= min}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <Input
          type="number"
          value={count}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="h-8 w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-l-none"
          onClick={handleIncrement}
          disabled={count >= max}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
