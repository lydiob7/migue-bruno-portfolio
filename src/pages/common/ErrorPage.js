import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContextInfo } from 'hooks/ContextProvider';
import { parsePath } from 'utils/helpers';

const ErrorPage = () => {
    const { isHeaderInverted, setIsHeaderInverted } = useContextInfo();

    useLayoutEffect(() => {
        if (!isHeaderInverted) setIsHeaderInverted(true);
        // eslint-disable-next-line
    }, [isHeaderInverted]);

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
