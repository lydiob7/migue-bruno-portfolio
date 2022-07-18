import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import InstagramFeed from 'react-ig-feed';
import './ig-feed.css';

import projects from 'data/projects';

import arrowBack from 'assets/images/arrow-back-yellow.svg';
import instagramLogo from 'assets/images/instagram-yellow.svg';

const EntreMujeresPage = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();
    const currentProject = projects['taller-adentro'];

    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('yellow');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="min-h-screen bg-green text-beige pb-48">
            <div className="w-5/6 xl:w-4/6 mx-auto pt-36 pb-16">
                <div onClick={() => navigate('/proyectos')} className="relative w-8 cursor-pointer mb-12">
                    <img src={arrowBack} alt="" className="w-full" />
                </div>

                <div className="flex items-center justify-center">
                    <span
                        className="grid place-content-center shrink-0 bg-yellow text-green 
                                    font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                    my-2 mr-4"
                    >
                        {currentProject?.id}
                    </span>

                    <h2 className="font-primary text-3xl md:text-5xl font-medium text-yellow">
                        {currentProject?.title}
                    </h2>
                </div>
                <p className="text-sm md:text-xl my-8 md:my-12">{currentProject?.subtitle}</p>

                {currentProject?.subdivisions?.map((subdivision, index, array) => (
                    <div id={subdivision.key} className="">
                        <h3 className="text-yellow w-full text-4xl md:text-5xl font-medium mb-20">
                            {subdivision?.id}-{subdivision?.title}
                        </h3>
                        <p className="text-sm md:text-lg">{subdivision?.description?.[0]}</p>

                        <div className="my-20 md:grid md:grid-cols-2 md:gap-10">
                            <div className="w-full" key={index}>
                                <img
                                    src={subdivision?.mainImage}
                                    alt=""
                                    className="w-full md:rotate-[6deg] hover:rotate-0 transition-all duration-300"
                                />
                            </div>
                            {subdivision?.otherImages?.map((img, index) => (
                                <div className="hidden md:inline-block w-full" key={index}>
                                    <img
                                        src={img}
                                        alt=""
                                        className={`w-full hover:rotate-0 transition-all duration-300 ${
                                            index === 2 ? 'rotate-[6deg] mt-20' : 'rotate-[-3deg] mt-10'
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="text-sm md:text-lg">{subdivision?.description?.[1]}</p>
                        <div className="flex items-center text-yellow uppercase float-right mt-16">
                            <a
                                className="border-b-2 text-xs md:text-base"
                                target="_blank"
                                rel="noreferrer"
                                href={`mailto:${subdivision?.email}`}
                            >
                                pedir mas info
                            </a>
                        </div>
                        {index !== array.length - 1 && <hr className="border-0 w-full h-[2px] bg-yellow mt-40 mb-20" />}
                    </div>
                ))}
            </div>

            <a
                href={currentProject?.instagramLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-full mt-16 md:mt-32 mb-16"
            >
                <img className="mr-4 h-8" src={instagramLogo} alt="" />
                <span className="text-yellow font-medium text-xl">Seguinos en instagram</span>
            </a>

            <div className="w-5/6 xl:w-4/6 mx-auto min-h-screen">
                <InstagramFeed token={currentProject?.instagramToken} counter="9" />
            </div>
        </div>
    );
};

export default EntreMujeresPage;
