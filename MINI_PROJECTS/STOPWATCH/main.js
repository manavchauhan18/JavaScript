var hr = 0;
var min = 0;
var sec = 0;

const H = document.getElementById("hours");
const M = document.getElementById("minutes");
const S = document.getElementById("seconds");

const RecordList = document.getElementById("list");


stopTime = true;

function StartTimer() {
    if (stopTime == true) {
        stopTime = false;
        TimeCycle();
    }
}

function StopTimer() {
    if (stopTime == false) {
        stopTime = true;
    }
}

function ResetTimer() {
    stopTime = true;
    H.innerHTML = '00';
    M.innerHTML = '00';
    S.innerHTML = '00';

    hr = 0;
    min = 0;
    sec = 0;

    function removeAllList(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.childNodes[1]);
        }
    }
    removeAllList(RecordList);
}


function TimeCycle() {

    if (stopTime == false) {
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);

        sec = sec + 1;

        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }
        
        if (sec < 10 || sec == 0) {
            sec = "0" + sec;
        }
        if (min < 10 || min == 0) {
            min = "0" + min;
        }
        if (hr < 10 || hr == 0) {
            hr = "0" + hr;
        }
        
        H.innerHTML = hr;
        M.innerHTML = min;
        S.innerHTML = sec;

        setTimeout("TimeCycle()", 1000);
    }
}

function recordlap() {
    var record_hr;
    var record_min;
    var record_sec;

    record_hr = hr;
    record_min = min;
    record_sec = sec;

    const child = document.createElement("LI");  
    child.style.listStyleType = "none";  
    child.style.paddingBottom = "0.3rem";
    RecordList.appendChild(child);

    child.innerHTML = record_hr + ":" + record_min + ":" + record_sec;

    record_hr = 0;
    record_min = 0;
    record_sec = 0;
}