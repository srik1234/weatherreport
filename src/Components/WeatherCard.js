import React from 'react'
import { Card, Table } from 'react-bootstrap';
import './weathercard.css';



function WeatherCard(props) {
    const today = new Date();
    const historicalData = props.cityData.slice(1);
    const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
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
    const lastFiveDates = getDateProperFormat();
    const getDatesFromArray = () => {
        const date = lastFiveDates[0];
        lastFiveDates.shift();
        return date;

    }
    const getAvgTemperature = (props) => {
        return historicalData.reduce((total, next) => total + next.current.temp, 0) / props.cityData.length;
    }
    const getHighestTemp = (props) => {
        return Math.max(...historicalData.map(o => o.current.temp), 0);
    }
    const getLowestTemp = (props) => {
        return Math.min(...historicalData.map(o => o.current.temp));
    }


    return (

        <div>
            <Table striped bordered hover size="sm">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <td>{todayDate}</td>
                    </tr>
                    <tr>
                        <th>Weather Condition</th>
                        <td>{props.cityData[0].weather[0].description}</td>
                    </tr>
                    <tr>
                        <th>Temperature</th>
                        <td>{props.cityData[0].main.temp}</td>
                    </tr>
                    <tr>
                        <th>Average Temp</th>
                        <td>{getAvgTemperature(props)}</td>
                    </tr>
                    <tr>
                        <th>Highest Temp</th>
                        <td>{getHighestTemp(props)}</td>
                    </tr>
                    <tr>
                        <th>Lowest Temp</th>
                        <td>{getLowestTemp(props)}</td>
                    </tr>
                </tbody>
            </Table>

        <div className='box'>
            <div className='grid'>
                {historicalData.map((eachDayData) => {
                    return (
                        <Card style={{ width: '25rem' }} className='card'>
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
                        </Card>
                    )
                })}
            </div>
        </div>
        </div >
    )

}



export default WeatherCard