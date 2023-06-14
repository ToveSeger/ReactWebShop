import { useContext, useEffect, useState } from "react";
import { ICartProduct } from "../../interfaces/ICartProduct";

const CartPage = () => {
    const products:string|null=localStorage.getItem("cartProducts");

    const storedProducts=()=>{
        let storedProducts;
        if (products){
            storedProducts = [JSON.parse(products)];
        }
        else{
            storedProducts=null;
        }
        return storedProducts;
    }
    const [cartProducts, setCartProducts]=useState(storedProducts());

    console.log(typeof(cartProducts))

    const changeItemAmount=(prod:ICartProduct, operator:string)=>{
        if(operator==="+"){
            console.log("1 should be added")
        }
        else{
            console.log("1 should be removed")
        }
    }
    return ( 
        <>{cartProducts?
            cartProducts.map((prod:ICartProduct)=>
                <div  key={prod.Id}>
                <section>
                    <p>{prod.Amount}x</p>
                    <p>{prod.Name}</p>
                </section>
                {/* <p>${prodTotalPrice(prod.Price, prod.Amount).toFixed(2)}</p> */}
                <button  type="button" onClick={()=>changeItemAmount(prod,"-")}>-</button>
                <button  type="button" onClick={()=>changeItemAmount(prod, "+")}>+</button>
            </div>
        )
        :<p>No products</p>
     }
     </>
    );
}
 
export default CartPage;