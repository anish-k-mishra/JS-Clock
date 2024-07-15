let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');


setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;

    hr.style.transform = `rotateZ(${hh+(mm)/12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let h = document.getElementById('hour');
    let m = document.getElementById('minute');
    let s = document.getElementById('second');
    let ampm = document.getElementById('ampm');

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    let am = (hour>=12) ? "PM" : "AM";

    if(hour>12){
        hour = hour-12;
    }

    hour = (hour<10) ? "0"+hour : hour;
    minute = (minute<10) ? "0"+minute : minute;
    second = (second<10) ? "0"+second : second;
    
    
    h.innerHTML = hour;
    s.innerHTML = second;
    m.innerHTML = minute;
    ampm.innerHTML = am;
}, 1000)

