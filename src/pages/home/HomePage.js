import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const HomePage = ({ gsap, ...props }) => {
    const { getAudios, getVideos, imageToOpen, setIsMusicOutOfScreen, setIsProjectsOutOfScreen } = useContextInfo();

    useEffect(() => {
        getAudios();
        getVideos();
    }, [getAudios, getVideos]);

    useEffect(() => {
        gsap.fromTo(
            '.main-page',
            {
                backgroundColor: '#14191A'
            },
            {
                backgroundColor: '#F5F0EA',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-section',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.app-menu-btn',
            {
                backgroundColor: '#BED6EF'
            },
            {
                backgroundColor: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-section',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.app-name',
            {
                color: '#BED6EF'
            },
            {
                color: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-section',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );

        gsap.fromTo(
            '.music-section-mobile',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-section-mobile',
                    start: 'top top+=100',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.music-section-desktop',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.music-section-desktop',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse',
                    pin: true,
                    pinSpacing: false,
                    onToggle: ({ isActive }) => (isActive ? setIsMusicOutOfScreen(false) : setIsMusicOutOfScreen(true))
                }
            }
        );
        gsap.fromTo(
            '.music-section-desktop',
            {
                opacity: 1,
                yPercent: 0
            },
            {
                opacity: 0,
                yPercent: -100,
                duration: 0.01,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.projects-section-desktop',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse'
                }
            }
        );

        gsap.fromTo(
            '.projects-section-mobile',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.projects-section-mobile',
                    start: 'top center-=150',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.projects-section-desktop',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.projects-section-desktop',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse',
                    pin: true,
                    pinSpacing: false,
                    onToggle: ({ isActive }) =>
                        isActive ? setIsProjectsOutOfScreen(false) : setIsProjectsOutOfScreen(true)
                }
            }
        );
        gsap.fromTo(
            '.projects-section-desktop',
            {
                opacity: 1,
                yPercent: 0
            },
            {
                opacity: 0,
                yPercent: -100,
                duration: 0.01,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse'
                }
            }
        );

        gsap.fromTo(
            '.main-page',
            {
                backgroundColor: '#F5F0EA'
            },
            {
                backgroundColor: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
                    start: 'top top+=2',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '#contacto',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
                    start: 'top top+=2',
                    end: 'bottom top+=100',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        // eslint-disable-next-line
    }, [gsap]);

    return (
        <div className={clsx('main-page w-screen h-full overflow-y-scroll', imageToOpen ? 'blur-lg' : '')} {...props}>
            <Banner gsap={gsap} />
            <About gsap={gsap} />
            <Music id="musica-sm" className="lg:hidden music-section-mobile" />
            <Projects id="proyectos-sm" className="lg:hidden projects-section-mobile" />
            <Music id="musica" className="hidden lg:flex music-section-desktop" />
            <Projects id="proyectos" className="hidden lg:flex projects-section-desktop" />
            <Contact gsap={gsap} />
        </div>
    );
};

export default HomePage;
