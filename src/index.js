import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";

import Routes from 'routes';
import TopBar from 'components/TopBar';
import { CurrentUserProvider } from 'contexts/currentUser';
import CurrentUserChecker from 'components/CurrentUserChecker';

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Router>
                    <TopBar></TopBar>
                    <Routes></Routes>
                </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
