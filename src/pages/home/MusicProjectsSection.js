import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const lgScreen = 1024;

const MusicProjectsSection = ({ className, gsap }) => {
    const [isScreenWidthLarge, setIsScreenWidthLarge] = useState(window.innerWidth >= lgScreen);

    useEffect(() => {
        window.addEventListener('resize', (ev) => {
            if (ev.target.innerWidth >= lgScreen) setIsScreenWidthLarge(true);
            else setIsScreenWidthLarge(false);
        });
    }, []);

    useEffect(() => {
        if (isScreenWidthLarge) {
            gsap.to('.music-projects', {
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-projects',
                    start: 'top top',
                    end: '+=200vh',
                    pin: true
                }
            });
            gsap.to('#proyectos', {
                xPercent: -100,
                duration: 0.25,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-projects',
                    toggleActions: 'restart none none reverse',
                    start: '+=100vh',
                    pin: '.music-projects'
                }
            });
        }
    }, [gsap, isScreenWidthLarge]);

    return (
        <div className={clsx('music-projects lg:w-[200vw] lg:flex-row', className)}>
            <Music gsap={gsap} />
            <Projects gsap={gsap} className="bg-isabelline" />
        </div>
    );
};

export default MusicProjectsSection;
