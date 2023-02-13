const array = [...document.querySelectorAll('td')];
const timer = document.querySelector('.timer');
const backArr = new Array(25);
const resetBtn = document.querySelector('button');
let timeflag = false;
let count = 1;
let cnt = 0;
let sec = 0;
let min = 0;
let hour = 0;
let time;

resetBtn.addEventListener('mouseenter',(e)=> {
e.target.style = 'cursor:pointer'})

resetBtn.addEventListener('click',(e)=> {
    clearInterval(time);
    resetArr();
    setting();
    timeflag = false;
    count = 1;
    cnt = 0;
    sec = 0;
    min = 0;
        })

function resetArr() {
    for (let index = 0; index < array.length; index++) {
        array[index].className = "";
        array[index].innerHTML = "";
    }
}

function setting() {
    for(i = 0 ; i < array.length ; i++){
        let ranNum = parseInt(Math.random()*25)+1
        array[i].innerHTML = ranNum;
        backArr[i] = ranNum + 25;
        for(k = 0 ; k < i ; k++){
            if(i != k){
                if(array[i].innerHTML == array[k].innerHTML
                    || backArr[k] === backArr[i]){
                    i--;
                }
            }
        }
    }
}

window.onload=setting();

array.forEach(e=>{
    e.addEventListener('click',element => {
        console.log(count);
        if(element.target.innerHTML == count){
            if(timeflag == false){
                timeflag = true;
                time = setInterval(() => {
                    cnt++;
                    let ms = cnt%10;
                    sec = parseInt(cnt/10);
                    hour = 0;
                    if(sec == 60){
                        cnt = 0;
                        min ++;
                    }
                    timer.innerHTML = `${hour} : ${min}: ${sec}.${ms}`;
                }, 100);
            }
                e.className= 'fade-in-out';
                if(count-1 >= backArr.length){
                    e.className = 'close';
                    e.innerHTML = "";
                }else{
                    e.innerHTML = backArr[count-1];
                }
                if(count == 50){
                    clearInterval(time);
                    printRes();
                }
                count++;
                setTimeout(() => {
                    if(e.className !='close') {e.className=""}
                }, 2000);
        }
    })
})
function printRes() {
    alert(`총 걸린시간은 : ${min} 분 ${sec}초`);
}
