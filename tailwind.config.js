/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './constants/*.ts'],
    theme: {
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
        },
    },
}
