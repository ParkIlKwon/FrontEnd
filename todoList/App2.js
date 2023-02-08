const total = 10;
    const data = [
        {name:"강민기", count:3},
        {name:"김범진", count:6},
        {name:"김성윤", count:2},
        {name:"김영균", count:3},
        {name:"노상권", count:5},
        {name:"박병준", count:3},
        {name:"박일권", count:5},
        {name:"양재혁", count:6},
        {name:"윤준영", count:7},
        {name:"이주혜", count:8},
        {name:"이지원", count:5},
        {name:"정태현", count:4},
        {name:"조양흠", count:9},
        {name:"조영곤", count:3},
    ];

const list = document.querySelector(".list");
const rank = [];

addEventListener("load",e => makeGraph())
function makeGraph() {

    for (let i = 0; i < data.length ; i++) {
        let max = data[i].count;
        for (let k = 0; k < i; k++) {
            if(max > data[k].count){
                let temp1 = data[i];
                let temp2 = data[k];
                max = data[k].count;
                data[i] = temp2;
                data[k] = temp1;
            }
        }
    }


    for (let index = 0; index < data.length; index++) {
        let temp = data[index];
        let percent = data[index].count *10;
        let element = document.createElement('div');
        element.classList.add('item');
        console.log(percent);
        element.innerHTML= `<div class="inner" style="width:${percent}%;">
        <div class="name">${data[index].name}</div>
        <div class="percent">${percent}</div>
    </div>`
        list.appendChild(element);
    }
    let hr = document.createElement('hr');
    list.appendChild(hr);
}

