import { Box, Container } from '@material-ui/core'
import React from 'react'
import { Copyright } from '../components/footer/Copyright'
import { FooterMenu } from '../components/footer/FooterMenu'
import { Logo } from '../components/footer/Logo'
import { SaladEcoSystem } from '../components/footer/SaladEcosystem'
import { Socials } from '../components/footer/Socials'
import { COLORS } from '../theme'

export const Footer = () => {
  return (
    <Box bgcolor="#0A2133" color={COLORS.text.footer}>
      <Container>
        <Box pt={6} pb={3}>
          <Logo />
          <Box pt={4}>
            <FooterMenu />
          </Box>
          <Box pt={{ xs: 6, sm: 0 }}>
            <Socials />
          </Box>
          <Box pt={3}>
            <SaladEcoSystem />
          </Box>
          <Box pt={3}>
            <Copyright />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
