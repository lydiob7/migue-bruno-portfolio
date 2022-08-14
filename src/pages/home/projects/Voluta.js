import React from 'react';
import { ExpandableSection } from 'components';

const Voluta = ({ openTab, ...props }) => {
    return (
        <ExpandableSection {...props} id="voluta" title="Voluta Escola de Música" openTab={openTab}>
            <></>
        </ExpandableSection>
    );
};

export default Voluta;
