import React, { forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';
import bio1 from 'assets/images/bio1.jpeg';
import bio2 from 'assets/images/bio2.jpeg';

const About = forwardRef(({ className, gsap, ...props }, ref) => {
    const { setImageToOpen } = useContextInfo();

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
                    start: 'top center-=450',
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
            <div ref={ref} className="w-screen min-h-screen shrink-0 text-isabelline py-32 text-2xl lg:text-3xl px-24">
                <h2 className="about-p text-4xl md:text-[10rem] font-bold mb-8 md:mb-24">Bio</h2>

                <div className="about-p flex gap-4 border-isabelline border-l-2">
                    <div className="basis-3/5">
                        <p className="about-p about-text mb-8">
                            Soy un músico nacido en Valencia (1995), donde vivo y trabajo habitualmente. Actualmente
                            estudio un postgrado de Composición de Bandas Sonoras y Música para Medios Audiovisuales, en
                            la{' '}
                            <a className="underline" href="https://www.esmuc.cat/" target="_blank" rel="noreferrer">
                                ESMUC
                            </a>{' '}
                            de Barcelona.
                        </p>

                        <p className="about-p about-text">
                            Trabajo de pianista acompañante habitual de distintos coros de la provincia de Valencia, y
                            en los últimos años fui profesor de piano, lenguaje musical e improvisación en Voluta Escola
                            de Música (Alboraya). Compongo, hago arreglos, transcripciones, backing tracks… en esta web
                            podréis ver y escuchar algunos de mis trabajos.
                        </p>
                    </div>

                    <div
                        onClick={() => setImageToOpen({ src: bio1, alt: 'Miguel Bruñó' })}
                        className="about-p basis-2/5 cursor-pointer"
                    >
                        <img className="w-full object-cover" src={bio1} alt="Miguel Bruñó" />
                    </div>
                </div>

                <div className="about-p flex gap-4 pt-16 border-isabelline border-l-2">
                    <div
                        onClick={() => setImageToOpen({ src: bio2, alt: 'Miguel Bruñó' })}
                        className="about-p h-full basis-3/5 cursor-pointer px-4 md:px-16 py-8"
                    >
                        <img className="w-full object-cover" src={bio2} alt="Miguel Bruñó" />
                    </div>

                    <p className="about-p about-text basis-2/5 border-0 pt-8">
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
                </div>
            </div>
        </div>
    );
});

export default About;
