import React, { forwardRef, useEffect } from 'react';

import { SectionsList } from 'components';

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

const Projects = forwardRef(({ gsap, ...props }, ref) => {
    useEffect(() => {
        gsap.fromTo(
            '#proyectos',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#proyectos',
                    start: 'top top+=5',
                    end: 'bottom top+=100',
                    toggleActions: 'restart none none reverse',
                    pin: true,
                    pinSpacing: false
                }
            }
        );
        gsap.fromTo(
            '#proyectos',
            {
                opacity: 1
            },
            {
                opacity: 0,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#proyectos',
                    start: '+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return (
        <SectionsList
            {...props}
            className="z-30"
            ref={ref}
            gsap={gsap}
            id="proyectos"
            sections={sections}
            splitScreen
            title="Proyectos"
        />
    );
});

export default Projects;
