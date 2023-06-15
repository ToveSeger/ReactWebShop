import { useContext, useEffect, useState } from "react";
import { ICartProduct } from "../../interfaces/ICartProduct";
import { addProduct, checkIfProductExistsInCart, getCartProducts, getProduct, removeProduct } from "../../Functions/localStorageHelpers";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.scss";
import CartList from "../../components/cartList/CartList";

const CartPage = () => {

const products=getCartProducts();  
        
    return ( 
        <CartList Products={products}/>
    );
}
 
export default CartPage;