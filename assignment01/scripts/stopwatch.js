let startClick = document.getElementById('startClick');
let stopClick = document.getElementById('stopClick');
let lapClick = document.getElementById('lapClick');
let resetClick = document.getElementById('resetClick');

let display = document.getElementById('display');
let recordList = document.getElementById('recordList');

let timer;
let isRunning = false;
let hasTime = false;
let startTime;
let lapNumber = 1;

//Stop button has to be disabled by default
stopClick.disabled = true;

//Function to start the timer when clicking on the start button
function startTimer(){
    if(!hasTime){
        startTime = Date.now();
        timer = setInterval(updateDisplay, 10);
        startClick.disabled = true;
        stopClick.disabled = false;

        hasTime = true;
    } else {
        timer = setInterval(updateDisplay, 10);
        startClick.disabled = true;
        stopClick.disabled = false;
    }

    isRunning = true;
}
startClick.addEventListener('click',startTimer);

//Function to stop the timer when clicking on the stop button
function stopTimer(){
    clearInterval(timer);
    startClick.disabled = false;
    stopClick.disabled = true;
    isRunning = false;
}
stopClick.addEventListener('click',stopTimer);

//Function to reset the timer to 00:00:00
function resetTimer(){
    clearInterval(timer);
    display.textContent = '00:00:00';
    startClick.disabled = false;
    stopClick.disabled = true;
    
    recordList.innerHTML = '';
    isRunning = false;
    hasTime = false;
}
resetClick.addEventListener('click', resetTimer);

//Function to record the lap and shown it to UI
function recordLap(){
    if(isRunning){
        const laptime = Date.now() - startTime;
        const minutes = Math.floor(laptime/60000);
        const seconds = Math.floor((laptime % 60000) / 1000);
        const milliseconds = Math.floor((laptime % 1000) / 10);

        const lapItem = document.createElement('div');
        lapItem.classList.add('record-item');
        lapItem.innerHTML = `<p>${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}</p> <i class="bi bi-flag-fill"></i>`;
        recordList.appendChild(lapItem);
    }
}
lapClick.addEventListener('click',recordLap);

//Helper functions
//Function to update the display of time
function updateDisplay(){
    const currentTime = Date.now() - startTime;
    const minutes = Math.floor((currentTime / 60000));
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    display.textContent = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
}

//function to pad the time to two digits by appending 0 infront of it
function padNumber(num){
    return num.toString().padStart(2,'0');
}