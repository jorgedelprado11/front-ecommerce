"use client";
import Detail from "../Detail/Detail";
import { useState } from "react";

const Card = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {!product.imagenes ? null : (
        <div className="flex lg:flex-col lg:items-center m-2 p-2 lg:p-0 border-2 border-white rounded-sm bg-white w-auto lg:w-64 lg:h-80 shadow-xl">
          <div className="flex items-center ml-2 lg:ml-0 w-40 lg:w-auto">
            <button onClick={() => setIsModalOpen(true)}>
              <img
                className="lg:my-6 lg:w-24 lg:h-24 md:w-auto md:h-3/5 h-20 w-20"
                key={product.id}
                src={product.imagenes[0]?.ruta || product.imagenes[2]?.ruta}
                alt={product.nombre}
              />
            </button>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between h-auto lg:w-auto w-full">
            <div className="flex flex-col items-center justify-between h-auto lg:w-auto w-full md:mr-2 lg:m-0">
              <h4
                className={` lg:h-20 lg:p-2 md:mt-8 lg:m-0 ${
                  product.nombre.length > 70 ? "text-sm" : "text-base"
                }  text-center`}
              >
                {product.nombre}
              </h4>
              <h5 className=" lg:mt-4 lg:mb-0 md:my-8 my-4 h-4 text-lg text-blue-500">
                U$ {product.precio}
              </h5>
            </div>
            <div className="md:h-full">
              <button className=" md:h-full lg:h-auto text-sm text-white font-semibold border-2 md:w-full lg:w-auto p-2 md:mb-4 lg:mt-4 rounded-md bg-emerald-500 hover:bg-emerald-600 shadow-lg">
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Detail
          key={product.nombre}
          setOpen={setIsModalOpen}
          product={product}
        />
      )}
    </div>
  );
};

export default Card;
