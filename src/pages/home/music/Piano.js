import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection } from 'components';
import VideoCard from './VideoCard';

const Piano = ({ openTab, ...props }) => {
    const { posts } = useContextInfo();

    return (
        <ExpandableSection {...props} id="piano" title="Piano" openTab={openTab}>
            <>
                {openTab === 'piano' && (
                    <div className="h-full w-full overflow-y-scroll">
                        {posts
                            ?.filter((post) => post?.fields?.type === 'piano')
                            ?.map((post) => (
                                <VideoCard {...post?.fields} />
                            ))}
                    </div>
                )}
            </>
        </ExpandableSection>
    );
};

export default Piano;
