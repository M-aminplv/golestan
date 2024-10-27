/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			"footer-bg": "url('/assets/header-back.png')",
		},
	},
	plugins: [require("flowbite/plugin")],
};
