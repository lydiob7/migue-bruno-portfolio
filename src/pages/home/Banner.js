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
            duration: 5,
            scrollTrigger: {
                scroller: '.main-page',
                trigger: '.banner-image',
                start: 'top top+=200',
                scrub: 1
            }
        });
        gsap.to('.banner-section', {
            scrollTrigger: {
                scroller: '.main-page',
                pin: true,
                trigger: '.banner-section',
                start: 'top top'
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
            '.brand2',
            {
                opacity: 0
            },
            {
                opacity: 1,
                scrollTrigger: {
                    scroller: '.main-page',
                    trigger: '.banner-image',
                    start: 'bottom center',
                    scrub: 1
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

                <div className="flex flex-col items-center lg:ml-72 lg:mb-16 brand">
                    <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                        miguel
                        <br />
                        bruñó
                    </h1>
                </div>

                <div className="brand2 absolute z-20 bottom-0 left-0 lg:ml-[25vw] lg:mb-24">
                    <h2 className="text-5xl lg:text-7xl text-isabelline">
                        <span className="inline-block -translate-x-24">Músico</span>
                        <br />
                        <span className="inline-block italic font-light">Arreglista</span>
                        <br />
                        <span className="inline-block translate-x-24">Improvisador</span>
                        <br />
                        <span className="inline-block font-light -translate-x-24">Pianista</span>
                        <br />
                        <span className="inline-block font-semibold translate-x-16">Compositor</span>
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
