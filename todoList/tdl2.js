const addBtn = document.querySelector('button');
const list = document.querySelector('#list');
const inputTitle = document.querySelector('input');
const inputbody = document.querySelector('textarea');
let itemArr = [...document.querySelectorAll('.item')];
const deleteBox = document.querySelector('#garbage');
const notification = document.querySelector('.notification');

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
    itemArr.push(additem);

    fEach();
})

fEach();

function fEach() {
    itemArr.forEach((item)=>{
        item.setAttribute("draggable","true");
        item.addEventListener('dragstart',e=>{
        e.dataTransfer.setData('data',e.target.innerHTML);
        })
    })
}


deleteBox.addEventListener('dragover',e=>e.preventDefault());
deleteBox.addEventListener("drop", (e) => {
    fEach();
    deleteList(e.dataTransfer.getData('data'));
});

function deleteList(data) {
    console.log(data);
    console.log(itemArr);
    let itemList = document.querySelector('.itemlist');
    let foundList = itemArr.find((item)=> item.innerHTML==data);
    itemList.removeChild(foundList);
    itemArr = [...document.querySelectorAll('.item')];
    shownote();
}

const shownote = () =>{
    notification.classList.add('show');
    setTimeout(()=>{
        notification.classList.remove('show')
    },3000)
}
