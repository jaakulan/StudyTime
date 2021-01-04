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
}
  
//BLOCK THE ENTIRE DOMAIN WITH THE FOLLOWING FUNCTION
findAllURL = function changeAllURL(text){
    var current = window.location.href;
    if(current.startsWith(text)){
      document.documentElement.innerHTML = '';
      document.documentElement.innerHTML = 'Domain is blocked';
      document.documentElement.scrollTop = 0;
    }
}

chrome.webNavigation.onCompleted.addListener(function() {
  if (localStorage.getItem("stream") !== "") {
    const stream = localStorage.getItem("stream").split(",");
    const current = window.location.href;
    const length = stream.length;
    for (let i = 0; i < length; i++) {
      if (stream[i] === current) {
        alert("Distraction Alert");
        findAllURL(current);
      }
    }
  }
}, {url: [{urlMatches : '.*'}]});