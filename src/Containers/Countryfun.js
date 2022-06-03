import React, { useState } from 'react';
import Cityfun from './Cityfun';

function Countryfun(props) {

    const[CountryName, setCountryName] = useState('India...');

    const ChangeCountry = () => {
        setCountryName('Us...');
    }

    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => ChangeCountry()}>ChangeCountry</button>
            <Cityfun id ="102" Country_name={CountryName}/>
        </div>
    );
}

export default Countryfun;