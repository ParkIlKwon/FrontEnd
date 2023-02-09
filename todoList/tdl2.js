const addBtn = document.querySelector('button');
const list = document.querySelector('#list');
const inputTitle = document.querySelector('input');
const inputbody = document.querySelector('textarea');
const itemArr = [...document.querySelectorAll('.item')];

console.log(inputTitle);
console.log(inputbody);

addBtn.addEventListener('click',()=>{

    if(inputTitle.value.length == 0){
        alert("제목을 입력하여 주세요.")
        return;
    }

    let additem = document.createElement("div");
    additem.classList="item";
    additem.innerHTML=`
    <h4 class="title">${inputTitle.value}</h4>
    <span class="msg">${inputbody.value}</span>
    </div>`

    list.appendChild(additem);
    itemArr += document.querySelector(additem);

})

itemArr.forEach((item)=>{

    item.addEventListener('click',()=>{
        console.log(itemArr);
        // item.remove();
    })
    // item.addEventListener('dragover', (e) => e.preventDefault());
    // item.addEventListener('drop',e=>{
    //     box2.appendChild(item);
    // })
})


