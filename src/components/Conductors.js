import React, {Component} from 'react';
import {Card, CardBody, Table, Button, List} from 'reactstrap';
import data from './data/PowerConductors.json';
import Conductor from './Conductor.js';
import './Conductors.css';


class Conductors extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            conductors: [],
            inputData: []
        };
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

        return (
            <Card className="mb-4">
                <CardBody>
                    <div className="calculatorContainer">
                        Kalkulator
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