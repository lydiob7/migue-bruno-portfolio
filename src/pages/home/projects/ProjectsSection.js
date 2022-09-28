import React from 'react';
import clsx from 'clsx';

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
        Component: IEMOnline,
        title: 'IEM Online'
    },
    {
        id: tabs.cambraSerenata,
        Component: CambraSerenata,
        title: 'Cor de Cambra Serenata'
    },
    {
        id: tabs.malamiga,
        Component: Malamiga,
        title: 'Malamiga'
    },
    {
        id: tabs.elevenJazzEnsamble,
        Component: ElevenJazzEnsamble,
        title: 'Eleven Jazz Ensamble'
    },
    {
        id: tabs.emociones,
        Component: Emociones,
        title: 'Emociones'
    },
    {
        id: tabs.artsIArcs,
        Component: ArtsIArcs,
        title: 'Arts i Arcs'
    },
    {
        id: tabs.voluta,
        Component: Voluta,
        title: 'Voluta Escola de Música'
    }
];

const Projects = ({ className, ...props }) => (
    <SectionsList
        {...props}
        className={clsx('z-30', className)}
        id="proyectos"
        sections={sections}
        splitScreen
        title="Proyectos"
    />
);

export default Projects;
