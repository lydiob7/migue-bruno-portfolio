import React from 'react';
import { ExpandableSection } from 'components';

const Improvisation = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection
            {...props}
            contentfulId="improvisacion"
            id={id}
            title="Improvisación"
            openTab={openTab}
        ></ExpandableSection>
    );
};

export default Improvisation;
