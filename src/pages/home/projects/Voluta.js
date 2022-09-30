import React from 'react';
import { ExpandableSection } from 'components';

const Voluta = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Voluta Escola de Música" openTab={openTab} splitScreen>
            <>
                <p className="py-2 px-4 md:px-8">
                    Voluta es la escuela en la que he desarrollado mi actividad pedagógica los últimos años. Allí han
                    nacido proyectos como el O Fortuna, o el espectáculo En Busca de la Melodía Perdida.
                </p>
            </>
        </ExpandableSection>
    );
};

export default Voluta;
