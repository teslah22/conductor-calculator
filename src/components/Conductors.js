import React, {Component} from 'react';
import {Card, CardBody, Table, Button, List, Input, Label} from 'reactstrap';
import data from './data/PowerConductors.json';
import Conductor from './Conductor.js';
import './Conductors.css';


class Conductors extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            conductors: [],
            spanQuantity: 1,
            spanLengths: [],
            referenceTension: 10000,
            referenceTemperature: 10,
            selectedConductor: "",
            selectedTemperature: 80,

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log("Conductor selected!");
        this.setState({selectedConductor: e.target.value});
        this.setState({spanQuantity: e.target.value});
    }

    componentDidMount() {
        this.getConductorsData();
    }

    getConductorsData() {
        const conductors = data.map((item) => {
            const {
                Conductor_Name,
                Cross_section,
                Diameter,
                Unit_weight,
                Alfa_param,
                Beta_param,
                RTS,
                Nsn,
                Nsk,
                Type
            } = item;


            return {
                Conductor_Name,
                Cross_section,
                Diameter,
                Unit_weight,
                Alfa_param,
                Beta_param,
                RTS,
                Nsn,
                Nsk,
                Type
            };
        });
        this.setState({conductors});
        console.log(conductors);

    }

    render() {
        const {conductors} = this.state;
        const {selectedConductor} = this.state;
        const {spanQuantity} = this.state;
        const spanQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(this.state);

        return (
            <Card className="mb-4">
                <h1>Sag calculator</h1>
                <CardBody>
                    <div className="calculatorContainer">
                        <div className="inputDataContainer">
                            <h3>Input data</h3>
                            <Table>
                                <tbody>
                                <tr>
                                    <td><Label for="selectedConductor">Select conductor</Label></td>
                                    <td><Input id="selectedConductor" type="select" value={selectedConductor}
                                               onChange={this.handleChange} className="selectedConductor">
                                        {
                                            conductors.map(item => (
                                                <option value={item.Conductor_Name}>{item.Conductor_Name}</option>
                                            ))
                                        }
                                    </Input></td>
                                </tr>
                                <tr>
                                    <td><Label for="selectSpanQuantity">Select a span quantity</Label></td>
                                    <td><Input id="selectSpanQuantity" type="select" value={spanQuantity}
                                               onChange={this.handleChange} className="selectSpanQuantity">
                                        {
                                            spanQuantities.map(item => (
                                                <option value={item}>{item}</option>
                                            ))
                                        }
                                    </Input></td>
                                </tr>
                                <tr>
                                    <td><Label for="referenceTension">Reference tension</Label></td>
                                    <td><Input id="referenceTension" className="referenceTension" placeholder="a reference tension goes here"/></td>
                                </tr>
                                <tr>
                                    <td><Label for="referenceTemperature">Reference Temperature</Label></td>
                                    <td><Input id="referenceTemperature" className="referenceTemperature" placeholder="a reference temperature goes here"/></td>
                                </tr>
                                <tr>
                                    <td><Label for="selectedTemperature">Selected temperature</Label></td>
                                    <td><Input id="selectedTemperature" className="selectedTemperature" placeholder="a selected temperature goes here"/></td>
                                </tr>

                                </tbody>
                            </Table>


                        </div>
                        <div className="resultsContainer">
                            <h3>Sags</h3>
                            <Table>
                                <thead>
                                <th>Structure number</th>
                                <th>Span length</th>
                                <th>Calculated sag</th>
                                </thead>
                            </Table>
                        </div>

                    </div>
                </CardBody>

                <CardBody>
                    <div className="conductorsTableContainer">
                        <Table className="conductorsTable">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cross section</th>
                                <th>Diameter</th>
                                <th>Unit weight</th>
                                <th>Alfa</th>
                                <th>Beta</th>
                                <th>RTS</th>
                                <th>Nsn</th>
                                <th>Nsk</th>
                                <th>Type</th>
                            </tr>
                            <tr>
                                <th>-</th>
                                <th>mm<sup>2</sup></th>
                                <th>mm</th>
                                <th>N/m</th>
                                <th>x10<sup>-6</sup></th>
                                <th>mm<sup>2</sup>/Nx10<sup>-6</sup></th>
                                <th>kN</th>
                                <th>kN</th>
                                <th>kN</th>
                                <th>-</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                conductors.map(
                                    (conductor, index) => (<Conductor conductor={conductor} key={index}/>)
                                )
                            }

                            </tbody>
                        </Table>
                    </div>
                </CardBody>

            </Card>
        );
    }
}


export default Conductors;