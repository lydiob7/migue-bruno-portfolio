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
            secondary: 'NeueKabel'
        },
        keyframes: {},
        animation: {}
    },
    plugins: [require('@tailwindcss/line-clamp')],
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html']
};
