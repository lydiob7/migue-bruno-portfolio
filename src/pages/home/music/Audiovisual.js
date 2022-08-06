import React from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';
import { DoubleArrow } from 'components';
import VideoCard from './VideoCard';

const Audiovisual = ({ openTab, ...props }) => {
    const { posts } = useContextInfo();

    return (
        <div {...props} className={clsx('w-full transition-all', openTab === 'audiovisual' ? 'flex-1' : '')}>
            <h3
                className={clsx(
                    'flex items-center font-extrabold px-8 border-b-2 border-t-2 cursor-pointer',
                    openTab && openTab !== 'audiovisual' ? 'border-ciel text-ciel bg-darkGreen' : 'border-darkGreen',
                    openTab === 'audiovisual'
                        ? 'text-4xl justify-center text-center border-none'
                        : 'text-3xl justify-between'
                )}
            >
                Audiovisual {openTab !== 'audiovisual' && <DoubleArrow fill="fill-darkGreen" direction="right" />}
            </h3>

            {openTab === 'audiovisual' && (
                <div className="h-full w-full overflow-y-scroll">
                    {posts
                        ?.filter((post) => post?.fields?.type === 'audiovisual')
                        ?.map((post) => (
                            <VideoCard {...post?.fields} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Audiovisual;
