import { CheckoutForm } from "../../components/checkoutForm/CheckoutForm";
import styles from "./Checkout.module.scss";

const CheckoutPage = () => {
    return ( 
    <div className={styles.checkoutContainer}>
        <div className={styles.checkoutFormContainer}>
            <CheckoutForm/>
        </div>
    </div> );
}
 
export default CheckoutPage;