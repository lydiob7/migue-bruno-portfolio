import React from 'react';
import { ExpandableSection } from 'components';

const Voluta = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id={id} title="Voluta Escola de Música" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Voluta;
