
//let 변수 선언 int num = 10;
//const 상수 선언 : 초기값 선언 이후에 수정 불가 
// let , const : 블록스코프 변수 블록내부에서만 사용가능 ....
// var 은 함수 스코프 변수 : 함수 안에서만 사용가능 , 블럭무시 ...
{
    //local 지역스코프 ...
var myName = '박';
myName = '박';
}
console.log(myName); 

function sayHi(){
    var myName = '박';
    console.log('안녕 난 ' , myName , '이야');
}

sayHi();

// const name = '박';
// name = "아이유";

const park = {name: "박"};
// park = {name : "아이유"}; // 에ㅓㄹ
park.name = "아이유";
console.log(park);

mycat = "복다주";
console.log(mycat);
console.log(mycat);

let num1 = 1;
let num2 = 1;
function addNum(num1 , num2){
    return num1 - num2;
}
console.log(addNum(num1,num2));

let callmyName = function (name){
    console.log(`${name} 이야`);
}
callmyName("유재석");

let multiply = function(a,b){
    return a*b;
}

console.log(multiply(10,20));

let minus = (a,b) => a-b;
console.log(minus(10,3));

let randomNum = parseInt(Math.random()*100)+1 ; //1 ~ 10
console.log("나온수." ,randomNum);

let checkNum = (number) => number % 2 == 0 ? "짝수" : "홀수";

console.log(checkNum(randomNum));
console.log("=========================");

let arr = new Array(4);

for (let index = 0; index < arr.length; index++) {
    let randomNum = parseInt(Math.random()*200)-100
    if(randomNum % 2 != 0){
        arr[index] = randomNum;
        console.log(randomNum , " = ");
        console.log(checkNum(randomNum));
    }else{
        index--;
    }
}
let cnt = 0;

for (let index = 0; index < arr.length; index++) {
    if(checkNum(randomNum) == "홀수"){
        console.log("dfs");
        cnt ++;
    }
}
console.log(cnt);
