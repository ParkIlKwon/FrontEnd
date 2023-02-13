let turn = false;
const table = [...document.querySelectorAll('td')];
const tb = document.querySelector('table');
const resetButton = document.querySelector('.reset');
const main = document.querySelector('.main');
const start = document.querySelector('.start');
const body = document.querySelector('body');
let arr = new Array(3);
let count = 0 ;



table.forEach((e)=>{
    
    e.addEventListener('click',()=>{
        count++;
    
        if(e.innerHTML != ''){
            alert('그곳에는 클릭할수 없습니다.');
            return;
        }
        
        e.style = turn == true ? 
        'background : orange' :
        'background : grey';
        e.innerHTML = turn == true ?  'o' : 'x';
        console.log(checkEnd(getarr()));
        if(count == table.length) {
            console.log('무승부');
            setTimeout(()=>{
                table.forEach((e)=>{
                    e.innerHTML = "";
                    e.style = 'background : white'

                })
            },2000)
        }
        turn = turn == true ? false : true;
    })
})

resetButton.addEventListener('click',()=>{
    table.forEach((e)=>{
        e.innerHTML = "";
        e.style = 'background : white'
    })
})

function getarr(){
    let cnt = 0;
    for(i=0;i<3;i++){
        arr[i] = new Array(3);
        for(k=0;k<3;k++){
            arr[i][k] = table[cnt].innerHTML;
        cnt ++;
        }
    }
    return arr;
}

function checkEnd(arr){
    let flag = false;
    // 가로 승리조건
    for(i=0 ; i<3 ; i++){
        if(arr[i][0] != "" && arr[i][0] == arr[i][1] && arr[i][2] == arr[i][1]){
            flag = true;
        }
    } 
    // 세로 승리조건
    for(i=0 ; i<3 ; i++){
        if(arr[0][i] != "" && arr[0][i] == arr[1][i] && arr[2][i] == arr[1][i]){
            flag = true;
        }
    } 

    return flag;
}