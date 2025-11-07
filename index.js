import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;

const YOUR_API_KEY = process.env.API_KEY;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/check-weather", async (req, res) => {
    const city = req.body.city;
    try {
        const result = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${YOUR_API_KEY}&q=${city}&days=7`);

        let conditionCode = result.data.current.condition.code;
        let temperature = result.data.current.temp_c;
        let advice = "";
        let forecast = result.data.forecast.forecastday.map(day => {
            return {
                date: day.date,
                icon: day.day.condition.icon,
                condition: day.day.condition.text,
                max: day.day.maxtemp_c,
                min: day.day.mintemp_c
            };
        });


        // Weather-based advice
        if (conditionCode === 1000 && temperature > 28) advice = "Sunny & warm! Stay hydrated 😎";
        else if (conditionCode === 1000) advice = "Clear skies — enjoy the day!";
        else if (conditionCode === 1003) advice = "Partly cloudy. Nice weather 🌤️";
        else if (conditionCode >= 1150 && conditionCode <= 1246) advice = "Looks like rain. Take an umbrella ☔";
        else if (conditionCode >= 1273 && conditionCode <= 1282) advice = "Thunderstorm! Stay indoors ⛈️";
        else if (conditionCode >= 1210 && conditionCode <= 1282) advice = "Snowy weather — stay warm ❄️";
        else advice = "Weather is unpredictable — stay safe!";

        // Additional temp-based advice
        if (temperature > 35) advice += " Also, it's very hot — drink water 🔥";
        if (temperature < 5) advice += " Also, it's very cold — wear layers 🧤";

        res.render("result.ejs", {
            name: result.data.location.name,
            region: result.data.location.region,
            country: result.data.location.country,
            time: result.data.location.localtime,
            temp: temperature,
            icon: result.data.current.condition.icon,
            weatherBasedAdvice: advice,
            forecast
        });
    } catch (error) {
        console.log(error);
        res.render("result.ejs", { weather: null, error: "Error retrieving weather data." });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});