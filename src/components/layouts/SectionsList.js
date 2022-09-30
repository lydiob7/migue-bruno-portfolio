import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

const openAnimationTiming = '.5s';

const SectionsList = ({ className, id, sections, splitScreen, title, ...props }) => {
    const { isMusicOutOfScreen, isProjectsOutOfScreen } = useContextInfo();

    const [openTab, setOpenTab] = useState(null);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        if (openTab) {
            setTimeout(() => {
                setIsAnimationEnded(true);
            }, 150);
        } else setIsAnimationEnded(false);
    }, [openTab]);

    useEffect(() => {
        if ((id === 'musica' && isMusicOutOfScreen) || (id === 'proyectos' && isProjectsOutOfScreen)) setOpenTab(null);
    }, [id, isMusicOutOfScreen, isProjectsOutOfScreen]);

    const handleToggleTab = (id) => {
        setOpenTab(id);
    };

    return (
        <div
            {...props}
            id={id}
            className={clsx(
                'relative min-h-screen lg:min-h-auto lg:h-screen w-screen text-darkGreen lg:overflow-y-hidden',
                openTab ? 'pt-20 lg:pt-0 min-h-0 lg:min-h-screen' : '',
                splitScreen && openTab ? 'lg:px-16 lg:pb-24' : '',
                !splitScreen || !openTab ? 'lg:h-screen lg:w-screen lg:flex lg:items-center lg:justify-center' : '',
                className
            )}
        >
            <div
                style={{ transition: `flex ${openAnimationTiming} ease` }}
                className={clsx(
                    'flex flex-col items-center justify-center w-full min-h-screen',
                    !splitScreen || !openTab
                        ? 'lg:justify-start lg:min-h-[100vw] lg:w-[100vh] lg:h-[100vw] origin-center lg:-rotate-90'
                        : '',
                    splitScreen ? 'lg:h-[100vh]' : '',
                    openTab ? 'lg:justify-between min-h-0 lg:min-h-screen' : ''
                )}
            >
                <h2
                    className={clsx(
                        'font-black px-4 transition-all text-6xl lg:text-[8rem]',
                        openTab ? 'hidden lg:block cursor-pointer' : '',
                        isAnimationEnded
                            ? 'lg:mt-20 lg:pb-16 mb-4 lg:w-full border-darkGreen'
                            : 'mb-16 lg:mt-20 lg:w-full',
                        isAnimationEnded && !splitScreen && openTab === sections?.[0]?.id ? 'lg:border-b-2' : '',
                        isAnimationEnded && splitScreen && openTab ? 'lg:mt-28 lg:pb-4' : ''
                    )}
                    onClick={() => handleToggleTab(null, false)}
                >
                    {title || ''}
                </h2>

                <div
                    onClick={() => handleToggleTab(null, false)}
                    className={openTab ? 'block cursor-pointer self-start ml-2 mb-8 lg:hidden' : 'hidden'}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20 5.33334L9.33337 16L20 26.6667"
                            stroke="#14191A"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>

                <div
                    style={{ transition: `flex ${openAnimationTiming} ease` }}
                    className={clsx(
                        'flex flex-col w-full items-center justify-center',
                        openTab ? 'flex-1' : '',
                        splitScreen ? 'lg:hidden' : ''
                    )}
                >
                    {sections.map(({ Component, id }, index, array) => (
                        <Component
                            key={id}
                            borderTop={index === 0}
                            id={id}
                            onClick={() => handleToggleTab(id, index !== array.length - 1)}
                            openAnimationTiming={openAnimationTiming}
                            openTab={openTab}
                        />
                    ))}
                </div>

                <div
                    className={clsx(
                        'hidden w-full',
                        splitScreen ? 'lg:block' : '',
                        splitScreen && openTab ? 'flex-1 lg:flex lg:items-start lg:h-full pt-8' : ''
                    )}
                >
                    <div className={clsx(openTab ? 'basis-2/5 border-r-2 border-darkGreen pr-8 mt-4' : '')}>
                        {sections.map(({ id, title }, index, array) => (
                            <div className={clsx('w-full')} onClick={() => handleToggleTab(openTab !== id ? id : null)}>
                                <h3
                                    className={clsx(
                                        'music-item music-item-title__closed music-item-split-screen__closed border-b-2',
                                        openTab ? 'lg:text-2xl lg:py-2' : '',
                                        openTab === id ? 'text-ciel' : '',
                                        index === 0 ? 'border-t-2' : ''
                                    )}
                                >
                                    {title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className={clsx(openTab ? 'basis-3/5 h-[65vh] overflow-y-scroll' : '')}>
                        {sections
                            ?.filter((section) => section?.id === openTab)
                            ?.map(({ Component, id }) => (
                                <Component
                                    key={id}
                                    id={id}
                                    onClick={() => handleToggleTab(openTab !== id ? id : null)}
                                    openAnimationTiming={openAnimationTiming}
                                    openTab={openTab}
                                    splitScreen={splitScreen}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionsList;
