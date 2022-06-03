import React, { useState } from 'react';

function Cityfun({id, Country_name}) {

    const[CityName, setCityName] = useState('surat.....');

    const ChangeCity = () => {
        setCityName('baroda.....');
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => ChangeCity()}>ChangeCity</button>
            <p>{id} {Country_name}</p>
        </div>
    );
}

export default Cityfun;