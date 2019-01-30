import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components

import App from './App';
import About from './components/About';

const AppRoutes = () =>
<App>
    <Switch>
        <Route path="/about" component={About}/>
    </Switch>
</App>;

export default AppRoutes;