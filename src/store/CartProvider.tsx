import { useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import { getCartProducts, getTotalItemsInCart } from "../Functions/localStorageHelpers";

const products =getCartProducts();

const CartProvider=(props: any)=>{
    useEffect(()=>{
            console.log(products)
    })

    const cartContext={
        totalAmount:getTotalItemsInCart()
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;