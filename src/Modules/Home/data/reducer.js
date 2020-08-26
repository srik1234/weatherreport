

const initialState = {
    cityHistoricalData: [],
    selectedCity: null,
    loading: false,
    error: false,
};
export const cityWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_CITIES_WEATHER':
            return { ...state, data: action.position, loading: false }
        case 'UPDATE_CITY_HISTORICALDATA':
            return { ...state, cityHistoricalData: action.data, loading: false }
        case 'SET_SELECTED_CITY':
            return { ...state, selectedCity: action.selectedCity, loading:true }
        default:
            return state;
    }
}
