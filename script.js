var cityInput = $("#cityInput")
var cityName = $("#cityName")
var searchBtn = $("#searchBtn")
var clearHist = $("#clearHistory")




var apiKey = "90493f7588b5b1b054a4b36dd7f81338"

function getWeather(cityName) {
    var requestUrl "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {

    
    });
    
    
}