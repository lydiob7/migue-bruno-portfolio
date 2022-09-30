import React from 'react';
import clsx from 'clsx';

const AudioCard = ({ author, authorLink, className, link, src, title, ...props }) => {
    return (
        <div className={clsx('w-72 lg:w-full mx-auto mb-8 shrink-0 animate-fade-in delay-1000', className)} {...props}>
            <h4 className="w-full font-semibold text-2xl mt-8">{title}</h4>
            <iframe
                className="w-72 lg:w-full h-[200px] mx-auto my-4"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={src}
                title={title}
            ></iframe>
        </div>
    );
};

export default AudioCard;
