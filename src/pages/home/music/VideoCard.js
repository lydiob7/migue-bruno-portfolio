import React from 'react';
import clsx from 'clsx';

const VideoCard = ({ className, title, youtubeLink, description, ...props }) => {
    return (
        <div className={clsx('w-96 p-8', className)} {...props}>
            <iframe
                className="w-full h-full mx-auto"
                src={youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <h4 className="w-full text-center font-semibold text-2xl mt-8">{title}</h4>

            {description && <p className="pt-4">{description}</p>}
        </div>
    );
};

export default VideoCard;
