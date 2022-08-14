import React from 'react';
import { ExpandableSection } from 'components';

const CambraSerenata = ({ id, openTab, ...props }) => {
    return (
        <ExpandableSection
            {...props}
            id={id}
            openTitle="Cor de Cambra Serenata"
            title="Cambra Serenata"
            openTab={openTab}
        >
            <></>
        </ExpandableSection>
    );
};

export default CambraSerenata;
