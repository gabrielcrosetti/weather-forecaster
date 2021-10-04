# weather-forecaster

## Pseudocode



sumitButt.addEventListener("click", function(event) {
		var newCity = location.value;
		updateCityListingLocalStorage(newCity)
		getLatLon(newCity);
	})

	
	
	function getWeather(lat, lon){
		// send to get lat Lon Fun
			var requestUrl = "/get/one/call?lat="+lat + "&lon = " + lon
			 fetch(requestUrl)
			    .then(function (response) {
			      return response.json();
					    })
					    .then(function (data) {
					    	//once we get back data for that location (lat/lon) parse data for waht the heck we need
					    	//assign to variables
					    	//send to a new function tht wioll dynamically create html for the page
					      
					    });

			
	}

	function makeHTML(data){
		//target el on page
		//make stuf and add values
	}

	function getLatLon(cityName){
		//fetch data - Geocoding API - and get back the lat and lon of that city
			
			var requestUrl = "/geo/code/api?location ="+cityName
			 fetch(requestUrl)
			    .then(function (response) {
			      return response.json();
					    })
					    .then(function (data) {
					      //once we get back a response - parse it and create some vars with lat and lon
					     var lat = data.lat
					     var lon = data.lon
					      getWeather(lat,lon);
					      //send lat and lon to another function
					    });
					    console.log("hjksdhffkjahsd")
	};





	function updateCityListingLocalStorage(cityName){
		var locationArr = JSON.parse(localStorage.getItem("locationListing"));
		// []
		// ["San Francisco", "oakland"]
		locationArr.push(cityName);
		["San Francisco", "oakland", "Seattle"]
		localStorage.setItem("locationListing", JSON.stringify(locationArr));
		//sent to updateCityListing(["San Francisco", "oakland", "Seattle"]);
	}