let tableArray = [...document.querySelectorAll('.game2048 td')];
let tempArr = Array.from(Array(4), () => new Array(4));
const clear = document.querySelector(".clear");
const topBtn = document.querySelector('.sideTop');
const leftBtn = document.querySelector('.sideLeft');
const rightBtn = document.querySelector('.sideRight');
const score = document.querySelector('.currentscore');
let mergeCheck = false;

function setGame() {

    for(let i = 0; i< 4 ; i++){
        for(let k = 0; k< 4 ; k++){
            tempArr[i][k] = 0;
        }
    }
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

    if(score.innerHTML >= 16){
        object.clearObj.style = 'z-index :5';

        let time = setTimeout(()=>{
            object.clearObj.style = 'z-index :-1';
            object.game1.style = 'z-index :-4';
            object.mainObj.style = 'z-index :1';
        },2000)
        mList[0].clear = true;
    }
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
    console.log(tempArr);
    let temp = tempArr.map(e => [...e]);
    mergeCheck = false;
    
    for(let i = 0 ; i < temp.length-1 ; i++){
        for(let k = 0 ; k < temp.length ; k++){
            if(temp[i][k] == 0 && temp[i+1][k] != 0){
                temp[i][k] = temp[i+1][k];
                temp[i+1][k] = 0;
                i = 0;
                k = 0;
                mergeCheck = true;
                }
            }
        }
    

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
                    i = 0 ;
                    k = 0;
                }
            }
        }
            break;
    }
    console.log(mergeCheck);
    if(mergeCheck == true){

            tempArr = temp.map(e => [...e]);
            ranNum(tempArr);
            getArray(tempArr);
        }
})

leftBtn.addEventListener('click',(e)=>{
    let temp = tempArr.map(e => [...e]);
    mergeCheck = false;

    for(let i = 0 ; i < temp.length ; i++){
        for(let k = 0 ; k < temp.length-1 ; k++){
            if(temp[i][k] == 0 && temp[i][k+1] != 0){
                temp[i][k] = temp[i][k+1];
                temp[i][k+1] = 0;
                i = 0;
                k = 0;
                mergeCheck = true;
                }
            }
        }

    while(true){
        for(let i = 0 ; i < 4 ; i++){
            for(let k = 0 ; k < 4 ; k++){
                if(temp[i][k] != 0 && temp[i][k] == temp[i][k+1]){
                    mergeCheck = true;
                    flag = true;
                    temp[i][k+1] = 0;
                    let scores = parseInt(score.innerHTML);
                    scores += parseInt(temp[i][k]);
                    score.innerHTML = scores;
                    temp[i][k]*=2;
                    i = 0;
                    k = 0;
                    mergeCheck= true;
                }
            }
        }
            break;
    }
    
    if(mergeCheck == true){
        for(let i = 0 ; i < 3 ; i++){
            for(let k = 0 ; k < 4 ; k++){
                if(temp[i][k] == 0 ){
                    temp[i][k] = temp[i+1][k];
                    }
                }
            }

            tempArr = temp.map(e => [...e]);
            ranNum(tempArr);
            getArray(tempArr);
        }
})

rightBtn.addEventListener('click',(e)=>{
    let temp = tempArr.map(e => [...e]);
    mergeCheck = false;

    while (true) {
        let check = true;
        for(let i = 0 ; i < 4 ; i++){

                for(let k = 3 ; k > 0 ; k--){
                    if(check == true && temp[i][k] == 0 && temp[i][k-1] != 0){
                        let num = temp[i][k-1];
                        temp[i][k] = num;
                        temp[i][k-1] = 0;
                        check = false;
                        mergeCheck = true;
                        }
                    }
                
            }
            if(check == true){
                break;
            }
        }
    while(true){
        for(let i = 0 ; i < temp.length ; i++){
            for(let k = 3 ; k >= 1 ; k--){
                if(temp[i][k] != 0 && temp[i][k] == temp[i][k-1]){
                    mergeCheck = true;
                    flag = true;
                    let scores = parseInt(score.innerHTML);
                    scores += parseInt(temp[i][k]);
                    score.innerHTML = scores;
                    temp[i][k]*=2;
                    temp[i][k-1]=0;
                    i = 0;
                    k = 3;
                    mergeCheck= true;
                    console.log(temp);
                }
            }
        }
            break;
    }
    
    
    if(mergeCheck == true){

            console.log(temp);
            tempArr = temp.map(e => [...e]);
            ranNum(tempArr);
            getArray(tempArr);
        }
})


function ranNum(arr) {
    let count = parseInt(Math.random()*1)+1;
    for(let i = 0 ; i <= count ; i++){
        for(let j = 0 ; j < 4 ; j++){
            for(let k = 0 ; k < 4 ; k++){
                let f = parseInt(Math.random()*3)+1;
                if(arr[j][k] == 0 && f == 2){
                    arr[j][k] = 2;
                    j=5;
                    k=5;
                }
            }
        }
    }
}