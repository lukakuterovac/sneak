"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface SizeSelectProps {
  sizes: number[];
}

const SizeSelect = ({ sizes }: SizeSelectProps) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {sizes.map((size) => (
          <Button
            key={size}
            className={`w-full rounded-md p-2 text-center text-base text-black hover:text-white dark:text-white ${selectedSize === size ? "bg-primary text-white" : "bg-secondary"}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
      <Button className="mt-2 w-full" disabled={!selectedSize}>
        Add to cart
      </Button>
    </div>
  );
};

export default SizeSelect;
