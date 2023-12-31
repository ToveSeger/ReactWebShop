import { createContext } from "react";
import { getTotalItemsInCart } from "../Functions/localStorageHelpers";

const CartContext=createContext({
    totalAmount:getTotalItemsInCart(),
    checkedOutItems:[],
    addToTotalAmount:()=>{}
})

export default CartContext;