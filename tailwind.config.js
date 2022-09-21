module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'landing-page': 'url(assets/images/home-page.jpeg)'
            },
            colors: {
                ciel: '#BED6EF',
                darkGreen: '#14191A',
                isabelline: '#F5F0EA',
                white: '#FFFFFF'
            }
        },
        fontFamily: {
            primary: 'NeueKabel',
            secondary: 'Fira Sans'
        },
        keyframes: {
            'fade-in': {
                '0%': { opacity: 0 },
                '100%': { opacity: 1 }
            }
        },
        animation: {
            'fade-in': 'fade-in 500ms linear forwards',
            'fade-in-second': 'fade-in 500ms linear .5s forwards'
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
