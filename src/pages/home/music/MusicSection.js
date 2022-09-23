import React, { useEffect } from 'react';

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

const MusicSection = ({ gsap, ...props }) => {
    useEffect(() => {
        gsap.fromTo(
            '#musica',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#musica',
                    start: 'top top+=5',
                    end: 'bottom top+=100',
                    toggleActions: 'restart none none reverse',
                    pin: true,
                    pinSpacing: false
                }
            }
        );
        gsap.fromTo(
            '#musica',
            {
                opacity: 1
            },
            {
                opacity: 0,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#musica',
                    start: '+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return <SectionsList {...props} gsap={gsap} id="musica" sections={sections} title="Música" className="z-40" />;
};

export default MusicSection;
