import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import keyword_active from "./icons/keyword_active.png";


const Keywords = () => {

    document.body.style.backgroundColor = "white";

    return (
        <div className={styles.starter}>
          <form action="/">
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
            <img src={keyword_active} alt="logo" className={styles.pagelogo}></img>
              <div className={styles.queryContainer}>
                    <label for="name">Any keywords entered here will block websites which contain them. Please enter all keywords you want blocked using comma's or whitespaces to seperate them:</label>
                    <input type="text" id="textbox" name="keywordsAdded" placeholder="Type the keywords here.."></input>
              </div>

              <div className={styles.submitContainer}>
               <input type="submit" value="Block these!"></input>
              </div>
          </form>
          <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Keywords;
