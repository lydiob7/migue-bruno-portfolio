import React from 'react';

const Contact = (props) => (
    <div {...props} id="contacto" className="h-screen bg-ciel flex items-center justify-center">
        <a className="text-3xl font-bold" href="mailto:contactomail@gmail.com" target="_blank" rel="noreferrer">
            miguelbrusan@gmail.com
        </a>
    </div>
);

export default Contact;
