
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './src/**/*.{tsx,jsx,js,ts}',
      './src/components/**/*.{tsx,jsx,js,ts}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-inter)"],
        },
      },
    },
    plugins: [],
};
