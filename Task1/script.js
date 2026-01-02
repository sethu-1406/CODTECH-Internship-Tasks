async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "5f032fc25491dd4f93d7978daa17a3ec";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await response.json();

  if (data.cod == 404) {
    document.getElementById("result").innerText = "City not found";
  } else {
    document.getElementById("result").innerText =
      `Temperature: ${data.main.temp} °C`;
  }
}