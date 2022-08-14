import React from 'react';
import { ExpandableSection } from 'components';

const IEMOnline = ({ openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id="iem-online" title="IEM Online" isFirstItem openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default IEMOnline;
