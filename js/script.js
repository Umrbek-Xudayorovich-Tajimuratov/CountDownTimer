const mybirthday = "18 Oct 2021";

const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


function countDown(){
    const myBirthday = new Date(mybirthday);
    const currentDate = new Date();

    const totalSeconds  = (myBirthday - currentDate) / 1000;

    console.log(myBirthday - currentDate);
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