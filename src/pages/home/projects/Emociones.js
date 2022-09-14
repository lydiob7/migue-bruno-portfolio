import React from 'react';
import { ExpandableSection } from 'components';

import emociones from 'assets/images/emociones.jpg';

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

                <div className="w-4/5 mx-auto my-16">
                    <img className="w-full" src={emociones} alt="Malamiga" />
                </div>
            </>
        </ExpandableSection>
    );
};

export default Emociones;
