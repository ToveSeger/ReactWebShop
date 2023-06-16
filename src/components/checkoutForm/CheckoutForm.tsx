import { useContext, useState } from "react";
import styles from "./CheckoutForm.module.scss";
import { Modal } from "../modal/Modal";
import Button from "../UI/button/Button";
import { emptyCartProducts, getCartProducts } from "../../Functions/localStorageHelpers";
import CartProvider from "../../store/CartProvider";
import CartContext from "../../store/cart-context";
import { useNavigate } from "react-router-dom";
import ThankYouPage from "../../pages/ThankYou/ThankYouPage";
import { ICartProduct } from "../../interfaces/ICartProduct";


export const CheckoutForm = () => {

  const products=getCartProducts();
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [street, setStreet]=useState("");
    const [city, setCity]=useState("");
    const [zipCode, setZipCode]=useState("");
    const [email, setEmail]=useState("");
    const [errorsExist, setErrorsExist]=useState(false);
    const [isValidFirstName, setIsValidFirstName]=useState(true);
    const [isValidLastName, setIsValidLastName]=useState(true);
    const [isValidEmail, setIsValidEmail]=useState(true);
    const [isValidStreet, setIsValidStreet]=useState(true);
    const [isValidCity, setIsValidCity]=useState(true);
    const [isValidZipCode, setIsValidZipCode]=useState(true);
    let checkoutProducts;

  const nullCheck=(e:any)=>{
    e.preventDefault();
    let error=false;

    if(firstName.length===0){
      setIsValidFirstName(false);
      error=true;
    }
    if(lastName.length===0){
      setIsValidLastName(false);
      error=true;
    }
    if(street.length===0){
      setIsValidStreet(false);
      error=true;
    }
    if(zipCode.length<5){
      setIsValidZipCode(false);
      error=true;
    }
    if(city.length===0){
      setIsValidCity(false);
      error=true;
    }
    if(email.length===6 || !email.includes("@")){
      console.log(!email.includes("@"))
      setIsValidEmail(false);
      error=true;
      console.log(error)
    }
    if(!error){
      setFirstName("");
      setLastName("");
      setStreet("");
      setZipCode("");
      setCity("");
      setEmail("");
      submitOrder();
    }
    setErrorsExist(error);
  }
  
  const navigate = useNavigate();

  const submitOrder=()=>{
    emptyCartProducts();
    navigate("/thankyou")
  }


  const toggleModalVisibility=()=>{
    setErrorsExist(false);
  }

  const inputHandler=(e:any)=>{
    console.log(e.target.id)
    if(e.target.id==="firstName"){
      setFirstName(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidFirstName(false):setIsValidFirstName(true);
    }
    if(e.target.id==="lastName"){
      setLastName(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidLastName(false):setIsValidLastName(true);
    }
    if(e.target.id==="street"){
      setStreet(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidStreet(false):setIsValidStreet(true);
    }
    if(e.target.id==="zipCode"){
      setZipCode(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidZipCode(false):setIsValidZipCode(true);
    }
    if(e.target.id==="city"){
      setCity(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidCity(false):setIsValidCity(true);
    }
    if(e.target.id==="email"){
      setEmail(e.target.value.trim());
      e.target.value.trim().length===0?setIsValidEmail(false):setIsValidEmail(true);
    }
  }

  return (
    <div className={styles.checkoutContainer}>
      {products&&
      <section className={styles.prodList}>
        <h3>Products</h3>
        <ul>
          {products.map((prod:ICartProduct)=>
          <li>
            <p>{prod.Amount} x {prod.Name}</p>
          </li>
          )}
        </ul>
      </section>
      }
    <h3>Shipping information</h3>
    <form className={styles.form} onSubmit={nullCheck}>
      <div className={styles.formItemContainer}>
        <div className={styles.formItem}>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" className={isValidFirstName?"":styles.invalidInput}type="text" value={firstName} onChange={e=>inputHandler(e)}/>
        </div>
          {errorsExist&&
          <Modal onDismiss={()=>toggleModalVisibility()}>
                <p>Oops! Du har glömt att fylla i ett eller flera fält.</p>
            </Modal>
          }
        <div className={styles.formItem}>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" className={isValidLastName?"":styles.invalidInput}type="text" value={lastName} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="street">Street</label>
          <input id="street" className={isValidStreet?"":styles.invalidInput} type="text" value={street} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="zipCode">Zip code</label>
          <input id="zipCode" className={isValidZipCode?"":styles.invalidInput}type="text" value={zipCode} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="city">City</label>
          <input id="city" className={isValidCity?"":styles.invalidInput} type="text"value={city} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email</label>
          <input id="email" className={isValidEmail?"":styles.invalidInput} type="text" value={email} onChange={e=>inputHandler(e)}/>
        </div>
        <div className={styles.submitButtonContainer}>
          <Button className={styles.submitButton} type="submit">Checkout</Button>
        </div>
      </div>
    </form>
    </div>
  )
}
