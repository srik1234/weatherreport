

const initialState = {
    cityHistoricalData: [],
    selectedCity: null,
    loading: false,
    error: false,
};
export const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_CITIES_WEATHER':
            return { ...state, data: action.position, loading: false, error: false }
        case 'UPDATE_CITY_HISTORICALDATA':
            return { ...state, cityHistoricalData: action.data, loading: false, error: false }
        case 'SET_SELECTED_CITY':
            return { ...state, selectedCity: action.selectedCity, loading: true, error: false }
        case 'FETCHING_DATA_FAILED':
            return { ...state, cityHistoricalData: [], error: true, loading: false }
        default:
            return state;
    }
}
