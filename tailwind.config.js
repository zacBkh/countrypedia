/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './constants/*.ts',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-nunito)'],
                code: ['var(--source-code)'],
            },
            colors: {
                // Page bg color
                'react-bg-light': '#FFFFFF',
                'react-bg-dark': '#23272f',

                // Secondary page bg color
                'react-bg-sec-light': '#F6F7F9',
                'react-bg-sec-dark': '#343A46',

                // Buttons no CTA
                'react-blue-hover-light': 'rgba(35, 39, 47, 0.05)',
                'react-blue-hover-dark': 'rgba(246, 247, 249, 0.05)',

                'react-blue-txt-light&dark': 'rgb(8, 126, 164)',
                'react-blue-txt-light&dark-hover': 'rgba(8, 126, 164,0.8)',

                // Buttons CTA
                'react-button-blue-light': 'rgb(8, 126, 164)',
                'react-button-blue-dark': 'rgb(8, 126,164)',

                // Text
                'react-txt-light': 'rgb(35, 39, 47)',
                'react-txt-dark': 'rgb(246, 247, 249)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
