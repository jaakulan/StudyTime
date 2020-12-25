import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const Starter = () => {

    const [totalLockdown, changeTotal] = useState(false);
    const [socialLockdown, changeSocial] = useState(false);
    const [gameLockdown, changeGame] = useState(false);
    const [streamLockdown, changeStream] = useState(false);

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
            <h1 className={styles.title}>StudyTime</h1>
            <div className={styles.checklist}>
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
    )
}

export default Starter