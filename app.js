const apiKey = "e0f2d3dc3e4a142b3a0706ff7762cc38";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".icon");

async function checkWeather(city) {
     const response = await fetch(apiURL + city + `&appid=${apiKey}`);

     if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
     }
     else {
          var data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
               weathericon.src = "images/cloudy.png"
          }
          else if (data.weather[0].main == "Clear") {
               weathericon.src = "images/clear.png"
          }
          else if (data.weather[0].main == "Rain") {
               weathericon.src = "images/rainy.png"
          }
          else if (data.weather[0].main == "Drizzle") {
               weathericon.src = "images/light rain.png"
          }
          else if (data.weather[0].main == "Mist") {
               weathericon.src = "images/foggy.png"
          }
          else if (data.weather[0].main == "Haze") {
               weathericon.src = "images/hazy.png"
          }
          else if (data.weather[0].main == "Clear") {
               weathericon.src = "images/clear.png"
          }
          else if (data.weather[0].main == "Thunderstorm") {
               weathericon.src = "images/lightning.png"
          }
          else if (data.weather[0].main == "Snow") {
               weathericon.src = "images/snow.png"
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
     }
}
searchbtn.addEventListener("click", () => {
     checkWeather(searchbox.value);
})
searchbox.addEventListener("keypress", (e) => {
     if (e.key === "Enter") {
          checkWeather(searchbox.value);
     }
})