import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import allTruthSvg from '../../images/all-truth-no-bullshit 1.svg'

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
    [theme.breakpoints.between(768, 'md')]: {
      width: '680px',
      padding: '0px 44px',
    },
  },
  contactPanel: {
    margin: '84px auto',
    maxWidth: '413px',
    [theme.breakpoints.down(768)]: {
      margin: '68px auto 0px',
      '& img': {
        width: '100% !important',
      },
    },
    [theme.breakpoints.between(768, 'md')]: {
      margin: '68px auto',
      display: 'flex',
      justifyContent: 'flex-end',
      '& img': {
        width: '323px !important',
      },
    },
    '& img': {
      width: '500px',
    },
  },
  loginPanel: {
    margin: '84px auto',
    maxWidth: '413px',
    [theme.breakpoints.down(768)]: {
      margin: '36px auto 58px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '323px',
      margin: '68px 0 68px 26px',
    },
  },
  title: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '26px',
    color: '#DBF1C1',
    marginBottom: '16px',
    [theme.breakpoints.between(768, 'md')]: {
      fontSize: '24px',
      lineHeight: '26px',
    },
  },
  description: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#0A2133',
    maxWidth: '413px',
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '323px',
    },
  },
}))

// get the data using api
const sampleData = {
  title: 'Forthright Trustworthiness',
  description:
    "Great relationships establish and maintain trust. When honesty takes a back seat that trust is eroded little by little. In an industry where users are already skeptical, transparency is key to building trust. Even when it's risky or painful, honesty really is the best policy.",
}

export const TwoColumnMediaLeft = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <div className={classes.contactPanel}>
            <div>
              <img src={allTruthSvg} alt="all truth no bullet" />
            </div>
          </div>
        </Grid>
        <Grid item md={6} className={classes.headTitleRow}>
          <div className={classes.loginPanel}>
            <Typography className={classes.title}>{sampleData.title}</Typography>
            <Typography className={classes.description}>{sampleData.description}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
