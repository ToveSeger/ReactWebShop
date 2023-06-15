import { ICartProduct } from "../interfaces/ICartProduct";

export const getCartProducts=()=>{
    const cartProducts:string|null=localStorage.getItem("cartProducts");
    let storedProducts:ICartProduct[];
    if (cartProducts){
        storedProducts = [...JSON.parse(cartProducts)];
    }
    else{
        storedProducts=[];
    }
    return storedProducts;
}


const getProdIndex=(product:ICartProduct)=>{
    let existingCartProdIndex;
    existingCartProdIndex=getCartProducts().findIndex(
        (prod:ICartProduct)=>prod.Id===product.Id
    );

    return existingCartProdIndex;
}

export const getProduct=(prod:ICartProduct)=>{
    const product=getCartProducts()[getProdIndex(prod)];
    return product;
}

export const checkIfProductExistsInCart=(prod:ICartProduct)=>{
    const prodIndex=getProdIndex(prod);
    let prodExists;
    prodIndex===-1?prodExists=false:prodExists=true;
    return prodExists;
} 

export const addProduct=(prod:ICartProduct)=>{
    const prodIndex=getProdIndex(prod);
    if(prodIndex===-1){
        addNonExistingProduct(prod);
    }
    else{
        addToExistingProduct(prod);
    }
    setTotalItemsInCart();
}

export const removeProduct=(prod:ICartProduct)=>{
    console.log(prod)
    if(prod.Amount>0){
        subtractFromExistingProduct(prod);
    }
    else{
        removeExistingProduct(prod);
    }
    setTotalItemsInCart();
}


export const addNonExistingProduct=(prod:ICartProduct)=>{
    const updatedProducts=getCartProducts().concat(prod);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts))
}

export const addToExistingProduct=(prod:ICartProduct)=>{
    const updatedProducts=[...getCartProducts()];
    updatedProducts[getProdIndex(prod)]=prod;
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts))
}

export const subtractFromExistingProduct=(prod:ICartProduct)=>{
    const updatedProducts=[...getCartProducts()];
    updatedProducts[getProdIndex(prod)]=prod;
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts))
}

export const removeExistingProduct=(product:ICartProduct)=>{
    const updatedProducts=getCartProducts().filter((prod:ICartProduct)=>prod.Id!==product.Id);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts))  
}

export const setTotalItemsInCart=()=>{
    const totalAmountOfProdsInCart=getCartProducts().reduce((currentNo:number, prod:ICartProduct)=>{
        return currentNo + prod.Amount
    },0)

    localStorage.setItem("totalCartNo", totalAmountOfProdsInCart.toString())
}

export const getTotalItemsInCart=()=>{
    setTotalItemsInCart();
    const totalItems=localStorage.getItem("totalCartNo");
    const totalItemsNo=totalItems?+totalItems:0;
    return totalItemsNo;
}
