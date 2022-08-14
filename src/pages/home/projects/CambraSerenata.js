import React from 'react';
import { ExpandableSection } from 'components';

const CambraSerenata = ({ openTab, ...props }) => {
    return (
        <ExpandableSection
            {...props}
            id="cambra-serenata"
            openTitle="Cor de Cambra Serenata"
            title="Cambra Serenata"
            openTab={openTab}
        >
            <></>
        </ExpandableSection>
    );
};

export default CambraSerenata;
