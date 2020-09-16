function setDate(){
    const now = new Date();
    const secs = now.getSeconds();
    const mins = now.getMinutes();
    const hrs = now.getHours();
    const secsDegrees = ((secs/ 60) * 360) +90;
    const minsDegrees = ((mins/ 60) * 360) +90;
    const hrsDegrees = ((hrs/ 60) * 360);

    secondHand.style.transform = `rotate(${secsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;

    console.log(secs);
    console.log(mins);
    console.log(hrs);

}
setInterval (setDate, 1000);
const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hr-hand');