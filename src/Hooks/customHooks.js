import { useEffect } from 'react';
import axios from 'axios';


const fetchSingleAPi = async (newUrl) => {
  const request = await fetch(newUrl);
  const data = await request.json();
  return data;
}

const makeMultipleRequests = async (posData) => {
  let weatherData = []; // previous 5 days data

  //setting up the intial url to current date and time
  let d1 = new Date();
  const date = Math.floor(d1.getTime() / 1000);
  let currentDate = date;
  let url = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${posData.lat}&lon=${posData.lon}&dt=${date}&appid=4521f996a3ee3be9006723869f1eb591&units=metric`;


  while (weatherData.length < 5) {
    const newWeatherData = await fetchSingleAPi(url);
    weatherData.push(newWeatherData);

    //updating the date to previous day 
    d1 = new Date(d1 - 24 * 3600 * 1000);
    currentDate = Math.floor(d1.getTime() / 1000);

    // genrating the new url for the previous day
    url = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${posData.lat}&lon=${posData.lon}&dt=${currentDate}&appid=4521f996a3ee3be9006723869f1eb591&units=metric`;
  }
  console.log(weatherData);
  return weatherData;
}


// make API calls and pass the returned data via dispatch
export const useCityWeatherFetch = (cityData, dispatch) => {

  useEffect(() => {
    if (cityData && cityData.selectedCity && cityData.selectedCity.lat) {
      makeMultipleRequests(cityData.selectedCity).then(
        (weahterData) => {
          dispatch({
            type: 'UPDATE_CITY_HISTORICALDATA',
            data: weahterData,
          })
        }
      ).catch(e => {
        // handle error
        dispatch({
          type: 'FETCHING_CITIES_WEATHER',
          loading: false,
          error: true
        })
        return e
      })
    }
  }, [dispatch, cityData.selectedCity])
}

