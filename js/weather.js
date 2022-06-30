const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const weather = {};
getWeather();
function getWeather() {
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=&appid=e5b292ae2f9dae5f29e11499c2d82ece&units=metric&lang=es`)
	.then(function (response) {
		let data = response.json();
		return data;
	})
	.then(function (data) {
		weather.temperature = data.main.temp.toFixed(0);
		weather.description = data.weather[0].description;
		weather.iconId = data.weather[0].icon;
	})
	.then(function () {
		iconElement.innerHTML = `<img src="icons/${weather.iconId}.png" alt="">`;
		tempElement.innerHTML = `${weather.temperature}°<span class="darkfg">C</span>`;
		descElement.innerHTML = weather.description;
	});
}