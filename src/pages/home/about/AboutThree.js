import React, { forwardRef } from 'react';
import bio1 from 'assets/images/bio1.jpeg';
import { DoubleArrow } from 'components';

const AboutThree = forwardRef(({ handleGroupsScroll, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className="w-screen h-full shrink-0 bg-isabelline text-darkGreen snap-start pt-24">
            <div className="w-full">
                <img className="w-full" src={bio1} alt="Miguel Bruñó" />
            </div>

            <div className="w-4/6 mx-auto">
                <p className="text-xl leading-6 py-8 border-darkGreen border-b-2">
                    Trabajo de pianista acompañante habitual de distintos coros de la provincia de Valencia, y en los
                    últimos años fui profesor de piano, lenguaje musical e improvisación en *Voluta Escola de Música*
                    (Alboraya). Compongo, hago arreglos, transcripciones, *backing tracks*… en esta web podréis ver y
                    escuchar algunos de mis trabajos.
                </p>
                <DoubleArrow
                    onClick={() => handleGroupsScroll?.(4)}
                    direction="right"
                    className="float-right mt-2 cursor-pointer"
                />
            </div>
        </div>
    );
});

export default AboutThree;
