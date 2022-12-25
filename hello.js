console.log("Content script is loaded")

function loadFinished(event){
    console.log(event);
}

window.addEventListener('load', getHeader);

 function getHeader ()  {
    var HeaderNode = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1r5su4o r-e7q0ms")[0]
    if (!HeaderNode) return false;
    var timeDiv = document.createElement("div");
    timeDiv.innerHTML = "<div>now time</div>"
    HeaderNode.appendChild(timeDiv)
    return true
}

var interval = setInterval(function () {
    if(getHeader()) clearInterval(interval)
}, 1000)