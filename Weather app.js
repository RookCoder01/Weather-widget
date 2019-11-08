var APPID = "0a6468f0d54dc2b80d78b5100ba1862d";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

    function updateByZip(zip) {
        var url = "https://api.openweathermap.org/data/2.5/weather?" +
            "zip=" + zip +
            "&APPID=" + APPID;
        sendRequest (url);
    }

    function sendRequest(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var data = JSON.parse(xmlhttp.responseText);
                var weather = {};
                weather.icon = data.weather[0].id;
                weather.humidity = data.main.humidity;
                weather.wind = data.wind.speed;
                weather.direction = data.wind.deg;
                weather.loc = data.name;
                weather.temp = data.main.temp;
                update(weather);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    function update(weather) {
        wind.innerHTML = weather.wind;
        direction.innerHTML= weather.direction;
        humidity.innerHTML = weather.humidity;
        loc.innerHTML = weather.loc;
        temp.innerHTML = weather.temp;
        icon.src = "Raindrops-png.png" + weather.icon + ".png";
    }

    window.onload = function () {
        temp = document.getElementById("temperature");
        loc = document.getElementById("location");
        icon = document.getElementById("icon");
        humidity = document.getElementById("location");
        wind = document.getElementById("wind");
        directon = document.getElementById("direction");

        updateByZip(87001)

           /* var weather = {};
            weather.wind = 4.1;
            weather.humidity = 81;
            weather.direction = "NE";
            weather.loc = "Cayman";
            weather.temp = "280.32";
            weather.icon = Raindrops-png.png;

        update(weather); */

    }
