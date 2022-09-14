import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ErrorPage, HomePage } from 'pages';

const App = ({ gsap }) => {
    return (
        <Routes>
            <Route path="/" exact element={<HomePage gsap={gsap} />} />
            <Route path="*" element={<ErrorPage gsap={gsap} />} />
        </Routes>
    );
};

export default App;
