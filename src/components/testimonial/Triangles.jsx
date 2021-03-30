import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import triangle_fractal from '../../images/triangle_fractal.svg'

const useStyles = makeStyles(() => {
  return {
    display: {
      position: 'absolute',
      display: 'none',
      marginRight: '80%',
      right: '0',
      ['@media (min-width:600px)']: {
        display: 'unset',
      },
      ['@media (min-width:780px)']: {
        display: 'unset',
      },
    },
  }
})

export const Triangles = () => {
  const classes = useStyles()

  return (
    <Box className={classes.display}>
      <img src={triangle_fractal} alt="Triangles"></img>
    </Box>
  )
}
