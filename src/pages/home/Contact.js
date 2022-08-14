import React from 'react';

const Contact = (props) => (
    <div
        {...props}
        id="contacto"
        className="h-screen bg-darkGreen text-isabelline grid content-center
        px-6 sm:px-12 md:px-24 text-xl"
    >
        <div className="flex flex-col justify-center gap-4 md:w-4/5 lg:w-3/5 mx-auto md:text-2xl lg:text-3xl">
            <h2 className="text-4xl md:text-6xl text-center font-bold mb-8 md:mb-24">Contacto</h2>
            <p className="md:hidden">Contacta conmigo si estás interesado en alguno de los trabajos que realizo:</p>
            <p className="hidden md:inline-block">
                Contacta conmigo si estás interesado en alguno de los trabajos que realizo: arreglos, composiciones,
                transcripciones, pianista acompañante.
            </p>
            <p className="font-medium md:hidden">arreglos, composiciones, transcripciones, pianista acompañante.</p>
            <p>También puedes contactarme para cualquier consulta o comentario.</p>
            <a
                className="btn mt-4 md:mt-16 mx-auto"
                href="mailto:miguelbrusan@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                Enviar mensaje
            </a>
        </div>
    </div>
);

export default Contact;
