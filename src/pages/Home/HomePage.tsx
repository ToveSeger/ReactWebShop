import CardGallery from "../../components/UI/cardGallery/CardGallery";
import { TextBlock } from "../../components/UI/textBlock/TextBlock";
import styles from "./Home.module.scss";
import text from "../../data/DummyText.json";

const HomePage = () => {
    return ( 
        <>
            <TextBlock className={styles.textBlock} Heading={text.DummyHeading1} Text={text.DummyText100}/>
            <CardGallery />
        </>
     );
}
 
export default HomePage;