document.getElementById("getWeather").addEventListener("click", fetchWeather);

async function fetchWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "740c8f19077dd4e2818621cbddee1e95";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById("weatherResult").innerText = error.message;
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const weatherResult = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Description: ${weather[0].description}</p>
    `;
  document.getElementById("weatherResult").innerHTML = weatherResult;
}
