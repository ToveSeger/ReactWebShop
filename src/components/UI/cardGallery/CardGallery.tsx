import styles from "./CardGallery.module.scss";
import products from "../../../data/CartProducts.json";
import ProductCard from "../../productCard/ProductCard";

const CardGallery = () => {
    return ( 
        <div className={styles.cardGallery}>
            {products.map((prod=>
                <ProductCard key={prod.Id} Product={prod}/>
            ))}
        </div> 
    );
}
 
export default CardGallery;