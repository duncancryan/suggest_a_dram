// Imports
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import QuizContainer from '../containers/QuizContainer';
import SearchWrapper from '../containers/SearchWrapper';
import NavBar from '../NavBar';

// Build Router
export default function MainRouter() {

    // Render
    return(
        <Router>

            <Fragment>

                <NavBar />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>

                <Switch>
                    <Route exact path="/start" component={QuizContainer} />
                </Switch>

                <Switch>
                    <Route exact path="/all" component={SearchWrapper} />
                </Switch>

            </Fragment>

        </Router>
    );

}