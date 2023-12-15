const Card = ({ product }) => {
  return (
    <div>
      {!product.imagenes ? null : (
        <div className="flex flex-col items-center m-2 border-2 border-white rounded-sm bg-white w-64 h-80 shadow-xl">
          <div>
            <img
              className="my-6 w-24 h-24"
              key={product.id}
              src={product.imagenes[0]?.ruta || product.imagenes[2]?.ruta}
              alt={product.nombre}
            />
          </div>
          <h4
            className={` h-72 p-2 ${
              product.nombre.length > 70 ? "text-sm" : "text-base"
            }  text-center`}
          >
            {product.nombre}
          </h4>
          <h5 className="mb-4 h-4 text-lg text-blue-500">
            U$ {product.precio}
          </h5>
          <button className="text-sm text-white font-semibold border-2 p-2 mb-1.5 rounded-md bg-emerald-500 hover:bg-emerald-600 shadow-lg">
            AGREGAR AL CARRITO
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
