let tableArray = [...document.querySelectorAll('td')];
let tempArr = Array.from(Array(4), () => new Array(4));
const topBtn = document.querySelector('.sideTop');
const leftBtn = document.querySelector('.sideLeft');
const score = document.querySelector('.currentscore');

window.onload = setGame();
function setGame() {

    for(let i = 0; i< 4 ; i++){
        for(let k = 0; k< 4 ; k++){
            tempArr[i][k] = 0;
        }
    }
    console.log(tempArr);
    for(let i = 0 ; i < 2 ; i++){
        for(let k = 0 ; k < 2 ; k++){
            tempArr[i][k] = 2;
        }
    }
    
    getArray(tempArr);
}

function getArray(arr) {
    
    let index = 0;
    for(let i = 0 ; i < 4 ; i++){
        for(let k = 0 ; k < 4 ; k++){
                tableArray[index].innerHTML = arr[i][k];
                if(tableArray[index].innerHTML == 0){
                    tableArray[index].className = "";
                }
            index++;
        }
    }
    setBackground();
}

function setBackground() {
    tableArray.forEach((e)=>{
        if(e.innerHTML >= 2){
            e.className = 'lowRange';
        }else{
            e.className = 'blank';
        }
    })
}

topBtn.addEventListener('click',()=>{
    let temp = tempArr.map(e => [...e]);
    let mergeCheck = false;

    while(true){
        let flag = false;
        for(let i = 0 ; i < temp.length ; i++){
            for(let k = 0 ; k < 3 ; k++){
                if(temp[k][i] != 0 && temp[k][i] == temp[k+1][i]){
                    mergeCheck = true;
                    flag = true;
                    temp[k+1][i] = 0;
                    let scores = parseInt(score.innerHTML);
                    scores += parseInt(temp[k][i]);
                    score.innerHTML = scores;
                    temp[k][i]*=2;
                }
            }
        }
        if(flag == false){
            break;
        }
    }
    if(mergeCheck = true){
        for(let i = 0 ; i < temp.length ; i++){
            for(let k = 0 ; k < 3 ; k++){
                if(temp[k][i] == 0 ){
                    temp[k][i] = temp[k+1][i];
                    }
                }
            }

            tempArr = temp.map(e => [...e]);
            console.log(tempArr);
            getArray(tempArr);
        }

})