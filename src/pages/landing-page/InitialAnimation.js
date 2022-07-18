import React from 'react';
import { Logo } from 'components';

const InitialAnimation = () => {
    return (
        <div
            className="flex items-center justify-center absolute w-screen h-screen 
                            left-0 top-0 z-20
                            after:content-[''] after:absolute after:z-10 after:top-0 
                            after:left-0 after:w-full after:h-full after:bg-beige 
                            after:animate-fade"
        >
            <Logo className="relative z-30 w-[30vw] h-[30vh] animate-beating-logo" color="green" />
        </div>
    );
};

export default InitialAnimation;
