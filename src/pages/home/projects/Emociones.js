import React from 'react';
import { ExpandableSection } from 'components';

const Emociones = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Emociones" openTab={openTab}>
            <>
                <p className="py-2">
                    Emociones es un proyecto junto a la cantante{' '}
                    <a
                        className="text-darkGreen opacity-60 underline"
                        href="https://www.lydiagregorymusic.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Lydia Gregory
                    </a>{' '}
                    en el que interpretamos repertorio de distintos estilos (blues, soul, rock, pop…)
                </p>
            </>
        </ExpandableSection>
    );
};

export default Emociones;
