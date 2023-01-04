var loadDate = new Date();
var steyTime = 0

var flag = false


function showTime ()  {
    var HeaderNode = document.getElementsByClassName("css-1dbjc4n r-1awozwy r-1r5su4o r-e7q0ms")[0]
    if (!HeaderNode) return false;
    var timeDiv = document.createElement("div");
    timeDiv.innerHTML = `<div id="stey">滞在時間：${steyTime}</div>`
    HeaderNode.appendChild(timeDiv)
    flag = true
    return true
}
var interval = setInterval(function () {
    if(showTime()) clearInterval(interval)
}, 1000)

function cns(){
    steyTime += 1
    console.log(steyTime)
    if (flag) {
        var timeNode = document.getElementById("stey")
        var time = parseInt(steyTime, 10)
        timeNode.innerHTML = `<div id="stey">滞在時間：${time}秒</div>`
    }
}

var intervalID = setInterval(function(){
    if(!document.hidden){
        cns()
    }
}, 1000)