import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1218px',
    margin: '0 auto',
    padding: '64px 86px 64px 87px',
    background: 'linear-gradient(234.33deg, rgba(31, 79, 34, 0.05) -117.15%, #1F4F22 61.94%)',
    border: '1px solid #1F4F22',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 30px rgba(31, 79, 34, 0.8), inset 0px 0px 50px #205123',
    backdropFilter: 'blur(10px)',
    [theme.breakpoints.down(768)]: {
      // width:'324px',
      // padding:'36px 24px 24px 25px',
      maxWidth: '324px !important',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px 12px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      width: '680px',
      padding: '50px 61px 50px 62px',
    },
  },
  title: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '34px',
    textAlign: 'center',
    color: '#DBF1C1',
    maxWidth: '850px',
    margin: '0 auto 16px',
    [theme.breakpoints.down(768)]: {
      maxWidth: '278px',
      fontSize: '24px',
      lineHeight: '100%',
    },
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '552px',
      lineHeight: '100%',
    },
  },
  description: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#B2D530',
    maxWidth: 326,
    margin: '0 auto 16px',
    [theme.breakpoints.down(768)]: {
      maxWidth: '278px',
      fontSize: '14px',
      lineHeight: '150%',
    },
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '326px',
    },
  },
}))

// get the data using api
const sampleData = {
  title: 'We aim to be the easiest and most trusted way to share idle compute resources.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonLabel: 'More About Salad',
}

export const CTACenter = () => {
  const classes = useStyles()

  const MoreButton = withStyles((theme) => ({
    root: {
      color: '#B2D530',
      backgroundColor: 'transparent',
      fontFamily: 'Mallory',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '18px',
      display: 'flex',
      alignItems: 'center',
      padding: '15px 0',
      minWidth: '326px',
      textTransform: 'capitalize',
      margin: '0 auto',
      borderRadius: '2px',
      border: '1px solid #B2D530',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #B2D530',
      },
      [theme.breakpoints.down(768)]: {
        minWidth: 'auto',
        width: '100%',
        boxSizing: 'border-box',
      },
    },
  }))(Button)

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{sampleData.title}</Typography>
      <Typography className={classes.description}>{sampleData.description}</Typography>
      <MoreButton variant="outlined" color="primary">
        {sampleData.buttonLabel}
      </MoreButton>
    </div>
  )
}
