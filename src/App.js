import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import ActiveUsers from "./components/ActiveUsers";
import Slider from './components/Slider';
import DialogWindow from "./components/DialogWindow";

function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path='/' component={ActiveUsers}/>
                <Route path='/slides' component={Slider}/>
                <Route path='/dialog' component={DialogWindow}/>
            </Switch>
        </Fragment>
    )
}

export default App;

