import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import socialLockdown_active from "./icons/socialLockdown_active.png";

const SocialLD = () => {

    document.body.style.backgroundColor = "white";

    const [blockButton, changeButton] = useState("Block These!");
    //string to be sent to localStorage. Note that comma seperated but no spaces after comma
    const socialString = "https://www.facebook.com/,https://www.instagram.com/,https://discord.com/,https://web.whatsapp.com/";

    if (localStorage.getItem("social") === null) {
        localStorage.setItem("social", "");
    }

    useEffect(() => {
        if (localStorage.getItem("social") !== "") {
            changeButton("Unblock These!");
        } else {
            changeButton("Block These!");
        }
    })

    function changeSocial(e) {
        e.preventDefault();
        if (localStorage.getItem("social") === "") {
            localStorage.setItem("social", socialString);
            changeButton("Unblock These!");
        } else {
            localStorage.setItem("social", "");
            changeButton("Block These!");
        }
        window.location.href = "/";
    }

    return (
        <div className={styles.starter}>
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
                        <li>Discord</li>
                        <li>Messenger</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>

                <div className={styles.submitContainer}>
                    <input type="submit" value={blockButton} onClick={changeSocial}></input>
                </div>
            <form action="/">
            <button className={styles.back}>Nevermind, Take me Back!</button>
            </form>
        </div>

    )
}

export default SocialLD;
