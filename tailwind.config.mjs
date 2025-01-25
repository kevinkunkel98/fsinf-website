/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			transformOrigin: {
				center: 'center',
			},
		},
	},
	plugins: [
		require('flowbite/plugin') // Add Flowbite plugin here
	],
};
