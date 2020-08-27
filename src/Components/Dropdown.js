import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Dropdowncomponent(props) {
    const mockData = [
        { "city": "Hyderabad", "id": 1269843, "lon": 78.47, "lat": 17.38 },
        { "city": "London", "id": 2643743, "lon": - 0.13, "lat": 51.51 },
        { "city": "Sydney", "id": 2147714, "lon": 151.21, "lat": -33.87 },
        { "city": "Auckland", "id": 2193733, "lon": 174.77, "lat": -36.87 },
        { "city": 'Cape town', "id": 3369157, "lon": 18.42, "lat": -33.9 },
        { "city": "Cairo", "id": 360630, "lon": 31.25, "lat": 30.06 },
        { "city": "Paris", "id": 2988507, "lon": 2.35, "lat": 48.85 },
    ]

    const [selectedCity, setSelectedCity] = useState('Select city');

    const onClickHandler = (e) => {
        const res = mockData.filter(x => x["city"] === e.target.innerHTML);
        const { lon, lat, id } = res[0];
        setSelectedCity(e.target.innerHTML);
        props.onselectionChange({lon, lat, id});
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
            <DropdownButton data-testid='dropdown-basic-button' id="dropdown-basic-button" title={selectedCity}>
                {mockData.map((cityObj, index) => {
                    return (
                        <>
                            <Dropdown.Item value={cityObj["city"]} eventKey={cityObj["city"]} onClick={onClickHandler}>{cityObj["city"]}</Dropdown.Item>
                        </>)
                })}
            </DropdownButton>
        </div>

    );
}

export default Dropdowncomponent;