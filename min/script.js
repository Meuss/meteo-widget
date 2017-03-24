"use strict";

var endpoint = "http://www.prevision-meteo.ch/services/json/muntelier";

fetch(endpoint).then(function (blob) {
  return blob.json();
}).then(function (data) {
  console.log(data);
  var meteoContainer = document.querySelector('.meteo-wrapper');
  var city = data.city_info;
  var current = data.current_condition;
  var today = data.fcst_day_0;

  var meteoMarkup = "\n    <div class=\"city\">M\xE9t\xE9o in " + city.name + "</div>\n    <div class=\"today\">\n      <div class=\"date\">date: " + current.date + "</div>\n      <div class=\"condition\">condition: " + current.condition + "</div>\n      <img src=\"" + today.icon_big + "\" alt=\"" + current.condition + "\" />\n      <div class=\"temp\">Temp: " + current.tmp + "\xB0</div>\n    </div>\n    ";

  meteoContainer.innerHTML += meteoMarkup;
});
//# sourceMappingURL=script.js.map
