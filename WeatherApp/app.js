const apiKey = "756d5af623bd42dab0536c987746f536";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".top input")
const searchBtn = document.querySelector( "#searchBTN")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(data.main.temp) + "&deg;C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})


searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchBox.value);
      searchBox.value = ""
    }
  });
checkWeather();
