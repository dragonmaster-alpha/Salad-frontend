import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { COLORS } from '../../theme'

const currentYear = new Date().getFullYear()

export const Copyright = () => {
  return (
    <Box color={COLORS.text.footer}>
      <Typography variant="body2" color="inherit">
        © {currentYear} Salad Technologies. All rights reserved. All wrongs reversed.
      </Typography>
    </Box>
  )
}
