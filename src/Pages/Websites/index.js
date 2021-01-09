import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import BlockElement from "../../Components/BlockElement"
import url_active from "./icons/url_active.png";

const Websites = (props) => {

    const {history} = props;

    document.body.style.backgroundColor = "white";

    if (localStorage.getItem("websites") === null) {
      localStorage.setItem("websites",[]);
    }

    const [websitesArray, changeKeywords] = useState(localStorage.getItem("websites").split(","));
    const [inputWord, changeInput] = useState("");

    function toggleInputChange(e) {
      changeInput(e.target.value);
      console.log(inputWord);
    }

    function addElement(e) {
      e.preventDefault();
      //adds word to state for frontend
      var websitesList = websitesArray; //make alias (can't change keyword Array directly because its array)
      websitesList.push(inputWord); //push new word to alias
      changeKeywords(websitesList); //use changeKeywords function which is defined above (line 15) to change the state of keywordArray to whatever is in brackets.

      //adds word to localstorage for storage in backend
      if (websitesArray.length === 0) {
        var websitesLocal = localStorage.getItem("websites") + inputWord;
      } else {
        var websitesLocal = localStorage.getItem("websites") + "," + inputWord;
      }
      localStorage.setItem("websites", websitesLocal);

      changeInput("");
    }

    function takeBack() {
      history.push('/');
  }

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
            <img src={url_active} alt="logo" className={styles.pagelogo}></img>
            <div className={styles.queryContainer}>
              <div className="addBox">
                <input type="text" id="myInput" onChange={toggleInputChange} placeholder="Enter words here..."></input>
                <button onClick={addElement} className={styles.addBtn}>Add this</button>
              </div>
            </div>
            <div className="blocked">
                {websitesArray.map((value, index) =>
                  <BlockElement value={value} type={"websites"}/>
                )}
            </div>

            <div className={styles.submitContainer}>
              <input type="submit" value="Block these!" onClick={takeBack}></input>
            </div>
            <button className={styles.back} onClick={takeBack}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Websites;
