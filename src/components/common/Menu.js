import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { parsePath } from 'utils/helpers';

const Menu = ({ onClose, ...props }) => (
    <>
        <div
            {...props}
            className="app-menu fixed w-screen h-screen flex items-center justify-center bg-darkGreen text-ciel top-0 left-0 -translate-y-full z-50"
        >
            <nav>
                <ul className="text-5xl font-medium">
                    <HashLink onClick={onClose} to={parsePath('/#bio')}>
                        <li className="app-menu-item my-8">Bio</li>
                    </HashLink>
                    <HashLink className="lg:hidden" onClick={onClose} to={parsePath('/#musica-sm')}>
                        <li className="app-menu-item my-8">Música</li>
                    </HashLink>
                    <HashLink className="lg:hidden" onClick={onClose} to={parsePath('/#proyectos-sm')}>
                        <li className="app-menu-item my-8">Proyectos</li>
                    </HashLink>
                    <HashLink className="hidden lg:block" onClick={onClose} to={parsePath('/#musica')}>
                        <li className="app-menu-item my-8">Música</li>
                    </HashLink>
                    <HashLink className="hidden lg:block" onClick={onClose} to={parsePath('/#proyectos')}>
                        <li className="app-menu-item my-8">Proyectos</li>
                    </HashLink>
                    <HashLink onClick={onClose} to={parsePath('/#contacto')}>
                        <li className="app-menu-item my-8">Contacto</li>
                    </HashLink>
                </ul>
            </nav>
        </div>

        <HashLink onClick={onClose} to={parsePath('/#top')}>
            <p
                style={{ zIndex: 52 }}
                className="menu-app-name text-xl absolute z-50 px-4 py-3 top-0 left-0 leading-5 text-ciel font-semibold font-primary text-center lowercase"
            >
                miguel
                <br />
                bruñó
            </p>
        </HashLink>
    </>
);

export default Menu;
