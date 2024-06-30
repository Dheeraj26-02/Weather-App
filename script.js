const inputBox = document.querySelector(".input-box")
const btn = document.querySelector(".btn")
const weather_img = document.querySelector(".weather-img")
const temperature = document.querySelector(".temp")
const description = document.querySelector(".des")
const humidity = document.querySelector(".humid")
const wind = document.querySelector(".wind")
const notfound=document.querySelector(".notfound")
const weatherbody=document.querySelector(".weatherbody");
const container=document.querySelector(".container");

async function checkWeather(city) {
    const api_key = "881219e19f0cb2e5c87c7f256d444129";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod ==='404')
        {
            weatherbody.style.display="none";
            notfound.style.display="flex";
            container.style.animation="shaking .1s .2s 5";

        }
    

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind.innerHTML = `${weather_data.wind.speed} Km/hr`
    console.log(weather_data);
    notfound.style.display="none";
    weatherbody.style.animation="drip .5s"
    weatherbody.style.display="flex";

    switch (weather_data.weather[0].main) {
        case "Clouds":
            weather_img.src = "/images/cloudy.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case "Haze":
        weather_img.src = "/images/haze.png";
    }
}

btn.addEventListener('click', () => {
    checkWeather(inputBox.value);
    
})