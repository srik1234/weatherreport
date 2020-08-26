import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';

function WeatherCard(props) {
    const today = new Date();
    const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const lastFiveDates = getDateProperFormat();
    const getDatesFromArray = () => {
        const date = lastFiveDates[0];
        lastFiveDates.shift();
        return date;

    }
    return (

        <div>
            <table style={{ marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column' }}>
                <tr>
                    <td>
                        <label >Current Date</label>
                    </td>
                    <td>
                        {todayDate}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Temperature</label>
                    </td>
                    <td>
                        {props.cityData[0].current.temp}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Weather condition</label>
                    </td>
                    <td>
                        {props.cityData[0].current.weather[0].description}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Average Temperature</label>
                    </td>
                    <td>
                        {getAvgTemperature(props)}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Highest Temperature</label>
                    </td>
                    <td>
                        {getHighestTemp(props)}
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Lowest Temperature</label>
                    </td>
                    <td>
                        {getLowestTemp(props)}
                    </td>
                </tr>


            </table>
            <CardGroup>
                {props.cityData.map((eachDayData) => {
                    return (
                        <Card style={{ width: '5rem' }}>
                            <Card.Header>Day Report</Card.Header>
                            <Card.Body>
                                <Card.Title>Date</Card.Title>
                                <Card.Text>
                                    {getDatesFromArray()}
                                </Card.Text>
                                <Card.Title>Weather Type</Card.Title>
                                <Card.Text>
                                    {eachDayData.current.weather[0].description}
                                </Card.Text>
                                <Card.Title>Temperature in Farenheit</Card.Title>
                                <Card.Text>
                                    {eachDayData.current.temp}
                                </Card.Text>
                            </Card.Body>
                        </Card>)
                })}
            </CardGroup>
        </div>
    )


}

const getAvgTemperature = (props) => {
    return props.cityData.reduce((total, next) => total + next.current.temp, 0) / props.cityData.length;
}
const getHighestTemp = (props) => {
    return Math.max(...props.cityData.map(o => o.current.temp), 0);
}
const getLowestTemp = (props) => {
    return Math.min(...props.cityData.map(o => o.current.temp));
}
const getDateProperFormat = () => {
    const dates = [];
    for (let i = 1; i <= 5; i++) {
        const today = new Date()
        const yesterday = new Date(today)


        yesterday.setDate(yesterday.getDate() - i)
        const ddd = yesterday.toDateString()
        dates.push(ddd);
    }
    return dates;
}

export default WeatherCard