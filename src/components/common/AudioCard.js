import React from 'react';
import clsx from 'clsx';

const AudioCard = ({ author, authorLink, className, link, src, title, ...props }) => {
    return (
        <div className={clsx('w-auto mx-auto mb-8 shrink-0 animate-fade-in delay-1000', className)} {...props}>
            <h4 className="w-full font-semibold text-2xl mt-8">{title}</h4>
            <iframe
                className="w-full h-[200px] mx-auto my-4"
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
        </div>
    );
};

export default AudioCard;
