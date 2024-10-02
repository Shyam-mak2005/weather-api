document.getElementById('getWeather').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  const apiKey = '0d1eb3d1bb77437ca24165904242809'; // Your API key
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          if (data.error) {
              weatherInfo.innerHTML = `<p>${data.error.message}</p>`;
          } else {
              const { name, region, country } = data.location;
              const { temp_c, condition } = data.current;
              
              weatherInfo.innerHTML = `
                  <h2>${name}, ${region}, ${country}</h2>
                  <p>Temperature: ${temp_c}°C</p>
                  <p>Condition: ${condition.text}</p>
                  <img src="${condition.icon}" alt="${condition.text}">
              `;
          }
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
      });
});
