const giaTriNhapVao = document.querySelector(".toDoApp_input");
const nutAdd = document.querySelector(".toDoApp_add");
const toDoList = document.querySelector(".toDoApp_list");
const deleteAll = document.querySelector(".toDoApp_clearAll");
const dem = document.querySelector("#number");


// Tao hieu ung Nut ADD
giaTriNhapVao.onkeyup = () => {
    let text = giaTriNhapVao.value;
    if(text.trim() != 0)
    {
        nutAdd.classList.add("active");
    }
    else{
        nutAdd.classList.remove("active");
    }
}
showTask();
// Luu du lieu vao local data
nutAdd.onclick = ()=>{
    let text = giaTriNhapVao.value;
    let getLocalStorage = localStorage.getItem("newTodo");
    if(getLocalStorage == null)
    {
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(text);
    localStorage.setItem("newTodo", JSON.stringify(listArr));
    showTask();
    nutAdd.classList.remove("active");
}
function showTask(){
    let getLocalStorage = localStorage.getItem("newTodo");
    if(getLocalStorage == null)
    {
        listArr = [];
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    dem.textContent = listArr.length;
    let newLiTask = "";
    listArr.forEach((element, index) => {
        newLiTask += `<li>
        ${element}
        <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span>
        </li>`;
    });
    toDoList.innerHTML = newLiTask;
    giaTriNhapVao.value = "";
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("newTodo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("newTodo", JSON.stringify(listArr));
    showTask();
}
deleteAll.onclick =() =>{
    let getLocalStorage = localStorage.getItem("newTodo");
    listArr = JSON.parse(getLocalStorage);
    listArr = [];
    localStorage.setItem("newTodo", JSON.stringify(listArr));
    showTask();
}