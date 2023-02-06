const animals = ["고양이","강아지","토끼"];
animals[4] = "햄스터";
console.log(animals);

function printAll(arr){
    if (Array.isArray(arr)) {
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[index]);
        }
    } else {
        console.log("배열이 아닙니다.");
    }
}

animals.push("호랑이");
printAll(animals);

console.log("===============================");
console.log(animals.indexOf('고양이'));
let count = animals.unshift("사자");
console.log(animals);
console.log(count);

console.log("===============================");
//현재 배열의 마지막 요소를 꺼내옴
let value = animals.pop();
console.log(animals);
console.log(value);

console.log("===============================");
//첫 요소 삭제
let value2 = animals.shift();
console.log(animals);
console.log(value2);

console.log("===============================");
let cutArr = animals.splice(2,1,'곰','말','양'); //2번째 부터 한개삭제.
console.log(animals);
console.log(cutArr);

//여러개의 배열을 붙여주기
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat;
console.log(arr3);
let arr4 = arr3.reverse();
console.log(arr4);

let nums = new Array(6);
nums = nums.fill(9);
console.log(nums);


