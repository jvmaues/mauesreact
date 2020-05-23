import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';

import Machinelearning from '../components/pages/Machinelearning/Machinelearning';
import Webdevelopment from '../components/pages/Webdevelopment/Webdevelopment';
import Optimization from '../components/pages/Optimization/Optimization';
import Datascience from '../components/pages/Datascience/Datascience';
import News from '../components/pages/News/News'

export default props =>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/machinelearning" component={Machinelearning} />
            <Route path="/webdevelopment" component={Webdevelopment} />
            <Route path="/optimization" component={Optimization} />
            <Route path="/datascience" component={Datascience} />
            <Route path="/news" component={News} />
            <Redirect from='*' to='/' />
        </Switch>