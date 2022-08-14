import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Audiovisual from './Audiovisual';
import Arrangements from './Arrangements';
import Piano from './Piano';
import Improvisation from './Improvisation';
import { useContextInfo } from 'hooks/ContextProvider';

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
                'relative h-screen bg-isabelline flex flex-col items-center justify-center',
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
            <Audiovisual
                onClick={() => {
                    if (openTab !== 'audiovisual') setOpenTab('audiovisual');
                    else setOpenTab(null);
                }}
                openTab={openTab}
                showArrow
            />
            <Arrangements
                onClick={() => {
                    if (openTab !== 'arrangements') setOpenTab('arrangements');
                    else setOpenTab(null);
                }}
                openTab={openTab}
                showArrow
            />
            <Piano
                onClick={() => {
                    if (openTab !== 'piano') setOpenTab('piano');
                    else setOpenTab(null);
                }}
                openTab={openTab}
                showArrow
            />
            <Improvisation
                onClick={() => {
                    if (openTab !== 'improvisation') setOpenTab('improvisation');
                    else setOpenTab(null);
                }}
                openTab={openTab}
                showArrow
            />
        </div>
    );
};

export default MusicSection;
