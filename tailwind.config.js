module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '1fr': '1fr',
      },
      gridTemplateColumns: {
        '100': '100%',
      },
      justifySelf: {
        start: 'start',
      },
      alignSelf: {
        start: 'start',
      },
      margin: {
        '7px': '7px',
      },
      rotate: {
        '-10': '-10deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.justify-self-start': {
          'justify-self': 'start',
        },
        '.self-start': {
          'align-self': 'start',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
