import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ErrorPage, HomePage } from 'pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};

export default App;
