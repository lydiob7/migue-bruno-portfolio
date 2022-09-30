import React from 'react';
import { ExpandableSection } from 'components';
import { useContextInfo } from 'hooks/ContextProvider';

import eleven1 from 'assets/images/eleven1.jpg';
import eleven2 from 'assets/images/eleven2.jpg';

const ElevenJazzEnsamble = ({ id, openTab, ...props }) => {
    const { setImageToOpen } = useContextInfo();
    return (
        <ExpandableSection {...props} id={id} title="Eleven Jazz Ensamble" openTab={openTab} splitScreen>
            <>
                <p className="py-2 px-4 md:px-8">
                    Eleven Jazz Ensemble es una formación jazzística cuyo director y arreglista es Diego Barberá, en la
                    cual toco el piano.
                </p>

                <div className="flex items-center my-8 px-4 md:px-8">
                    Visita las redes sociales{' '}
                    <a
                        onClick={(ev) => ev.stopPropagation()}
                        href="https://www.facebook.com/Eleven-Jazz-Ensemble-103267975375120/"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-4"
                    >
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.75 1.5H2.25C1.65326 1.5 1.08097 1.73705 0.65901 2.15901C0.237053 2.58097 0 3.15326 0 3.75L0 20.25C0 20.8467 0.237053 21.419 0.65901 21.841C1.08097 22.2629 1.65326 22.5 2.25 22.5H8.68359V15.3605H5.73047V12H8.68359V9.43875C8.68359 6.52547 10.418 4.91625 13.0744 4.91625C14.3466 4.91625 15.6769 5.14313 15.6769 5.14313V8.0025H14.2111C12.7669 8.0025 12.3164 8.89875 12.3164 9.81797V12H15.5405L15.0248 15.3605H12.3164V22.5H18.75C19.3467 22.5 19.919 22.2629 20.341 21.841C20.7629 21.419 21 20.8467 21 20.25V3.75C21 3.15326 20.7629 2.58097 20.341 2.15901C19.919 1.73705 19.3467 1.5 18.75 1.5Z"
                                fill="black"
                            />
                        </svg>
                    </a>
                </div>

                <div className="relative w-4/5 mx-auto my-4 flex flex-col md:flex-row items-center justify-between gap-2">
                    <img
                        onClick={(ev) => {
                            ev.stopPropagation();
                            setImageToOpen({
                                src: eleven1,
                                alt: 'Eleven Jazz Ensamble 1, Fotografías por: Ronald Salazar'
                            });
                        }}
                        className="w-full cursor-pointer md:w-1/2"
                        src={eleven1}
                        alt="Eleven Jazz Ensamble 1, Fotografía por: Ronald Salazar"
                    />
                    <img
                        onClick={(ev) => {
                            ev.stopPropagation();
                            setImageToOpen({
                                src: eleven2,
                                alt: 'Eleven Jazz Ensamble 2, Fotografías por: Ronald Salazar'
                            });
                        }}
                        className="w-full cursor-pointer md:w-1/2"
                        src={eleven2}
                        alt="Eleven Jazz Ensamble 2, Fotografía por: Ronald Salazar"
                    />

                    <p className="absolute bottom-2 right-2 text-xs text-isabelline">Fotografías por: Ronald Salazar</p>
                </div>
            </>
        </ExpandableSection>
    );
};

export default ElevenJazzEnsamble;
