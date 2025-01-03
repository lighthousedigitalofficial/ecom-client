/* eslint-disable no-undef */
import withMT from '@material-tailwind/react/utils/withMT'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        primary: {
            50: '#e6f1ec',
            100: '#cce4da',
            200: '#99c9b6',
            300: '#66ae92',
            400: '#1f6e47', // Lighter, closer to main color
            500: '#0d4121', // Main color
            600: '#0b3a1e',
            700: '#09331b', // Slightly less dark
            800: '#072c17', // Adjusted to maintain smoother gradient
            900: '#052514', // Less dark for consistency
        },
    },
}

export default withMT({
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/react-phone-input-2/lib/style.css',
    ],
    theme: {
        extend: {},
        colors: colors,
    },

    plugins: [],
})
