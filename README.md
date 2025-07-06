# 🌤️ Weather Map with API

A simple weather web app that displays the current weather, humidity, wind speed, and forecast based on your searched city using the OpenWeatherMap API.

![screenshot](./images/weather-preview.png)

## 🚀 Live Demo
[Click Here](https://se-sabbir.github.io/Weather-Map-with-API/)

---

## 🔧 Features

- City-based weather lookup
- Displays:
  - Temperature
  - Weather description
  - Humidity
  - Wind speed
  - 4-day forecast
- Weather icons change based on current conditions

---

## 📦 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## ⚠️ Known Issues

- **CORS Error**: Browser blocks direct API calls due to CORS policy.  
  ✅ Workaround: Use a [CORS Proxy](https://cors-anywhere.herokuapp.com) for testing:
  
  Example:
  ```js
  fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/...`)
  📁 Folder Structure
bash
Copy
Edit
/main
  ├── css/
  ├── images/
  ├── js/
       └── script.js
  ├── index.html
📜 License
This project is open-source and free to use.

👨‍💻 Author
Md Sabbir Hossain
Studying MERN Stack Development
GitHub: @se-sabbir
