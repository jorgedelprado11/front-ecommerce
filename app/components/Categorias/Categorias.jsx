"use client";
import { useGetCategoriesQuery } from "@/lib/services/products/productsAPI";

const Categorias = ({ setCategory }) => {
  const { data: categorias } = useGetCategoriesQuery();

  const onClickCategories = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  return (
    <div className="flex flex-col items-center text-center bg-white h-fit shadow-xl px-4 py-4 mt-2 mx-2">
      {categorias?.map((categoria) => (
        <div className="w-full" key={categoria}>
          <button
            className="mr-2 px-2 bg-slate-50 flex w-full pb-1 border-b-2 border-gray-100 hover:bg-slate-100"
            value={categoria}
            onClick={(event) => onClickCategories(event)}
          >
            {categoria}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
