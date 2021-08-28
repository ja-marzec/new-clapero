import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useContextProvider } from "../../context/Context";
import { useNavHeight } from "../../utils/nav-height";
const stripe = require("stripe")(process.env.NEXT_STRIPE_PRIVATE);


const ProductDisplay = ({ prod } : any) => {
  const [inCart, setIsInCart] = useState(false);
  const { cartContext, setCartContext } = useContextProvider();

useEffect(() => {
    const cartIds = cartContext.map((item: any) => item.id)
    if(cartIds.includes(prod.id)) {
        setIsInCart(true)
    } else {
        setIsInCart(false)
    }
},[cartContext])

    const AddToCartButton = () => (
        <button
        className="prod-button btn btn-success"
        onClick={() => setCartContext([...cartContext,prod])}
      >
            Do koszyka
      </button>
    )

    const RemoveFromCartButton = () => (
        <button
        className="prod-button  btn btn-warning"
        onClick={() => {
            const newCart = cartContext.filter((item: any) => item.id !== prod.id)
            console.log(newCart);
            setCartContext(newCart);
        }}
      >
          Usuń z koszyka
      </button>
    )

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-6">
            <Image src={prod.images[0]} width={500} height={500} />
          </div>
          <div className="col-12 col-sm-6">
            <h3 className="">{prod.name}</h3>
            <p>rozmiar : XL</p>
              <p className="mt-4">OPIS</p>
              <p className="mt-2">{prod.description}</p>
            <div>
              <div className="">
              <p className="prod-price pr-4">{prod.metadata.priceFormatted} PLN</p>
                {inCart ? <RemoveFromCartButton /> : <AddToCartButton />}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;

export async function getStaticPaths() {
    const products = await stripe.products.list();
  
    const paths = products.data.map((item:any) => {
      return {
        params: { id: item.id.toString() },
      };
    });
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export const getStaticProps = async (context:any) => {

    const { id } = context.params;
    const product = await stripe.products.retrieve(
        id
      );
  
    return {
      props: {
        prod: product,
      },
    };
  };
  