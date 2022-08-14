import React from 'react';
import { ExpandableSection } from 'components';

const Malamiga = ({ openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id="malamiga" title="Malamiga" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Malamiga;
