import React, { Component } from 'react';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';


class App extends Component {
    render() {
        return (
            <div>
                {/* <City />
                <Cityfun /> */}
                <Country />
                <Countryfun />
            </div>
        );
    }
}

export default App;