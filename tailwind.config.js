/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: {
					dark: '#1a1a1a',
					light: '#f0f0f0',
				},
				accent: {
					primary: '#ff007f',
					hover: '#ff69b4',
				},
				text: {
					primary: '#ffffff',
					secondary: '#a0a0a0',
				},
				card: {
					bg: '#2c2c2c',
				},
				shadow: 'rgba(0, 0, 0, 0.5)',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				'title-lg': '2.5rem',
				'title-md': '1.5rem',
				'body-sm': '0.875rem',
			},
			spacing: {
				'card-gap': '1.5rem',
			},
			boxShadow: {
				'card-hover': '0 4px 6px rgba(255, 0, 127, 0.2)',
			},
			backgroundImage: {
				'gradient-accent': 'linear-gradient(to right, #ff007f, #ff69b4)',
			},
		},
	},
	plugins: [],
};
