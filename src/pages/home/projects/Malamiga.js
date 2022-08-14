import React from 'react';
import { ExpandableSection } from 'components';

const Malamiga = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Malamiga" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Malamiga;
