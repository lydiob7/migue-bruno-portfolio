import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Music from './music/MusicSection';
import Projects from './projects/ProjectsSection';

const HomePage = ({ gsap, ...props }) => {
    const { getAudios, getVideos, imageToOpen } = useContextInfo();

    useEffect(() => {
        getAudios();
        getVideos();
    }, [getAudios, getVideos]);

    return (
        <div className={clsx('main-page w-screen h-full overflow-y-scroll', imageToOpen ? 'blur-lg' : '')} {...props}>
            <Banner gsap={gsap} />
            <About gsap={gsap} />
            <Music gsap={gsap} />
            <Projects gsap={gsap} />
            <Contact gsap={gsap} />
        </div>
    );
};

export default HomePage;
