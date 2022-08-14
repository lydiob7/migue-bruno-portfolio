import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Audiovisual from './Audiovisual';
import Arrangements from './Arrangements';
import Piano from './Piano';
import Improvisation from './Improvisation';
import { useContextInfo } from 'hooks/ContextProvider';

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

const MusicSection = (props) => {
    const { getPosts } = useContextInfo();

    const [openTab, setOpenTab] = useState(null);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

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
            id="musica"
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
                Música
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
                    showArrow
                />
            ))}
        </div>
    );
};

export default MusicSection;
