import {getCartProducts} from "../../Functions/localStorageHelpers";
import styles from "./Cart.module.scss";
import CartList from "../../components/cartList/CartList";

const CartPage = () => {

const products=getCartProducts();  
        
    return ( 
        <div className={styles.cartPage}>
            <CartList Products={products}/>
        </div>
    );
}
 
export default CartPage;