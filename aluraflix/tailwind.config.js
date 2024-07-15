/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				alblue: '#2271D1',
				alwhite: '#F5F5F5',
			},
		},
	},
	plugins: [],
};
