import { cache } from "react";
import prisma from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import SizeSelect from "@/components/SizeSelect";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getProduct(id);
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  const width = Number(new URL(product.imageUrl).searchParams.get("w"));
  const height = Number(new URL(product.imageUrl).searchParams.get("h"));

  return (
    <div className="m-2 flex flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center md:flex-row">
        <div className="">
          <h1 className="w-fit text-3xl font-bold">{product.name}</h1>
          <p className="mb-2 w-fit text-lg">{product.description}</p>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={width}
            height={height}
            className="mb-2 h-auto w-full rounded-md object-fill md:w-4/5 md:max-w-[600px]"
          />
        </div>
        <div className="w-full min-w-[300px] md:max-w-[40%]">
          <div className="flex w-full flex-col gap-3 rounded-md border p-4">
            <div className="text-3xl">€{product.price}</div>
            <div className="text-sm">Available sizes</div>
            <SizeSelect sizes={sizes} />
          </div>
        </div>
      </div>
      <Separator className="my-3 inline w-full" />
      <div className="mt-4 text-justify text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa
        nemo officiis amet, sed, numquam repellendus unde libero ipsum pariatur
        non veniam quaerat consequuntur eligendi vero temporibus voluptatem quas
        aut!
      </div>
    </div>
  );
};

export default ProductPage;
