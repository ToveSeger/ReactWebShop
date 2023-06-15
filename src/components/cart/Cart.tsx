import {useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Modal } from "../modal/Modal";
import {FaShoppingCart} from "react-icons/fa";
import { ICartProduct } from "../../interfaces/ICartProduct";
import { getCartProducts, getTotalItemsInCart } from "../../Functions/localStorageHelpers";

const Cart = () => {

    const products=getCartProducts();
    const [modalVisibility, setModalVisibility]=useState(false);
    const [cartTotalProdAmount, setCartTotalProdAmount]=useState(getTotalItemsInCart());

    const toggleModalVisibility=()=>{
        modalVisibility?setModalVisibility(false):setModalVisibility(true);
    }

    const cartTotal=()=>{
        let total=0;
        if (products.length<0||products===undefined) return;
        products.forEach((prod:ICartProduct) => {
            if(prod.Amount===undefined){
                total=999;
            }
            else{
                const itemTotal=prod.Amount * prod.Price
                total=itemTotal + total;
            }
        });
        return total.toFixed(2);
    }

    const prodTotalPrice=(price:number, amount:number|undefined)=>{
        if (amount===undefined){
            return 0
        }
        else{
            return (price * amount).toFixed(2)
        }
      }      

      useEffect(()=>{
        console.log("I use effect")

    
      },[])

    return ( 
        
    <div className={styles.cartIcon} onClick={()=>toggleModalVisibility()}>
        <FaShoppingCart/>
        <p>{cartTotalProdAmount}</p>
        {modalVisibility&&
            <Modal onDismiss={()=>toggleModalVisibility()}>
                <div className={styles.cartContainer}>
                    {products?
                    <div>
                        {products.map((prod:ICartProduct)=>
                        <div className={styles.cartItem}>
                            <section className={styles.leftItemPart} >
                                <p>{prod.Amount} x</p>
                                <p>{prod.Name}</p>
                            </section>
                            <p>${prodTotalPrice(prod.Price, prod.Amount)}</p>
                        </div>
                        )
                        }
                    </div>
                    :<p className={styles.emptyCart}>No products yet</p>
                    }
                <p className={styles.cartTotal}>Cart total: ${cartTotal()}</p>
                {products&&
                    <a href={"/cart"}>Show full cart</a>
                }
                </div>
            </Modal>
        }
    </div> 
    );
}
 
export default Cart;