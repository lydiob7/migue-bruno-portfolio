import React from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';
import { AudiosList, DoubleArrow, VideosList } from 'components';

const ExpandableSection = ({
    borderBottom = true,
    borderTop,
    children,
    contentfulId,
    id,
    openTab,
    openTitle,
    title,
    showArrow,
    splitScreen,
    ...props
}) => {
    const { getAudiosById, getVideosById } = useContextInfo();

    return (
        <div {...props} className={clsx('w-full transition-all', openTab === id ? 'flex-1' : '')}>
            <h3
                className={clsx(
                    'music-item',
                    borderTop ? 'border-t-2' : '',
                    borderBottom ? 'border-b-2' : '',
                    openTab && openTab !== id
                        ? splitScreen
                            ? 'music-item-split-screen__closed'
                            : 'music-item__closed'
                        : 'music-item__open',
                    openTab === id ? 'music-item-title__open' : 'music-item-title__closed'
                )}
            >
                {openTab === id ? openTitle || title || '' : title || ''}{' '}
                {showArrow && openTab !== id && (
                    <DoubleArrow className="md:hidden" fill="fill-darkGreen" direction="right" />
                )}
            </h3>

            {openTab === id && (
                <div className="h-full w-full px-4 sm:px-8 md:px-16 my-16 overflow-y-scroll">
                    {children}

                    <div className="mt-16">
                        <VideosList splitScreen={splitScreen} videos={getVideosById(contentfulId || id)} />
                        <AudiosList splitScreen={splitScreen} audios={getAudiosById(contentfulId || id)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpandableSection;
