//콜백함수 : 콜백 callback : 나중에 다시 호출
//함수의 매개변수 콜백함수 ㅅ용하면, 그 해당함수 호출부분 위임

function say_welcome(name){
    console.log(`반갑습니다 ${name}님`);
}

say_welcome("박");

function say_bye(name){
    console.log(`안녕히 가세요 ${name}님`);
}
say_bye("아이유");
