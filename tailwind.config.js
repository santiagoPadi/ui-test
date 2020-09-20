const { height, width, spacing, fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        ...spacing,
        ph: '10%',
      },
      height: {
        ...height,
        smIcon: '200px',
        icon: '24px',
        50: '50px',
        80: '80px',
        100: '100px',
        500: '500px',
        550: '550px',
      },
      width: {
        ...width,
        smIcon: '20px',
        icon: '24px',
        45: '45%',
        49: '49%',
      },
      colors: {
        blue: '#1cbbb4',
        yellow: '#ffad1d',
        gray: '#e8e8e7',
        'op-black': 'rgba(0,0,0,0.5)',
      },
    },
    minWidth: {
      '0': '0',
      '1/10': '10%',
      '1/8': '12.5%',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    minHeight: {
      '300': '300px',
      full: '100%',
    },
    fontSize: {
      ...fontSize,
      21: '21px',
      37: '37.1px',
      15: '15px',
      60: '60px',
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    margin: ['responsive', 'even', 'odd'],
    padding: ['responsive', 'even', 'odd'],
    minHeight: ['responsive'],
    fontSize: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
