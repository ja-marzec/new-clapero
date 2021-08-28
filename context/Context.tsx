import { createContext, ReactNode, useState, useContext } from "react";
import { ProductItem } from "../models/productModel";

// type authContextType = {
//     user: boolean;
//     login: () => void;
//     logout: () => void;
// };

const context: any = {
    user: false,
    login: () => {},
    logout: () => {},
};

const Context = createContext<any>(context);

export function useContextProvider() {
    return useContext(Context);
}

type Props = {
    children: ReactNode;
};


export function ContextProvider({ children }: Props) {
    const [productsContext, setProducts] = useState<ProductItem[]>([]);
    const [cartContext, setCartContext] = useState<ProductItem[]>([]);


    const setProductsContext = (items: ProductItem[]) => {
        setProducts(items);
        console.log("LOGIN");
    };

    const removeItemFromProductContext = (item: ProductItem) => {
        const newProducts = cartContext.filter(product => product.id !== item.id)
        setCartContext(newProducts);
    };

    const removeItemFromCartContext = (item: ProductItem) => {
        const newCart = cartContext.filter(product => product.id !== item.id)
        setProducts(newCart);
    };

    const setProductToCart = (item: any) => {
        // const cartIds = cartContext.map(item => item.id)
        // if(cartIds.includes(item.id)) {
        //     return 
        // }
        setCartContext([...cartContext, item]);
        console.log("FIRE", cartContext, productsContext);
        // removeItemFromProductContext(item)
    };

    const removeProductFromCart = (item: any) => {
        const cartIds = cartContext.map(item => item.id)
        if(cartIds.includes(item.id)) {
            return 
        }
        console.log(cartIds);
        
        setProductsContext([...productsContext, item]);
        removeItemFromCartContext(item)
    };

    const value = {
        productsContext,
        setProductsContext,
        setProductToCart,
        cartContext,
        removeItemFromProductContext,
        removeProductFromCart,
        setCartContext
    }

    return (
        <>
            <Context.Provider value={value}>
                {children}
            </Context.Provider>
        </>
    );
}
