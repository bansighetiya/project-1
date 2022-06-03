import React, { useState } from 'react';

function Cityfun(props) {

    const[CityName, setCityName] = useState('surat.....');

    const ChangeCity = () => {
        setCityName('baroda.....');
    }

    return (
        <div>
            <p>{CityName}</p>
            <button onClick={() => ChangeCity()}>ChangeCity</button>
        </div>
    );
}

export default Cityfun;