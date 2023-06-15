import {getCartProducts} from "../../Functions/localStorageHelpers";
import styles from "./Cart.module.scss";
import CartList from "../../components/cartList/CartList";

const CartPage = () => {

const products=getCartProducts();  
        
    return ( 
        <CartList Products={products}/>
    );
}
 
export default CartPage;