import React from 'react';

const Projects = (props) => (
    <div {...props} id="proyectos" className="h-screen bg-isabelline flex flex-col items-center justify-center">
        <h2 className="text-6xl font-black mb-16 transition-all">Proyectos</h2>

        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 border-t-2 cursor-pointer">
            IEM Online
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Serenata
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Malamiga
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Eleven Jazz Ensemble
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Emociones
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Arts i Arcs
        </h3>
        <h3 className="w-full flex items-center text-3xl justify-between font-extrabold px-8 border-darkGreen border-b-2 cursor-pointer">
            Voluta Escola de Música
        </h3>
    </div>
);

export default Projects;
