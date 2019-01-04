const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"); //1) id, class, tag, 등등 CSS차원에서의 모든 걸 가져올 수 있어 but 제일 먼저 걸리는 것 부터 갖고 옴, 2) querySelectorAll도 있음 그러나 array로 갖고옴, 3) getElementByTagName은 input, body, html, div, section 등 tag로 갖고옴
    
const USER_LS = "currentUser",//LS means local storage
    SHOWING_CN = "showing"; //CN means Class Name
    
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //메소드 작성, event가 submit되고 나면 document 처음부터 새로고침되는 효과가 발생, 이 default 값을 없애주고 싶어서.. ex) 박스 안에 값을 넣고 enter 누르면 값이 사라지는 효과가 기본 값.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
