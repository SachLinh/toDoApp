const giaTriNhapVao = document.querySelector(".toDoApp_inputAdd .toDoApp_input");
const nutAdd = document.querySelector(".toDoApp_inputAdd .toDoApp_add");
giaTriNhapVao.onkeyup = ()=>{
    let giaTri = giaTriNhapVao.value;
    if(giaTri.trim() != 0)
    {
        nutAdd.classList.add("active");
    }
    else{
        nutAdd.classList.remove("active");
    }
}