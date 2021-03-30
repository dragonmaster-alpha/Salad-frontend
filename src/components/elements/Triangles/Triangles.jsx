import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import triangle_fractal from '../../../images/triangle_fractal.svg'

const useStyles = makeStyles(() => {
  return {
    display: {
      position: 'absolute',
      display: 'none',
      right: '0',
      bottom: '-15%',
      ['@media (max-width:800px)']: {
        display: 'unset',
        marginRight: '3%',
      },
      ['@media (max-width:600px)']: {
        display: 'unset',
        marginRight: '0%',
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
