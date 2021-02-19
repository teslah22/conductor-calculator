import React, {Component} from 'react';


class Conductor extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.conductor.Conductor_Name}</td>
                <td>{this.props.conductor.Cross_section}</td>
                <td>{this.props.conductor.Diameter}</td>
                <td>{this.props.conductor.Unit_weight}</td>
                <td>{this.props.conductor.Alfa_param}</td>
                <td>{this.props.conductor.Beta_param}</td>
                <td>{this.props.conductor.RTS}</td>
                <td>{this.props.conductor.Nsn}</td>
                <td>{this.props.conductor.Nsk}</td>
                <td>{this.props.conductor.Type}</td>


            </tr>
        )
    }
}

export default Conductor;