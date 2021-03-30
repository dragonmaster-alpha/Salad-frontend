import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import React from 'react'
import discordSvg from '../../images/discord 1.svg'

const socialsArray = [
  { iconName: 'facebook' },
  { iconName: 'reddit' },
  { iconName: 'twitter' },
  { iconName: 'instagram' },
  { iconName: 'discord' },
  { iconName: 'pinterest' },
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1218px',
    margin: '0 auto',
    padding: 0,
    [theme.breakpoints.down(768)]: {
      maxWidth: '324px !important',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px 12px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      width: '680px',
      padding: '20px 44px',
    },
  },
  memberRow: {
    [theme.breakpoints.down(768)]: {
      width: '100%',
    },
  },
  iconRow: {
    [theme.breakpoints.down(768)]: {
      width: '100%',
    },
  },
  memberPanel: {
    margin: '55px auto',
    maxWidth: '441px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down(768)]: {
      display: 'block',
      marginBottom: 0,
    },
  },
  iconPanel: {
    margin: '100px auto',
    maxWidth: '324px',
    textAlign: 'center',
    '& span:last-child svg': {
      margin: 0,
    },
    [theme.breakpoints.down(768)]: {
      margin: '34px auto 56px',
    },
  },
  title: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '34px',
    color: '#0A2133',
    [theme.breakpoints.down(768)]: {
      textAlign: 'center',
      marginTop: 32,
    },
  },
  member: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '26px',
    color: '#0A2133',
    marginBottom: 16,
    [theme.breakpoints.down(768)]: {
      textAlign: 'center',
    },
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: 160,
    },
  },
  fontIcon: {
    fontSize: '24px',
    color: '#0A2133',
    lineHeight: '22px',
    marginRight: 24,
  },
  socialIcon: {
    marginRight: 41,
    [theme.breakpoints.down(768)]: {
      marginRight: 0,
      textAlign: 'center',
    },
    [theme.breakpoints.between(768, 'md')]: {
      marginRight: 39,
    },
  },
}))

// get the data using api
const sampleData = {
  socialNumber: '20,000+',
  buttonLabel: 'Join Server',
}

export const Social = () => {
  const classes = useStyles()

  const JoinButton = withStyles((theme) => ({
    root: {
      color: '#0A2133',
      backgroundColor: 'transparent',
      fontFamily: 'Mallory',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '18px',
      display: 'flex',
      alignItems: 'center',
      padding: '7px 12px',
      minWidth: '100px',
      textTransform: 'capitalize',
      margin: 0,
      borderRadius: '2px',
      border: '1px solid #0A2133',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: 'transparent',
        border: '1px solid #0A2133',
      },
      [theme.breakpoints.down(768)]: {
        margin: '0 auto',
      },
    },
  }))(Button)

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6} className={classes.memberRow}>
          <div className={classes.memberPanel}>
            <div className={classes.socialIcon}>
              <img src={discordSvg} alt="discord" />
            </div>
            <div className={classes.memberInfo}>
              <Typography className={classes.title}>Discord</Typography>
              <Typography className={classes.member}>{sampleData.socialNumber} Members</Typography>
              <JoinButton variant="outlined" color="primary">
                {sampleData.buttonLabel}
              </JoinButton>
            </div>
          </div>
        </Grid>
        <Grid item md={6} className={classes.iconRow}>
          <div className={classes.iconPanel}>
            {socialsArray.map((s) => {
              return (
                <Box component="span" key={s.iconName}>
                  <FontAwesomeIcon icon={['fab', s.iconName]} className={classes.fontIcon} />
                </Box>
              )
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
