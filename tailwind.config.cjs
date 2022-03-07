module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
	extend: {
	    colors: {
		'lightshade':  '#F2F3F1',
		'lightaccent': '#E98B75',
		'main': '#E04629',
		'darkaccent': '#999BBA',
		'darkshade': '#151C2B'
	    },
	    fontFamily: {
		'catchy': ['RobotoSerif', 'serif']
	    },
	    keyframes: {
		'beat': {
		    '0%': {},
		    '7%': {
			'transform': 'scale(1.125)',
		    },
		    '15%': {
			'transform': 'scale(1)'

		    }

		}
	    },
	},
    },
    plugins: [],
}
