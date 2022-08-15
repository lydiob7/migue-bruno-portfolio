import React from 'react';
import { ExpandableSection } from 'components';

const Piano = ({ id, openTab, ...props }) => {
    return <ExpandableSection {...props} id={id} title="Piano" openTab={openTab}></ExpandableSection>;
};

export default Piano;
