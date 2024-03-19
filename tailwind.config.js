/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				text: { light: "#171617", dark: "#E8EEEE", "dark-dim": "#7383A3" },
				primary: { DEFAULT: "#405a8d", accent: "#B1476A" },
				secondary: "#bed8d9",
				tertiary: "#D2C8C7",
			},
			backgroundColor: {
				main: { DEFAULT: "#e8eeee" },
			},
			fontSize: {
				sm: "0.750rem",
				base: "1rem",
				xl: "1.333rem",
				"2xl": "1.777rem",
				"3xl": "2.369rem",
				"4xl": "3.158rem",
				"5xl": "4.210rem",
			},
			fontFamily: {
				heading: "Josefin Sans",
				body: "Josefin Sans",
			},
			fontWeight: {
				normal: "400",
				bold: "700",
			},
		},
	},
	plugins: [],
};
