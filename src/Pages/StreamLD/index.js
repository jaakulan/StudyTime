import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import streamLockdown_active from "./icons/streamLockdown_active.png";

const StreamLD = () => {

    document.body.style.backgroundColor = "white";
    
    const [blockButton, changeButton] = useState("Block These!");
    const streamString = "https://www.youtube.com/,https://www.dailymotion.com/ca,https://vimeo.com/";

    if (localStorage.getItem("stream") === null) {
        localStorage.setItem("stream", "");
    }

    useEffect(() => {
        if (localStorage.getItem("stream") !== "") {
            changeButton("Unblock These!");
        } else {
            changeButton("Block These!");
        }
    })

    function changeStream(e) {
        e.preventDefault();
        if (localStorage.getItem("stream") === "") {
            localStorage.setItem("stream", streamString);
            changeButton("Unblock These!");
        } else {
            localStorage.setItem("stream", "");
            changeButton("Block These!");
        }
    }

    return (
        <div className={styles.starter}>
            <form action="/">
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={streamLockdown_active} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <h1 className={styles.greeting}>The following streaming websites will be blocked:</h1>
                </div>

                <div className={styles.listLine}>
                    <ul className={styles.blocked}>
                        <li>Youtube</li>
                        <li>DailyMotion</li>
                        <li>Netflix</li>
                        <li>Hulu</li>
                        <li>Amazon Prime Video</li>
                        <li>Vimeo</li>
                        <li>SlingTV</li>
                        <li>Showtime</li>
                        <li>Crackle</li>
                        <li>RogersOnDemand</li>
                        <li>Tubi</li>
                        <li>FibeTV</li>
                        <li>Any mentions of streaming</li>
                    </ul>
                </div>

                <div className={styles.submitContainer}>
                    <input type="submit" value={blockButton} onClick={changeStream}></input>
                </div>
            </form>
            <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>

    )
}

export default StreamLD;
