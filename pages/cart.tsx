import React, { useEffect, useState } from "react";
import { ProductsDisplay } from "../components/products-display/products-display";
import { useContextProvider } from "../context/Context";
import { loadStripe } from "@stripe/stripe-js";
import { useNavHeight } from "../utils/nav-height";
import Image from "next/image";
const stripe = require('stripe')(process.env.NEXT_STRIPE_PRIVATE);

const Cart = () => {
  const { cartContext } = useContextProvider();
  console.log(cartContext);
  
  // @ts-ignore
  const stripePromise = loadStripe(process.env.NEXT_STRIPE_PUBLIC);

  const priceItems = cartContext.map((item:any) => {
    return {
      price: item.metadata.price,
      quantity: 1,
    };
  });
  console.log(priceItems);
  

  async function handleOrder() {
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    }

    console.log(priceItems);
    postData("/api/order", { items: priceItems }).then(async (res) => {
      const stripe = await stripePromise;
      console.log(res);
      if(stripe !== null) {
        const { error } = await stripe.redirectToCheckout({
            sessionId: res.id,
          });
      }
    });
  }

  const CartContainer = () => (
    <div className="container">
      <h3 className="center mt-4">KOSZYK</h3>
      <ProductsDisplay products={cartContext} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-success mt-4" onClick={() => handleOrder()}>
          {" "}
          ORDER{" "}
        </button>
      </div>
    </div>
  );

  const EpmTyCart = () => (
    <div className="mt-5 container d-flex justify-content-center align-items-center flex-column">
        <Image src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif?cid=ecf05e47pylm0yozszm7dhnk6y3r4onfxua3bfkxlfb456m7&rid=giphy.gif&ct=g"
        width={1080}
        height={500}
        />
      <p className="mt-3">COŚ TU PUSTO, DODAJ JAKIŚ PRODUKT DO KOSZYKA!</p>
    </div>
  );

  return cartContext.length === 0 ? <EpmTyCart /> : <CartContainer />
};

export default Cart;
