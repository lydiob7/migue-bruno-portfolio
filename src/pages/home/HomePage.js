import React, { useEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import MusicProjectsSection from './MusicProjectsSection';

const HomePage = ({ gsap, ...props }) => {
    const { getAudios, getVideos, setIsDesktopMenuOpen } = useContextInfo();

    useEffect(() => {
        getAudios();
        getVideos();
    }, [getAudios, getVideos]);

    return (
        <div
            onClick={() => setIsDesktopMenuOpen(false)}
            className="main-page w-screen h-screen overflow-y-scroll snap-y snap-proximity"
            {...props}
        >
            <Banner gsap={gsap} className="snap-start" />
            <About gsap={gsap} className="snap-start" />
            <MusicProjectsSection gsap={gsap} className="block lg:flex" />
            <Contact gsap={gsap} className="snap-start" />
        </div>
    );
};

export default HomePage;
