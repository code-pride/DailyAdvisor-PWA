import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import IconButton from 'components/IconButton';

import search from 'assets/icons/search.svg';

const Dashboard = () => {
    return (
        <Fragment>
            <h1>Dashboard</h1>
            <NavLink to={'/main/search'}>
                <IconButton src={search} alt="Search" height="50px" width="50px" />
            </NavLink>
        </Fragment>
    );
};

export default Dashboard;
