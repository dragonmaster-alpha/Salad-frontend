import React, { useState } from 'react'
import { Box, Button, Container, Slide, Typography, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  customButton: {
    backgroundColor: '#0A2133',
    color: '#fff',
    textTransform: 'initial',

    '& p': {
      color: '#fff',
    },

    '&:hover': {
      backgroundColor: 'rgba(10,33,51, 0.65)',
    },
  },
  customButtonOutlined: {
    border: '1px solid #0A2133',
  },
}))

export const CookiesNotify = () => {
  const [show, setShow] = useState(true)
  const classes = useStyles()

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Slide in={show} direction="up" mountOnEnter unmountOnExit>
      <Box position="fixed" left={0} bottom={0} width="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" bgcolor="#53A626" py={2} px={3}>
          <Container>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={6} alignItems="center">
                <Typography variant="body2">Cookies can be a salad right? </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display="flex" mt={{ xs: 2, sm: 0 }} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                  <Box mr={2}>
                    <Button
                      classes={{ outlined: classes.customButtonOutlined }}
                      size="small"
                      variant="outlined"
                      disableElevation
                    >
                      <Typography variant="body2" style={{ textTransform: 'initial' }}>
                        Nah
                      </Typography>
                    </Button>
                  </Box>
                  <Button
                    classes={{ root: classes.customButton }}
                    size="small"
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                  >
                    <Typography variant="body2">All the way</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Slide>
  )
}
