var cityInput = $(".cityInput")
var cityNameEl = $(".cityName")
var searchBtn = $("#searchBtn")
var searchHistory = $(".searchHistory")
var clearHist = $("#clearHistory")
var userInput = $('.userInput')

var currentDate = $(".currentDate")
var humidity = $(".humidity")
var windSpeed = $(".windSpeed")
var uvIndex = $(".uvIndex")
var temp = $(".temp")
var fiveDay = $("#fiveday")

var apiKey = "90493f7588b5b1b054a4b36dd7f81338"

// to create current date variable
var today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
var today = mm + '/' + dd + '/' + yyyy;



if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
    console.log("searchHistory not found")
} else {
    console.log("searchHistory loaded into searchHistoryArr");
    renderSearchHistory();
}

searchBtn.on("click", function (e) {
    e.preventDefault();
    if (cityInput.val() === "") {
        alert("You must enter a city");
        return;
    }
    console.log("clicked button")
    getWeather(cityInput.val());
});

$(document).on("click", ".historyEntry", function () {
    console.log("clicked history item")
    let thisElement = $(this);
    getWeather(thisElement.text());
})

function getWeather(cityName) {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            getForecast(data.coord.lat,data.coord.lon)
            humidity.text("Humidity: " + data.main.humidity)
            cityNameEl.text(data.name)
            temp.text("Temperature: " + data.main.temp)
            windSpeed.text ("Wind Speed: " + data.wind.speed + " mph")
        });

}

function getForecast(lat, lon) {
    // send to get lat Lon Fun
    var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely,alerts&appid=" + apiKey + "&units=imperial"
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            uvIndex.text("UV Index: " + data.current.uvi)
            console.log (data)
            var temperatures = data.daily;
            for ( var i = 0; i < 5; i++){
                var card=$("<div class='col card'>")
                var cardBody=$("<div class=' card-body'>")
                var temp=$("<p>").text(temperatures[i].temp.day+ " F")
                var humidity=$("<p>").text(temperatures[i].humidity+ " %rh")
                
                var weather = temperatures[i].weather[0].main   
                
                var weatherIcon
                
                if (weather === "Rain"){
                    weatherIcon= `<img src="http://openweathermap.org/img/wn/09d.png" alt="">`
                }

                if (weather=== "Clouds"){
                    weatherIcon=`<img src="http://openweathermap.org/img/wn/03d.png"
                    alt="">`
                }

                if (weather=== "Clear"){
                    weatherIcon=`<img src="http://openweathermap.org/img/wn/01d.png"
                    alt="">`
                }

                if (weather=== "Drizzle"){
                    weatherIcon =`<img src="http://openweathermap.org/img/wn/10d.png"
                    alt="">`
                }

                if (weather=== "Snow"){
                    weatherIcon =`<img src="http://openweathermap.org/img/wn/13d.png" alt="">`
                }

                console.log(weatherIcon)
                

                cardBody.append(weatherIcon,temp,humidity)
                card.append(cardBody)
                $(".card-row").append(card)

                
            }

            //once we get back data for that location (lat/lon) parse data for waht the heck we need
            //assign to variables
            //send to a new function tht wioll dynamically create html for the page

        });


}