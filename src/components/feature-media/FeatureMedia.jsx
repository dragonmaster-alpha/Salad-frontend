import { Box, Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useState } from 'react'
import { TextField } from '../elements/TextField'
import { Video } from '../elements/Video/Video'

const useStyles = makeStyles((t) => ({
  controls: {},
  customButton: {
    padding: '12px',
    [t.breakpoints.down('sm')]: {
      padding: '8px 12px',
    },
    backgroundColor: '#B2D530',

    '&:hover': {
      backgroundColor: '#B2D530',
    },
  },
  customTextField: {
    '& input': {
      height: 22,
    },
  },
}))

export const FeatureMedia = () => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('xs'))
  const [playing, setPlaying] = useState(false)

  const classes = useStyles()

  const handleOnPlay = () => {
    setPlaying(true)
  }

  const handleOnPause = () => {
    setPlaying(false)
  }

  const showContent = xs || !playing

  return (
    <Box position="relative" boxShadow={{ xs: 'none', sm: '0px 6.31579px 40.4211px #0a2133' }}>
      <Box boxShadow={{ xs: '0px 6.31579px 40.4211px #0a2133', sm: 'none' }}>
        <Video onPlay={handleOnPlay} onPause={handleOnPause} />
      </Box>
      <Box
        visibility={showContent ? 'visible' : 'hidden'}
        position={{ xs: 'initial', sm: 'absolute' }}
        p={{ xs: 4, sm: 0 }}
        bottom={{ xs: 32 }}
        left={{ xs: 0, md: 128, sm: 64 }}
        maxWidth={{ xs: '100%', sm: '50%' }}
      >
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box>
              <Typography variant="h1">
                <Box fontWeight="bold" color={{ xs: '#0A2133', sm: '#53A626' }}>
                  Pay with <Box component="br" display={{ xs: 'none', md: 'inline-block' }} /> Your{' '}
                  <Box component="br" display={{ xs: 'none', sm: 'inline-block', md: 'none' }} /> PC{' '}
                  <Box component="br" display={{ xs: 'none', md: 'inline-block' }} /> Power
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={{ xs: 'flex', sm: 'flex' }}
              height="100%"
              mt={{ xs: 2, sm: 3, md: 0 }}
              ml={{ xs: 0, md: 3 }}
              alignItems={{ md: 'flex-end' }}
            >
              <Typography variant="body2">
                <Box color={{ xs: '#DBF1C1' }}>
                  Turn your computer’s power into cash you can spend on subscriptions, gift cards, games and more.
                </Box>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box display={{ xs: 'none', md: 'flex' }} mt={2} mb={4}>
          <Button classes={{ root: classes.customButton }}>Download</Button>
        </Box>

        <Box mt={{ xs: 4, sm: 2 }} display={{ md: 'none' }}>
          <Box>
            <Typography variant="caption">Text Field</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <TextField size="small" className={classes.customTextField} />
            </Box>
            <Button classes={{ root: classes.customButton }}>CTA</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
