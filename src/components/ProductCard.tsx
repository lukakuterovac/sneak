"use client";

import { Product } from "@prisma/client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const width = Number(new URL(product.imageUrl).searchParams.get("w"));
  const height = Number(new URL(product.imageUrl).searchParams.get("h"));

  return (
    <Link href={`/products/${product.id}`} className={className}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={width}
        height={height}
        className="h-[80px] w-auto rounded-md object-fill sm:h-[100px] lg:h-[150px]"
      />
      <Separator className="my-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <div className="mb-3 text-sm">{product.description}</div>
      <p className="text-xs">Price</p>
      <p className="text-lg">€{product.price}</p>
    </Link>
  );
};

export default ProductCard;
