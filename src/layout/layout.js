import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin, faReddit, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Box, ThemeProvider } from '@material-ui/core'
import React from 'react'
import '../assets/css/main.css'
import { theme } from '../theme'
import { Footer } from './footer'

library.add(fab, faGithub, faTwitter, faReddit, faYoutube, faTwitch, faLinkedin)

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          backgroundImage: 'linear-gradient(to right, #56A431 , #AACF40)',
        }}
      >
        {children}
      </main>
      <Box height={'100px'}></Box>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
