"use client";
import { useState } from "react";

function Detail({ setOpen, product }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.imagenes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.imagenes.length - 1 : prevIndex - 1
    );
  };

  const detail = (caracteristicas) => {
    const caracteristicasArray = [];
    for (const caracteristica in caracteristicas) {
      caracteristicasArray.push({
        nombre: caracteristica,
        value: caracteristicas[caracteristica],
      });
    }

    return caracteristicasArray;
  };
  return (
    <div>
      {setOpen ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col items-center">
                  {product && (
                    <>
                      <div>
                        <img
                          className="w-40 h-40"
                          src={product.imagenes[currentIndex].ruta}
                          alt={`Image ${currentIndex + 1}`}
                        />
                      </div>
                      <div>
                        <button
                          onClick={prevSlide}
                          style={{ marginRight: "10px" }}
                        >
                          &lt;
                        </button>
                        <button
                          onClick={nextSlide}
                          style={{ marginLeft: "10px" }}
                        >
                          &gt;
                        </button>
                      </div>
                      <div className="flex flex-col border-b-4 border-emerald-500 ml-4 w-5/6">
                        <div className="flex text-justify">
                          <h3 className="font-semibold">NOMBRE: </h3>
                          <p className="ml-2">{product.nombre}</p>
                        </div>

                        <div className="flex text-justify">
                          <h3 className="font-semibold">PRECIO: </h3>
                          <p className="ml-2">${product.precio}</p>
                        </div>
                        <div className="flex text-justify ">
                          <h3 className="font-semibold">STOCK: </h3>
                          <p
                            className={`ml-2 ${
                              product.stock ? "" : "text-red-700"
                            } `}
                          >
                            {product.stock ? product.stock : "Sin Stock"}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col border-b-4 border-emerald-500 ml-4 mt-4 w-5/6">
                        {product &&
                          detail(product?.caracteristicas).map((caract) => (
                            <div className="flex text-justify">
                              <h3 className="font-semibold">
                                {caract.nombre
                                  .split("_")
                                  .join(" ")
                                  .toUpperCase()}
                                :
                              </h3>
                              <p className="ml-2">{caract.value}</p>
                            </div>
                          ))}
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:w-auto"
                  >
                    Salir del Detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Detail;
