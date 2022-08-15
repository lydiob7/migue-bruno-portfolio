import React from 'react';
import clsx from 'clsx';

const AudioCard = ({ author, authorLink, className, link, src, title, ...props }) => {
    return (
        <div className={clsx('w-72 sm:w-80 md:w-96 h-full mx-auto mb-8 shrink-0', className)} {...props}>
            <iframe
                className="w-full h-full md:h-auto md:w-auto mx-auto"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={src}
                title={title}
            ></iframe>
            <div
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily:
                        'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: '100'
                }}
            >
                <a
                    href={authorLink}
                    title={author}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    {author}
                </a>{' '}
                ·{' '}
                <a
                    href={link}
                    title={title}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#cccccc', textDecoration: 'none' }}
                >
                    {title}
                </a>
            </div>
            <h4 className="w-full text-center font-semibold text-2xl mt-8">{title}</h4>
        </div>
    );
};

export default AudioCard;
