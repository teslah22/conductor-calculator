import React, {Component, useEffect} from 'react'

// const getData = () => {
//     fetch('PowerConductors', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     ).then(function (response) {
//         console.log(response)
//         return response.json();
//     }).then(function (myJson) {
//         console.loge(myJson);
//
//     });
// }
//
// useEffect(() => {getData()}, [])
//

class Calculator extends Component {


    render() {
        const a = 2;
        const b = 3;
        return (
            <h1>
                This is the result {a * b}
            </h1>
        )
    }
}

export default Calculator