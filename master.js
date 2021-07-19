setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    let currentTime = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerHTML = currentTime;


}

function showDay() {
    let date = new Date();
    let day = date.getDay();
    switch (date.getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    let month = date.getMonth();
    switch (date.getMonth()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    let dayNumber = date.getDate();
    let currentDay = day + " " + month + " " + dayNumber;
    document.getElementById("date").innerHTML = currentDay;
}
function showYear(){
    let spihf = new Date();
    yyear = spihf.getFullYear();
    document.getElementById("year").innerHTML = yyear;
}
showYear();
showDay();
showTime();
