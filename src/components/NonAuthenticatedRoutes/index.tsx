import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { authenticatedSelector } from '../../auth/selectors';

import About from 'pages/About';
import Login from 'pages/Login';
import AfterRegister from 'pages/Register/AfterRegister';
import Register from 'pages/Register/Register';
import RegisterConfirm from 'pages/Register/RegisterConfirm';

const NonAuthenticatedRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={() =>
            rest.authenticated ? (
                <Redirect to="/main" />
            ) : (
                <Switch>
                    <Route exact={true} path="/login" component={Login} />
                    <Route path="/about" component={About} />
                    <Route path="/register" component={Register} />
                    <Route path="/after-register" component={AfterRegister} />
                    <Route path="/registration-confirm/:token" component={RegisterConfirm} />
                    <Redirect from="/*" to="/login" />
                </Switch>
            )
        }
    />
);

const mapStateToProps = state => ({
    authenticated: authenticatedSelector(state),
});

export default connect(
    mapStateToProps,
    null,
)(NonAuthenticatedRoutes);
