import React, { forwardRef } from 'react';
import clsx from 'clsx';
import bio1 from 'assets/images/bio1.jpeg';

const AboutDesktop = forwardRef(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            {...props}
            className={clsx(
                'w-screen min-h-screen shrink-0 bg-darkGreen text-isabelline snap-start py-16 text-xl lg:text-2xl',
                className
            )}
        >
            <p className="relative left-1/2 -translate-x-1/2 lg:left-auto lg:-right-1/3 lg:translate-x-0 border-l-2 border-isabelline w-3/5 px-16 py-8">
                Soy un músico nacido en Valencia (1995), donde vivo y trabajo habitualmente. Actualmente estudio un
                postgrado de Composición de Bandas Sonoras y Música para Medios Audiovisuales, en la ESMUC de Barcelona.
            </p>

            <p className="relative left-1/2 -translate-x-1/2 lg:left-auto lg:-right-1/3 lg:translate-x-0 border-l-2 border-isabelline w-3/5 px-16 py-8">
                Trabajo de pianista acompañante habitual de distintos coros de la provincia de Valencia, y en los
                últimos años fui profesor de piano, lenguaje musical e improvisación en Voluta Escola de Música
                (Alboraya). Compongo, hago arreglos, transcripciones, backing tracks… en esta web podréis ver y escuchar
                algunos de mis trabajos.
            </p>

            <p className="relative left-1/2 -translate-x-1/2 lg:left-auto lg:-right-1/3 lg:translate-x-0 border-l-2 border-isabelline w-3/5 px-16 py-8">
                Estudié el grado de interpretación del piano en ESMUC, y complementé mi formación con diversos cursos de
                improvisación, jazz, producción de música electrónica y pedagogía. Entre estos cursos destaca la
                formación de profesorado de Método IEM, un método de enseñanza musical que pone la improvisación y la
                creatividad en el centro, donde imparto cursos y clases en la actualidad.
            </p>

            <div className="relative left-1/2 -translate-x-1/2 lg:left-auto lg:-right-[70%] lg:translate-x-0 h-72 w-72 overflow-hidden">
                <img className="h-full object-cover" src={bio1} alt="Miguel Bruñó" />
            </div>
        </div>
    );
});

export default AboutDesktop;
