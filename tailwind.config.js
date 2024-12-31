import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary': {
					'50': '#ecfdf5',
					'100': '#d1fae5',
					'200': '#a7f3d0',
					'300': '#6ee7b7',
					'400': '#34d399',
					'500': '#10b981',
					'600': '#059669',
					'700': '#047857',
					'800': '#065f46',
					'900': '#064e3b',
					'950': '#022c22',
				},
				'danger': '#e55050',
				'acepted': '#1ab092'
			},
			screens: {
				'tablet': '640px',
				'laptop': '1024px',
				'desktop': '1280px',
			},
		}
	},
	plugins: [],
}