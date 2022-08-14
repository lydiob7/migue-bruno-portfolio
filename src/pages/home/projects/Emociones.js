import React from 'react';
import { ExpandableSection } from 'components';

const Emociones = ({ openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id="emociones" title="Emociones" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Emociones;
