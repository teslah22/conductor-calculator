import React from 'react';
import {Container} from 'reactstrap';
import {Route, Switch} from 'react-router-dom'
import {ROUTE_CALCULATOR, ROUTE_CONDUCTORS} from "constants/Routes";
import Conductors from "components/Conductors";
import Calculator from "components/Calculator";

class SagCalcContainer extends React.PureComponent {

    render() {
        return (
            <Container>
                <Switch>
                    <Route exact path={ROUTE_CALCULATOR}>
                        <Calculator/>
                    </Route>
                    <Route exact path={ROUTE_CONDUCTORS}>
                        <Conductors/>
                    </Route>

                </Switch>
            </Container>
        )
    }

}

export default SagCalcContainer;