import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection } from 'components';
import VideoCard from './VideoCard';

const Arrangements = ({ openTab, ...props }) => {
    const { posts } = useContextInfo();

    return (
        <ExpandableSection {...props} id="arrangements" title="Arreglos" openTab={openTab}>
            <>
                {openTab === 'arrangements' && (
                    <div className="h-full w-full overflow-y-scroll">
                        {posts
                            ?.filter((post) => post?.fields?.type === 'arreglos')
                            ?.map((post) => (
                                <VideoCard {...post?.fields} />
                            ))}
                    </div>
                )}
            </>
        </ExpandableSection>
    );
};

export default Arrangements;
