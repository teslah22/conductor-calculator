import React, {Component } from 'react'



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