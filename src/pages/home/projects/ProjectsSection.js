import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import ArtsIArcs from './ArtsIArcs';
import CambraSerenata from './CambraSerenata';
import ElevenJazzEnsamble from './ElevenJazzEnsamble';
import Emociones from './Emociones';
import IEMOnline from './IEMOnline';
import Malamiga from './Malamiga';
import Voluta from './Voluta';

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
                'relative bg-isabelline flex flex-col items-center justify-center',
                openTab ? 'pt-20 h-[150vh]' : 'h-screen'
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

            <IEMOnline
                onClick={() => {
                    if (openTab !== 'iem-online') setOpenTab('iem-online');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <CambraSerenata
                onClick={() => {
                    if (openTab !== 'cambra-serenata') setOpenTab('cambra-serenata');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <Malamiga
                onClick={() => {
                    if (openTab !== 'malamiga') setOpenTab('malamiga');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <ElevenJazzEnsamble
                onClick={() => {
                    if (openTab !== 'eleven-jazz-ensamble') setOpenTab('eleven-jazz-ensamble');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <Emociones
                onClick={() => {
                    if (openTab !== 'emociones') setOpenTab('emociones');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <ArtsIArcs
                onClick={() => {
                    if (openTab !== 'arts-i-arcs') setOpenTab('arts-i-arcs');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
            <Voluta
                onClick={() => {
                    if (openTab !== 'voluta') setOpenTab('voluta');
                    else setOpenTab(null);
                }}
                openTab={openTab}
            />
        </div>
    );
};

export default Projects;
