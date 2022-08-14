import React from 'react';
import clsx from 'clsx';

const VideoCard = ({ className, title, youtubeLink, description, ...props }) => {
    return (
        <div className={clsx('w-72 sm:w-80 md:w-96 h-full mx-auto mb-8 shrink-0', className)} {...props}>
            <iframe
                className="w-full h-full md:h-auto md:w-auto mx-auto"
                src={`https://www.youtube.com/embed/${youtubeLink?.split('.be/')?.[1]}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <h4 className="w-full text-center font-semibold text-2xl mt-8">{title}</h4>

            {description && <p className="w-full pt-4">{description}</p>}
        </div>
    );
};

export default VideoCard;
