import { useEffect } from 'react';


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
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${posData.id}&appid=4521f996a3ee3be9006723869f1eb591&units=metric`;
  const todayData = await fetchSingleAPi(url);
  weatherData.push(todayData);

  while (weatherData.length < 6) {

    //updating the date to previous day 
    d1 = new Date(d1 - 24 * 3600 * 1000);
    currentDate = Math.floor(d1.getTime() / 1000);
    // genrating the new url for the previous day
    url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${posData.lat}&lon=${posData.lon}&dt=${currentDate}&appid=4521f996a3ee3be9006723869f1eb591&units=metric`;
    const newWeatherData = await fetchSingleAPi(url);
    weatherData.push(newWeatherData);

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
          type: 'FETCHING_DATA_FAILED',
          loading: false,
          error: true
        })
        return e
      })
    }
  }, [dispatch, cityData.selectedCity])
}

