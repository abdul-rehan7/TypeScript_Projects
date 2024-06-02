const apiKey = "756d5af623bd42dab0536c987746f536";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".top input");
const searchBtn = document.querySelector("#searchBTN");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city = "karachi") {

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp) + "&deg;C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    WeatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    WeatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    WeatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    WeatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    WeatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Haze") {
    WeatherIcon.src = "images/haze.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
    searchBox.value = "";
  }
});
checkWeather();
