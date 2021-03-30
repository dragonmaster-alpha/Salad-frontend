import React from 'react'
import {
  Box,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core'
import headerImage from '../../images/salad_crypto.png'
import placeholderImage from '../../images/placeholder.png'
import FlechaSRegular from '../../assets/fonts/FlechaS-Regular.woff2'
import FlechaSRegularItalic from '../../assets/fonts/FlechaS-RegularItalic.woff2'
import FlechaSBold from '../../assets/fonts/FlechaS-Bold.woff2'
import FlechaSBoldItalic from '../../assets/fonts/FlechaS-BoldItalic.woff2'
import { Mallory } from '../../theme'

const flechaS = {
  fontFamily: 'Flecha S',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Flecha S'),
    local('Flecha S'),
    url(${FlechaSRegular}) format('woff2')
  `,
}

const flechaSItalic = {
  fontFamily: 'Flecha S',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Flecha S'),
    local('Flecha S'),
    url(${FlechaSRegularItalic}) format('woff2')
  `,
}
const flechaSBold = {
  fontFamily: 'Flecha S',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Flecha S'),
    local('Flecha S'),
    url(${FlechaSBold}) format('woff2')
  `,
}
const flechaSBoldItalic = {
  fontFamily: 'Flecha S',
  fontStyle: 'italic',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Flecha S'),
    local('Flecha S'),
    url(${FlechaSBoldItalic}) format('woff2')
  `,
}

export const theme = createMuiTheme({
  typography: {
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
      fontFamily: ['Flecha S', 'serif'],
      lineHeight: 1.5,
      fontSize: 18,
      color: '#0A2133',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Mallory, flechaS, flechaSItalic, flechaSBold, flechaSBoldItalic],
      },
    },
  },
})

const useStyles = makeStyles(() => {
  return {
    headerImage: {
      margin: 0,
      padding: 0,

      '& img': {
        width: '100%',
      },

      '& figcaption': {
        textAlign: 'right',
        fontFamily: ['Montserrat', 'sans-serif'],
        fontSize: 12,
      },
    },
    chipCustom: {
      backgroundColor: '#fff',
      borderColor: '#0A2133',
      color: '#0A2133',
      width: 88,
    },
  }
})

const BlogTitle = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={9} md={6}>
        <Typography variant="h1">
          <Box fontWeight={600}>How Does Mining With Salad Affect Your PC?</Box>
        </Typography>
      </Grid>
    </Grid>
  )
}

const BlogImage = () => {
  const classes = useStyles()
  return (
    <Box mt={3} mb={2}>
      <figure className={classes.headerImage}>
        <img src={headerImage} alt="Salad crypto" />
        <figcaption>Caption text here</figcaption>
      </figure>
    </Box>
  )
}

const BlogContent = () => {
  const classes = useStyles()
  return (
    <Box mt={3}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Grid container>
            <Grid item xs={6} sm={12}>
              <Typography variant="h1">
                <Box fontSize={12} fontWeight={700} pb={{ xs: 3, sm: 1 }}>
                  JARED
                </Box>
              </Typography>
              <Typography variant="h1">
                <Box fontSize={12} fontWeight={700}>
                  10 DECEMBER 2019
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Box
                display={{ xs: 'block', sm: 'inline-block', md: 'flex' }}
                flexDirection={{ md: 'column' }}
                mt={{ xs: 0, sm: 3 }}
                mb={1}
                mr={1}
              >
                <Chip classes={{ root: classes.chipCustom }} variant="outlined" size="small" label="Category 1" />
              </Box>
              <Box display="inline-block">
                <Chip classes={{ root: classes.chipCustom }} variant="outlined" size="small" label="Keyword 2" />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box mt={{ xs: 3, sm: 0 }}>
              <Typography>
                <Box>
                  The world of cryptomining can daunt newcomers, after all — those of us with hardware capable of mining
                  have invested a lot of time, money, and love into our rigs, and wouldn’t dare risk our PC’s health for
                  anything, even extra income. <span style={{ textDecoration: 'underline' }}>Our mission at Salad</span>{' '}
                  is to demystify and simplify mining for would-be adopters. We see crypto as critical to web 3.0, and
                  we think we can help jump start the generation of users who make a decentralized internet possible.
                </Box>
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                <Box>
                  With all the <em>rumors swirling about scams</em>, hardware degradation, and profitability (or the
                  lack thereof), we wanted to clear the waters and make a definitive guide to the impact mining has on
                  your PC, from electricity costs to wear and tear. That way on-the-fence miners can make an informed
                  decision about whether to jump in the blockchain headfirst or stick to the sidelines.
                </Box>
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography variant="h2">
                <Box>Will Mining Damage, Degrade, Or Otherwise Harm My PC?</Box>
              </Typography>
            </Box>
            <Box mt={3}>
              <Typography>
                <Box>
                  This is where most potential adopters get stuck. A lot of ink has been spilled on the subject, and
                  misunderstandings abound. Luckily,{' '}
                  <strong>
                    there’s <em>tons</em> of great resources
                  </strong>{' '}
                  from level-headed figures in the tech space, plus this handy-dandy article I wrote a couple of months
                  ago.
                </Box>
              </Typography>
            </Box>
            <Box mt={4}>
              <img style={{ width: '100%' }} src={placeholderImage} />
            </Box>
            <Box mt={2}>
              <Typography variant="body2">
                <Box>
                  We promise, mining (shouldn’t) set your computer on fire, Matt Mets achieved this in photoshop.
                </Box>
              </Typography>
            </Box>
            <Box mt={4}>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>
                  <Typography variant="body1">Bullet Point #1</Typography>
                </li>
                <li>
                  <Typography variant="body1">Bullet Point #2</Typography>
                </li>
                <li>
                  <Typography variant="body1">Bullet Point #3</Typography>
                </li>
              </ul>
            </Box>
          </ThemeProvider>
        </Grid>
        <Grid item xs={12} md={2} />
      </Grid>
    </Box>
  )
}
export const BlogArticle = () => {
  return (
    <Container>
      <BlogTitle />
      <BlogImage />
      <BlogContent />
    </Container>
  )
}
