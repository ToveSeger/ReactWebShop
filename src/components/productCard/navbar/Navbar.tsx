
import styles from "./Navbar.module.scss";

const Navbar = () => {

    return ( 
        <div className={styles.navbar}>
            <a href={"/"} className={styles.navLogo}>ReactShop</a>
            <section className={styles.rightNavPart}>
                {/* {!userCtx.isLoggedIn?
                    <a href={"/login"}>Log in</a>
                    :                    
                    <Button  type="button" onClick={()=>userCtx.onLogout()}>Log out</Button>
                } */}
                {/* <Cart/> */}
            </section>
        </div>
     );
}
 
export default Navbar;