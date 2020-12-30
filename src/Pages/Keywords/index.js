import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import keyword_active from "./icons/keyword_active.png";


const Keywords = () => {

    document.body.style.backgroundColor = "white";

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    function newElement(){
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("blockedList").appendChild(li);
      }
      document.getElementById("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("X");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }

    return (
        <div className={styles.starter}>
            <img src="StudyTime_icon.png" alt="logo" className={styles.logo}></img>
            <h1 className={styles.header}>StudyTime</h1>
            <hr className={styles.headerBreak}></hr>
            <img src={keyword_active} alt="logo" className={styles.pagelogo}></img>
            <h2>Any keywords entered here will block websites which contain them. Please enter all keywords you want blocked using comma's or whitespaces to seperate them:</h2>
              <div id="myDIV">
                <input type="text" id="myInput" placeholder="Enter words here..."></input>
                <button onClick={newElement} className={styles.addBtn}>Add this</button>
              </div>

              <ul id="blockedList">
              </ul>

              <div className={styles.submitContainer}>
               <button className={styles.block}>"Block these!"</button>
              </div>
          <button className={styles.back}>Nevermind, Take me Back!</button>
        </div>
    )
}

export default Keywords;
