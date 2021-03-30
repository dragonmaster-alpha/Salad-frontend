import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { COLORS } from '../../theme'

const useStyles = makeStyles(() => {
  return {
    languages: {
      '& p': {
        fontSize: 12,
        lineHeight: 1.5,
        color: COLORS.text.footer,
      },
    },
  }
})

export const FooterInternational = () => {
  const classes = useStyles()
  return (
    <Box>
      <Box color={COLORS.text.footer}>
        <Typography variant="body2" color="inherit">
          International
        </Typography>
        <Box className={classes.languages} mt={{ xs: 1 }}>
          <Grid container>
            <Grid item xs={6}>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  български
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Deutsch
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Cestina
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Español
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Françaisרִית
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Polski
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Romana
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Slovak
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  Türkçe
                </Typography>
              </Link>
              <Link color="inherit">
                <Typography variant="body2" color="inherit">
                  English
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
