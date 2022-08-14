import React, { forwardRef, useLayoutEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { DoubleArrow } from 'components';

import bannerImage from 'assets/images/home-page.jpeg';

const Banner = forwardRef(({ gsap, ...props }, ref) => {
    useLayoutEffect(() => {
        gsap.from('.banner-image', {
            scale: 0.5,
            left: -50,
            width: '800px',
            duration: 5,
            scrollTrigger: {
                trigger: '.banner-image',
                start: 'top top+=200',
                scrub: true
            }
        });
        gsap.to('.banner-section', {
            scrollTrigger: {
                pin: true,
                trigger: '.banner-section',
                start: 'top',
                end: '+=600',
                scrub: true
            }
        });
        gsap.to('.brand', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.brand',
                start: 'top top+=200',
                end: '0',
                scrub: true
            }
        });
    }, [gsap]);

    return (
        <>
            <div
                ref={ref}
                {...props}
                className="relative min-h-screen bg-landing-page md:bg-none md:bg-darkGreen bg-cover-center 
            hidden md:flex items-end justify-center md:justify-start pb-8 overflow-hidden banner-section"
            >
                <div
                    className="absolute flex items-center justify-center w-screen h-screen 
            top-0 left-0 overflow-hidden -z-10 banner-image"
                >
                    <img className="object-cover w-full translate-y-40" src={bannerImage} alt="Miguel Bruñó" />
                </div>

                <div className="flex flex-col items-center md:ml-72 md:mb-16 brand">
                    <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                        miguel
                        <br />
                        bruñó
                    </h1>

                    <HashLink className="md:hidden" to="#bio">
                        <DoubleArrow />
                    </HashLink>
                </div>
            </div>

            <div
                ref={ref}
                {...props}
                className="relative min-h-screen bg-landing-page md:bg-none md:bg-darkGreen bg-cover-center 
            flex md:hidden items-end justify-center md:justify-start pb-8 overflow-hidden"
            >
                <div
                    className="absolute flex items-center justify-center w-screen h-screen 
            top-0 left-0 overflow-hidden -z-10"
                >
                    <img className="object-cover w-full translate-y-40" src={bannerImage} alt="Miguel Bruñó" />
                </div>

                <div className="flex flex-col items-center md:ml-72 md:mb-16">
                    <h1 className="text-6xl font-semibold text-isabelline text-center lowercase">
                        miguel
                        <br />
                        bruñó
                    </h1>

                    <HashLink className="md:hidden" to="#bio">
                        <DoubleArrow />
                    </HashLink>
                </div>
            </div>
        </>
    );
});

export default Banner;
