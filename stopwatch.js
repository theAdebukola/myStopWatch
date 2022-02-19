let minute;
let second;
let stopTime;
let press = 0;
let newM;
let newS;

function handleMinute(params) {
    document.getElementById('display').innerHTML = "";
    minute=params.value;
    document.getElementById('display').innerHTML = minute;
}

function handleSecond(params) {
    document.getElementById('display2').innerHTML = "";
    second=params.value;
    document.getElementById('display2').innerHTML = second;
}

function displayTime(params) {
    stopTime = setInterval(()=>{
        if (document.getElementById('display2').innerHTML=="0" && document.getElementById('display').innerHTML!="0") {
           second=60;
           minute--; 
        }
        if (document.getElementById('display2').innerHTML=="0" &&  document.getElementById('display').innerHTML=="0") {
            second=1;
            clearInterval(stopTime);
         }
        second--;
        document.getElementById('display2').innerHTML = second;
        document.getElementById('display').innerHTML = minute;
     },1000);

    }


   function handleStart(params){
    press++;
if (press == 1){
    console.log(minute, second);
    document.getElementById('start').innerHTML='Pause';
    displayTime();
}

else if (press == 2) {
    document.getElementById('start').innerHTML='Start';
    clearInterval(stopTime);
    newM = minute;
    newS = second;
    minute=0;
    second=0;
    minute = newM;
    second = newS;
    setTimeout(()=>{
    press = 0;
    },1000);
  }
}

function handleReset() {
    location.reload();
 }  