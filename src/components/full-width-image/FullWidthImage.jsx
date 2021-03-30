import { Box, Container, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import HowItWorkMd from '../../images/how_salad_md.svg'
import HowItWorkXs from '../../images/how_salad_xs.svg'
import { COLORS } from '../../theme'

export const FullWidthImage = () => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  let imageSrc

  if (xs) {
    imageSrc = HowItWorkXs
  } else {
    imageSrc = HowItWorkMd
  }

  return (
    <Container>
      <Box>
        <Typography variant="h1">
          <Box color={COLORS.text.lightGreen}>How Salad Work</Box>
        </Typography>
        <Box mt={3}>
          <img style={{ width: '100%' }} src={imageSrc} alt="How salad work pic" />
        </Box>
      </Box>
    </Container>
  )
}
