import { ICard } from "../../../interfaces/ICard";
import styles from "./Card.module.scss";

const Card = (props:ICard) => {
    const classes= `${styles.card} ${props.className}`;

    return ( 
    <div className={classes}>
        {props.children}
    </div> );
}
 
export default Card;