import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection, VideosList } from 'components';

const Piano = ({ id, openTab, ...props }) => {
    const { getPostsById } = useContextInfo();

    return (
        <ExpandableSection {...props} id={id} title="Piano" openTab={openTab}>
            <div className="h-full w-full overflow-y-scroll">
                <VideosList videos={getPostsById(id)} />
            </div>
        </ExpandableSection>
    );
};

export default Piano;
