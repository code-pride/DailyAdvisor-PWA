import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { authenticatedSelector } from '../../auth/selectors';

import Login from 'pages/Login';
import Register from 'pages/Register/Register';
import AfterRegister from 'pages/Register/AfterRegister';
import RegisterConfirm from 'pages/Register/RegisterConfirm';
import About from 'pages/About';

const NonAuthenticatedRoutes = ({ component: Component, ...rest }) =>
    console.log(`nonauthenticated: ${rest.authenticated}`) || (
        <Route
            {...rest}
            render={() =>
                rest.authenticated ? (
                    <Redirect to="/main" />
                ) : (
                    <Fragment>
                        <Switch>
                            <Route exact path="/login" component={Login} />
                            <Route path="/about" component={About} />
                            <Route path="/register" component={Register} />
                            <Route path="/afterRegister" component={AfterRegister} />
                            <Route path="/registrationConfirm/:token" component={RegisterConfirm} />
                            <Redirect from="/*" to="/login" />
                        </Switch>
                    </Fragment>
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
