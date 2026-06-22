const API_KEY = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");
const errorMsg = document.getElementById("errorMsg");

async function getWeather(city){

    try{

        errorMsg.textContent = "";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent = data.name;
        temp.textContent = data.main.temp;
        humidity.textContent = data.main.humidity;
        wind.textContent = data.wind.speed;
        condition.textContent = data.weather[0].description;

    }
    catch(error){

        errorMsg.textContent = error.message;

        cityName.textContent = "N/A";
        temp.textContent = "--";
        humidity.textContent = "--";
        wind.textContent = "--";
        condition.textContent = "--";
    }
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if(city){
        getWeather(city);
    }
});
