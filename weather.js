const API_KEY = "0595f2aede6994e6705b563d677c18a0";

const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude ;
    const longitude = position.coords.longitude ;
    const coordsObj = {
        latitude, //latitude: latitude를 줄인것
        longitude//longitude: longitude를 줄인 것
    };
    saveCoords(coordsObj);
}


function handleGeoError(){
    console.log('Cant access geo location')
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
         // getWeather
    }
}

function init(){
    loadCoords();
}
init();