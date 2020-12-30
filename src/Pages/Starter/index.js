import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import keyword_inactive from "./icons/keyword_inactive.png";
import url_inactive from "./icons/url_inactive.png";
import totalLockdown_inactive from "./icons/totalLockdown_inactive.png";
import gamingLockdown_inactive from "./icons/gamingLockdown_inactive.png";
import socialLockdown_inactive from "./icons/socialLockdown_inactive.png";
import streamLockdown_inactive from "./icons/streamLockdown_inactive.png";
import chevron_right from "./icons/chevron_right.png";



const Starter = (props) => {

    const [blockKeyword, changeKeyword] = useState(false);
    const [blockWebsite, changeWebsite] = useState(false);
    const [totalLockdown, changeTotal] = useState(false);
    const [socialLockdown, changeSocial] = useState(false);
    const [gameLockdown, changeGame] = useState(false);
    const [streamLockdown, changeStream] = useState(false);
    const [newRestriction, changeRestriction] = useState(true);
    const [preRestriction, changePreRestriction] = useState(false);

    const { history } = props;

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
        history.push('/keywords');
    }

    function changingWebsite() {
        changeWebsite(!blockWebsite);
        history.push('/Websites');
    }

    function changingTotal() {
        changeTotal(!totalLockdown);
        history.push('/TotalLD');
    }

    function changingSocial() {
        changeSocial(!socialLockdown);
        history.push('/SocialLD');
    }

    function changingGame() {
        changeGame(!gameLockdown);
        history.push('GamingLD');
    }

    function changingStream() {
        changeStream(!streamLockdown);
        history.push('StreamLD');
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
                   <button className={styles.items} onClick={changingKeyword}><img src={keyword_inactive} alt="ButtonLogo" className={styles.smallbuttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Block by keywords</button>
                   <button className={styles.items} onClick={changingWebsite}><img src={url_inactive} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Block by websites</button>
                   <button className={styles.items} onClick={changingTotal}><img src={totalLockdown_inactive} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Total Lockdown</button>
                   <button className={styles.items} onClick={changingGame}><img src={gamingLockdown_inactive} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Gaming Lockdown</button>
                   <button className={styles.items} onClick={changingSocial}><img src={socialLockdown_inactive} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Social Media Lockdown</button>
                   <button className={styles.items} onClick={changingStream}><img src={streamLockdown_inactive} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Streaming Lockdown</button>
               </div>
            </div>

            <div className={`${styles.preRestrictionStyle} ${preRestriction ? styles.showright : styles.noShow}`}>
               <hr className={styles.headerUnderlineright}></hr>
               <h3> Not done yet </h3>
            </div>

            <div className={styles.btnContainer}>
                   <button className={styles.btnStart}>Start studying</button>
                   <button className={styles.btnSettings}>See what's blocked so far </button>
            </div>

        </div>
    )
}

export default Starter
