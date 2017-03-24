const endpoint = "http://www.prevision-meteo.ch/services/json/muntelier";

fetch(endpoint)
  .then(blob => blob.json())
  .then((data) => {
    console.log(data);
    const meteoContainer = document.querySelector('.meteo-wrapper');
    const city = data.city_info;
    const current = data.current_condition;
    const today = data.fcst_day_0;

    const meteoMarkup = `
    <div class="city">Météo in ${city.name}</div>
    <div class="today">
      <div class="date">date: ${current.date}</div>
      <div class="condition">condition: ${current.condition}</div>
      <img src="${today.icon_big}" alt="${current.condition}" />
      <div class="temp">Temp: ${current.tmp}°</div>
    </div>
    `;

    meteoContainer.innerHTML += meteoMarkup;

  });
