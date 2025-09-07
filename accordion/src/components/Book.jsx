import { useState } from "react";
import styles from "./Book.module.css";

const Book = ({book}) => {

  const [isOpened, setIsOpened] = useState(false);

  const openHandler = () => {
    setIsOpened(state => state = !state);
  }

  const descrionptionClass = isOpened ? `${styles["margin"]} ${styles["description"]}`: `${styles["description-close"]}`;
  const titleClass = isOpened ? "": `${styles["margin"]}`;
  

  return (
    <div className={styles["accordeon-container"]}>
      <div className={styles["element"]}>
        x
      </div>
      <div className={`${styles["title"]} ${titleClass}`} onClick={openHandler}>
        {book.title}
      </div>
      <div className={descrionptionClass}>
        {book.description}
      </div>
    </div>    
  )
}

export default Book;