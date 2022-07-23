import React, { forwardRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { DoubleArrow } from 'components';

const Banner = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className="min-h-screen bg-landing-page bg-cover-center flex items-end justify-center pb-8"
        >
            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                    miguel
                    <br />
                    bruñó
                </h1>

                <HashLink to="#bio">
                    <DoubleArrow />
                </HashLink>
            </div>
        </div>
    );
});

export default Banner;
