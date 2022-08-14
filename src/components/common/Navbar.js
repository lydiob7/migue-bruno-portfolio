import React from 'react';
import clsx from 'clsx';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';
import { BurguerMenu, Menu } from 'components';
import { parsePath } from 'utils/helpers';

const Navbar = () => {
    const { isAppNameVisible, isHeaderInverted, isMenuOpen, setIsAppNameVisible, setIsMenuOpen } = useContextInfo();

    const handleToggleMenu = () => {
        if (!isMenuOpen) setIsAppNameVisible(true);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed h-16 w-screen px-4 py-2 flex items-center justify-between z-50">
                {isAppNameVisible ? (
                    <HashLink onClick={() => setIsMenuOpen(false)} to={parsePath('/#top')}>
                        <p
                            className={clsx(
                                'text-xl leading-5 font-semibold font-primary text-center lowercase',
                                isHeaderInverted ? 'text-ciel' : 'text-darkGreen'
                            )}
                        >
                            miguel
                            <br />
                            bruñó
                        </p>
                    </HashLink>
                ) : (
                    <div />
                )}
                <BurguerMenu className="md:hidden" onClick={handleToggleMenu} isHeaderInverted={isHeaderInverted} />

                <nav className="hidden md:block">
                    <ul
                        className={clsx('flex items-center text-xl', isHeaderInverted ? 'text-ciel' : 'text-darkGreen')}
                    >
                        <HashLink onClick={() => setIsMenuOpen(false)} to={parsePath('/#bio')}>
                            <li className="mx-4">Bio</li>
                        </HashLink>
                        <HashLink onClick={() => setIsMenuOpen(false)} to={parsePath('/#musica')}>
                            <li className="mx-4">Música</li>
                        </HashLink>
                        <HashLink onClick={() => setIsMenuOpen(false)} to={parsePath('/#proyectos')}>
                            <li className="mx-4">Proyectos</li>
                        </HashLink>
                        <HashLink onClick={() => setIsMenuOpen(false)} to={parsePath('/#contacto')}>
                            <li className="mx-4">Contacto</li>
                        </HashLink>
                    </ul>
                </nav>
            </header>

            <Menu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
