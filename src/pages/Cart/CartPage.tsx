import { useContext, useEffect, useState } from "react";
import { ICartProduct } from "../../interfaces/ICartProduct";
import { addProduct, checkIfProductExistsInCart, getCartProducts, getProduct, removeProduct } from "../../Functions/localStorageHelpers";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.scss";

const CartPage = () => {
    // const products:string|null=localStorage.getItem("cartProducts");

    // const storedProducts=()=>{
    //     let storedProducts;
    //     if (products){
    //         storedProducts = [JSON.parse(products)];
    //     }
    //     else{
        //         storedProducts=null;
        //     }
        //     return storedProducts;
        // }
        // const [cartProducts, setCartProducts]=useState(storedProducts());
        const products=getCartProducts();  
        
        

   


 
    return ( 
        <>
        {products?
            <ul className={styles.cartList}>
                {products.map((prod:ICartProduct)=>
                    <li  key={prod.Id}>
                    <CartItem Product={prod}/>
                </li>
            )}
            </ul>
        :<p>No products</p>
     }
     </>
    );
}
 
export default CartPage;