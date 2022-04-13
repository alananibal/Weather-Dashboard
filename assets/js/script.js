// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

var city = document.getElementById("city-name");
var submitBtn = document.getElementById("submit")

var getWeather = function(weather) {
    var latitude = "33"
    var longitude = "94.04"
    var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude +  '&exclude={part}&appid=dcedd9f791ada71e5f432709b3e26b95'

    console.log(url);
    fetch(url).then(function (response){ 
    response.json().then(function(data){console.log(data);})
    })

}

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    getWeather();
    });