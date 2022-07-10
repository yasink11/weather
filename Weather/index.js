const url = "https://api.openweathermap.org/data/2.5/";
const apikey = "3e0a31432df5e4b4d1d44c2f116164b0";

const setQuery = (e) =>{
    if(e.keyCode == "13")
    getResult(city.value)
};
const getResult =(cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${apikey}&units=metric&lang=tr`;
    fetch(query)
    .then(response => response.json())
    .then(gelenveri)

}
const gelenveri = (veri) => {
    let city = document.querySelector(".city");
    let temp = document.querySelector(".temp");
    let desc = document.querySelector(".desc");
    let en = document.querySelector(".en");
    let img = document.querySelector(".img-icon");

    city.innerText = `${veri.name},${veri.sys.country}`
    temp.innerText = `${Math.round(veri.main.temp)}°C`
    desc.innerText = `${veri.weather[0].description}`
    en.innerText = `${Math.round(veri.main.temp_min)}°C /${Math.round(veri.main.temp_max)}°C`
    img.src = `http://openweathermap.org/img/w/${veri.weather[0].icon}.png`

}
const city = document.getElementById("searchBar");
city.addEventListener("keypress", setQuery)