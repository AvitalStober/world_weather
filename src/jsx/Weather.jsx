
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            // get request
            try {

                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ee633956bad6ae1965b557a94ecfcba&units=metric&lang=he`
                );
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

    // set the details
    const { main, weather } = weatherData;
    const temp = main.temp;
    const feels_like = main.feels_like;
    const humidity = main.humidity;
    const description = weather[0].description;

    // Selecting an appropriate icon
    let icon;
    if (feels_like <= 20) icon = '❄';
    else if (feels_like <= 30) icon = '⛅';
    else icon = '🌞';


    return (
        // Displaying the weather for each country
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
