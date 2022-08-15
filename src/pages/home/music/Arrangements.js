import React from 'react';
import { ExpandableSection } from 'components';

const Arrangements = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection
            {...props}
            contentfulId="arreglos"
            id={id}
            title="Arreglos"
            openTab={openTab}
        ></ExpandableSection>
    );
};

export default Arrangements;
