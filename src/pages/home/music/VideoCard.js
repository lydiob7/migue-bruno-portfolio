import React from 'react';
import clsx from 'clsx';

const VideoCard = ({ className, title, youtubeLink, description, ...props }) => {
    return (
        <div className={clsx('', className)} {...props}>
            <iframe
                className="w-full h-full"
                src={youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <h4>{title}</h4>

            {description && <p>{description}</p>}
        </div>
    );
};

export default VideoCard;
