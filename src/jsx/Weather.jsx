// src/components/Weather.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ee633956bad6ae1965b557a94ecfcba&units=metric&lang=he`
                );


                // setWeatherData({
                //     Eilat: {
                //         description: "בהיר",
                //         temp: 34,
                //         feels_like: 36,
                //         humidity: 20,
                //         icon: "hot_icon.png",
                //     },
                //     London: {
                //         description: "מעונן חלקית",
                //         temp: 15,
                //         feels_like: 14,
                //         humidity: 80,
                //         icon: "cold_icon.png",
                //     },
                //     NewYork: {
                //         description: "גשום",
                //         temp: 10,
                //         feels_like: 8,
                //         humidity: 90,
                //         icon: "cold_icon.png",
                //     },
                //     Alaska: {
                //         description: "שלג",
                //         temp: -5,
                //         feels_like: -10,
                //         humidity: 70,
                //         icon: "cold_icon.png",
                //     }
                // }
                // );


                setWeatherData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if (loading) return <p>טוען...</p>;
    if (error) return <p>שגיאה: {error.message}</p>;

    const { main, weather } = weatherData;
    const temp = main.temp;
    const feels_like = main.feels_like;
    // const icon = weather.icon;
    const humidity = main.humidity;
    const description = weather[0].description;

    // const { main, weather } = weatherData;
    // const temp = weatherData.London.temp;
    // const feels_like = weatherData.London.feels_like;
    // const humidity = weatherData.London.humidity;
    // const description = weatherData.London.description;


    let icon;
    if (feels_like <= 20) icon = '❄';
    else if (feels_like <= 30) icon = '⛅';
    else icon = '🌞';


    return (
        <div className="weather-card">
            <div>
                <h2 className='city'>{city === 'London' ? 'לונדון' : city === 'New York' ? 'ניו יורק' : city === 'Eilat' ? 'אילת' : 'אלסקה'}</h2>
                <div className='des'>{icon} {description}</div>
            </div>
            <div>
                <div className='temp'>טמפרטורה:<p>{temp}°</p></div>
                <div className='fill-temp'>טמפרטורה מורגשת:<p>{feels_like}°</p></div>
                <div className='huminity'>אחוזי לחות:<p>{humidity}%</p></div>
            </div>
        </div>
    );
};

export default Weather;
