import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection } from 'components';
import VideoCard from './VideoCard';

const Improvisation = ({ openTab, ...props }) => {
    const { posts } = useContextInfo();

    return (
        <ExpandableSection {...props} id="improvisation" title="Improvisación" openTab={openTab}>
            <>
                {openTab === 'improvisation' && (
                    <div className="h-full w-full overflow-y-scroll">
                        {posts
                            ?.filter((post) => post?.fields?.type === 'improvisacion')
                            ?.map((post) => (
                                <VideoCard {...post?.fields} />
                            ))}
                    </div>
                )}
            </>
        </ExpandableSection>
    );
};

export default Improvisation;
