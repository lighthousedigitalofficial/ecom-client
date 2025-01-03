/* eslint-disable no-undef */
import withMT from '@material-tailwind/react/utils/withMT'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        primary: {
            50: '#e6f7ed',
            100: '#ccefdc',
            200: '#99dfb9',
            300: '#66cf97',
            400: '#009444', // main color
            500: '#00843e',
            600: '#007338',
            700: '#006332',
            800: '#00532c',
            900: '#004326',
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
