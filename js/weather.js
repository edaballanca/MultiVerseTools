const apiWeatherKey="187f9b14e24ef2037407a1d9c65db3e4";
const apiWeatherUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const date = new Date();


async function checkWeather(city){
	const response = await fetch(apiWeatherUrl + city + `&appid=${apiWeatherKey}`);
	var dataWeather = await response.json();

console.log(dataWeather);



const date = new Date(dataWeather.dt*1000);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(formattedDate); // prints "March 24, 2021"


var sunrise = new Date((dataWeather.sys.sunrise)+2).toLocaleTimeString("mk-MK");

  var sunset=  new Date(dataWeather.sys.sunset).toLocaleTimeString("mk-MK")



	document.querySelector(".city").innerHTML = dataWeather.name;
	document.querySelector(".temp").innerHTML = Math.round(dataWeather.main.temp) + "°C" ;
	document.querySelector(".timezone").innerHTML = formattedDate;
	document.querySelector(".temp-max").innerHTML = Math.round(dataWeather.main.temp_max) + "°C" ;
    document.querySelector(".temp-min").innerHTML = Math.round(dataWeather.main.temp_min) + "°C" ;
    document.querySelector(".wind").innerHTML = dataWeather.wind.speed + " m/s";
    document.querySelector(".humidity").innerHTML = dataWeather.main.humidity + " %";
    document.querySelector(".sunrise").innerHTML = sunrise;
    document.querySelector(".sunset").innerHTML = sunset;
    document.querySelector(".visibility").innerHTML = dataWeather.visibility + " m";
    document.querySelector(".feels_like").innerHTML = Math.round(dataWeather.main.feels_like) + "°C" ;
    document.querySelector(".sea_level").innerHTML = dataWeather.main.sea_level + " hPa";


    if (dataWeather.weather[0].main == "Clouds") {
    	weatherIcon.src = "images/clouds.png"
    }
    else if (dataWeather.weather[0].main == "Clear") {
    	weatherIcon.src = "images/clear.png"
    }
     else if (dataWeather.weather[0].main == "Rain") {
    	weatherIcon.src = "images/rain.png"
    }
     else if (dataWeather.weather[0].main == "Drizzle") {
    	weatherIcon.src = "images/drizzle.png"
    }
     else if (dataWeather.weather[0].main == "Mist") {
    	weatherIcon.src = "images/mist.png"
    }

}
searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value)
})