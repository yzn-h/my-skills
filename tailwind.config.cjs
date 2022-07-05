const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				"one":"var(--one)",
				"two":"var(--two)",
				"thre":"var(--thre)",
				'for':'var(--for)',
				'five':'var(--five)',

			}
		}
	},

	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {

	  },
};

module.exports = config;
