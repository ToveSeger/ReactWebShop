import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";
import { IModal } from "../../interfaces/IModal";

const Backdrop= (props:any)=>{
    return (
        <div onClick={props.onDismiss} className={styles.backdrop}>
        </div>
        )
};

const Overlay= (props:any)=>{
    return (
        <div className={styles.modal}>
            <button type="button" className= {styles.button} onClick={props.onDismiss}>X</button>
            {props.children}
        </div>
        )
};
export const Modal = (props:IModal) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onDismiss={props.onDismiss}/>, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<Overlay onDismiss={props.onDismiss}>{props.children}</Overlay>, document.getElementById('overlay-root') as HTMLElement)}
       </>
  )
}
