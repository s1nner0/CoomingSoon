const countdown = document.querySelector(".countdown");
const launchDate = new Date("Dec 25, 2020 00:00:01");
const interval = setInterval(()=>{
    const now = new Date().getTime();
    const timeleft = launchDate - now;

    const days = Math.floor(timeleft/(1000*60*60*24));
    const hours = Math.floor(timeleft % (1000*60*60*24)/(1000*60*60));
    const minutes = Math.floor(timeleft % (1000*60*60)/(1000*60));
    const seconds = Math.floor(timeleft % (1000*60)/1000);
    countdown.innerHTML = `
        <div><span>${days} days</span></div>
        <div><span>${hours} hours</span></div>
        <div><span>${minutes} minutes</span></div>
        <div><span>${seconds} seconds</span></div>
    `;
    console.log(seconds);
}, 1000);