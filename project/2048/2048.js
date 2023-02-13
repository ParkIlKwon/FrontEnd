let tableArray = [...document.querySelectorAll('td')];
let tempArr = Array.from(Array(4), () => new Array(4));
const topBtn = document.querySelector('.sideTop');
const leftBtn = document.querySelector('.sideLeft');

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
            if(arr[i][k] != 0){
                tableArray[index].innerHTML = '2';
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
            e.className = '';
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
                if(temp[k][i] == temp[k+1][i]){
                    mergeCheck = true;
                    flag = true;
                    temp[k+1][i] = 0;
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
            getArray(tempArr);
        }
    

})