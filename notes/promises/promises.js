let feedback = document.getElementById("feedback");
let form = document.getElementById("form");
let search = document.getElementById("citySearch");
let city = document.getElementById("city");

const GIPHY_KEY = "54f0MhTKuI2nxwD9nhEvN4ifNwephcpz";
const OWM_KEY = "a5a839a780c1d61b9710aca75a4e11fa";

form.addEventListener("submit", fetchWeather);

function fetchWeather(event) {
  event.preventDefault();

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      search.value +
      "&appid=" +
      OWM_KEY
  )
    .then((response) => {
      return response.json();
    })
    .then((weather) => {
      feedback.textContent = weather.main.temp;
      city.textContent = weather.name;
    })
    .catch((error) => {
      feedback.textContent =
        "Couldn't retrieve data for " + `'${search.value}'.`;
    });
}
