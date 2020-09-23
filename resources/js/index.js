import chkDB from '/db.js'

let addListInput = document.querySelector("#ADD_LIST");
let addListBtn = document.querySelector("#ADD_LIST_BTN");
let saveCheckList = document.querySelector("#LIST_SAVE");
let chkList = []
let checkboxCount = 0;
// 리스트 추가
addListBtn.addEventListener("click", (e) => {
    let addList = addListInput.value;
    let html = `<div><input type='checkbox' id='chk${checkboxCount}'>`;
    html += `<label for='chk${checkboxCount}'>${addList}</label></div>`;
    document.querySelector(".check_list").innerHTML += html;
    checkboxCount += 1;
    chkList.push(addList)
})
saveCheckList.addEventListener("click", ()=> {
    console.log(chkDB)
})