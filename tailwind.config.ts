import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': {'min': '810px'}
      },
      animation: {
        'blink': 'blink 1s infinite',
        'levitate': 'levitate 5s ease-in-out infinite'
      },
      keyframes: {
        'blink': {
          '0%,49%': {opacity: '0'},
          '50%,99%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
        'levitate': {
          '0%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-35px)'},
          '100%': {transform: 'translateY(0px)'},
        }
      },
      // transitionProperty: {
      //   'height': 'height'
      // },
    },
  },
  plugins: [],
};
export default config;
