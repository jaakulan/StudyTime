import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import gamingLockdown_active from "./icons/gamingLockdown_active.png";


const GamingLD = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
            <form action="/">
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={gamingLockdown_active} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <h1 className={styles.greeting}>The following gaming websites will be blocked:</h1>
                </div>

                <div className={styles.listLine}>
                    <ul className={styles.blocked}>
                        <li>Steam</li>
                        <li>Blizzard</li>
                        <li>EA</li>
                        <li>Origin</li>
                        <li>Mentions of games on a website</li>
                        <li>Any gaming videos</li>
                    </ul>
                </div>

                <div className={styles.submitContainer}>
                    <input type="submit" value="Block these!"></input>
                </div>
            </form>
            <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>

    )
}

export default GamingLD;
