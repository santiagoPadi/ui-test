const { height, width, spacing, fontSize, opacity } = require('tailwindcss/defaultTheme')

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
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '12/12': '100%',
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
      '700': '700px',
      full: '100%',
    },
    fontSize: {
      ...fontSize,
      21: '21px',
      37: '37.1px',
      15: '15px',
      60: '60px',
    },
    opacity: {
      ...opacity,
      '10': '0.1',
      '20': '0.2',
      '85': '0.85',
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
