import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BGASvg from '../../images/BGA-logo 1.svg'
import discordSvg from '../../images/discord-partner 1.svg'
import gameBeatSvg from '../../images/games-beat 1.svg'
import singleStarSvg from '../../images/Vector.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1218px',
    minWidth: '960px',
    margin: '15px auto',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '324px !important',
      minWidth: 'auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px 12px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: '600px',
      padding: '15px 16px',
    },
  },
  itemOddRow: {
    display: 'flex',
    justifyContent: 'center',
    margin: '12px 0 0px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'flex-end',
    },
  },
  itemEvenRow: {
    display: 'flex',
    justifyContent: 'center',
    margin: '12px 0 0px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      justifyContent: 'flex-start',
      paddingLeft: 12,
    },
  },
  itemContainer: {
    maxWidth: '200px',
    width: '200px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {},
    [theme.breakpoints.between('sm', 'md')]: {},
  },
  label: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#1F4F22',
  },
  starContainer: {
    marginTop: 17,
    '& img': {
      marginRight: 14,
      '&:last-child': {
        margin: 0,
      },
    },
  },
}))

export const AsSeenOn = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} lg={3} className={classes.itemOddRow}>
          <div className={classes.itemContainer}>
            <Typography className={classes.label}>Member</Typography>
            <img src={BGASvg} alt="" />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.itemEvenRow}>
          <div className={classes.itemContainer}>
            <Typography className={classes.label}>Biz Partner</Typography>
            <img src={discordSvg} alt="" style={{ marginTop: 4 }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.itemOddRow}>
          <div className={classes.itemContainer}>
            <Typography className={classes.label}>Featured On</Typography>
            <img src={gameBeatSvg} alt="" style={{ marginTop: 2 }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} className={classes.itemEvenRow}>
          <div className={classes.itemContainer}>
            <Typography className={classes.label}>TrustPilot Score</Typography>
            <div className={classes.starContainer}>
              <img src={singleStarSvg} alt="" />
              <img src={singleStarSvg} alt="" />
              <img src={singleStarSvg} alt="" />
              <img src={singleStarSvg} alt="" />
              <img src={singleStarSvg} alt="" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
