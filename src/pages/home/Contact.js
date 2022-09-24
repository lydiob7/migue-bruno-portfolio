import React, { forwardRef, useEffect } from 'react';
import clsx from 'clsx';

const Contact = forwardRef(({ gsap, ...props }, ref) => {
    useEffect(() => {
        gsap.fromTo(
            '#contacto',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.2,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
                    start: 'top top+=50',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.main-page',
            {
                backgroundColor: '#F5F0EA'
            },
            {
                backgroundColor: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '#contacto',
                    start: 'top center',
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
                        start: 'top bottom-=200',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        });
    }, [gsap]);

    return (
        <div
            {...props}
            ref={ref}
            id="contacto"
            className={clsx(
                'h-screen text-isabelline grid content-center px-6 sm:px-12 md:px-24 text-xl',
                props.className
            )}
        >
            <div className="relative flex flex-col justify-center gap-4 md:w-4/5 lg:w-3/5 mx-auto md:text-2xl lg:text-3xl">
                <h2 className="contact-p text-4xl md:text-6xl text-center font-bold mb-8 md:mb-24">Contacto</h2>
                <p className="contact-p md:hidden">
                    Contacta conmigo si estás interesado en alguno de los trabajos que realizo:
                </p>
                <p className="contact-p hidden md:inline-block">
                    Contacta conmigo si estás interesado en alguno de los trabajos que realizo: arreglos, composiciones,
                    transcripciones, pianista acompañante.
                </p>
                <p className="contact-p font-medium md:hidden">
                    arreglos, composiciones, transcripciones, pianista acompañante.
                </p>
                <p className="contact-p">También puedes contactarme para cualquier consulta o comentario.</p>
                <a
                    className="contact-p btn mt-4 md:mt-16 mx-auto"
                    href="mailto:miguelbrusan@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Enviar mensaje
                </a>
            </div>

            <p className="absolute bottom-0 left-0 right-0 z-20 text-center text-xs md:text-sm mb-12">
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
