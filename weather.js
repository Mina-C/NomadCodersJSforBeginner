const weather = document.querySelector(".js-weather");

const API_KEY = "0595f2aede6994e6705b563d677c18a0";
const COORDS = "coords";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}℃ @ ${place}`
    }); // then은 data가 다 로딩되고 나서 함수를 호출하겠다. Data가 넘어오는 데 시간이 걸릴 수 있어서..
}

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
    getWeather(latitude, longitude);
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
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();