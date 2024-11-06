const apiKey = 'c56a7275bc0d06baff708af9b88c71c2';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('weather-info').innerHTML = `<p>City not found!</p>`;
            } else {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-info').innerHTML = weatherInfo;
            }
        })
        .catch(error => {
            document.getElementById('weather-info').innerHTML = `<p>Error fetching weather data</p>`;
            console.error('Error fetching weather data:', error);
        });
}
