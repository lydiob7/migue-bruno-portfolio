import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LandingPage } from 'pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
        </Routes>
    );
};

export default App;
