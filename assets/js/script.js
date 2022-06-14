
var city = document.getElementById("city-name");
var submitBtn = document.getElementById("submit");

var apiKey = "dcedd9f791ada71e5f432709b3e26b95";

var mainCardContainer = document.getElementById("mainCard")
var cardsContainer = document.getElementById("cardsContainer")
var citiesContainer = document.getElementById("citiesContainer")
var citiesData = [] //local Storage

var getWeather = function(city) {

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey +"&units=imperial";

    console.log(url);
    fetch(url).then(function (response){ 
    response.json().then(function(data){



        var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + apiKey + "&units=imperial"; 
        fetch(oneCallUrl).then(function(response){
            return response.json()
        }).then(function(fiveDaysdata){
            console.log(fiveDaysdata);

      


       mainCardContainer.innerHTML = `
       <div  class="flex justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
            <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">${data.name}</h5>
                <p class="text-gray-700 text-base mb-4">Temp:${data.main.temp}</p>
                        <p class="text-gray-700 text-base mb-4">wind: 9.53MPH</p>
                        <p class="text-gray-700 text-base mb-4">Humidity: 66%</p>
                <p class="text-gray-600 text-xs">UV Index: <span>${fiveDaysdata.current.uvi}</span></p>
            </div>
            </div>
        </div>
       
       `
       

        let dia = fiveDaysdata.daily[1].dt * 1000;
    //    var formatedDia = moment(dia).format('MMMM Do, YYYY');
    //    console.log(dia); console.log(formatedDia);
       let vento = fiveDaysdata.daily[1].wind_speed; 
       let temperatura = fiveDaysdata.daily[1].temp.day;
       let humidade = fiveDaysdata.daily[1].humidity    

       cardsContainer.innerHTML=
       ` <!--  card -->
       <div class="w-1/5 h-12">
           <div class="flex justify-center">
               <div class="rounded-lg shadow-lg bg-white max-w-sm">
               <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                   <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
               </a>
                 <div class="p-6">
                   <h5 class="text-gray-900 text-xl font-medium mb-2">${dia}</h5>
                   <p class="text-gray-700 text-base mb-4">Temp: ${temperatura}</p>
                   <p class="text-gray-700 text-base mb-4">wind: ${vento}H</p>
                   <p class="text-gray-700 text-base mb-4">Humidity: ${humidade}</p>
                </div>
               </div>
             </div>
       </div>`

    })

        console.log(data);})
    })

};

submitBtn.addEventListener("click",function(e){
    e.preventDefault();

    getWeather(city.value);

    var cityName = city.value;
    console.log(cityName)
    localStorage.setItem(citiesData, JSON.stringify(cityName));
    console.log(citiesData);
    


    });


    


// var loadCities = function() {
//     if(localStorage.getItem('citiesData')) {
//         cidade = localStorage.getItem('citySearch').split(';');
//         for (var i = 0; i < 5; i++) {
            
//             console.log(cidade)
            
//         }}
    
// } 

