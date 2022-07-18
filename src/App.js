import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    AboutPage,
    ContactPage,
    EntreMujeresPage,
    LandingPage,
    PostDetailsPage,
    PostsListPage,
    ProjectsPage,
    RelatosVisualesPage,
    TallerAdentroPage
} from 'pages';

const App = () => {
    return (
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/acerca" exact element={<AboutPage />} />
            <Route path="/contacto" exact element={<ContactPage />} />
            <Route path="/proyectos" exact element={<ProjectsPage />} />
            <Route path="/proyectos/entre-mujeres-y-el-barro" exact element={<EntreMujeresPage />} />
            <Route path="/proyectos/taller-adentro" exact element={<TallerAdentroPage />} />
            <Route path="/proyectos/relatos-visuales" exact element={<RelatosVisualesPage />} />
            <Route path="/bitacora" exact element={<PostsListPage />} />
            <Route path="/bitacora/:id" element={<PostDetailsPage />} />
        </Routes>
    );
};

export default App;
