import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import BlockElement from "../../Components/BlockElement"
import keyword_active from "./icons/keyword_active.png";


const Keywords = () => {

    document.body.style.backgroundColor = "white";

    if (localStorage.getItem("keywords") === null) {
      localStorage.setItem("keywords",[]);
    }

    const [keywordArray, changeKeywords] = useState(localStorage.getItem("keywords").split(","));
    const [inputWord, changeInput] = useState("");

    /*function addAllItems(){
      var allKeywords = document.getElementsByTag("LI");
      var i;
      for (i = 0; i < allKeywords.length; i++) {
        if(div.style.display!=="none"){
          /**add it to storage
        }
      }
    }*/

    function toggleInputChange(e) {
      changeInput(e.target.value);
      console.log(inputWord);
    }

    function addElement() {
      //adds word to state for frontend
      var keywordsList = keywordArray; //make alias (can't change keyword Array directly because its array)
      keywordsList.push(inputWord); //push new word to alias
      changeKeywords(keywordsList); //use changeKeywords function which is defined above (line 15) to change the state of keywordArray to whatever is in brackets.

      //adds word to localstorage for storage in backend
      var keywordsLocal = localStorage.getItem("keywords") + "," + inputWord;
      localStorage.setItem("keywords", keywordsLocal);

      changeInput("");
    }

    /*
    function newElement(){
      var i;
      var close = document.getElementsByClassName("close");
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You did not write a keyword!");
      } else {
        document.getElementById("blockedList").appendChild(li);
      }
      document.getElementById("myInput").value = "";
      var button = document.createElement("BUTTON");
      var txt = document.createTextNode("X");
      button.className = "close";
      button.appendChild(txt);
      li.appendChild(button);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }
    */

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
            <img src={keyword_active} alt="logo" className={styles.pagelogo}></img>
            <h2>Any keywords entered here will block websites which contain them. Please enter all keywords you want blocked using comma's or whitespaces to seperate them:</h2>
            <div id="queryContainer" className = {styles.queryContainer}>
              <div className="addBox">
                <input type="text" id="myInput" onChange={toggleInputChange} placeholder="Enter words here..."></input>
                <button onClick={addElement} className={styles.addBtn}>Add this</button>
              </div>

              <div className="blocked">
                {keywordArray.map((value, index) =>
                  <BlockElement value={value} type={"keywords"}/>
                )}
              </div>
            </div>

              <div className={styles.submitContainer}>
               <button className={styles.block}>"Block these!"</button>
              </div>
          <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Keywords;
