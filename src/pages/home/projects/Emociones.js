import React from 'react';
import { ExpandableSection } from 'components';

const Emociones = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Emociones" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Emociones;
