import { useEffect } from "react";
import { ProductsDisplay } from "../components/products-display/products-display";
import { useContextProvider } from "../context/Context";
const stripe = require("stripe")(process.env.NEXT_STRIPE_PRIVATE);

const ProductDisplayPage = (props: any) => {
  const { productsContext, setProductsContext, cartContext } = useContextProvider();
  // TODO - FIX LOADING
  useEffect(() => {
    const awaivableProducts = props.products.filter((el :any) => (
        !cartContext.find((rm:any) => (rm.id === el.id))
      ))
        setProductsContext(awaivableProducts);
  }, []);

  return (
    <>
      <ProductsDisplay products={productsContext} />A
    </>
  );
};
export default ProductDisplayPage;

export async function getServerSideProps() {
    const products = await stripe.products.list();

  return {
    props: { products },
  };
}
