import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './hooks/ContextProvider';
import { createBrowserHistory } from 'history';
import { parsePath } from 'utils/helpers';

import './index.css';

import { Navbar } from 'components';

import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
    <AppContextProvider>
        <Router basename={parsePath()} history={history}>
            <Navbar />
            <App />
        </Router>
    </AppContextProvider>,
    document.getElementById('root')
);
