async function getWeather(){

    let city =
    document.getElementById("city").value;


    let apiKey = "YOUR_API_KEY";


    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    let response = await fetch(url);


    let data = await response.json();



    if(data.cod == 404){

        document.getElementById("result").innerHTML =
        "❌ City Not Found";

    }

    else{

        document.getElementById("result").innerHTML =
        `
        <h2>${data.name}</h2>

        🌡 Temperature: ${data.main.temp} °C
        <br>

        🌥 Weather: ${data.weather[0].main}
        <br>

        💧 Humidity: ${data.main.humidity}%
        `;
    }

}
