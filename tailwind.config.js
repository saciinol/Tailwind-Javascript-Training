/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'city': "url('/dist/images/city.jpg')",
			},
		},
	},
	plugins: [],
}
