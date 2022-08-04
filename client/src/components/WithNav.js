import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router';

export default ({ setUser, user }) => {
    return (
        <>
            <Navigation user={user} setUser={setUser} />
            <Outlet />
        </>
    );
};