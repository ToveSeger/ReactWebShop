import { ICartList } from "../../interfaces/ICartList";
import { ICartProduct } from "../../interfaces/ICartProduct";
import CartItem from "../cartItem/CartItem";
import styles from "./CartList.module.scss";

const CartList = (props:ICartList) => {
    return (   <>
    {props.Products.length>0?
            <ul className={styles.cartList}>
                {props.Products.map((prod:ICartProduct)=>
                    <li  key={prod.Id}>
                    <CartItem Product={prod}/>
                </li>
            )}
            </ul>
            :<p>No products yet</p>
    }
     </> );
}
 
export default CartList;