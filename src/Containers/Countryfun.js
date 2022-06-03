import React, { useState } from 'react';

function Countryfun(props) {

    const[CountryName, setCountryName] = useState('India...');

    const ChangeCountry = () => {
        setCountryName('Us...');
    }

    return (
        <div>
            <p>{CountryName}</p>
            <button onClick={() => ChangeCountry()}>ChangeCountry</button>
        </div>
    );
}

export default Countryfun;