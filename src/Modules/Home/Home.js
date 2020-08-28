import React, { useReducer } from 'react'
import Loader from '../../Components/Loader'
import WeatherCard from '../../Components/WeatherCard';
import { cityWeatherReducer } from './data/reducer';
import { useCityWeatherFetch } from '../../Hooks/customHooks'
import Dropdowncomponent from '../../Components/Dropdown';
import { Alert } from 'react-bootstrap';
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
            return <Loader />
        }
        if (cityData && cityData.cityHistoricalData && cityData.cityHistoricalData.length > 0) {
            return <WeatherCard cityData={cityData.cityHistoricalData} />
        }
    }
    const getErrorMsgContent = () => {
        if (cityData.error) {
            return <Alert variant="danger" dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    Please check the internet connection. Otherwise the API is returning error.
               </p>
            </Alert>
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
                Welcome to Weather report site
            </div>

            {getDropdownContent()}
            {getErrorMsgContent()}
            {getCityWeatherReportContent()}

        </div >
    );
}

export default Home;