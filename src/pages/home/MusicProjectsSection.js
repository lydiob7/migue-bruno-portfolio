import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const lgScreen = 1024;

const MusicProjectsSection = ({ className, gsap }) => {
    const [isScreenWithLarge, setIsScreenWithLarge] = useState(window.innerWidth >= lgScreen);

    useEffect(() => {
        window.addEventListener('resize', (ev) => {
            if (ev.target.innerWidth >= lgScreen) setIsScreenWithLarge(true);
            else setIsScreenWithLarge(false);
        });
    }, []);

    useEffect(() => {
        if (isScreenWithLarge)
            gsap.to('.music-projects', {
                transform: 'translateX(-50%)',
                duration: 1,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-projects',
                    start: 'top top',
                    scrub: 1,
                    pin: true
                }
            });
    }, [gsap, isScreenWithLarge]);

    return (
        <div className={clsx('music-projects lg:w-[200vw] lg:flex-row', className)}>
            <Music gsap={gsap} className="snap-start" />
            <Projects gsap={gsap} className="snap-start" />
        </div>
    );
};

export default MusicProjectsSection;
