import Link from "next/link";
// import SearchProduct from "../Searchbar/Serchbar";
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SearchProduct from "../Searchbar/Searchbar";
// import LogoutButton from "../forms/Logout";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-white justify-around h-20 items-center">
        <Link href={"/home"}>
          {/* <img className="h-20" src={logo} alt="logo" /> */}
          Logo
        </Link>
        <SearchProduct />

        {/* {!isAuthenticated ? (
          <button
            className="flex bg-emerald-500 rounded-lg h-14 items-center w-64 justify-center text-white"
          
          >
            <UserCircleIcon className="h-8 w-10" />
            Iniciar Sesión
          </button>
        ) : (
          <LogoutButton />
        )} */}

        <button className="flex bg-emerald-500 rounded-lg h-12 items-center w-60 justify-center text-white">
          <UserCircleIcon className="h-8 w-10" />
          Iniciar Sesión
        </button>

        <Link href={"/carrito"}>
          <button>
            <ShoppingCartIcon className="h-8 w-8" />
          </button>
        </Link>
      </div>

      <div className="flex bg-emerald-500 justify-around h-16 items-center text-xl text-white border-">
        <Link href={"/productos"}>
          <button className="hover:text-black">PRODUCTOS</button>
        </Link>

        <Link href={"/ayuda"}>
          <button className="hover:text-black">AYUDA</button>
        </Link>

        <Link href={"/about"}>
          <button className="hover:text-black">SOBRE NOSOTROS</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
