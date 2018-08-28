import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getUserData, userChangeUserMode } from '../../user/actions';
import { logoutUser } from '../../auth/actions';

import Header from 'components/Header';
import BottomNavigation from 'components/BottomNavigation';
import FloatingSwitcher from 'components/FloatingSwitcher';

import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Calendar from 'pages/Calendar';
import NotFound from 'pages/NotFound';
import Add from '../../advertisement/pages/Add';
import Show from '../../advertisement/pages/Show';

import { user, userModeSettings, userMode } from '../../user/selectors';

class Main extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    click = () => {
        this.props.userChangeUserMode();
    };

    render() {
        const { path } = this.props.match;

        return (
            <Fragment>
                <Header />
                {this.props.settings.isTrainerTitleVisible ? 'Trainer' : null}
                <button onClick={this.props.logoutUser}>Wyloguj</button>

                <Switch>
                    <Route exact path={path} component={Dashboard} />
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/calendar`} component={Calendar} />
                    <Route path={`${path}/advertisement/add`} component={Add} />
                    <Route path={`${path}/advertisement/show`} component={Show} />
                    <Route component={NotFound} />
                </Switch>

                {this.props.user.userType === 'coach' ? (
                    <FloatingSwitcher userMode={this.props.userMode} onClick={this.click} />
                ) : null}

                <BottomNavigation />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    user: user(state),
    settings: userModeSettings(state),
    userMode: userMode(state),
});

const mapDispatchToProps = { getUserData, logoutUser, userChangeUserMode };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
