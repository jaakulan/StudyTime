import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import keyword_inactive from "./icons/keyword_inactive.png";
import keyword_active from "./icons/keyword_active.png";
import url_inactive from "./icons/url_inactive.png";
import url_active from "./icons/url_active.png";
import totalLockdown_inactive from "./icons/totalLockdown_inactive.png";
import totalLockdown_active from "./icons/totalLockdown_active.png";
import gamingLockdown_inactive from "./icons/gamingLockdown_inactive.png";
import gamingLockdown_active from "./icons/gamingLockdown_active.png";
import socialLockdown_inactive from "./icons/socialLockdown_inactive.png";
import socialLockdown_active from "./icons/socialLockdown_active.png";
import streamLockdown_inactive from "./icons/streamLockdown_inactive.png";
import streamLockdown_active from "./icons/streamLockdown_active.png";
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
    const [keywordImage, changeKImage] = useState(keyword_inactive);
    const [urlImage, changeUImage] = useState(url_inactive);
    const [totalImage, changeTImage] = useState(totalLockdown_inactive);
    const [gamingImage, changeGImage] = useState(gamingLockdown_inactive);
    const [socialImage, changeSoImage] = useState(socialLockdown_inactive);
    const [streamImage, changeStImage] = useState(streamLockdown_inactive);

    const { history } = props;

    document.body.style.backgroundColor = "white";

    if (localStorage.getItem("study") === null) {
        localStorage.setItem("study", "");
    }
    if (localStorage.getItem("stream") === null) {
        localStorage.setItem("stream", "");
    }
    if (localStorage.getItem("keywords") === null) {
        localStorage.setItem("keywords", "");
    }
    if (localStorage.getItem("websites") === null) {
        localStorage.setItem("websites", "");
    }
    if (localStorage.getItem("gaming") === null) {
        localStorage.setItem("gaming", "");
    }
    if (localStorage.getItem("total") === null) {
        localStorage.setItem("total", "");
    }
    if (localStorage.getItem("social") === null) {
        localStorage.setItem("social", "");
    }

    useEffect(() => {
        if (localStorage.getItem("keywords") != "") {
            changeKImage(keyword_active);
        }

        if (localStorage.getItem("social") != "") {
            changeSoImage(socialLockdown_active);
            console.log(socialImage);
            console.log("hello");
        }
    
        if (localStorage.getItem("gaming") != "") {
            changeGImage(gamingLockdown_active);
        }
    
        if (localStorage.getItem("stream") != "") {
            changeStImage(streamLockdown_active);
        }
    
        if (localStorage.getItem("total") != "") {
            changeTImage(totalLockdown_active);
        }
    
        if (localStorage.getItem("websites") != "") {
            changeUImage(url_active);
        }
    })

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
                   <button className={styles.items} onClick={changingKeyword}><img src={keywordImage} alt="ButtonLogo" className={styles.smallbuttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Block by keywords</button>
                   <button className={styles.items} onClick={changingWebsite}><img src={urlImage} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Block by websites</button>
                   <button className={styles.items} onClick={changingTotal}><img src={totalImage} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Total Lockdown</button>
                   <button className={styles.items} onClick={changingGame}><img src={gamingImage} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Gaming Lockdown</button>
                   <button className={styles.items} onClick={changingSocial}><img src={socialImage} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Social Media Lockdown</button>
                   <button className={styles.items} onClick={changingStream}><img src={streamImage} alt="ButtonLogo" className={styles.buttonlogo}></img><img src={chevron_right} alt="arrow" className={styles.rightChevron}></img>Streaming Lockdown</button>
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
