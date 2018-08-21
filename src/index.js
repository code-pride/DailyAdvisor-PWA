import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch, Router } from 'react-router-dom';

import store, { history, persistor } from 'store';

import AuthenticatedRoutes from 'components/AuthenticatedRoutes';
import NonAuthenticatedRoutes from 'components/NonAuthenticatedRoutes';

import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

import { StyledMainApp } from './styles';
import Calendar from 'pages/Calendar';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <StyledMainApp>
                    <Switch>
                        <Calendar />
                        <AuthenticatedRoutes path="/main" component={Main} />
                        <NonAuthenticatedRoutes path="/" />
                        <Route component={NotFound} />
                    </Switch>
                </StyledMainApp>
            </Router>
        </PersistGate>
    </Provider>,
    target,
);
