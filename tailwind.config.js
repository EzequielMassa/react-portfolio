/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			dropShadow: {
				sm: '2px 2px 5px #6706b7',
			},
		},
	},
	plugins: [],
}
