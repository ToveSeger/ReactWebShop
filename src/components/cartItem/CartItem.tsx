import { useEffect, useState } from "react";
import { addProduct, checkIfProductExistsInCart, getProduct, getTotalItemsInCart, removeProduct } from "../../Functions/localStorageHelpers";
import { ICartItem } from "../../interfaces/ICartItem";
import { ICartProduct } from "../../interfaces/ICartProduct";
import styles from "./CartItem.module.scss";
import Card from "../UI/card/Card";
import Button from "../UI/button/Button";
import {CiTrash} from "react-icons/ci";


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
     }

     const removeProd=()=>{
        setProdAmount(0)
        const updatedProd={
            ...props.Product,
            Amount:0
        }
        removeProduct(updatedProd);
     }

     
     const [prodAmount, setProdAmount]=useState(props.Product.Amount);
     const [totalCartNo, setTotalCartNo]=useState(getTotalItemsInCart());
     
         useEffect(()=>{
             console.log("i useeeffect")
             setProdAmount(prodAmount)
             setTotalCartNo(getTotalItemsInCart())
         },[prodAmount])

    return ( 
        <>
        {prodAmount>0&&
            <div className={styles.cartItem}>
                <div className={styles.cartItemContentWrapper}>
                    <div className={styles.imgWrapper}>
                        <img src={props.Product.ImgSource} alt={props.Product.ImgAltText} />
                    </div>
                    <div className={styles.itemControls}>
                        <div>
                        <section className={styles.flexContainer}>
                            <p>{prodAmount}</p>
                            <p>x</p>
                        <p>{props.Product.Name}</p>
                        </section>
                        <section className={styles.flexContainerBtn}>
                            <Button type="button" onClick={()=>updateProd(props.Product, "-")}>-</Button>
                            <Button type="button" onClick={()=>updateProd(props.Product, "+")}>+</Button>
                        </section>
                        </div>
                        <CiTrash className={styles.trash} onClick={()=>removeProd()}/>
                    </div>
                </div>
            </div> 
        }
        {totalCartNo===0&&
            <p>No products yet</p>
        }
        </>
    );
}
 
export default CartItem;