import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection, VideosList } from 'components';

const Arrangements = ({ id, openTab, ...props }) => {
    const { getPostsById } = useContextInfo();

    return (
        <ExpandableSection {...props} id={id} title="Arreglos" openTab={openTab}>
            <div className="h-full w-full overflow-y-scroll">
                <VideosList videos={getPostsById('arreglos')} />
            </div>
        </ExpandableSection>
    );
};

export default Arrangements;
