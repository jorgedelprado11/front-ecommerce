"use client";

import { useGetProductsByCategoryQuery } from "@/lib/services/products/productsAPI";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Categorias from "../components/Categorias/Categorias";
import { useState } from "react";

export default function Products() {
  const [category, setCategory] = useState("");

  const {
    data: products,
    isError,
    error,
    isLoading,
    isFetching,
  } = useGetProductsByCategoryQuery(category);

  if (isLoading || isFetching)
    return (
      <div className="min-h-screen min-w-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  if (isError) return <p>error: {error.message}</p>;

  
  return (
    <div className="flex justify-center">
      <div className="flex">
        <div className="px-2">
          <Categorias setCategory={setCategory} />
        </div>
        <div className=" xl:w-4/5">
          <CardsContainer products={products} />
        </div>
      </div>
    </div>
  );
}
