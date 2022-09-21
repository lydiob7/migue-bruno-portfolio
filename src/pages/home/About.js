import React, { forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import bio1 from 'assets/images/bio1.jpeg';
import bio2 from 'assets/images/bio2.jpeg';

const About = forwardRef(({ className, gsap, ...props }, ref) => {
    useEffect(() => {
        gsap.fromTo(
            '.main-page',
            {
                backgroundColor: '#14191A'
            },
            {
                backgroundColor: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#bio',
                    start: 'top center-=150',
                    toggleActions: 'restart none none reverse'
                }
            }
        );

        gsap.fromTo(
            '.app-menu-btn',
            {
                backgroundColor: '#14191A'
            },
            {
                backgroundColor: '#BED6EF',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#bio',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.app-name',
            {
                color: '#14191A'
            },
            {
                color: '#BED6EF',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#bio',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    useEffect(() => {
        gsap.utils.toArray('.about-p').forEach((elem) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        scroller: '.main-page',
                        trigger: elem,
                        start: 'top bottom-=100',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, [gsap]);

    return (
        <div {...props} id="bio" className={clsx('min-h-screen md:h-auto w-screen flex', className)}>
            <div ref={ref} className="w-screen min-h-screen shrink-0 text-isabelline py-16 text-xl lg:text-2xl">
                <p className="about-p about-text">
                    Soy un músico nacido en Valencia (1995), donde vivo y trabajo habitualmente. Actualmente estudio un
                    postgrado de Composición de Bandas Sonoras y Música para Medios Audiovisuales, en la{' '}
                    <a className="underline" href="https://www.esmuc.cat/" target="_blank" rel="noreferrer">
                        ESMUC
                    </a>{' '}
                    de Barcelona.
                </p>

                <p className="about-p about-text">
                    Trabajo de pianista acompañante habitual de distintos coros de la provincia de Valencia, y en los
                    últimos años fui profesor de piano, lenguaje musical e improvisación en Voluta Escola de Música
                    (Alboraya). Compongo, hago arreglos, transcripciones, backing tracks… en esta web podréis ver y
                    escuchar algunos de mis trabajos.
                </p>

                <p className="about-p about-text">
                    Estudié el grado de interpretación del piano en{' '}
                    <a className="underline" href="https://www.esmuc.cat/" target="_blank" rel="noreferrer">
                        ESMUC
                    </a>
                    , y complementé mi formación con diversos cursos de improvisación, jazz, producción de música
                    electrónica y pedagogía. Entre estos cursos destaca la formación de profesorado de{' '}
                    <a className="underline" href="https://www.metodoiem.com/" target="_blank" rel="noreferrer">
                        Método IEM
                    </a>
                    , un método de enseñanza musical que pone la improvisación y la creatividad en el centro, donde
                    imparto cursos y clases en la actualidad.
                </p>

                <div className="about-p flex items-center justify-center lg:justify-end gap-8 lg:gap-16 mt-16 px-8 lg:px-[15vw] h-72 w-full">
                    <div className="h-full">
                        <img className="h-full object-cover" src={bio1} alt="Miguel Bruñó" />
                    </div>

                    <div className="h-full">
                        <img className="h-full object-cover" src={bio2} alt="Miguel Bruñó" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default About;
