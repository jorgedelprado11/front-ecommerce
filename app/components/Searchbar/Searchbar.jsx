"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const SearchProduct = () => {
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setNombre("");
  };

  return (
    <div>
      <form className="flex w-[400px] justify-end" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscador"
          name="nombre"
          value={nombre}
          onChange={(event) => handleChange(event)}
          className="bg-white rounded-lg h-10 w-full border border-emerald-500 pl-4 hover:border-emerald-700"
        />

        <button className="absolute h-10 w-12" type="submit">
          <MagnifyingGlassIcon className="h-8 w-8 text-emerald-500" />
        </button>
      </form>
    </div>
  );
};

export default SearchProduct;
