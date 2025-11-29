module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
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
