import React, { forwardRef } from 'react';
import { DoubleArrow } from 'components';

const AboutOne = forwardRef(({ handleGroupsScroll, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className="w-screen h-full flex shrink-0 snap-start">
            <div className="basis-5/6 grid place-items-center">
                <h2 className="text-5xl">
                    <span className="inline-block my-2">Músico</span>
                    <br />
                    <span className="inline-block my-2 italic font-light">Arreglista</span>
                    <br />
                    <span className="inline-block my-2">Improvisador</span>
                    <br />
                    <span className="inline-block my-2 font-light">Pianista</span>
                    <br />
                    <span className="inline-block my-2 font-semibold">Compositor</span>
                </h2>
            </div>
            <div className="basis-1/6 bg-isabelline flex items-center justify-center">
                <DoubleArrow onClick={() => handleGroupsScroll?.(2)} direction="right" className="cursor-pointer" />
            </div>
        </div>
    );
});

export default AboutOne;
