import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './about/AboutSection';
import Banner from './Banner';
import Contact from './Contact';
import Music from './music/MusicSection';
import Projects from './Projects';

const HomePage = (props) => {
    const { isHeaderInverted, isMenuOpen, setIsAppNameVisible, setIsHeaderInverted } = useContextInfo();
    gsap.registerPlugin(ScrollTrigger);

    const location = useLocation();

    const $banner = useRef(null);

    useLayoutEffect(() => {
        if (!isHeaderInverted) setIsHeaderInverted(true);
        if (!isMenuOpen) setIsAppNameVisible(false);
        // eslint-disable-next-line
    }, [isMenuOpen]);

    useEffect(() => {
        document?.addEventListener('scroll', () => {
            const bannerRect = $banner?.current?.getBoundingClientRect();
            if (location?.pathname !== '/') return;
            if (bannerRect?.top <= 50 && bannerRect?.top - 50 > -bannerRect?.height) {
                setIsAppNameVisible(false);
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
            <About className="snap-start" setIsHeaderInverted={setIsHeaderInverted} />
            <Music className="snap-start" />
            <Projects className="snap-start" />
            <Contact className="snap-start" />
        </div>
    );
};

export default HomePage;
