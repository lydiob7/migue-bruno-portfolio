import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const SectionsList = ({ sections, splitScreen, title, ...props }) => {
    const [openTab, setOpenTab] = useState(null);
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);

    useEffect(() => {
        if (openTab) {
            setTimeout(() => {
                setIsAnimationEnded(true);
            }, 150);
        } else setIsAnimationEnded(false);
    }, [openTab]);

    return (
        <div
            {...props}
            id="proyectos"
            className={clsx(
                'relative min-h-screen bg-isabelline text-darkGreen flex flex-col items-center justify-center',
                openTab ? 'pt-20' : '',
                splitScreen ? 'md:px-16 md:pb-24' : ''
            )}
        >
            <h2
                className={clsx(
                    'text-6xl font-black mb-16 transition-all',
                    openTab ? 'invisible md:visible' : '',
                    isAnimationEnded ? 'hidden md:block' : ''
                )}
            >
                {title || ''}
            </h2>
            <div className={clsx('flex flex-col w-full items-center justify-center', splitScreen ? 'md:hidden' : '')}>
                {sections.map(({ Component, id }, index) => (
                    <Component
                        key={id}
                        borderTop={index === 0}
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

            <div className={clsx('hidden md:items-center w-full', splitScreen ? 'md:flex' : '')}>
                <div className="basis-2/5 border-r-2 border-darkGreen pr-8">
                    {sections
                        .filter((section) => section?.id !== openTab)
                        .map(({ Component, id }, index, array) => (
                            <Component
                                key={id}
                                borderBottom={index !== array.length - 1}
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

                <div className="basis-3/5">
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
    );
};

export default SectionsList;
