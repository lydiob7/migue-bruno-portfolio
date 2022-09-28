import React, { useEffect } from 'react';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';
import { BurguerMenu, Menu } from 'components';
import { parsePath } from 'utils/helpers';

const Navbar = ({ gsap }) => {
    const { imageToOpen, isMenuOpen, setIsMenuOpen } = useContextInfo();

    useEffect(() => {
        if (isMenuOpen) {
            gsap.to('.app-menu-btn', { backgroundColor: '#BED6EF' });
            gsap.fromTo('.menu-app-name', { opacity: 0 }, { opacity: 1 });
            gsap.to('.app-menu', { translateY: 0, duration: 0.2 });
            gsap.utils.toArray('.app-menu-item').forEach((elem, index) => {
                gsap.fromTo(elem, { opacity: 0 }, { opacity: 1, delay: 0.2 + index * 0.1, duration: 0.3 });
            });

            gsap.to('.app-menu-wrapper', { height: '1.44rem' });
            gsap.to('.app-menu-btn1', {
                width: '100%',
                translateX: '0',
                rotate: '-45deg'
            });
            gsap.to('.app-menu-btn2', { opacity: 0 });
            gsap.to('.app-menu-btn3', {
                width: '100%',
                rotate: '45deg'
            });
        } else {
            gsap.to('.app-menu-btn', { backgroundColor: '#14191A' });
            gsap.fromTo('.menu-app-name', { opacity: 1 }, { opacity: 0 });
            gsap.to('.app-menu', { translateY: '-100%', duration: 0.2 });
            gsap.utils.toArray('.app-menu-item').forEach((elem) => {
                gsap.fromTo(elem, { opacity: 1 }, { opacity: 0, duration: 0.2 });
            });
            gsap.to('.app-menu-wrapper', { height: '1.25rem' });
            gsap.to('.app-menu-btn1', {
                width: '50%',
                translateX: '100%',
                rotate: '0'
            });
            gsap.to('.app-menu-btn2', { opacity: 1 });
            gsap.to('.app-menu-btn3', {
                width: '50%',
                rotate: '0'
            });
        }
    }, [gsap, isMenuOpen]);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header
                className={clsx(
                    'fixed h-16 w-screen px-4 py-2 flex items-center justify-between',
                    imageToOpen ? 'blur-lg' : ''
                )}
                style={{ zIndex: 51 }}
            >
                <HashLink to={parsePath('/#top')}>
                    <p className={clsx('app-name text-xl leading-5 font-semibold font-primary text-center lowercase')}>
                        miguel
                        <br />
                        bruñó
                    </p>
                </HashLink>
                <BurguerMenu onClick={handleToggleMenu} />
            </header>

            <Menu onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
