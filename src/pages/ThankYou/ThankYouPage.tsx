import styles from "./ThankYou.module.scss";


const ThankYouPage = () => {
const randomNumber=()=>{
    const min = Math.ceil(123456);
    const max = Math.floor(1234567);
  return Math.floor(Math.random() * (max - min) + min);
}


    return (
    <div className={styles.thankYouContainer}>
        <div className={styles.contentContainer}>
            <h1>Order #{randomNumber()} is received</h1>
            <p>We'll let you know when your order is ready to ship</p>
            <p>Thank you for your purchase!</p>
            <div className={styles.imgContainer}>
                <img src="https://images.unsplash.com/photo-1502355984-b735cb2550ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="" />
            </div>
        </div>
    
    </div>  );
}
 
export default ThankYouPage;