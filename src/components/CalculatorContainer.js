import React from 'react';
import Calculator from "components/Calculator";
import Conductors from "components/Conductors";
import {Container} from "reactstrap";

function CalculatorContainer() {

  return (
    <Container className="App">
        <Calculator/>
        <Conductors/>
    </Container>
  );
}

export default CalculatorContainer;