// const mybirthday = new Date("18 Oct 2021");

const setTitle = document.getElementById("settitle");
const stateDate = document.getElementById("state");

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");



function countDown(){
    const currentDate = new Date();
    const myBirthday = checkData();
    
    const totalSeconds  = (myBirthday - currentDate) / 1000;

    const days = Math.floor(totalSeconds/24/3600);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 24 % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = formatTime(hours);
    minuteEl.innerHTML = formatTime(minutes);
    secondEl.innerHTML = formatTime(seconds);

}

setInterval(countDown, 1000);

function formatTime(time){
    return (time < 10) ? `0${time}`: time;
}


function checkData(){
    let setDate = new Date(document.getElementById("date-input").value);
    const currentDateCheck = new Date();
    stateDate.innerHTML = "Invalid Date. Must be future target!";

    if(setDate == "Invalid Date" || setDate <= currentDateCheck) {
        setDate = new Date("18 Oct 2021");
        return setDate;
     }
    else{
        document.getElementById("titleh1").innerHTML = (!setTitle.value)? "My Birthday!": setTitle.value;
        stateDate.innerHTML = "";
        return setDate;
    }


}