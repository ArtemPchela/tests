import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import ActiveUsers from "./components/ActiveUsers";
import Slider from './components/Slider';
import DialogWindow from "./components/DialogWindow";

function App() {
    return (
        <Fragment>
            <Switch>
                <Route path='/slides' component={Slider}/>
                <Route path='/dialog' component={DialogWindow}/>
                <Route path='/' component={ActiveUsers}/>
            </Switch>
        </Fragment>
    )
}

export default App;

