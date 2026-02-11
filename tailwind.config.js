/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#05422C', // Deep Green
                    light: '#17AF26', // Vibrant Green
                    dark: '#012B1C',
                },
                secondary: {
                    DEFAULT: '#F2BC1B', // Golden Yellow
                },
                accent: {
                    DEFAULT: '#64748B', // Muted Gray
                },
                background: {
                    DEFAULT: '#F4F4F4', // Light Gray
                    white: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['Arial', 'Helvetica', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            }
        },
    },
    plugins: [],
}
