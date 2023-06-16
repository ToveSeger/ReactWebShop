import { cartTotal } from "../../Functions/localStorageHelpers";
import { ICartList } from "../../interfaces/ICartList";
import { ICartProduct } from "../../interfaces/ICartProduct";
import Button from "../UI/button/Button";
import CartItem from "../cartItem/CartItem";
import styles from "./CartList.module.scss";
 
const CartList = (props:ICartList) => {

    return (   <>
    {props.Products.length>0?
    <div className={styles.cartListWrapper}>
        <div className={styles.contentContainer}>
            <ul className={styles.cartList}>
                {props.Products.map((prod:ICartProduct)=>
                    <li  key={prod.Id}>
                    <CartItem Product={prod}/>
                </li>
            )}
            </ul>
            <section className={styles.cartTotal}>
                <p className={styles.bold}>Cart total:</p>
                <p>${cartTotal()}</p>

            </section>
        </div>
        <section className={styles.flexContainer}>
            <a className={styles.checkoutLink} href="/checkout">Go to checkout</a>
        </section>
    </div>
            :<p className={styles.emptyCart}>No products yet</p>
    }
     </> );
}
 
export default CartList;