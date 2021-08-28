import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import EndlessText from "../components/endless-text/endless-text";
import { FullWidthImage } from "../components/full-width-image/full-width-image";
import { ProductsDisplay } from "../components/products-display/products-display";
import { useContextProvider } from "../context/Context";
import { dataFetching } from "../utils/client";
const stripe = require("stripe")(process.env.NEXT_STRIPE_PRIVATE);

const Home: NextPage = (props: any) => {
  const { productsContext, cartContext, setProductsContext } = useContextProvider();
  console.log("INDEX",productsContext);
  
  useEffect(() => {
    const awaivableProducts = props.productsData.filter((el :any) => (
      !cartContext.find((rm:any) => (rm.id === el.id))
    ))
      setProductsContext(awaivableProducts);
  }, []);



  return (
    <>
      <FullWidthImage imgSrc={"https://picsum.photos/id/13/1080/400"} />
      <EndlessText text={"CIUCHY"} sign={"https://picsum.photos/id/1/10/10"} />
      <ProductsDisplay products={productsContext} />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const products = await stripe.products.list();

  return {
    props: { productsData: products.data },
  };
}
