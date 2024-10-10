/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                ['tn']: '365px',
                ['3xl']: '1680px',
                ['4xl']: '1920px',
                ['ultra']: '2560px',
            },
        },
        fontFamily: {
            sans: ['Mulish'],
        },
        colors: {
            neutral: {
                50: '#f8f8f8',
                100: '#ebebeb',
                200: '#dcdcdc',
                300: '#bdbdbd',
                400: '#989898',
                500: '#7c7c7c',
                600: '#656565',
                700: '#525252',
                800: '#464646',
                900: '#3d3d3d',
                950: '#292929',
            },

            red: {
                50: '#fef2f3',
                100: '#fde6e7',
                200: '#fbd0d5',
                300: '#f7aab2',
                400: '#f27a8a',
                500: '#ea546c',
                600: '#d5294d',
                700: '#b31d3f',
                800: '#961b3c',
                900: '#811a39',
                950: '#48091a',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
