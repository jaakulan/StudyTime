import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";


const Starter = () => {

    const [blockKeyword, changeKeyword] = useState(false);
    const [blockWebsite, changeWebsite] = useState(false);
    const [totalLockdown, changeTotal] = useState(false);
    const [socialLockdown, changeSocial] = useState(false);
    const [gameLockdown, changeGame] = useState(false);
    const [streamLockdown, changeStream] = useState(false);
    const [newRestriction, changeRestriction] = useState(true);
    const [preRestriction, changePreRestriction] = useState(false);

    document.body.style.backgroundColor = "white";
    function changingRestriction() {
        changeRestriction(true);
        changePreRestriction(false);
    }

    function changingPreRestriction() {
        changePreRestriction(true);
        changeRestriction(false);
    }

    function changingKeyword() {
        changeKeyword(!blockKeyword);
    }

    function changingWebsite() {
        changeWebsite(!blockWebsite);
    }

    function changingTotal() {
        changeTotal(!totalLockdown);
    }

    function changingSocial() {
        changeSocial(!socialLockdown);
    }

    function changingGame() {
        changeGame(!gameLockdown);
    }

    function changingStream() {
        changeStream(!streamLockdown);
    }

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>

            <div className={styles.tabs}>
              <button className={styles.tab1} onClick={changingRestriction}>New restriction preset</button>
              <button className={styles.tab2} onClick={changingPreRestriction}>Previous presets</button>
            </div>

            <div className={`${styles.newRestrictionStyle} ${newRestriction ? styles.showleft : styles.noShow}`}>
               <hr className={styles.headerUnderlineleft}></hr>
               <div className={styles.checklist}>
                   <button className={styles.items} onClick={changingKeyword}><img src="StudyTime_icon.png" alt="logo" className={styles.buttonlogo}></img>Block by keywords</button>
                   <button className={styles.items} onClick={changingWebsite}>Block by websites</button>
                   <button className={styles.items} onClick={changingTotal}>Total Lockdown</button>
                   <button className={styles.items} onClick={changingGame}>Gaming Lockdown</button>
                   <button className={styles.items} onClick={changingSocial}>Social Media Lockdown</button>
                   <button className={styles.items} onClick={changingStream}>Streaming Lockdown</button>
               </div>
               <div className={styles.btnContainer}>
                   <button className={styles.btnStart}>Start studying</button>
                   <button className={styles.btnSettings}>Settings </button>
               </div>
            </div>

            <div className={`${styles.preRestrictionStyle} ${preRestriction ? styles.showright : styles.noShow}`}>
               <hr className={styles.headerUnderlineright}></hr>
               <h3> Not done yet </h3>
               <div className={styles.btnContainer}>
                   <button className={styles.btnStart}>Start studying</button>
                   <button className={styles.btnSettings}>Settings </button>
               </div>
            </div>

        </div>
    )
}

export default Starter
