import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import totalLockdown_active from "./icons/totalLockdown_active.png";

const TotalLD = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
            <form action="/">
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={totalLockdown_active} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <h1 className={styles.greeting}>Warning! All websites using on the Chrome web browser will be blocked!</h1>
                </div>

                <div className={styles.submitContainer}>
                    <input type="submit" value="Block Everything!"></input>
                </div>
            </form>

            <button className={styles.back}>Nevermind, Take me Back!</button>
            
        </div>

    )
}

export default TotalLD;
