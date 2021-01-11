import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./styles.module.css";
import BlockElement from "../../Components/BlockElement"
import keyword_active from "./icons/keyword_active.png";


const Keywords = (props) => {

    const {history} = props;

    document.body.style.backgroundColor = "white";

    if (localStorage.getItem("keywords") === null) {
      localStorage.setItem("keywords",[]);
    }

    const [keywordArray, changeKeywords] = useState(localStorage.getItem("keywords").split(","));
    const [inputWord, changeInput] = useState("");

    function toggleInputChange(e) {
      changeInput(e.target.value);
    }

    function addElement(e) {
      e.preventDefault(); //prevents button from operating normally which is refreshing the page.
      //adds word to state for frontend
      var keywordsList = keywordArray; //make alias (can't change keyword Array directly because its array)
      keywordsList.push(inputWord); //push new word to alias
      changeKeywords(keywordsList); //use changeKeywords function which is defined above (line 15) to change the state of keywordArray to whatever is in brackets.

      //adds word to localstorage for storage in backend
      if (keywordArray.length === 0) {
        var keywordsLocal = localStorage.getItem("keywords") + inputWord;
      } else {
        var keywordsLocal = localStorage.getItem("keywords") + "," + inputWord;
      }
      localStorage.setItem("keywords", keywordsLocal);

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
            <img src={keyword_active} alt="logo" className={styles.pagelogo}></img>
            <div className={styles.instructions}>Any keywords entered here will block websites which contain them. Please enter all keywords you want blocked using comma's or whitespaces to seperate them:</div>
            <div id="queryContainer" className = {styles.queryContainer}>
              <div className="addBox">
                <input type="text" className={styles.notransition} onChange={toggleInputChange} placeholder="Enter words here..."></input>
                <button onClick={addElement} className={styles.addBtn}>Add this</button>
              </div>

              <div className="blocked">
                {keywordArray.map((value, index) =>
                  <BlockElement value={value} type={"keywords"}/>
                )}
              </div>
            </div>

              <div className={styles.submitContainer}>
               <button className={styles.block} onClick={takeBack}>Block these!</button>
              </div>
          <button className={styles.back} onClick={takeBack}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Keywords;
