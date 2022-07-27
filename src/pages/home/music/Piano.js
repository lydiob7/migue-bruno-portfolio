import React from 'react';
import clsx from 'clsx';
import { DoubleArrow } from 'components';

const Piano = ({ openTab, ...props }) => {
    return (
        <div {...props} className={clsx('w-full transition-all', openTab === 'piano' ? 'flex-1' : '')}>
            <h3
                className={clsx(
                    'flex items-center font-extrabold px-8 border-b-2 cursor-pointer',
                    openTab && openTab !== 'piano' ? 'border-ciel text-ciel bg-darkGreen' : 'border-darkGreen',
                    openTab === 'piano'
                        ? 'text-4xl justify-center text-center border-none pt-2'
                        : 'text-3xl justify-between'
                )}
            >
                Piano {openTab !== 'piano' && <DoubleArrow fill="fill-darkGreen" direction="right" />}
            </h3>

            {openTab === 'piano' && <div className="h-full w-full overflow-y-scroll"></div>}
        </div>
    );
};

export default Piano;
