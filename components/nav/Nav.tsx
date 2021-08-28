import Link from "next/link";
import Image from "next/image";
import { useContextProvider } from "../../context/Context";
import { useEffect } from "react";

export const Nav = () => {
  const { productsContext } = useContextProvider();

  return (
    <div style={{
        backgroundColor: "yellow"
    }} id="navigation">
      <ul className="nav justify-content-center align-items-center pb-2 pt-3">
        <li className="nav-item mx-3 mb-2 ">
          <Link
            href={`/product-display-page?${
              productsContext ? "loaded=true" : "loaded=false"
            }`}
          >
           Sklep
          </Link>
        </li>
        <li className="nav-item mx-3 item ">
          <Link
            href={"/"}
          >
              <a className="cursor-pointer">
              <Image src={"/../public/brand/logo.png"} height={30} width={100} />
              </a>
          </Link>
        </li>
        <li className="nav-item mx-3 mb-2 item">
        <Link
            href={"/cart"}
          >
              Koszyk
          </Link>
        </li>
      </ul>
    </div>
  );
};
