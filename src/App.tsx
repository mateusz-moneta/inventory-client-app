import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { Login } from './login/containers/login/Login';

import './App.css';

const App = () => {
    return useRoutes([
        { path: 'login', element: <Login /> }
    ]);
};

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default AppWrapper;
