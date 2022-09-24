import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parsePath } from 'utils/helpers';

const ErrorPage = ({ gsap }) => {
    useEffect(() => {
        gsap.to('.menu-app-name', {
            opacity: 1
        });
    }, [gsap]);

    return (
        <div className="w-screen h-screen bg-darkGreen text-ciel flex flex-col items-center justify-center">
            <span className="text-6xl font-semibold">404</span>
            <p className="text-2xl font-medium my-8">Página no encontrada</p>
            <Link className="underline" to={parsePath('/')}>
                Volver al inicio
            </Link>
        </div>
    );
};

export default ErrorPage;
