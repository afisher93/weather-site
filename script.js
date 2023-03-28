let currentLocation;
let weather = {
  apiKey: "d05a6128ba9be6eec440cf886109d8aa",
  fetchWeatherF(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  fetchGeocodeFahrenheit(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((weatherData) => {
        displayWeather(weatherData);
        console.log(weatherData);
      });
  },
  fetchGeocodeCelsius(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((weatherData) => {
        displayWeatherC(weatherData);
        console.log(weatherData);
      });
  },
};
function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "F°";
  document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "wind speed: " + speed + "mph";
}
function displayWeatherC(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".city").innerText = name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "C°";
  document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "wind speed: " + speed + "mph";
}

function searchF() {
  weather.fetchGeocodeFahrenheit(document.querySelector(".search-bar").value);
}
function searchC() {
  weather.fetchGeocodeCelsius(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click", function () {
  searchF();
});

document.querySelector(".search-bar"),
  addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      searchF();
    }
  });

function saveLocation() {
  let cityName = document.getElementById("city").textContent;
  var btnDiv = document.getElementById("list");
  var btn = document.createElement("btn");
  btn.appendChild(document.createTextNode(cityName));
  let currentDate = new Date (Date.now());
  btn.appendChild(document.createTextNode(currentDate.toUTCString()));
  btn.setAttribute("id", cityName);
  btn.classList.add("buttonStyle");
  btn.addEventListener("click", function (e) {
    listSearch(this);
  });
  btnDiv.appendChild(btn);
}

function searchF() {
  weather.fetchGeocodeFahrenheit(document.querySelector(".search-bar").value);
}

function listSearch(el) {
  weather.fetchGeocodeFahrenheit(el.id);
  currentLocation = el
}

function removeLocation() {
currentLocation.remove ()
}

