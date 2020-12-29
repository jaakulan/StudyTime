import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";


const Keywords = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
        </div>
    )
}

export default Keywords;
