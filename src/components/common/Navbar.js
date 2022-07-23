import React from 'react';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';
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
                <BurguerMenu onClick={handleToggleMenu} isHeaderInverted={isHeaderInverted} />
            </header>

            <Menu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
