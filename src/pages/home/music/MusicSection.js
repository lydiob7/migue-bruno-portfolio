import React from 'react';
import clsx from 'clsx';

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
    {
        id: tabs.improvisation,
        Component: Improvisation
    }
];

const MusicSection = ({ className, ...props }) => (
    <SectionsList {...props} id="musica" sections={sections} title="Música" className={clsx('z-40', className)} />
);

export default MusicSection;
