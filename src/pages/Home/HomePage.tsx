import ProductCard from "../../components/productCard/ProductCard";
import cartProducts from "../../data/CartProducts.json";

const HomePage = () => {
    return ( 
        <>
             {cartProducts.map((prod=>
                <ProductCard key={prod.Id} Product={prod}/>
            ))}
        </>
     );
}
 
export default HomePage;