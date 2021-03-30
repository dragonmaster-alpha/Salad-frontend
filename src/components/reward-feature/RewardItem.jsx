import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    paddingRight: 16,
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      paddingRight: 8,
    },
  },
  media: {
    // height: "50%",
    width: '100%',
  },
}))

export const RewardItem = ({ item }) => {
  const classes = useStyles()
  const { src, id } = item

  return (
    <Box className={classes.root}>
      <img className={classes.media} src={src}></img>
    </Box>
  )
}
