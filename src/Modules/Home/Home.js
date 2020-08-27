import React, { useReducer } from 'react'
import Loader from '../../Components/Loader'
import WeatherCard from '../../Components/WeatherCard';
import { cityWeatherReducer } from './data/reducer';
import { useCityWeatherFetch } from '../../Hooks/customHooks'
import Dropdowncomponent from '../../Components/Dropdown';
import './home.css';

const initialState = {
    cityHistoricalData: [],
    selectedCity: null,
    loading: false,
    error: false,
};


function Home() {

    const [cityData, selectedCityWeatherDispatch] = useReducer(cityWeatherReducer, initialState);

    useCityWeatherFetch(cityData, selectedCityWeatherDispatch);


    const onClickHandler = (position) => {
        selectedCityWeatherDispatch({ type: 'SET_SELECTED_CITY', selectedCity: position })
    }

    const getDropdownContent = () => {
        return <Dropdowncomponent onselectionChange={onClickHandler} />;
    }
    const getCityWeatherReportContent = () => {
        if (cityData.loading) {
            return <Loader/>
        }
        if (cityData && cityData.cityHistoricalData && cityData.cityHistoricalData.length > 0) {
            return <WeatherCard cityData={cityData.cityHistoricalData} />
        }
    }
    console.log(cityData);
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                Welcome to Weather report site
            </div>
            {getDropdownContent()}
            {getCityWeatherReportContent()}

        </div >
    );
}

export default Home;