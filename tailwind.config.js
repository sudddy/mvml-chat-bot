/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors : {
        'mvml-base' : '#eef1fe',
        'custom-color': 'rgb(238, 241, 254)'
      },
      transformOrigin: ['responsive', 'hover', 'focus'],
      keyframes: {
        'moving-line': {
            from: {
                bottom: '0%',
                opacity: '0',
            },
            to: {
                bottom: '13%',
                opacity: '100',
            },
        },
    },
    animation: {
        'moving-line': 'moving-line 1s ease-in-out forwards',
    },
    },
  },
  plugins: [],
};