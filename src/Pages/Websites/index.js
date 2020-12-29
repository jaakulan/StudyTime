import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import url_active from "./icons/url_active.png";

const Websites = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
          <form action="/">
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
            <img src={url_active} alt="logo" className={styles.pagelogo}></img>
            <div className={styles.queryContainer}>
              
                  <label for="name">Any website entered here will be blocked. Please enter all websites you want blocked using comma's or whitespaces to seperate them:</label>
                  <input type="text" id="textbox" name="websitesAdded" placeholder="Your name.."></input>
            </div>

            <div className={styles.submitContainer}>
              <input type="submit" value="Block these!"></input>
            </div>
            </form>
            <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Websites;
