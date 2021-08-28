import { useEffect } from "react";
import { ProductsDisplay } from "../components/products-display/products-display";
import { useContextProvider } from "../context/Context";

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
//   const { loaded } = context.query;
  // TODO - improve dataFetching
  // const dupa  = dataFetching("/api/products", FUN )
//   if (loaded === true) {
//     return {
//       props: { loaded: true },
//     };
//   }

  const prod = await fetch(`${process.env.NEXT_SERVER}/api/products`);
  const json = await prod.json();

  return {
    props: { products: json.data },
  };
}
