import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import ArloAvatar from '../../images/person/arlo.png'
import EmptyAvatar from '../../images/person/Avatar.png'
import BobAvatar from '../../images/person/bob.png'
import CameronAvatar from '../../images/person/cameron.png'
import DanielAvatar from '../../images/person/daniel.png'
import EricAvatar from '../../images/person/eric.png'
import JaredAvatar from '../../images/person/jared.png'
import KyleAvatar from '../../images/person/kyle.png'

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
      padding: '20px 44px',
    },
  },
  title: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '34px',
    color: '#0A2133',
    margin: '68px 0 38px 100px',
    [theme.breakpoints.down(768)]: {
      margin: '68px 0 38px 0px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      margin: '68px 0 38px 32px',
    },
  },
  userBox: {
    width: '115px',
    textAlign: 'center',
    marginBottom: 16,
    verticalAlign: 'bottom',
    display: 'inline-table',
    minHeight: 170,
    marginLeft: 8,
    marginRight: 8,
    '&:nth-child(2n+1)': {
      marginLeft: 0,
    },
    '&:nth-child(2n+2)': {
      marginRight: 0,
    },
    // '& img':{
    //   borderRadius: '50%',
    //   border: '1px solid #53A626'
    // },
    [theme.breakpoints.between(768, 'md')]: {
      width: '149px',
      marginLeft: 14,
      marginRight: 14,
      '&:nth-child(2n+1)': {
        marginLeft: 14,
      },
      '&:nth-child(2n+2)': {
        marginRight: 14,
      },
      '&:nth-child(4n+1)': {
        marginLeft: 0,
      },
      '&:nth-child(4n+4)': {
        marginRight: 0,
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '149px',
      marginLeft: 35,
      marginRight: 35,
      '&:nth-child(2n+1)': {
        marginLeft: 35,
      },
      '&:nth-child(2n+2)': {
        marginRight: 35,
      },
      '&:nth-child(4n+1)': {
        marginLeft: 35,
      },
      '&:nth-child(4n+4)': {
        marginRight: 35,
      },
      '&:nth-child(9n+1)': {
        marginLeft: 0,
      },
      '&:nth-child(9n+5)': {
        marginRight: 0,
      },
      '&:nth-child(9n+6)': {
        marginLeft: 56,
        marginRight: 56,
      },
      '&:nth-child(9n+7)': {
        marginLeft: 56,
        marginRight: 56,
      },
      '&:nth-child(9n+8)': {
        marginLeft: 56,
        marginRight: 56,
      },
      '&:nth-child(9n+9)': {
        marginLeft: 56,
        marginRight: 56,
      },
    },
  },
  name: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    textAlign: 'center',
    color: '#0A2133',
    marginTop: 12,
  },
  role: {
    fontFamily: 'Mallory',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '150%',
    textAlign: 'center',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#DBF1C1',
  },
  boxContainer: {
    textAlign: 'center',
  },
}))

// get the data using api
const sampleData = [
  { name: 'Bob', role: 'CEO', photo: BobAvatar },
  { name: 'Arlo', role: 'BRAND DIRECTOR', photo: ArloAvatar },
  { name: 'Jared', role: 'DIRECTOR OF CHANNEL PARTNERS', photo: JaredAvatar },
  { name: 'Daniel', role: 'DIRECTOR OF PRODUCT', photo: DanielAvatar },
  { name: 'Kyle', role: 'DIRECTOR of engineering', photo: KyleAvatar },
  { name: 'Cameron', role: 'technical support', photo: CameronAvatar },
  { name: 'Scott', role: 'front end developer', photo: '' },
  { name: 'Eric', role: 'sr. product manager', photo: EricAvatar },
  { name: 'Keith', role: 'copywriter', photo: '' },
  { name: 'Alec', role: 'community manager', photo: '' },
  { name: 'Morgan', role: 'director of marketing', photo: '' },
  { name: 'Ase', role: 'REWARDs MANAGER', photo: '' },
  { name: 'Ben', role: 'software engineer', photo: '' },
  { name: 'Jason', role: 'engineer', photo: '' },
]

export const Staff = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Staff</Typography>
      <div className={classes.boxContainer}>
        {sampleData.map((user, index) => {
          if (index % 9 < 5) {
            return (
              <Box className={classes.userBox} key={index}>
                <img src={user.photo !== '' ? user.photo : EmptyAvatar} alt="" />
                <Typography className={classes.name}>{user.name}</Typography>
                <Typography className={classes.role}>{user.role}</Typography>
              </Box>
            )
          } else {
            return (
              <Box className={classes.userBox} key={index}>
                <img src={user.photo !== '' ? user.photo : EmptyAvatar} alt="" />
                <Typography className={classes.name}>{user.name}</Typography>
                <Typography className={classes.role}>{user.role}</Typography>
              </Box>
            )
          }
        })}
      </div>
    </div>
  )
}
