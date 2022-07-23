import React from 'react';

const DoubleArrow = ({ direction = 'down', fill = 'fill-ciel', height = '45', width = '45', ...otherProps }) => {
    return (
        <>
            {(direction === 'right' || direction === 'left') && (
                <svg
                    {...otherProps}
                    width={width}
                    height={height}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.69 30.0167L18.3317 27.6617L25.9984 19.995L18.3317 12.3283L20.69 9.98334L30.7067 20L20.6917 30.0167H20.69ZM11.6484 30.0167L9.29169 27.6617L16.9584 19.995L9.29169 12.34L11.6484 9.98334L21.6667 20L11.65 30.0167H11.6484Z"
                        className={fill}
                    />
                </svg>
            )}

            {(direction === 'down' || direction === 'up') && (
                <svg
                    {...otherProps}
                    width={width}
                    height={height}
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.24685e-06 29.0077L5.28994 26.3199L22.5112 35.0576L39.7325 26.3199L45 29.0077L22.5 40.4237L3.24677e-06 29.0096L3.24685e-06 29.0077ZM3.69729e-06 18.7028L5.28994 16.0169L22.5112 24.7547L39.7063 16.0169L45 18.7028L22.5 30.1208L3.69721e-06 18.7047L3.69729e-06 18.7028Z"
                        className={fill}
                    />
                </svg>
            )}
        </>
    );
};

export default DoubleArrow;
