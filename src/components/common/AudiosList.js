import React from 'react';
import clsx from 'clsx';

import { AudioCard } from 'components';

const AudiosList = ({ splitScreen, audios }) => {
    if (!audios || !Array.isArray(audios) || audios.length === 0) return null;

    return (
        <div
            className={clsx(
                'w-full h-auto overflow-x-scroll flex md:grid gap-y-2 gap-x-8 lg:px-8',
                splitScreen ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2 md:h-auto md:overflow-hidden'
            )}
        >
            {audios.map((props) => (
                <AudioCard key={props?.title} className={splitScreen ? 'md:w-60' : ''} {...props} />
            ))}
        </div>
    );
};

export default AudiosList;
