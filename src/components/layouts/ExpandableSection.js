import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';
import { AudiosList, VideosList } from 'components';

const ExpandableSection = ({
    borderBottom = true,
    borderTop,
    children,
    contentfulId,
    id,
    openAnimationTiming,
    openTab,
    openTitle,
    title,
    showArrow,
    splitScreen,
    ...props
}) => {
    const { getAudiosById, getVideosById } = useContextInfo();
    const [internalTab, setInternalTab] = useState('videos');
    const [audiosArray, setAudiosArray] = useState([]);
    const [videosArray, setVideosArray] = useState([]);

    useEffect(() => {
        setVideosArray(getVideosById(contentfulId || id));
        setAudiosArray(getAudiosById(contentfulId || id));
        // eslint-disable-next-line
    }, []);

    return (
        <div
            {...props}
            className={clsx(
                'w-full',
                openTab === id
                    ? !splitScreen
                        ? 'flex-1 flex items-center justify-center overflow-hidden border-b-2 border-darkGreen'
                        : 'flex-1'
                    : ''
            )}
        >
            <div
                className={clsx(
                    openTab === id && !splitScreen
                        ? 'flex-1 w-full lg:rotate-90 origin-center lg:h-screen lg:pt-20 lg:shrink-0 lg:overflow-y-scroll'
                        : ''
                )}
            >
                <h3
                    className={clsx(
                        'music-item',
                        borderTop ? 'border-t-2' : '',
                        borderBottom ? 'border-b-2' : '',
                        openTab === id ? 'music-item-title__open' : 'music-item-title__closed',
                        openTab && openTab !== id
                            ? splitScreen
                                ? 'music-item-split-screen__closed'
                                : 'music-item__closed'
                            : 'music-item__open'
                    )}
                >
                    {openTab === id ? openTitle || title || '' : title || ''}
                </h3>

                {!splitScreen && openTab === id && (
                    <div className="flex items-center justify-center gap-8 w-full mt-8">
                        <button
                            className={clsx(
                                'font-medium',
                                internalTab === 'videos' ? 'border-b-2 border-darkGreen' : '',
                                videosArray?.length === 0 ? 'text-gray-400' : ''
                            )}
                            disabled={internalTab === 'videos' || videosArray?.length === 0}
                            onClick={() => setInternalTab('videos')}
                        >
                            Videos
                        </button>
                        <span className="font-bold">|</span>
                        <button
                            className={clsx(
                                'font-medium',
                                internalTab === 'audios' ? 'border-b-2 border-darkGreen' : '',
                                audiosArray?.length === 0 ? 'text-gray-400 font-light' : ''
                            )}
                            disabled={internalTab === 'audios' || audiosArray?.length === 0}
                            onClick={() => setInternalTab('audios')}
                        >
                            Audios
                        </button>
                    </div>
                )}
                <div
                    className={clsx(
                        openTab === id
                            ? 'h-full w-full px-4 sm:px-8 md:px-16 my-16 overflow-y-scroll'
                            : splitScreen
                            ? 'lg:w-0 h-0 overflow-hidden'
                            : 'h-0 overflow-hidden',
                        !splitScreen ? 'lg:px-0 lg:my-0' : ''
                    )}
                >
                    {children}

                    <div className="mt-16">
                        {openTab === id && (
                            <>
                                {internalTab === 'videos' && (
                                    <VideosList splitScreen={splitScreen} videos={videosArray} />
                                )}
                                {internalTab === 'audios' && (
                                    <AudiosList splitScreen={splitScreen} audios={audiosArray} />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandableSection;
