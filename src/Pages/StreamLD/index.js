import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import streamLockdown_active from "./icons/streamLockdown_active.png";

const StreamLD = (props) => {

    const {history} = props;

    document.body.style.backgroundColor = "white";
    
    const [blockButton, changeButton] = useState("Block These!");
    const streamString = "stream,Stream,streams,Streams,streaming,Streaming,https://www.youtube.com/,https://www.dailymotion.com/ca,https://www.netflix.com/,https://www.hulu.com/,https://www.primevideo.com/,https://vimeo.com/,https://www.sling.com/,https://www.sho.com/,https://www.crave.ca/,https://www.crackle.com/,http://www.rogersondemand.com/,https://tubitv.com/";

    

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
        history.push('/');
    }

    function takeBack() {
        history.push('/');
    }

    return (
        <div className={styles.starter}>
                <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.header}>StudyTime</h1>
                <hr className={styles.headerBreak}></hr>
                <img src={streamLockdown_active} alt="logo" className={styles.pagelogo}></img>
                <div className={styles.greetingContainer}>
                    <h1 className={styles.instructions}>The following streaming websites will be blocked:</h1>
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
                        <li>Any mentions of streaming</li>
                    </ul>
                </div>

                <div className={styles.submitContainer}>
                    <button className={styles.block} type="submit" value={blockButton} onClick={changeStream}>{blockButton}</button>
                </div>
            <form action="/">
            <button className={styles.back} onClick={takeBack}>Nevermind, Take me Back!</button>
            </form>
        </div>

    )
}

export default StreamLD;
