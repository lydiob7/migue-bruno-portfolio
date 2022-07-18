import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';
import clsx from 'clsx';

import arrowOpen from 'assets/images/arrow-open.svg';
import projects from 'data/projects';

const Projects = () => {
    const { setColorScheme, setIsAppLogoVisible, setIsAppNameVisible } = useContextInfo();

    const imageOneRef = useRef();
    const imageTwoRef = useRef();
    const imageThreeRef = useRef();
    const imageFourRef = useRef();

    useLayoutEffect(() => {
        window.scroll(0, 0);
        setColorScheme('green');
        setIsAppLogoVisible(true);
        setIsAppNameVisible(true);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (!(imageOneRef?.current && imageTwoRef?.current && imageThreeRef?.current && imageFourRef?.current))
                return;
            [imageOneRef.current, imageTwoRef.current, imageThreeRef.current, imageFourRef.current].forEach((ref) => {
                if (window.screen.height / 2 >= ref.getBoundingClientRect()?.top) {
                    ref.style.transform = 'rotate(0)';
                } else {
                    ref.style.transform = `rotate(${ref.classList?.[0]})`;
                }
            });
        });

        return () => document.removeEventListener('scroll', () => console.log('clean'));
    }, [imageOneRef, imageTwoRef, imageThreeRef, imageFourRef]);

    return (
        <div className="min-h-screen">
            <div className="w-5/6 xl:w-4/6 mx-auto py-20 text-green">
                <div className="pb-8 md:pb-32">
                    <h2 className="text-yellow font-primary text-3xl md:text-5xl font-bold mt-24">proyectos</h2>
                    <h3 className="text-green text-2xl md:text-4xl font-bold font-primary ml-20 md:ml-40">
                        despliegues <br />
                        <span className="relative leading-5 md:top-2 ml-28 md:ml-48 font-secondary text-6xl md:text-8xl md:leading-3">
                            creativos
                        </span>
                    </h3>
                </div>

                <div className="pt-8 pb-20">
                    <div className="md:grid md:grid-cols-11 mb-20">
                        <div className="hidden md:block col-start-1 col-end-7 mb-16 md:mb-auto">
                            <img
                                ref={imageOneRef}
                                className="-6deg hover:rotate-0 transition-all duration-300"
                                src={projects['entre-mujeres-y-el-barro']?.mainImage}
                                alt={projects['entre-mujeres-y-el-barro']?.title}
                            />
                        </div>
                        <div className="md:col-start-8 md:col-end-12">
                            <div className="flex items-center">
                                <span
                                    className="grid place-content-center shrink-0 bg-yellow text-green 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                my-2 mr-2"
                                >
                                    {projects['entre-mujeres-y-el-barro']?.id}
                                </span>
                                <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                                    {projects['entre-mujeres-y-el-barro']?.title}
                                </h3>
                            </div>

                            <div className="md:hidden my-16">
                                <img
                                    src={projects['entre-mujeres-y-el-barro']?.mainImage}
                                    alt={projects['entre-mujeres-y-el-barro']?.title}
                                />
                            </div>

                            <p className="my-4">{projects['entre-mujeres-y-el-barro']?.abstract}</p>

                            <Link
                                to={projects['entre-mujeres-y-el-barro']?.uri}
                                className="flex items-center justify-end"
                            >
                                <span className="uppercase text-sm font-semibold pb-1 border-b-2">descubrir</span>
                                <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <hr className="border-0 h-[2px] bg-green my-20" />

                    <div className="flex items-center justify-center mb-24">
                        <span
                            className="grid place-content-center shrink-0 bg-yellow text-green 
                                    font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                    my-2 mr-2"
                        >
                            {projects['taller-adentro']?.id}
                        </span>
                        <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                            {projects['taller-adentro']?.title}
                        </h3>
                    </div>
                    {projects['taller-adentro']?.subdivisions?.map((subdivision, index) => (
                        <div key={subdivision?.email} className="md:grid md:grid-cols-11 mb-16 md:mb-48">
                            <div
                                className={clsx(
                                    'hidden md:block mb-16 md:mb-auto',
                                    index % 2 === 0
                                        ? 'md:row-start-1 md:col-start-6 md:col-end-12'
                                        : 'md:col-start-1 md:col-end-7'
                                )}
                            >
                                <img
                                    ref={index === 0 ? imageTwoRef : imageThreeRef}
                                    className={`${
                                        index % 2 === 0 ? '-3deg' : '7deg'
                                    } hover:rotate-0 transition-all duration-300`}
                                    src={subdivision?.mainImage}
                                    alt={subdivision?.title}
                                />
                            </div>
                            <div
                                className={
                                    index % 2 === 0
                                        ? 'md:row-start-1 md:col-start-1 md:col-end-5'
                                        : 'md:col-start-8 md:col-end-12'
                                }
                            >
                                <div className="flex items-center">
                                    <h3
                                        style={{ fontFamily: 'SUNN-Line-Bold' }}
                                        className="text-3xl md:text-4xl font-bold"
                                    >
                                        {subdivision?.id}-{subdivision?.title}
                                    </h3>
                                </div>

                                <div className="md:hidden my-16">
                                    <img src={subdivision?.mainImage} alt={subdivision?.title} />
                                </div>

                                <p className="my-4">{subdivision?.abstract}</p>

                                <HashLink to={subdivision?.uri} className="flex items-center justify-end">
                                    <span className="uppercase text-sm font-semibold pb-1 border-b-2">descubrir</span>
                                    <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                                </HashLink>
                            </div>
                        </div>
                    ))}

                    <hr className="border-0 h-[2px] bg-green my-20" />

                    <div className="md:grid md:grid-cols-11 mb-20">
                        <div className="hidden md:block md:col-start-1 md:col-end-7 mb-16 md:mb-auto">
                            <img
                                ref={imageFourRef}
                                className="-6deg hover:rotate-0 transition-all duration-300"
                                src={projects['relatos-visuales']?.mainImage}
                                alt={projects['relatos-visuales']?.title}
                            />
                        </div>
                        <div className="md:col-start-8 md:col-end-12">
                            <div className="flex items-center">
                                <span
                                    className="grid place-content-center shrink-0 bg-yellow text-green 
                                                font-secondary text-2xl font-bold rounded-full w-8 h-8 
                                                my-2 mr-2"
                                >
                                    {projects['relatos-visuales']?.id}
                                </span>
                                <h3 className="text-xl leading-5 md:text-3xl font-primary font-semibold">
                                    {projects['relatos-visuales']?.title}
                                </h3>
                            </div>

                            <div className="md:hidden my-16">
                                <img
                                    src={projects['relatos-visuales']?.mainImage}
                                    alt={projects['relatos-visuales']?.title}
                                />
                            </div>

                            <p className="my-4">{projects['relatos-visuales']?.abstract}</p>

                            <Link to={projects['relatos-visuales']?.uri} className="flex items-center justify-end">
                                <span className="uppercase text-sm font-semibold pb-1 border-b-2">descubrir</span>
                                <img src={arrowOpen} alt="" className="ml-4 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
