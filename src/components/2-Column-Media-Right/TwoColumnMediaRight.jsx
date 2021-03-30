import React, { useEffect, useRef, useState } from 'react'
import { Typography, Grid, Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import ReactPlayer from "react-player";
import ContainedButton from '../../components/ContainedButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1218px',
    margin: '0 auto',
    padding: 0,
    [theme.breakpoints.down(768)]: {
      // width:'324px',
      maxWidth: '324px !important',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px 12px',
    },
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  leftPanel: {
    maxWidth: '413px',
    '& img': {
      width: '500px',
    },
  },
  title: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '64px',
    lineHeight: '100%',
    color: '#DBF1C1',
    marginBottom: '16px',
    [theme.breakpoints.between(768, 'md')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.down(768)]: {
      fontSize: '36px',
    },
  },
  description: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#0A2133',
    maxWidth: '325px',
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '266px',
    },
  },
  buttonContainer: {
    maxWidth: '325px',
    marginTop: 16,
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '266px',
      marginTop: 16,
    },
    [theme.breakpoints.down(768)]: {
      maxWidth: '100%',
      marginTop: 16,
    },
  },
}))

// get the data using api
const sampleData = {
  title: 'The Kitchen',
  description:
    'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu',
  buttonLabel: 'Large',
  videoLink: 'https://www.youtube.com/watch?v=ug50zmP9I7s',
}

export const TwoColumnMediaRight = () => {
  const classes = useStyles()
  const containerRef = useRef()
  const [dimension, setDimension] = useState({})

  useEffect(() => {
    const cal = () => {
      const { width } = containerRef.current.getBoundingClientRect()
      setDimension({ width, height: (width * 9) / 16 })
    }
    cal()

    window.addEventListener('resize', cal)

    return () => {
      window.removeEventListener('resize', cal)
    }
  }, [])

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={5} md={4}>
          <div>
            <Typography className={classes.title}>{sampleData.title}</Typography>
            <Typography>{sampleData.description}</Typography>
            <div className={classes.buttonContainer}>
              <ContainedButton label={sampleData.buttonLabel} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
          <div>
            <Box ref={containerRef} boxShadow={{ sm: 'none' }}>
              <iframe
                title="Hello"
                src="https://player.vimeo.com/video/218056969?color=ffffff&byline=0"
                width={dimension.width}
                height={dimension.height}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                style={{ width: '100%' }}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
