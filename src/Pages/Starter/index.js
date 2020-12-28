import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import w3style from "../../w3.css"


const Starter = () => {

    const [blockKeyword, changeKeyword] = useState(false);
    const [blockWebsite, changeWebsite] = useState(false);
    const [totalLockdown, changeTotal] = useState(false);
    const [socialLockdown, changeSocial] = useState(false);
    const [gameLockdown, changeGame] = useState(false);
    const [streamLockdown, changeStream] = useState(false);
    const [newRestriction, changeRestriction] = useState(false);
    const [preRestriction, changePreRestriction] = useState(false);


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

    console.log(newRestriction);

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>

            <div class="tab">
              <button class="tablinks" onClick={changingRestriction}>New restriction preset</button>
              <button class="tablinks" onClick={changingPreRestriction}>Previous presets</button>
            </div>

            <div className={`${styles.newRestrictionStyle} ${newRestriction ? styles.show : styles.noShow}`}>
               <div className={styles.checklist}>
                   <button className={styles.items} onClick={changingKeyword}>Block by keywords</button>
                   <button className={styles.items} onClick={changingWebsite}>Block by websites</button>
                   <button className={styles.items} onClick={changingTotal}>Total Lockdown</button>
                   <button className={styles.items} onClick={changingGame}>Gaming Lockdown</button>
                   <button className={styles.items} onClick={changingSocial}>Social Media Lockdown</button>
                   <button className={styles.items} onClick={changingStream}>Streaming Lockdown</button>
               </div>
               <div className={styles.mainButtons}>
                   <button className={styles.start}>Start studying</button>
                   <button className={styles.settings}>Settings </button>
               </div>
            </div>

            <div className={`${styles.preRestrictionStyle} ${preRestriction ? styles.show : styles.noShow}`}>
               <h3> Not done yet </h3>
               <div className={styles.mainButtons}>
                   <button className={styles.start}>Start studying</button>
                   <button className={styles.settings}>Settings </button>
               </div>
            </div>

        </div>
    )
}

export default Starter
