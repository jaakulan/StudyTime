import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const BlockElement = (props) => {

    const [show, changeShow] = useState(true);

    useEffect(() => {
        if (props.value === "") {
            changeShow(false);
        }
    })

    function removeElement() {
        var keywords = localStorage.getItem("keywords").split(",");
        const length = keywords.length;
        for (let i = 0; i < length; i++) {
            if (keywords[i] === props.value) {
                keywords.splice(i, 1);
            }
        }
        localStorage.setItem("keywords", keywords.toString());
        changeShow(false);

    }
    return (
        <div className={`${styles.blockedElement} ${show ? styles.show : styles.noShow}`}>
            <div className={styles.blockedWord}>
                {props.value}
            </div>
            <button onClick={removeElement}className={styles.xbutton}>X</button>
        </div>
    )
}

export default BlockElement