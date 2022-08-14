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
                'relative min-h-screen bg-isabelline text-darkGreen flex flex-col items-center justify-center md:px-16 md:pb-24',
                openTab ? 'pt-20 md:pt-0' : ''
            )}
        >
            <h2
                className={clsx(
                    'text-6xl font-black mb-16 transition-all',
                    openTab ? 'invisible md:visible' : '',
                    isAnimationEnded ? 'hidden md:block' : ''
                )}
            >
                Proyectos
            </h2>
            <div className="md:hidden flex flex-col w-full items-center justify-center">
                {sections.map(({ Component, id }, index) => (
                    <Component
                        key={id}
                        borderTop={index === 0}
                        id={id}
                        onClick={() => {
                            if (openTab !== id) setOpenTab(id);
                            else setOpenTab(null);
                        }}
                        openTab={openTab}
                        splitScreen
                    />
                ))}
            </div>

            <div className="hidden md:flex md:items-center w-full">
                <div className="basis-2/5 border-r-2 border-darkGreen pr-8">
                    {sections
                        .filter((section) => section?.id !== openTab)
                        .map(({ Component, id }, index, array) => (
                            <Component
                                key={id}
                                borderBottom={index !== array.length - 1}
                                id={id}
                                onClick={() => {
                                    if (openTab !== id) setOpenTab(id);
                                    else setOpenTab(null);
                                }}
                                openTab={openTab}
                                splitScreen
                            />
                        ))}
                </div>

                <div className="basis-3/5">
                    {sections
                        ?.filter((section) => section?.id === openTab)
                        ?.map(({ Component, id }) => (
                            <Component
                                key={id}
                                id={id}
                                onClick={() => {
                                    if (openTab !== id) setOpenTab(id);
                                    else setOpenTab(null);
                                }}
                                openTab={openTab}
                                splitScreen
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
