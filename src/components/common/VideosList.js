import React from 'react';
import clsx from 'clsx';

import { VideoCard } from 'components';

const VideosList = ({ splitScreen, videos }) => {
    if (!videos || !Array.isArray(videos) || videos.length === 0) return null;

    return (
        <div
            className={clsx(
                'w-full h-full overflow-x-scroll flex md:grid gap-8',
                splitScreen ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2'
            )}
        >
            {videos.map((props) => (
                <VideoCard key={props?.title} className={splitScreen ? 'md:w-60' : ''} {...props} />
            ))}
        </div>
    );
};

export default VideosList;
