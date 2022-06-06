import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        // 1. used to set intial value to the component

        this.state = {
            Time : new Date()
        }
    }

    tick = () => {
        this.setState({
            Time : new Date()
        })
    }

    componentDidMount = () => {
        
        // 3.used to requset data from server

        this.TimeI = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = (prevprops, prevstate) => {
        // 4. called whenever particular state/prope updata

        if (this.state.Time !== prevstate.Time) {
            console.log("componentDidUpdate");
        }
    }
    
    componentWillUnmount = () => {
        // 5. called whenever we move to anther componont(used to reals the resources)

        clearInterval(this.TimeI);
    }

    // 2. called whenever state value changed
    render() {
        return (
            <div>
                <p>{this.state.Time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;