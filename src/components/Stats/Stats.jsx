import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useRef, useState } from 'react'
import triangleSvg from '../../images/triangles.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1218px',
    margin: '0 auto 20px',
    padding: '20px 0',
    [theme.breakpoints.down(768)]: {
      maxWidth: '324px',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px 12px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      width: '670px',
      padding: '20px 49px',
    },
  },
  headerTitle: {
    fontFamily: 'Mallory',
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '34px',
    color: '#DBF1C1',
    marginBottom: '27px',
    marginLeft: '30px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
    },
  },
  userBox: {
    background: 'linear-gradient(234.33deg, rgba(178, 213, 48, 0.06) 17.15%, #B2D530 61.94%)',
    border: '1px solid #B2D530',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 30px rgba(178, 213, 48, 0.8), inset 0px 0px 50px #B2D530',
    backdropFilter: 'blur(5px)',
    textAlign: 'left',
    padding: '24px 18px 18px 22px',
    marginBottom: '20px',
    maxWidth: '324px',
    minWidth: '270px',
    '& h4': {
      color: '#0A2133',
      fontSize: '16px',
      marginBottom: '12px',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    '& h3': {
      color: '#53A626',
      fontSize: '60px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    [theme.breakpoints.down(768)]: {
      background: 'linear-gradient(234.33deg, rgba(255, 153, 51, 0.06) 17.15%, #FF9933 61.94%)',
      border: '1px solid #FF9933',
      boxShadow: '0px 5px 30px rgba(255, 153, 51, 0.8), inset 0px 0px 50px #FF9933',
      textAlign: 'center',
      padding: '24px 0 18px',
      marginBottom: '20px',
      width: '100%',
      minWidth: '100%',
      '& h4': {
        color: '#FCFCFC',
        marginBottom: '10px',
      },
      '& h3': {
        color: '#0A2133',
        fontSize: '48px',
      },
    },
    [theme.breakpoints.between(768, 'md')]: {
      background: 'linear-gradient(234.33deg, rgba(255, 153, 51, 0.06) 17.15%, #FF9933 61.94%)',
      border: '1px solid #FF9933',
      boxShadow: '0px 5px 30px rgba(255, 153, 51, 0.8), inset 0px 0px 50px #FF9933',
      '& h4': {
        color: '#FCFCFC',
      },
      '& h3': {
        color: '#0A2133',
      },
    },
  },
  computeBox: {
    background:
      'linear-gradient(186.66deg, rgba(252, 252, 252, 0.06) -33.17%, rgba(252, 252, 252, 0.006) 33.66%, rgba(252, 252, 252, 0.06) 57.03%, rgba(252, 252, 252, 0.12) 101.23%)',
    boxShadow:
      '34px 34px 50px rgba(0, 0, 0, 0.1), 16px 8px 73px rgba(252, 252, 252, 0.05), inset -8px -6px 80px rgba(252, 252, 252, 0.05)',
    backdropFilter: 'blur(2px)',
    textAlign: 'left',
    padding: '24px 22px 19px 24px',
    marginBottom: '20px',
    marginLeft: '36px',
    maxWidth: '324px',
    minWidth: '240px',
    border: '1px solid #FCFCFC',
    '& h4': {
      background: 'transparent',
      letterSpacing: '0.05em',
      fontSize: '16px',
      color: '#FCFCFC',
      marginBottom: '12px',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    '& h3': {
      background: 'transparent',
      fontSize: '60px',
      color: '#0A2133',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    [theme.breakpoints.down(768)]: {
      background:
        'linear-gradient(186.54deg, rgba(252, 252, 252, 0.06) -32.65%, rgba(252, 252, 252, 0.006) 33.12%, rgba(252, 252, 252, 0.06) 56.13%, rgba(252, 252, 252, 0.12) 99.63%)',
      textAlign: 'center',
      padding: '24px 0 18px',
      marginBottom: '20px',
      marginLeft: '0px',
      width: '100%',
      minWidth: '100%',
      '& h4': {
        marginBottom: '10px',
      },
      '& h3': {
        fontSize: '48px',
      },
    },
    [theme.breakpoints.between(768, 'md')]: {
      background:
        'linear-gradient(186.54deg, rgba(252, 252, 252, 0.06) -32.65%, rgba(252, 252, 252, 0.006) 33.12%, rgba(252, 252, 252, 0.06) 56.13%, rgba(252, 252, 252, 0.12) 99.63%)',
      marginLeft: '23px',
      '& h4': {
        marginBottom: '10px',
      },
      '& h3': {
        //
      },
    },
  },
  itemsRedeemedBox: {
    background:
      'linear-gradient(186.66deg, rgba(252, 252, 252, 0.06) -33.17%, rgba(252, 252, 252, 0.006) 33.66%, rgba(252, 252, 252, 0.06) 57.03%, rgba(252, 252, 252, 0.12) 101.23%)',
    boxShadow:
      '34px 34px 50px rgba(0, 0, 0, 0.1), 16px 8px 73px rgba(252, 252, 252, 0.05), inset -8px -6px 80px rgba(252, 252, 252, 0.05)',
    backdropFilter: 'blur(2px)',
    textAlign: 'left',
    padding: '24px 22px 19px 24px',
    marginBottom: '20px',
    marginLeft: '36px',
    maxWidth: '324px',
    minWidth: '240px',
    border: '1px solid #FCFCFC',
    '& h4': {
      fontSize: '16px',
      letterSpacing: '0.05em',
      color: '#FCFCFC',
      marginBottom: '12px',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    '& h3': {
      fontSize: '60px',
      color: '#0A2133',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    [theme.breakpoints.down(768)]: {
      background:
        'linear-gradient(186.54deg, rgba(252, 252, 252, 0.06) -32.65%, rgba(252, 252, 252, 0.006) 33.12%, rgba(252, 252, 252, 0.06) 56.13%, rgba(252, 252, 252, 0.12) 99.63%)',
      textAlign: 'center',
      padding: '24px 0 18px',
      marginBottom: '20px',
      marginLeft: '0px',
      width: '100%',
      minWidth: '100%',
      '& h4': {
        marginBottom: '10px',
      },
      '& h3': {
        fontSize: '48px',
      },
    },
    [theme.breakpoints.between(768, 'md')]: {
      background:
        'linear-gradient(186.54deg, rgba(252, 252, 252, 0.06) -32.65%, rgba(252, 252, 252, 0.006) 33.12%, rgba(252, 252, 252, 0.06) 56.13%, rgba(252, 252, 252, 0.12) 99.63%)',
      marginLeft: '20px',
      '& h4': {
        marginBottom: '10px',
      },
      '& h3': {
        // fontSize: '48px',
      },
    },
  },
  saladBalanceBox: {
    background: 'linear-gradient(234.33deg, rgba(255, 51, 153, 0.05) 17.15%, #FF3399 61.94%)',
    border: '1px solid #FF3399',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 30px rgba(255, 51, 153, 0.8), inset 0px 0px 50px #FF3399',
    backdropFilter: 'blur(5px)',
    textAlign: 'left',
    padding: '24px 22px 19px 24px',
    display: 'inline-block',
    marginBottom: '20px',
    minWidth: '360px',
    '& h4': {
      fontSize: '16px',
      letterSpacing: '0.05em',
      color: '#FCFCFC',
      marginBottom: '12px',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5);',
    },
    '& h3': {
      fontSize: '60px',
      color: '#0A2133',
      textShadow: '-0.721781px -0.721781px 2.16534px rgba(0, 0, 0, 0.25), 0px 0px 3.6089px rgba(178, 213, 48, 0.5)',
    },
    [theme.breakpoints.between(768, 'md')]: {
      '& h4': {},
      '& h3': {},
    },
    [theme.breakpoints.down(768)]: {
      textAlign: 'center',
      padding: '24px 0 18px',
      width: '100%',
      minWidth: '100%',
      '& h4': {
        marginBottom: '10px',
      },
      '& h3': {
        fontSize: '48px',
      },
    },
  },
  headTitleRow: {
    order: 2,
    [theme.breakpoints.down('md')]: {
      order: 0,
    },
  },
  usersAndComputeRow: {
    order: 0,
    justifyContent: 'flex-end',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  itemsRedeemedRow: {
    justifyContent: 'flex-end',
    position: 'relative',
    [theme.breakpoints.down(768)]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.between(768, 'md')]: {
      justifyContent: 'center',
    },
  },
  saladBalanceRow: {
    marginLeft: '30px',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px',
    },
  },
  triangleSvg: {
    width: '148px',
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
}))

// get the data using api
const sampleData = {
  headTitle: 'Headline',
  users: '225,000',
  yearsOfCompute: '5,000+',
  itemsRedeemed: '95,000',
  saladBalanceEarned: '$425,000+',
}

export const Stats = () => {
  const classes = useStyles()
  const [rightDistance4Triangle, setRightDistance4Triangle] = useState(0)
  const [bottomDistance4Triangle, setBottomDistance4Triangle] = useState(0)
  const refItemRedeemed = useRef()
  const [screenWidth, setScreenWidth] = React.useState(undefined)
  const triangles4Desktop = {
    position: 'absolute',
    right: rightDistance4Triangle + 'px',
    top: '-' + bottomDistance4Triangle + 'px',
    // zIndex:'-1'
  }

  const triangles4Tablet = {
    position: 'absolute',
    left: '9%',
    top: '-' + bottomDistance4Triangle + 'px',
    // zIndex:'-1'
  }

  React.useEffect(() => {
    if (refItemRedeemed.current) {
      setRightDistance4Triangle(refItemRedeemed.current.clientWidth - 28)
      setBottomDistance4Triangle((252 - refItemRedeemed.current.clientHeight) / 2)
    }
  }, [refItemRedeemed])

  React.useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    setRightDistance4Triangle(refItemRedeemed.current.clientWidth - 18)
    setBottomDistance4Triangle((220 - refItemRedeemed.current.clientHeight) / 2)
    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={12} lg={6} className={classes.headTitleRow}>
          <Typography className={classes.headerTitle}>{sampleData.headTitle}</Typography>
        </Grid>
        <Grid item container md={12} lg={6} className={classes.usersAndComputeRow}>
          <div className={classes.userBox}>
            <Typography variant="h4">USERS</Typography>
            <Typography variant="h3">{sampleData.users}</Typography>
          </div>
          <div className={classes.computeBox}>
            <Typography variant="h4">YEARS OF COMPUTE</Typography>
            <Typography variant="h3">{sampleData.yearsOfCompute}</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item container md={12} lg={5} className={classes.itemsRedeemedRow}>
          <div style={screenWidth !== undefined && screenWidth < 1280 ? triangles4Tablet : triangles4Desktop}>
            <img src={triangleSvg} alt="" className={classes.triangleSvg} />
          </div>
          <div className={classes.itemsRedeemedBox} ref={refItemRedeemed}>
            <Typography variant="h4">ITEMS REDEEMED</Typography>
            <Typography variant="h3">{sampleData.itemsRedeemed}</Typography>
          </div>
        </Grid>
        <Grid item container md={12} lg={6} className={classes.saladBalanceRow}>
          <div className={classes.saladBalanceBox}>
            <Typography variant="h4">SALAD BALANCE EARNED</Typography>
            <Typography variant="h3">{sampleData.saladBalanceEarned}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
