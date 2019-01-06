const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));//LS는 string만 저장, JSON.stringify를 쓰면 object를 string으로 바꿔줌
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span"); // span은 div tag과 비슷, id와 class 처럼 styling을 위해 만든다
    const newId = toDos.length +1; // 각 li마다 id를 줄꺼임 -> 나중에 delete를 눌렀을 때 어떤 li를 지워야하는지 알 수 있도록
    delBtn.innerText = "X";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span); //put somthing inside of father element
    li.id = newId;
    toDoList.appendChild(li);//li를 ul에다가 append한다, 현재 ul이 li의 parent element임
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); // push다음에 호출을 받아야함. 그렇지 않으면 추가되지 않은 리스트를 호출하게 됨
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); //forEach basically runs function. And array 내에 있는 각각의 요소들을 한 번 씩 실행시켜줄꺼임
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();