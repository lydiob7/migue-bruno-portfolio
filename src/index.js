import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './hooks/ContextProvider';
import { createBrowserHistory } from 'history';
import { parsePath } from 'utils/helpers';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css';

import { ImageViewer, Navbar } from 'components';

import App from './App';

const history = createBrowserHistory();

gsap.registerPlugin(ScrollTrigger);

ReactDOM.render(
    <AppContextProvider>
        <Router basename={parsePath()} history={history}>
            <Navbar gsap={gsap} />
            <App gsap={gsap} />
            <ImageViewer gsap={gsap} />
        </Router>
    </AppContextProvider>,
    document.getElementById('root')
);
