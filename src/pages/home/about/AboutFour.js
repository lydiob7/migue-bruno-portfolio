import React, { forwardRef } from 'react';
import bio2 from 'assets/images/bio2.jpeg';
import { DoubleArrow } from 'components';
import { HashLink } from 'react-router-hash-link';

const AboutFour = forwardRef(({ handleGroupsScroll, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className="w-screen h-full shrink-0 bg-darkGreen text-isabelline snap-start pt-16">
            <div className="h-2/5 overflow-hidden">
                <img className="object-cover" src={bio2} alt="Miguel Bruñó" />
            </div>

            <div className="w-5/6 mx-auto">
                <p className="leading-5 mt-8 px-8 border-isabelline border-l-2">
                    Estudié el grado de interpretación del piano en ESMUC, y complementé mi formación con diversos
                    cursos de improvisación, jazz, producción de música electrónica y pedagogía. Entre estos cursos
                    destaca la formación de profesorado de *Método IEM*, un método de enseñanza musical que pone la
                    improvisación y la creatividad en el centro, donde imparto cursos y clases en la actualidad.
                </p>

                <HashLink to="#musica">
                    <DoubleArrow className="mx-auto" />
                </HashLink>
            </div>
        </div>
    );
});

export default AboutFour;
