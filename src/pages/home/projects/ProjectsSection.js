import React, { forwardRef } from 'react';

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

const Projects = forwardRef(({ gsap, ...props }, ref) => (
    <SectionsList {...props} ref={ref} gsap={gsap} id="proyectos" sections={sections} splitScreen title="Proyectos" />
));

export default Projects;
