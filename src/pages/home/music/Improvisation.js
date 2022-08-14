import React from 'react';
import { useContextInfo } from 'hooks/ContextProvider';
import { ExpandableSection, VideosList } from 'components';

const Improvisation = ({ id, openTab, ...props }) => {
    const { getPostsById } = useContextInfo();

    return (
        <ExpandableSection {...props} id={id} title="Improvisación" openTab={openTab}>
            <div className="h-full w-full overflow-y-scroll">
                <VideosList videos={getPostsById('improvisacion')} />
            </div>
        </ExpandableSection>
    );
};

export default Improvisation;
