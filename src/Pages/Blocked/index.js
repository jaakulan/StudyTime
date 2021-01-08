import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import blocked from "./icons/blocked.png";

const Blocked = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={blocked} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <div className={styles.keywords}>
                        <h1 className={styles.greeting}>The following keywords will be blocked:</h1>
                        <div className={styles.listLine}>
                            <ul className={styles.blocked}>
                                <li>Stuff</li>
                                <li>more stuff</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.websites}>
                        <h1 className={styles.greeting}>The following websites will be blocked:</h1>
                        <div className={styles.listLine}>
                            <ul className={styles.blocked}>
                              <li>Stuff</li>
                              <li>more stuff</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <form action="/">
            <button className={styles.back}>Take me Back!</button>
            </form>
        </div>

    )
}

export default Blocked;
