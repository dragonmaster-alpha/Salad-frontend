import { Box, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { FooterInternational } from './International'

export const FooterMenu = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Link color="inherit">
            <Typography variant="body2" color="inherit">
              Salad Status
            </Typography>
          </Link>
          <Link color="inherit">
            <Typography variant="body2" color="inherit">
              Terms & Conditions
            </Typography>
          </Link>
          <Link color="inherit">
            <Typography variant="body2" color="inherit">
              Privacy Policy
            </Typography>
          </Link>
          <Link color="inherit">
            <Typography variant="body2" color="inherit">
              Careers
            </Typography>
          </Link>
          <Link color="inherit">
            <Typography variant="body2" color="inherit">
              Salad Rewards
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box pt={{ xs: 3, sm: 0 }}>
            <FooterInternational />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
