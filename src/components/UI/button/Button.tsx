import { IButton } from "../../../interfaces/IButton";
import styles from "./Button.module.scss";

const Button = (props:IButton) => {
    const classes=props.className? `${styles.button} ${props.className}`:styles.button;

    return (  
        <>
            {props.disabled?
                <button disabled className={classes} onClick={props.onClick}>{props.children}</button>
                : <button className={classes} onClick={props.onClick} type={props.type}>{props.children}</button>
            }
        </>
        );
}
 
export default Button;