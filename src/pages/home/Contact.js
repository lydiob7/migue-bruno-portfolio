import React, { forwardRef, useEffect } from 'react';
import clsx from 'clsx';

import facebook from 'assets/icons/facebook.svg';
import instagram from 'assets/icons/instagram.svg';
import soundcloud from 'assets/icons/soundcloud.svg';
import youtube from 'assets/icons/youtube.svg';

const Contact = forwardRef(({ gsap, ...props }, ref) => {
    useEffect(() => {
        gsap.fromTo(
            '.app-menu-btn',
            {
                backgroundColor: '#14191A'
            },
            {
                backgroundColor: '#BED6EF',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
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
                    trigger: '#contacto',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    useEffect(() => {
        gsap.utils.toArray('.contact-p').forEach((elem) => {
            gsap.fromTo(
                elem,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        scroller: '.main-page',
                        trigger: elem,
                        start: 'top bottom-=250',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, [gsap]);

    return (
        <div {...props} ref={ref} id="contacto" className={clsx('relative h-screen text-isabelline', props.className)}>
            <div className="w-full h-full grid content-center text-xl px-8 lg:px-24">
                <h2 className="contact-p text-6xl md:text-[8rem] font-bold mb-4 md:mb-16">Contacto</h2>
                <div className="relative flex flex-col justify-center gap-4 md:w-4/5 text-base md:text-2xl lg:text-3xl">
                    <p className="contact-p md:hidden">
                        Contacta conmigo si estás interesado en alguno de los trabajos que realizo:
                    </p>
                    <p className="contact-p hidden md:inline-block">
                        Contacta conmigo si estás interesado en alguno de los trabajos que realizo: arreglos,
                        composiciones, transcripciones, pianista acompañante.
                    </p>
                    <p className="contact-p font-medium md:hidden">
                        arreglos, composiciones, transcripciones, pianista acompañante.
                    </p>
                    <p className="contact-p">También puedes contactarme para cualquier consulta o comentario.</p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:w-4/5 mt-4 md:mt-16 md:text-2xl lg:text-3xl">
                    <a className="text-ciel" href="mailto:miguelbrusan@gmail.com" target="_blank" rel="noreferrer">
                        miguelbrusan@gmail.com
                    </a>

                    <div className="flex items-center justify-center gap-8">
                        <a
                            className="text-ciel"
                            href="https://www.facebook.com/miguelbrusan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={facebook} alt="" />
                        </a>
                        <a
                            className="text-ciel"
                            href="https://www.instagram.com/miguelbrusan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={instagram} alt="" />
                        </a>
                        <a
                            className="text-ciel"
                            href="https://soundcloud.com/user-890595658"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={soundcloud} alt="" />
                        </a>
                        <a
                            className="text-ciel"
                            href="https://www.youtube.com/user/miguelbrusan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={youtube} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="absolute bottom-0 left-0 right-0 z-20 text-center text-xs md:text-sm mb-12 px-16 md:px-0">
                Esta pagina fue creada por{' '}
                <a href="https://gabrielapolancoferreyra.com/" target="_blank" rel="noreferrer">
                    Gabi Polanco
                </a>{' '}
                y{' '}
                <a href="https://www.tomiscattini.com/" target="_blank" rel="noreferrer">
                    Tomi Scattini
                </a>{' '}
                (Itakhi)
            </p>
        </div>
    );
});

export default Contact;
