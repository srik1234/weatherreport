import * as reducer from './reducer';


const initialState = {
    cityHistoricalData: [],
    selectedCity: null,
    loading: false,
    error: false,
};

describe('cityweather reducer', () => {
    it('should return the initial state', () => {
        expect(reducer.cityWeatherReducer(undefined, {})).toMatchSnapshot()
    })
    it('should handle cityWeatherRequest', () => {
        expect(
            reducer.cityWeatherReducer(initialState,
                {
                    type: 'UPDATE_CITY_HISTORICALDATA'
                })
        ).toMatchSnapshot()
    })
});