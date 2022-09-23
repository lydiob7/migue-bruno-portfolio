import React, { useEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const HomePage = ({ gsap, ...props }) => {
    const { getAudios, getVideos, setIsDesktopMenuOpen } = useContextInfo();

    useEffect(() => {
        getAudios();
        getVideos();
    }, [getAudios, getVideos]);

    return (
        <div
            onClick={() => setIsDesktopMenuOpen(false)}
            className="main-page w-screen h-full overflow-y-scroll snap-y snap-proximity"
            {...props}
        >
            <Banner gsap={gsap} />
            <About gsap={gsap} className="snap-start" />
            <Music gsap={gsap} />
            <Projects gsap={gsap} />
            <Contact gsap={gsap} className="snap-start" />
        </div>
    );
};

export default HomePage;
