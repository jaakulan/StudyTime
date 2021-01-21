//BLOCK WORDS
findString = function findText(text) {
    if(window.find(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'This site is blocked';
      document.documentElement.scrollTop = 0;
    };
  }
  
  findString("WordToBlock");
  
  //BLOCK THE PARTIAL DOMAINS
  findURL = function changeURL(text){
    var current = window.location.href;
    if(current === text){
      window.location.replace("https://www.google.co.in");
    }
    console.log(localStorage.getItem("social"));
  }
  
  //BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
  findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.startsWith(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'Domain is blocked';
      document.documentElement.scrollTop = 0;
    }
    console.log(localStorage.getItem("social"));
  }
  
  
  findURL("https://www.quora.com/");
  findAllURL("https://www.facebook.com/");