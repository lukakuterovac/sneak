import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";

const Home = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex w-full flex-col justify-start">
      <h2 className="mb-2 text-lg">In store</h2>

      <div className="flex flex-wrap gap-2">
        {products.map((product) => (
          <ProductCard
            className="min-w-fit rounded-md border p-3"
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
