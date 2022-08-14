import React from 'react';
import { ExpandableSection } from 'components';

const ElevenJazzEnsamble = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Eleven Jazz Ensamble" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default ElevenJazzEnsamble;
