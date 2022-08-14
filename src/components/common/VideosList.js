import React from 'react';

import { VideoCard } from 'components';

const VideosList = ({ videos }) => {
    if (!videos || !Array.isArray(videos) || videos.length === 0) return null;

    return (
        <div className="w-full h-full overflow-x-scroll flex md:grid md:grid-cols-2 gap-8">
            {videos.map((props) => (
                <VideoCard key={props?.title} {...props} />
            ))}
        </div>
    );
};

export default VideosList;
