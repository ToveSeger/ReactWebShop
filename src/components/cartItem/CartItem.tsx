import { useState } from "react";
import { addProduct, checkIfProductExistsInCart, getProduct, removeProduct } from "../../Functions/localStorageHelpers";
import { ICartItem } from "../../interfaces/ICartItem";
import { ICartProduct } from "../../interfaces/ICartProduct";
import styles from "./CartItem.module.scss";

const CartItem = (props:ICartItem) => {
    
    const updateProd=(prod:ICartProduct, operator:string)=>{
        if(operator==="+"){
             const amount=prodAmount + 1;
             setProdAmount(amount)
             const updatedProd={
                 ...prod,
                 Amount:amount
             }
             addProduct(updatedProd)
        }
 
        else{
         const amount=prodAmount - 1;
         prodAmount>0?setProdAmount(amount):setProdAmount(0);
         const updatedProd={
             ...prod,
             Amount:amount
         }
         removeProduct(updatedProd)
        }
        // getProdAmount(prod)
     }

     
      const [prodAmount, setProdAmount]=useState(props.Product.Amount);

    //  const getProdAmount=(prod:ICartProduct)=>{
    //     const initialAmount=checkIfProductExistsInCart(prod)?getProduct(prod).Amount:0;
    //     setProdAmount(initialAmount)
    //     return initialAmount;
    //  }

    return ( 
        <div>
            <p>{props.Product.Name}</p>
            <p>{prodAmount}</p>
            <button  type="button" onClick={()=>updateProd(props.Product, "-")}>-</button>
            <button  type="button" onClick={()=>updateProd(props.Product, "+")}>+</button>
        </div> 
    );
}
 
export default CartItem;