import { useContext, useEffect, useState } from "react";
import { IProductCard } from "../../interfaces/IProductCard";
import styles from "./ProductCard.module.scss";
import { ICartProduct } from "../../interfaces/ICartProduct";
import { addNonExistingProduct, addProduct, checkIfProductExistsInCart, getProduct, removeExistingProduct, removeProduct } from "../../Functions/localStorageHelpers";

const ProductCard = (props:IProductCard) => {
    // const [prodAmount, setProdAmount]=useState(props.Product.Amount);
    const initialProdAmount= checkIfProductExistsInCart(props.Product)?getProduct(props.Product).Amount:0;
    const [prodAmount, setProdAmount]=useState(initialProdAmount);


    

    // useEffect(()=>{
    //     const prod=getProduct(props.Product)
    //     console.log(prod)
    // },[prodAmount])

    const updateProd=(operator:string)=>{
       if(operator==="+"){
            const amount=prodAmount + 1;
            setProdAmount(amount)
            console.log(amount)
            const updatedProd={
                ...props.Product,
                Amount:amount
            }
            addProduct(updatedProd)
       }

       else{
        const amount=prodAmount - 1;
        prodAmount>0?setProdAmount(amount):setProdAmount(0);
        console.log(amount)
        const updatedProd={
            ...props.Product,
            Amount:amount
        }
        removeProduct(updatedProd)
       }
    }

    


    return (  
        <div className={styles.productCard}>
            <div className={styles.imgWrapper}>
                <img src={props.Product.ImgSource} alt={props.Product.ImgAltText} />
            </div>
            <p>{props.Product.Name}</p>
            <p>{props.Product.Price}</p>
            {checkIfProductExistsInCart(props.Product)?
            <>
                <button onClick={()=>updateProd("+")}>+</button>
                    <p>{prodAmount}</p>
                <button onClick={()=>updateProd("-")}>-</button>
            </>
            :
            <button onClick={()=>updateProd("+")}>Add to cart</button>
            }
        </div>
    );
}
 
export default ProductCard;