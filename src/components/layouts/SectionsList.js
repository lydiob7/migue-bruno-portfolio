import React, { forwardRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

const openAnimationTiming = '.5s';

const SectionsList = forwardRef(({ className, gsap, id, sections, splitScreen, title, ...props }, ref) => {
    const { setIsBurguerMenuInverted, setIsTabOpen } = useContextInfo();

    const [openTab, setOpenTab] = useState(null);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        if (openTab) {
            setTimeout(() => {
                setIsAnimationEnded(true);
            }, 150);
        } else setIsAnimationEnded(false);
    }, [openTab]);

    const handleToggleTab = (id, isNotLastTab) => {
        setOpenTab(id);
        if (id && isNotLastTab) {
            setIsBurguerMenuInverted(true);
            setIsTabOpen(true);
        } else {
            setIsBurguerMenuInverted(false);
            setIsTabOpen(false);
        }
    };

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
                    trigger: '#musica',
                    start: 'top center-=150',
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
                    trigger: '#musica',
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
                    trigger: '#musica',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return (
        <div
            {...props}
            ref={ref}
            id={id}
            className={clsx(
                'relative min-h-screen lg:min-h-auto lg:h-screen w-screen text-darkGreen lg:overflow-y-hidden',
                openTab ? 'pt-20 lg:pt-0' : '',
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
                    openTab ? 'lg:justify-between' : ''
                )}
            >
                <h2
                    className={clsx(
                        'font-black',
                        openTab ? 'cursor-pointer' : '',
                        isAnimationEnded
                            ? 'text-3xl lg:text-9xl lg:mt-20 lg:pb-16 mb-4 lg:w-full lg:text-center border-darkGreen'
                            : 'text-6xl lg:text-9xl mb-16 lg:mt-20',
                        isAnimationEnded && !splitScreen && openTab === sections?.[0]?.id ? 'lg:border-b-2' : ''
                    )}
                    onClick={() => handleToggleTab(null, false)}
                >
                    {title || ''}
                </h2>
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
                        splitScreen && openTab ? 'flex-1 lg:flex lg:items-start lg:h-full' : ''
                    )}
                >
                    <div className={clsx(openTab ? 'basis-2/5 border-r-2 border-darkGreen pr-8 mt-24' : '')}>
                        {sections
                            .filter((section) => section?.id !== openTab)
                            .map(({ Component, id }, index, array) => (
                                <Component
                                    key={id}
                                    borderTop={!openTab && index === 0}
                                    borderBottom={!openTab || index !== array.length - 1}
                                    id={id}
                                    onClick={() => handleToggleTab(openTab !== id ? id : null)}
                                    openAnimationTiming={openAnimationTiming}
                                    openTab={openTab}
                                    splitScreen={splitScreen}
                                />
                            ))}
                    </div>

                    <div className={clsx(openTab ? 'basis-3/5 h-[70vh] overflow-y-scroll' : '')}>
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
});

export default SectionsList;
