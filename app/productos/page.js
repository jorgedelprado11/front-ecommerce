"use client";

import { useGetProductsQuery } from "@/lib/services/products/products";
import CardsContainer from "../components/CardsContainer/CardsContainer";

export default function Home() {
  const { data, isError, error, isLoading, isFetching } =
    useGetProductsQuery(null);

  const categorias = [];

  if (isLoading || isFetching)
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (isError) return <p>error: {error.message}</p>;

  const products = data;

  products.forEach((product) => {
    if (!categorias.includes(product.categoria))
      categorias.push(product.categoria);
  });

  return (
    <div className="flex">
      <div className="xl:w-1/5 my-4 mx-12 hidden">
        {categorias.map((categoria) => (
          <div>
            <p className="px-3 py-[0.1rem] hover:font-medium xl:text-base text-sm">- {categoria}</p>
          </div>
        ))}
      </div>
      <div className=" xl:w-4/5">
        <CardsContainer products={products} />
      </div>
    </div>
  );
}
