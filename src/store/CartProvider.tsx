import { useEffect, useContext } from "react";
import CartContext from "./cart-context";
import { getCartProducts, getTotalItemsInCart } from "../Functions/localStorageHelpers";

const products =getCartProducts();
const cartCtx=useContext(CartContext);

const CartProvider=(props: any)=>{
    useEffect(()=>{
            console.log(products)
    })

   const addToTotalAmount=()=>{
        cartCtx.totalAmount=cartCtx.totalAmount+1;
    }

    const cartContext={
        totalAmount:getTotalItemsInCart(),
        checkedOutItems:[],
        addToTotalAmount:addToTotalAmount
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;