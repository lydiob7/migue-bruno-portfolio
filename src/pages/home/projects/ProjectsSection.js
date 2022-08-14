import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import ArtsIArcs from './ArtsIArcs';
import CambraSerenata from './CambraSerenata';
import ElevenJazzEnsamble from './ElevenJazzEnsamble';
import Emociones from './Emociones';
import IEMOnline from './IEMOnline';
import Malamiga from './Malamiga';
import Voluta from './Voluta';

const tabs = {
    artsIArcs: 'arts-i-arcs',
    cambraSerenata: 'cambra-serenata',
    elevenJazzEnsamble: 'eleven-jazz-ensamble',
    emociones: 'emociones',
    iemOnline: 'iem-online',
    malamiga: 'malamiga',
    voluta: 'voluta'
};

const sections = [
    {
        id: tabs.iemOnline,
        Component: IEMOnline
    },
    {
        id: tabs.cambraSerenata,
        Component: CambraSerenata
    },
    {
        id: tabs.malamiga,
        Component: Malamiga
    },
    {
        id: tabs.elevenJazzEnsamble,
        Component: ElevenJazzEnsamble
    },
    {
        id: tabs.emociones,
        Component: Emociones
    },
    {
        id: tabs.artsIArcs,
        Component: ArtsIArcs
    },
    {
        id: tabs.voluta,
        Component: Voluta
    }
];

const Projects = (props) => {
    const [openTab, setOpenTab] = useState(null);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        if (openTab) {
            setTimeout(() => {
                setIsAnimationEnded(true);
            }, 150);
        } else setIsAnimationEnded(false);
    }, [openTab]);

    return (
        <div
            {...props}
            id="proyectos"
            className={clsx(
                'relative min-h-screen bg-isabelline text-darkGreen flex flex-col items-center justify-center',
                openTab ? 'pt-20' : ''
            )}
        >
            <h2
                className={clsx(
                    'text-6xl font-black mb-16 transition-all',
                    openTab ? 'invisible' : '',
                    isAnimationEnded ? 'hidden' : ''
                )}
            >
                Proyectos
            </h2>

            {sections.map(({ Component, id }) => (
                <Component
                    key={id}
                    id={id}
                    onClick={() => {
                        if (openTab !== id) setOpenTab(id);
                        else setOpenTab(null);
                    }}
                    openTab={openTab}
                />
            ))}
        </div>
    );
};

export default Projects;
