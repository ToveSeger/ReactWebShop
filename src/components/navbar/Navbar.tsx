
import Cart from "../cart/Cart";
import styles from "./Navbar.module.scss";

const Navbar = () => {

    return ( 
        <div className={styles.navbar}>
            <a href={"/"} className={styles.navLogo}>React Shop</a>
            <section className={styles.rightNavPart}>
                <Cart/>
            </section>
        </div>
     );
}
 
export default Navbar;