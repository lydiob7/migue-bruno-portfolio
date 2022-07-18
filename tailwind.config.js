module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            beige: '#E0D9D1',
            darkGreen: '#232616',
            green: '#3E5041',
            terra: '#591310',
            yellow: '#C19A5B',
            orange: '#BA6543'
        },
        fontFamily: {
            primary: 'Poppins',
            secondary: 'SUNN-Line-Regular'
        },
        keyframes: {
            'image-grow': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.15)' }
            },
            'beating-logo': {
                '0%': { transform: 'scale(1)' },
                '10%': { transform: 'scale(0.7)' },
                '25%': { transform: 'scale(1.9)' },
                // '27%': { transform: 'scale(1.65)' },
                '40%': { transform: 'scale(1.65)' },
                '45%': { transform: 'scale(1.52)' },
                '60%': { transform: 'scale(2.5)' },
                '62%': { transform: 'scale(2.45)' },
                '80%': { transform: 'scale(2.20)' },
                '85%': { transform: 'scale(2.40)' },
                '100%': { transform: 'scale(240)' }
            },
            fade: {
                '80%': { opacity: 1 },
                '95%': { opacity: 0 },
                '100%': { opacity: 0 }
            },
            'fade-linear': {
                '100%': { opacity: 0 }
            },
            'translate-word-1': {
                '100%': { top: '1.2rem', right: '-10rem' }
            },
            'translate-word-2': {
                '0%': { top: '1.2rem', right: 0 },
                '100%': { top: '1.2rem', right: '-28rem' }
            },
            'translate-word-1-small': {
                '100%': { top: '1.2rem', right: '-4rem' }
            },
            'translate-word-2-small': {
                '0%': { top: '3rem', right: 0 },
                '100%': { top: '3rem', right: '-12rem' }
            }
        },
        animation: {
            'image-grow': 'image-grow 40s linear infinite',
            'beating-logo': 'beating-logo 1.5s ease-in-out forwards',
            fade: 'fade 1.5s linear forwards',
            'fade-linear': 'fade-linear 1s linear 1s forwards',
            'translate-word-1': 'translate-word-1 2s linear forwards',
            'translate-word-2': 'translate-word-2 2s linear forwards',
            'translate-word-1-small': 'translate-word-1-small 2s linear forwards',
            'translate-word-2-small': 'translate-word-2-small 2s linear forwards'
        }
    },
    plugins: [require('@tailwindcss/line-clamp')],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
