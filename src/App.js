import React, { Component } from 'react';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';

class App extends Component {
    render() {
        return (
            <div>
                <City />
                <Cityfun />
            </div>
        );
    }
}

export default App;