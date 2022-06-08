import React, { Component, useState } from 'react';
import City from './Containers/City';
import Cityfun from './Containers/Cityfun';
import Country from './Containers/Country';
import Countryfun from './Containers/Countryfun';
import Counterfun from './Containers/Time/Counterfun';
import Time from './Containers/Time/Time';
import Timefun from './Containers/Time/Timefun';

        // Datas.js


//   const person = {
//     name: "Amit",
//     age: 25
//   }

//   console.log(person.name, person.age);

//   const person = [
//     {
//       name: "Amit",
//       age: 25,
//     },
//     {
//       name: "Piyush",
//       age: 40,
//     },
//   ];

//   person.map((p) => console.log(p.name, p.age));

//   const person = {
//     name: "Amit",
//     age: 25,
//     course: [
//       "C",
//       "HTML"
//     ]
//   }

//   console.log(person.name, person.age);
//   person.course.map((p) => console.log(p));

//   const person = [
//     {
//       name: "Amit",
//       age: 25,
//       course: [
//         "C",
//         "HTML"
//       ]
//     },
//     {
//       name: "Ajay",
//       age: 40,
//       course: [
//         "Java",
//         "JavaScript"
//       ]
//     }
//   ]

//   person.map((p) => {
//     console.log(p.name, p.age);
//     p.course.map((p) => console.log(p));
//   })

//   const myObj = {
//     name: "John",
//     age: 30,
//     cars: {
//       car1: "Ford",
//       car2: "BMW",
//       car3: "Fiat"
//     }
//   }

//   for (let k in myObj) {
//     if (k === 'cars') {
//       for (let j in myObj[k]) {
//         console.log(myObj[k][j]);
//       }
//     } else {
//       console.log(myObj[k]);
//     }
//   }


    // Medicine Data:


    // let data =
    //   [
    //     {
    //       id: 101,
    //       name: 'Abacavir',
    //       quantity: 25,
    //       price: 150,
    //       expiry: 2022,
    //       status: true
    //     },
    //     {
    //       id: 102,
    //       name: 'Eltrombopag',
    //       quantity: 90,
    //       price: 550,
    //       expiry: 2021,
    //       status: true
    //     },
    //     {
    //       id: 103,
    //       name: 'Meloxicam',
    //       quantity: 85,
    //       price: 450,
    //       expiry: 2025,
    //       status: false
    //     },
    //     {
    //       id: 104,
    //       name: 'Allopurinol',
    //       quantity: 50,
    //       price: 600,
    //       expiry: 2023,
    //       status: true
    //     },
    //     {
    //       id: 105,
    //       name: 'Phenytoin',
    //       quantity: 63,
    //       price: 250,
    //       expiry: 2021,
    //       status: false
    //     }
    //   ];
  
    // let fdata = data.filter((d,i) => d.status === true && d.expiry >=2022); 
    // let ans = fdata.reduce((acc,d,i) => acc + d.price ,0);
  
    // console.log(fdata);
    // console.log(ans);
  
    // return (
    //     <table border ="1">
    //         <tr>
    //             <th>Id</th>
    //             <th>Name</th>
    //             <th>Quantity</th>
    //             <th>Price</th>
    //             <th>Idexpiry</th>
    //             <th>Status</th>
    //             <th>Total</th>
    //         </tr>
    //         {
    //           fdata.map((d,i) => {
    //             let { id, name, quantity, price, expiry, status } = d;
    //               return(
    //                 <tr key={i}>
    //                   <td>{id}</td>
    //                   <td>{name}</td>
    //                   <td>{quantity}</td>
    //                   <td>{price}</td>
    //                   <td>{expiry}</td>
    //                   <td>{status.toString()}</td>
    //                   {i === 0 ? <td rowSpan={2}>{ans}</td>: null}
    //                 </tr>
    //               )
    //           })
    //         }
    //     </table>
    // );


    // Employee Data:


    // let data =
    // [
    //   {
    //     name: "amit",
    //     age: 35,
    //     salary: 40000,
    //     bonus: 1000,
    //     status: true
    //   },
    //   {
    //     name: "ajay",
    //     age: 25,
    //     salary: 38000,
    //     bonus: 2000,
    //     status: false
    //   },
    //   {
    //     name: "mayur",
    //     age: 23,
    //     salary: 50000,
    //     bonus: 500,
    //     status: true
    //   },
    //   {
    //     name: "jay",
    //     age: 29,
    //     salary: 35000,
    //     bonus: 600,
    //     status: true
    //   },
    //   {
    //     name: "raj",
    //     age: 33,
    //     salary: 22000,
    //     bonus: 2000,
    //     status: true
    //   },
    // ];
  
    // let fdata = data.filter((d,i) => d.status === true);
  
    // let ans = fdata.reduce((acc,d,i) => acc + d.salary + d.bonus ,0);
  
    // console.log(fdata);
    // console.log(ans);
  
    // return (
    //   <div>
    //     <table border="3">
    //       <tr>
    //         <th>Name</th>
    //         <th>Age</th>
    //         <th>Salary</th>
    //         <th>Bonus</th>
    //         <th>Status</th>
    //         <th>salary + bonus</th>
    //         <th>Total</th>
    //       </tr>
    //       {
    //         fdata.map((d, i) => {
    //           let { name, age, salary, bonus, status } = d;
    //           return (
    //             <tr key={i}>
    //               <td>{name}</td>
    //               <td>{age}</td>
    //               <td>{salary}</td>
    //               <td>{bonus}</td>
    //               <td>{status.toString()}</td>
    //               <td>{salary+bonus}</td>
    //               {i === 0 ? <td rowSpan={4}>{ans}</td>: null}
    //             </tr>
    //           )
    //         })
    //       }
    //     </table>
    //     </div>
    // );



    class App extends Component {
        render() {
            return (
                <div>
                    <Time />
                    {/* <City />
                    <Cityfun /> */}
                    {/* <Country />
                    <Countryfun /> */}
                    {/* <Timefun /> */}
                    <Counterfun />
                </div>
            );
        }
    }

export default App;