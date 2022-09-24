import React from 'react';
import clsx from 'clsx';

import { VideoCard } from 'components';

const VideosList = ({ splitScreen, videos }) => {
    if (!videos || !Array.isArray(videos) || videos.length === 0) return null;

    return (
        <div
            className={clsx(
                'w-full h-auto overflow-x-scroll flex md:grid gap-y-2 gap-x-8 mt-8',
                splitScreen ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2 md:h-auto md:overflow-hidden'
            )}
        >
            {videos.map((props) => (
                <VideoCard key={props?.title} {...props} />
            ))}
        </div>
    );
};

export default VideosList;
