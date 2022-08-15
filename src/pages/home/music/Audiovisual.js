import React from 'react';
import { ExpandableSection } from 'components';

const Audiovisual = ({ id, openTab, ...props }) => {
    return <ExpandableSection {...props} id={id} title="Audiovisual" openTab={openTab}></ExpandableSection>;
};

export default Audiovisual;
