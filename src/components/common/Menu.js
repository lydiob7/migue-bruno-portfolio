import React, { useLayoutEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useContextInfo } from 'hooks/ContextProvider';
import { parsePath } from 'utils/helpers';

const Menu = ({ open, onClose, ...props }) => {
    const { isHeaderInverted, isMenuOpen, setIsHeaderInverted } = useContextInfo();

    useLayoutEffect(() => {
        if (isMenuOpen && !isHeaderInverted) setIsHeaderInverted(true);
        // eslint-disable-next-line
    }, [isHeaderInverted]);

    if (!open) return null;

    return (
        <div
            {...props}
            className="fixed w-screen h-screen flex items-center justify-center bg-darkGreen text-ciel top-0 left-0 z-40"
        >
            <nav>
                <ul className="text-5xl font-medium">
                    <HashLink onClick={onClose} to={parsePath('/#bio')}>
                        <li className="my-8">Bio</li>
                    </HashLink>
                    <HashLink onClick={onClose} to={parsePath('/#musica')}>
                        <li className="my-8">Música</li>
                    </HashLink>
                    <HashLink onClick={onClose} to={parsePath('/#proyectos')}>
                        <li className="my-8">Proyectos</li>
                    </HashLink>
                    <HashLink onClick={onClose} to={parsePath('/#contacto')}>
                        <li className="my-8">Contacto</li>
                    </HashLink>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
