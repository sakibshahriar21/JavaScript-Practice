const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');


const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const total_seconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(total_seconds / 3600 / 24);
    
    const hours = Math.floor(total_seconds/ 3600) % 24;

    const minutes = Math.floor(total_seconds/ 60) % 60;

    const seconds = Math.floor(total_seconds) % 60;
    
    //console.log(days, hours, minutes, seconds);
    
    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
    //if we have less than 10 sec/min/hours/days remaining, we will show a 0 in front
}

//initial call
countdown();

setInterval(countdown, 1000);