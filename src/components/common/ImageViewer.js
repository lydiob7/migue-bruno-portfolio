import React, { useEffect } from 'react';
import { useContextInfo } from 'hooks/ContextProvider';

const ImageViewer = ({ gsap }) => {
    const { imageToOpen, setImageToOpen } = useContextInfo();

    useEffect(() => {
        if (imageToOpen) {
            gsap.fromTo(
                '.image-viewer-wrapper',
                { display: 'none' },
                {
                    display: 'flex'
                }
            );
            gsap.fromTo(
                '.image-viewer-wrapper',
                { opacity: 0 },
                {
                    opacity: 1
                }
            );
        } else {
            gsap.fromTo(
                '.image-viewer-wrapper',
                { display: 'flex' },
                {
                    display: 'none'
                }
            );
            gsap.fromTo(
                '.image-viewer-wrapper',
                { opacity: 1 },
                {
                    opacity: 0
                }
            );
        }
    }, [gsap, imageToOpen]);

    return (
        <div
            style={{ zIndex: 999, backgroundColor: 'rgba(0,0,0,.5)' }}
            className="image-viewer-wrapper fixed items-center justify-center w-screen h-screen top-0 left-0"
            onClick={() => setImageToOpen(null)}
        >
            <div className="relative w-4/5 lg:h-4/5 lg:w-auto">
                <img
                    className="w-full lg:w-auto lg:h-full object-cover"
                    src={imageToOpen?.src}
                    alt={imageToOpen?.alt}
                />

                <p className="absolute -bottom-8 right-2 text-xs text-isabelline bg-darkGreen px-2">
                    {imageToOpen?.alt}
                </p>
            </div>
        </div>
    );
};

export default ImageViewer;
