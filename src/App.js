import React, { Component, useEffect, useState } from 'react';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';
import Home from './Containers/Home';
import Loading from './Containers/Loading';
import Counterfun from './Containers/Time/Counterfun';
import Time from './Containers/Time/Time';
import Timefun from './Containers/Time/Timefun';



    const HomewithLoading = Loading(Home);

    function App(props) {
        const [loading, setLoading] = useState(false)
        const [data, setData] = useState([ ])

        const orgData = [
            {id:101, name:"bansi"},
            {id:102, name:"Rutvi"}
        ]
        useEffect( () => {
            setLoading(true);
            setTimeout( () =>{setLoading(false); setData(orgData)},2000)
        }
        ,[])

        return(
            <HomewithLoading
                isLoading = {loading}
                data = {data}
            />
        )
    }

    Home

    function Home({data}) {
        return (
            data.map ((d,i) => {
                return (
                    <div>
                        <h3>{d.id}</h3>
                        <h4>{d.name}</h4>
                    </div>
                )
            })  
        )
    }

    Loading

    function Loading(Component) {
        return function WithLoading( { isLoading, data }) {
            if(isLoading){
                return (
                    <p>Loading...</p>
                )
            } else{
                return (
                    <Component data={data} />
                )
            }
        }
     }

    // class App extends Component {
    //     render() {
    //         return (
    //             <div>
    //                 <Time />
    //                 {/* <City />
    //                 <Cityfun /> */}
    //                 {/* <Country />
    //                 <Countryfun /> */}
    //                 {/* <Timefun /> */}
                    // <Counterfun /> 
    //             </div>
    //         );
    //     }
    // }

export default App;