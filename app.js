let weather = {
    "apiKey": "APIHKEYGOESHERE",
    
    fetchWeather: function() {


        let city = document.getElementById("getCity").value;

        if (city) {
            fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey
        )

        .then((response)  => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found");
            }

            return response.json();
        })

        .then((data) => this.displayWeather(data));

        } else {
            alert ("No weather found for this location.");
        }

        
    },


    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        
        document.querySelector(".city").innerText = name;

        document.querySelector(".weather-description").innerText = description;
       
        document.querySelector(".city-temperature").innerText = temp + "°C";

        document.querySelector(".city-humidity").innerText = "humidity: " + humidity + "%";

        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";

    }
};
