import React, { Component } from 'react';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';
import Time from './Containers/Time/Time';
import Timefun from './Containers/Time/Timefun';



class App extends Component {
    render() {
        return (
            <div>
                <Time />
                {/* <City />
                <Cityfun /> */}
                {/* <Country />
                <Countryfun /> */}
                <Timefun />
            </div>
        );
    }
}

export default App;