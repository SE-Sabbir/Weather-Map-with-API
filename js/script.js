let input_city = document.querySelector('.input_city')
let temp_num = document.querySelector('.temp_num')
let search_btn = document.querySelector('.search_btn')
let city_location = document.querySelector('.city_location')
let city_time = document.querySelector('.city_time')
let weather_type = document.querySelector('.weather_type')
let weather_humidity = document.querySelector('.weather_humidity')
let weather_wind = document.querySelector('.weather_wind')
let weather_feels = document.querySelector('.weather_feels')
let cloud_image = document.querySelector('.cloud_type_img')

const weatherImage = {
    Clear: "images/clear.png",
    Clouds: "images/clouds.png",
    Rain: "images/rain.png",
    Drizzle: "images/drizzle.png",
    Thunderstorm: "images/thunderstorm.png",
    Snow: "images/snow.png",
    Mist: "images/mist.png",
    Haze: "images/haze.png",
    Smoke: "images/smoke.png"
}

search_btn.addEventListener('click' , ()=>{
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input_city.value},&limit=1&appid=c69a0d02e0a3f876b5a4bb57a46a300f`)
    .then((res)=>res.json())
    .then((data)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=c69a0d02e0a3f876b5a4bb57a46a300f`)
        .then((res)=>res.json())
        .then((data)=>{ console.log(data)
            temp_num.innerHTML = Math.round(data.main.temp - 273.15);
            weather_type.innerHTML = data.weather[0].main;
            weather_humidity.innerHTML = 'Humidity : ' + data.main.humidity + ' %';
            weather_wind.innerHTML = 'Wind : ' + data.wind.speed + ' m/s';
            weather_feels.innerHTML = 'Feels like : ' + Math.round(data.main.feels_like - 273.15) + ' °C' ;

            const weatherMain = data.weather[0].main;
            if (weatherImage[weatherMain]) {
                cloud_image.src = weatherImage[weatherMain]
            }
            else{
                cloud_image.src = "images/sun.png"
            }
                       
            const dt = new Date (data.dt * 1000)
            city_time.innerHTML = dt.toLocaleString();       
        })
        city_location.innerHTML = data[0].name
    })
    
    .catch((err)=>console.log(err))

})
