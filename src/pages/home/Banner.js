import React, { forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import { useContextInfo } from 'hooks/ContextProvider';

import bannerImage from 'assets/images/home-page.jpeg';

const Banner = forwardRef(({ className, gsap, ...props }, ref) => {
    const { isMenuOpen } = useContextInfo();

    useEffect(() => {
        if (!isMenuOpen) {
            gsap.to('.app-name', { opacity: 0, color: '#BED6EF' });
            gsap.to('.app-menu-btn', { backgroundColor: '#BED6EF' });
        }
    }, [gsap, isMenuOpen]);

    useEffect(() => {
        gsap.to('.main-page', { backgroundColor: '#14191A' });
        gsap.fromTo(
            '.app-menu-btn',
            {
                backgroundColor: '#BED6EF'
            },
            {
                backgroundColor: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'top top-=250',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.app-name',
            {
                opacity: 0
            },
            {
                opacity: 1,
                color: '#14191A',
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'top top-=250',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    useEffect(() => {
        gsap.fromTo('.banner-image', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.from('.banner-image', {
            scale: 0.5,
            left: -50,
            width: '800px',
            scrollTrigger: {
                scroller: '.main-page',
                trigger: '#top',
                pin: '.banner-section',
                start: 'top top',
                scrub: 1,
                toggleActions: 'restart none none reverse'
            }
        });
        gsap.fromTo(
            '.brand',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5
            }
        );
        gsap.fromTo(
            '.brand',
            {
                scale: 1,
                opacity: 1
            },
            {
                scale: 1.7,
                opacity: 0,
                marginLeft: 500,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'top top+=200',
                    end: 'bottom center',
                    scrub: 1
                }
            }
        );
        gsap.fromTo(
            '.brand2 .word1',
            {
                opacity: 0
            },
            {
                opacity: 1,
                xPercent: -30,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.brand2 .word2',
            {
                opacity: 0
            },
            {
                opacity: 1,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.brand2 .word3',
            {
                opacity: 0
            },
            {
                opacity: 1,
                xPercent: 25,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.brand2 .word4',
            {
                opacity: 0
            },
            {
                opacity: 1,
                xPercent: -30,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
        gsap.fromTo(
            '.brand2 .word5',
            {
                opacity: 0
            },
            {
                opacity: 1,
                xPercent: 20,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    toggleActions: 'restart none none reverse'
                }
            }
        );
    }, [gsap]);

    return (
        <div className={className} id="top" {...props}>
            <div
                ref={ref}
                className={clsx(
                    'relative min-h-screen bg-landing-page bg-cover-center lg:bg-none hidden lg:flex items-end justify-center lg:justify-start pb-8 overflow-hidden banner-section'
                )}
            >
                <div
                    className="absolute flex items-center justify-center w-screen h-screen 
                    top-0 left-0 overflow-hidden z-10 banner-image"
                >
                    <img className="object-cover w-full translate-y-40" src={bannerImage} alt="Miguel Bruñó" />
                </div>

                <div className="flex flex-col items-center lg:ml-72 lg:mb-16 brand z-20">
                    <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                        miguel
                        <br />
                        bruñó
                    </h1>
                </div>

                <div className="brand2 absolute z-20 bottom-0 left-0 lg:ml-[25vw] lg:mb-24">
                    <h2 className="text-5xl lg:text-7xl text-isabelline">
                        <span className="word1 inline-block">Músico</span>
                        <br />
                        <span className="word2 inline-block italic font-light">Arreglista</span>
                        <br />
                        <span className="word3 inline-block">Improvisador</span>
                        <br />
                        <span className="word4 inline-block font-light">Pianista</span>
                        <br />
                        <span className="word5 inline-block font-semibold">Compositor</span>
                    </h2>
                </div>
            </div>

            <div
                ref={ref}
                {...props}
                className="relative min-h-screen bg-landing-page lg:bg-none lg:bg-darkGreen bg-cover-center 
                flex lg:hidden items-end justify-center lg:justify-start pb-8 overflow-hidden"
            >
                <div
                    className="absolute flex items-center justify-center w-screen h-screen 
                    top-0 left-0 overflow-hidden -z-10"
                >
                    <img className="object-cover w-full translate-y-40" src={bannerImage} alt="Miguel Bruñó" />
                </div>

                <div className="flex flex-col items-center lg:ml-72 mb-16">
                    <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                        miguel
                        <br />
                        bruñó
                    </h1>
                </div>
            </div>
        </div>
    );
});

export default Banner;
