import React from 'react';
import { render } from '@testing-library/react'
import WeatherCard from './WeatherCard';


const mockdata = [
    { "coord": { "lon": 151.21, "lat": -33.87 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "base": "stations", "main": { "temp": 15.7, "feels_like": 10.89, "temp_min": 14.44, "temp_max": 16.67, "pressure": 1025, "humidity": 41 }, "visibility": 10000, "wind": { "speed": 4.6, "deg": 130 }, "clouds": { "all": 0 }, "dt": 1598598024, "sys": { "type": 1, "id": 9600, "country": "AU", "sunrise": 1598559535, "sunset": 1598600063 }, "timezone": 36000, "id": 2147714, "name": "Sydney", "cod": 200 },
    {
        "lat": -36.87,
        "lon": 174.77,
        "timezone": "Pacific/Auckland",
        "timezone_offset": 43200,
        "current": {
            "dt": 1598534029,
            "sunrise": 1598554063,
            "sunset": 1598594228,
            "temp": 9.16,
            "feels_like": 4.92,
            "pressure": 1016,
            "humidity": 87,
            "dew_point": 7.11,
            "uvi": 3.02,
            "clouds": 3,
            "visibility": 10000,
            "wind_speed": 5.1,
            "wind_deg": 260,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        "hourly": [
            {
                "dt": 1598486400,
                "temp": 14.25,
                "feels_like": 7.48,
                "pressure": 1012,
                "humidity": 62,
                "dew_point": 7.08,
                "clouds": 2,
                "visibility": 10000,
                "wind_speed": 8.7,
                "wind_deg": 270,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 0.25
                }
            },
            {
                "dt": 1598490000,
                "temp": 14.53,
                "feels_like": 7.4,
                "pressure": 1011,
                "humidity": 62,
                "dew_point": 7.34,
                "clouds": 14,
                "visibility": 10000,
                "wind_speed": 9.3,
                "wind_deg": 280,
                "weather": [
                    {
                        "id": 521,
                        "main": "Rain",
                        "description": "shower rain",
                        "icon": "09d"
                    }
                ],
                "rain": {
                    "1h": 0.25
                }
            },
            {
                "dt": 1598493600,
                "temp": 13.26,
                "feels_like": 5.71,
                "pressure": 1011,
                "humidity": 66,
                "dew_point": 7.05,
                "clouds": 16,
                "visibility": 10000,
                "wind_speed": 9.8,
                "wind_deg": 270,
                "weather": [
                    {
                        "id": 520,
                        "main": "Rain",
                        "description": "light intensity shower rain",
                        "icon": "09d"
                    }
                ]
            },
            {
                "dt": 1598497200,
                "temp": 10.87,
                "feels_like": 6.26,
                "pressure": 1011,
                "humidity": 87,
                "dew_point": 8.79,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 6.2,
                "wind_deg": 280,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 1.78
                }
            },
            {
                "dt": 1598500800,
                "temp": 10.45,
                "feels_like": 6.51,
                "pressure": 1012,
                "humidity": 87,
                "dew_point": 8.38,
                "clouds": 48,
                "visibility": 10000,
                "wind_speed": 5.1,
                "wind_deg": 300,
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 2.42
                }
            },
            {
                "dt": 1598504400,
                "temp": 10.96,
                "feels_like": 8.19,
                "pressure": 1012,
                "humidity": 87,
                "dew_point": 8.88,
                "clouds": 58,
                "visibility": 10000,
                "wind_speed": 3.6,
                "wind_deg": 300,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "rain": {
                    "1h": 0.25
                }
            },
            {
                "dt": 1598508000,
                "temp": 10.55,
                "feels_like": 5.86,
                "pressure": 1012,
                "humidity": 87,
                "dew_point": 8.48,
                "clouds": 56,
                "visibility": 10000,
                "wind_speed": 6.2,
                "wind_deg": 290,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "rain": {
                    "1h": 0.64
                }
            },
            {
                "dt": 1598511600,
                "temp": 10.32,
                "feels_like": 5.47,
                "pressure": 1013,
                "humidity": 76,
                "dew_point": 6.28,
                "clouds": 2,
                "visibility": 10000,
                "wind_speed": 5.7,
                "wind_deg": 240,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ]
            },
            {
                "dt": 1598515200,
                "temp": 10.18,
                "feels_like": 5.72,
                "pressure": 1014,
                "humidity": 76,
                "dew_point": 6.14,
                "clouds": 1,
                "visibility": 10000,
                "wind_speed": 5.1,
                "wind_deg": 250,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "rain": {
                    "1h": 0.38
                }
            },
            {
                "dt": 1598518800,
                "temp": 9.59,
                "feels_like": 5.36,
                "pressure": 1014,
                "humidity": 76,
                "dew_point": 5.57,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 4.6,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "rain": {
                    "1h": 0.51
                }
            },
            {
                "dt": 1598522400,
                "temp": 9.19,
                "feels_like": 3.41,
                "pressure": 1015,
                "humidity": 76,
                "dew_point": 5.19,
                "clouds": 1,
                "visibility": 10000,
                "wind_speed": 6.7,
                "wind_deg": 240,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ]
            },
            {
                "dt": 1598526000,
                "temp": 9.17,
                "feels_like": 5.05,
                "pressure": 1015,
                "humidity": 81,
                "dew_point": 6.08,
                "clouds": 2,
                "visibility": 10000,
                "wind_speed": 4.6,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "rain": {
                    "1h": 0.25
                }
            },
            {
                "dt": 1598529600,
                "temp": 8.76,
                "feels_like": 4.78,
                "pressure": 1015,
                "humidity": 87,
                "dew_point": 6.72,
                "clouds": 2,
                "visibility": 10000,
                "wind_speed": 4.6,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 520,
                        "main": "Rain",
                        "description": "light intensity shower rain",
                        "icon": "09n"
                    }
                ]
            },
            {
                "dt": 1598533200,
                "temp": 9.21,
                "feels_like": 4.98,
                "pressure": 1016,
                "humidity": 87,
                "dew_point": 7.16,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 5.1,
                "wind_deg": 260,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ]
            }
        ]
    }]
test('renders weather card', () => {
    render(<WeatherCard cityData={mockdata} />);
});
