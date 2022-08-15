import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

const SectionsList = ({ id, sections, splitScreen, title, ...props }) => {
    const { setIsHeaderInverted } = useContextInfo();

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
        if (!openTab) setIsHeaderInverted(false);
    }, [openTab, setIsHeaderInverted]);

    return (
        <div
            {...props}
            id={id}
            className={clsx(
                'relative min-h-screen bg-isabelline text-darkGreen',
                openTab ? 'pt-20 lg:pt-0' : '',
                splitScreen && openTab ? 'lg:px-16 lg:pb-24' : '',
                !splitScreen || !openTab ? 'lg:h-screen lg:w-screen lg:flex lg:items-center lg:justify-center' : ''
            )}
        >
            <div
                className={clsx(
                    'flex flex-col items-center justify-center w-full min-h-screen',
                    !splitScreen || !openTab
                        ? 'lg:justify-start lg:min-h-[100vw] lg:w-[100vh] lg:h-[100vw] origin-center lg:-rotate-90'
                        : '',
                    openTab ? 'lg:justify-between' : ''
                )}
            >
                <h2
                    className={clsx(
                        'text-6xl font-black mb-16 transition-all lg:mt-20',
                        openTab ? 'invisible lg:visible' : '',
                        isAnimationEnded ? 'hidden lg:block' : ''
                    )}
                >
                    {title || ''}
                </h2>
                <div
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
                            onClick={() => {
                                if (openTab !== id) {
                                    if (index !== array.length - 1) setIsHeaderInverted(true);
                                    setOpenTab(id);
                                } else setOpenTab(null);
                            }}
                            openTab={openTab}
                        />
                    ))}
                </div>

                <div
                    className={clsx(
                        'hidden w-full',
                        splitScreen ? 'lg:block' : '',
                        splitScreen && openTab ? 'flex-1 lg:flex lg:items-center' : ''
                    )}
                >
                    <div className={clsx(openTab ? 'basis-2/5 border-r-2 border-darkGreen pr-8' : '')}>
                        {sections
                            .filter((section) => section?.id !== openTab)
                            .map(({ Component, id }, index, array) => (
                                <Component
                                    key={id}
                                    borderTop={!openTab && index === 0}
                                    borderBottom={!openTab || index !== array.length - 1}
                                    id={id}
                                    onClick={() => {
                                        if (openTab !== id) setOpenTab(id);
                                        else setOpenTab(null);
                                    }}
                                    openTab={openTab}
                                    splitScreen={splitScreen}
                                />
                            ))}
                    </div>

                    <div className={clsx(openTab ? 'basis-3/5' : '')}>
                        {sections
                            ?.filter((section) => section?.id === openTab)
                            ?.map(({ Component, id }) => (
                                <Component
                                    key={id}
                                    id={id}
                                    onClick={() => {
                                        if (openTab !== id) setOpenTab(id);
                                        else setOpenTab(null);
                                    }}
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
