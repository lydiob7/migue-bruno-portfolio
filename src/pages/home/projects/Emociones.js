import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection } from 'components';

import emociones from 'assets/images/emociones.jpg';

const Emociones = ({ id, openTab, ...props }) => {
    const { setImageToOpen } = useContextInfo();
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

                <div
                    onClick={(ev) => {
                        ev.stopPropagation();
                        setImageToOpen({ src: emociones, alt: 'Emociones' });
                    }}
                    className="w-4/5 mx-auto my-16 cursor-pointer"
                >
                    <img className="w-full" src={emociones} alt="Emociones" />
                </div>
            </>
        </ExpandableSection>
    );
};

export default Emociones;
