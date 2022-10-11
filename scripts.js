let API_KEY =  "45b09b8a7e5d26a61d67c650f71f7ee8";

getWeatherData = (city) =>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather';

    const Full_Url =`${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const weatherPromise = fetch(Full_Url);
    console.log(city)
    console.log()

    return weatherPromise.then((response) =>{
        return response.json()
    })
}

function searchCity(){
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
    .then((response) =>{
        showWeatherData(response)
    })
    .catch((err) =>{
        console.log(err)
    })
}

showWeatherData = (weatherData) =>{
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('icon').innerText = weatherData.weather[0].description;
    document.getElementById('weather-type').innerText = weatherData.weather[0].main;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('wind-speed').innerText = weatherData.wind.speed;
    document.getElementById('humidity').innerText = weatherData.main.humidity;;
}