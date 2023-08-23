// const {nextui} = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // screens: {
            //     lg: { max: '1800px' },
            //     llg: { max: '1285px' },
            //     md: { max: '990px' },
            //     // md - 
            //     sm: { max: '600px' },
            //     // sm - 640
            //     xs: { max: '400px' },
            // },
        },
    },
    plugins: [nextui()]
}

