import React from 'react';
import './style.sass'

import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Sidebar from '../../containers/Sidebar'
import List from '../../containers/List'

const App = (props) => {
    return (
        <div className='app'>
            <Sidebar/>
            <Switch>
                <Route
                    path='/:list'
                    component={List}
                />
                <Redirect
                    from='/'
                    to='/inbox'
                />
            </Switch>
        </div>
    )
}

export default App;