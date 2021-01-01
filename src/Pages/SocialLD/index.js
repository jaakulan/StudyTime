import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import socialLockdown_active from "./icons/socialLockdown_active.png";

const SocialLD = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
            <form action="/">
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={socialLockdown_active} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <h1 className={styles.greeting}>The following social media websites will be blocked:</h1>
                </div>

                <div className={styles.listLine}>
                    <ul className={styles.blocked}>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Snapchat</li>
                        <li>Discord</li>
                        <li>Messenger</li>
                        <li>Whatsapp</li>
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

export default SocialLD;