
const form = document.querySelector("form");
//storage part
function storList() {
    window.localStorage.todoList = list.innerHTML;
}

function getTodos(){
    if(window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;
    }else {
        list.innerHTML = `<li>Cliquez sur un todo pour le suprimer</li>`;
    }
};

getTodos();




// add element
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    item.value="";
    storList();
})

//remove element
list.addEventListener("click",(e)=> {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    }else {
        e.target.classList.add('checked')
    }

}

)