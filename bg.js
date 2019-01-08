const body = document.querySelector("body");

const IMG_NUMBER = 8;

//function handleImgLoad() {
//    console.log('finished loading');
//}  loading할 필요가 없어서... API라면 필요하다

function paintImage(imgNumber){
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`;''
    image.classList.add("bgImage");
    body.prepend(image);// apendChild에서 prepend로 바꿨더니, body요소 중 젤 위로 올라감 
    //body.appendChild(image); 다른 body 요소들 뒤에 생겨서 그런지, image가 젤 상위로 와서 다른 요소들을 가림...
    //image.addEventListener("loaded", handleImgLoad);  loading할 필요가 없어서... API라면 필요하다
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
