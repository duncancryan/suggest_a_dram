// Imports
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import QuizWrapper from '../containers/QuizWrapper';
import SearchWrapper from '../containers/SearchWrapper';
import NavBar from '../components/NavBar';
import LoginWrapper from '../containers/LoginWrapper';

// Build Router
export default function MainRouter() {

    // Render
    return(
        <Router>

            <Fragment>

                <NavBar />

                {console.log("before routes")}

                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>

                <Switch>
                    <Route exact path="/quiz" component={QuizWrapper} />
                </Switch>

                <Switch>
                    <Route exact path="/all" component={SearchWrapper} />
                </Switch>

                <Switch>
                    <Route exact path="/auth" component={LoginWrapper} />
                </Switch>

            </Fragment>

        </Router>
    );

}