import { createMuiTheme } from '@material-ui/core'
import MalloryBookTtf from '../assets/fonts/Mallory-Book.ttf'

export const Mallory = {
  fontFamily: 'Mallory',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Mallory'),
    local('Mallory Book'),
    url(${MalloryBookTtf}) format('truetype')
  `,
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Mallory, Arial, sans-serif',
    h1: {
      fontFamily: ['Mallory', 'sans-serif'],
      fontSize: '2rem',
      lineHeight: 1.0625,
      color: '#0A2133',
    },
    h2: {
      fontFamily: ['Mallory', 'sans-serif'],
      fontSize: '1.5rem',
      lineHeight: 1.083,
      color: '#0A2133',
    },
    body1: {
      fontFamily: ['Mallory', 'sans-serif'],
      lineHeight: 1.5,
      color: '#0A2133',
    },
    body2: {
      fontFamily: ['Mallory', 'sans-serif'],
      color: '#0A2133',
    },
    p: {
      fontFamily: ['Mallory'],
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Mallory],
      },
    },
  },
})

export const COLORS = {
  brandDarkBlue: '#0A2133',
  primaryGreen: '#B2D530',
  text: {
    footer: '#53A626',
    lightGreen: '#DBF1C1',
    primaryGreen: '#B2D530',
    darkBlue: '#0A2133',
  },
}
