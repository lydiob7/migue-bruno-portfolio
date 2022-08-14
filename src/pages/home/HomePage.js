import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './about/AboutSection';
import Banner from './Banner';
import Contact from './Contact';
import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const HomePage = (props) => {
    const { isHeaderInverted, isMenuOpen, setIsAppNameVisible, setIsHeaderInverted } = useContextInfo();
    gsap.registerPlugin(ScrollTrigger);

    const location = useLocation();

    const $aboutDesktop = useRef(null);
    const $contact = useRef(null);
    const $banner = useRef(null);

    useLayoutEffect(() => {
        if (!isHeaderInverted) setIsHeaderInverted(true);
        if (!isMenuOpen) setIsAppNameVisible(false);
        // eslint-disable-next-line
    }, [isMenuOpen]);

    useEffect(() => {
        document?.addEventListener('scroll', () => {
            const aboutRect = $aboutDesktop?.current?.getBoundingClientRect();
            const bannerRect = $banner?.current?.getBoundingClientRect();
            const contactRect = $contact?.current?.getBoundingClientRect();
            const screenWidth = window.innerWidth;
            if (location?.pathname !== '/') return;
            if (bannerRect?.top <= 50 && bannerRect?.top - 50 > -bannerRect?.height) {
                setIsAppNameVisible(false);
                return screenWidth < 768 ? setIsHeaderInverted(true) : setIsHeaderInverted(false);
            } else if (
                (aboutRect?.top <= 50 && aboutRect?.top - 50 > -aboutRect?.height) ||
                (contactRect?.top <= 50 && contactRect?.top - 50 > -contactRect?.height)
            ) {
                setIsAppNameVisible(true);
                return setIsHeaderInverted(true);
            } else {
                setIsAppNameVisible(true);
                return setIsHeaderInverted(false);
            }
        });

        return () => document.removeEventListener('scroll', () => {});
        // eslint-disable-next-line
    }, [location?.pathname]);

    return (
        <div className="snap-y snap-mandatory" {...props}>
            <Banner gsap={gsap} ref={$banner} className="snap-start" />
            <About ref={$aboutDesktop} className="snap-start" setIsHeaderInverted={setIsHeaderInverted} />
            <Music className="snap-start" />
            <Projects className="snap-start" />
            <Contact ref={$contact} className="snap-start" />
        </div>
    );
};

export default HomePage;
