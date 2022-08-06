import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { DoubleArrow } from 'components';

const AboutTwo = forwardRef(({ className, handleGroupsScroll, ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={clsx('w-screen h-full flex shrink-0 bg-isabelline text-darkGreen snap-start', className)}
        >
            <div className="basis-1/6"></div>

            <div className="basis-4/6 grid place-items-center">
                <p className="text-xl leading-6 py-8 border-darkGreen border-t-2 border-b-2">
                    Soy un músico nacido en Valencia (1995), donde vivo y trabajo habitualmente. Actualmente estudio un
                    postgrado de Composición de Bandas Sonoras y Música para Medios Audiovisuales, en la ESMUC de
                    Barcelona.
                </p>
            </div>

            <div className="basis-1/6 flex items-center justify-center">
                <DoubleArrow onClick={() => handleGroupsScroll?.(3)} direction="right" className="cursor-pointer" />
            </div>
        </div>
    );
});

export default AboutTwo;
