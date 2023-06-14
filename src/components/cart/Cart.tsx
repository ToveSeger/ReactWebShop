import {useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Modal } from "../modal/Modal";
import {FaShoppingCart} from "react-icons/fa";
import { ICartProduct } from "../../interfaces/ICartProduct";
import { getCartProducts, getTotalItemsInCart } from "../../Functions/localStorageHelpers";

const Cart = () => {

    const products=getCartProducts();
    // const totalCartNo=localStorage.getItem("totalCartNo");
    // const storedProducts = JSON.parse(products?products:"");
    const [modalVisibility, setModalVisibility]=useState(false);
    // const [cartTotalProdAmount, setCartTotalProdAmount]=useState(getTotalItemsInCart());
    // const cartCtx=useContext(CartContext);
    // const [cartProductsAmount, setCartProductsAmount]=useState(0);

    // const [cartProducts, setCartProducts]=useState(storedProducts);
    
    // console.log(cartProducts)
    
    
    // const noOfCartProds=cartCtx.products.reduce((currentNo, prod)=>{
    //         return currentNo + prod.Amount;
    //     }, 0);

    // const [totalCartNo, setTotalCartNo]=useState(localStorage.getItem("totalCartNo"));

    // const storedProducts=()=>{
    //     let storedProducts;
    //     if (products){
    //         storedProducts = JSON.parse(products);
    //     }
    //     else{
    //         storedProducts=null;
    //     }
    //     console.log(storedProducts)
    //     return storedProducts;
    // }


    // const noOfCartProds=()=>{
    //     let totalProds;
    //     if (storedProducts()){
    //         totalProds=storedProducts().reduce((currentNo:any, prod:any)=>{
    //                 return currentNo + prod.Amount;
    //             }, 0);
    //     }
    //     else{
    //         totalProds=0
    //     }
    //     setTotalCartNo(totalProds);
    // }
    // const noOfCartProds=storedProducts().reduce((currentNo:any, prod:any)=>{
    //     return currentNo + prod.Amount;
    // }, 0);
         
    const toggleModalVisibility=()=>{
        modalVisibility?setModalVisibility(false):setModalVisibility(true);
    }

    const cartTotal=()=>{
        console.log("CHECKING TOTAL")
        let total=0;
        // if (cartProducts.length<0||storedProducts===undefined) return;
        // cartProducts.forEach((prod:IProduct) => {
        //     if(prod.Amount===undefined){
        //         total=999;
        //     }
        //     else{
        //         const itemTotal=prod.Amount * prod.Price
        //         total=itemTotal + total;
        //     }
        // });
        return total.toFixed(2);
    }

    const prodTotalPrice=(price:number, amount:number|undefined)=>{
        if (amount===undefined){
            return 0
        }
        else{
            return price * amount
        }
      }

    return ( 
        
    <div className={styles.cartIcon} onClick={()=>toggleModalVisibility()}>
        <FaShoppingCart/>
        <p>{getTotalItemsInCart()}</p>
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