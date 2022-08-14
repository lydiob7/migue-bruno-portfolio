import React from 'react';
import clsx from 'clsx';
import { DoubleArrow } from 'components';

const ExpandableSection = ({ children, id, isFirstItem, openTab, openTitle, title, showArrow, ...props }) => (
    <div {...props} className={clsx('w-full transition-all', openTab === id ? 'flex-1' : '')}>
        <h3
            className={clsx(
                'music-item',
                isFirstItem ? 'border-t-2' : '',
                openTab && openTab !== id ? 'music-item__closed' : 'music-item__open',
                openTab === id ? 'music-item-title__open' : 'music-item-title__closed'
            )}
        >
            {openTab === id ? openTitle || title || '' : title || ''}{' '}
            {showArrow && openTab !== id && (
                <DoubleArrow className="md:hidden" fill="fill-darkGreen" direction="right" />
            )}
        </h3>

        {openTab === id && (
            <div className="h-full w-full px-4 sm:px-8 md:px-16 my-16 overflow-y-scroll">{children}</div>
        )}
    </div>
);

export default ExpandableSection;
