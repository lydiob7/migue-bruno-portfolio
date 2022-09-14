import React from 'react';

import { SectionsList } from 'components';

import Audiovisual from './Audiovisual';
import Arrangements from './Arrangements';
import Piano from './Piano';
import Improvisation from './Improvisation';

const tabs = {
    audiovisual: 'audiovisual',
    arrangements: 'arrangements',
    improvisation: 'improvisation',
    piano: 'piano'
};

const sections = [
    {
        id: tabs.audiovisual,
        Component: Audiovisual
    },
    {
        id: tabs.arrangements,
        Component: Arrangements
    },
    {
        id: tabs.piano,
        Component: Piano
    },
    { id: tabs.improvisation, Component: Improvisation }
];

const MusicSection = ({ gsap, ...props }) => (
    <SectionsList
        {...props}
        gsap={gsap}
        style={{ marginTop: '-18px' }}
        id="musica"
        sections={sections}
        title="Música"
    />
);

export default MusicSection;
