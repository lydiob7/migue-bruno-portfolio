import React from 'react';

const Projects = (props) => (
    <div {...props} id="proyectos" className="h-screen bg-isabelline flex flex-col items-center justify-center">
        <h2 className="text-6xl font-black mb-16 transition-all">Proyectos</h2>

        <h3 className="project-item w-full border-t-2">IEM Online</h3>
        <h3 className="project-item w-full">Serenata</h3>
        <h3 className="project-item w-full">Malamiga</h3>
        <h3 className="project-item w-full">Eleven Jazz Ensemble</h3>
        <h3 className="project-item w-full">Emociones</h3>
        <h3 className="project-item w-full">Arts i Arcs</h3>
        <h3 className="project-item w-full">Voluta Escola de Música</h3>
    </div>
);

export default Projects;
