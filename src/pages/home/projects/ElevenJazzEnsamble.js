import React from 'react';
import { ExpandableSection } from 'components';

const ElevenJazzEnsamble = ({ openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id="eleven-jazz-ensamble" title="Eleven Jazz Ensamble" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default ElevenJazzEnsamble;
