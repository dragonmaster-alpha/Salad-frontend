import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import ContainedButton from '../ContainedButton'
import { TextField } from '../elements/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1218px',
    margin: '0 auto',
    padding: '20px 0',
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
  contactPanel: {
    margin: '84px auto',
    maxWidth: '413px',
    [theme.breakpoints.down(768)]: {
      margin: '68px auto 34px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      maxWidth: '324px',
    },
  },
  loginPanel: {
    margin: '84px auto',
    maxWidth: '324px',
    [theme.breakpoints.down(768)]: {
      margin: '0px auto 68px',
    },
    [theme.breakpoints.between(768, 'md')]: {
      marginLeft: '24px',
    },
  },
  contactTitle: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '34px',
    color: '#DBF1C1',
    marginBottom: '16px',
  },
  contactInfo: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '26px',
    color: '#0A2133',
  },
  contactSummary: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#0A2133',
    marginTop: '16px',
  },
  loginTitle: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '26px',
    color: '#DBF1C1',
    marginBottom: '36px',
  },
  margin: {
    margin: theme.spacing(1),
  },
}))

// get the data using api
const sampleData = {
  contactTitle: 'Get In Touch',
  companyName: 'Salad Technologies',
  address1: '26 Rio Grande St. #2072',
  address2: 'Salt Lake City, UT 84101',
  email: 'support@salad.io',
  summary:
    'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula, vitae pharetra quam. Nullam at ligula sed metu',
  newsTitle: 'Newsletter',
  newsButtonLabel: 'CTA Button',
}

export const CTA = () => {
  const classes = useStyles()

  const AuthTextField = withStyles({
    root: {
      width: '100%',
      marginBottom: '36px',
      borderRadius: '2px',
      '& label.Mui-focused': {
        fontFamily: 'Mallory',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#0A2133',
      },
      '& .MuiInput-underline:after': {
        // borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#0A2133',
        },
        '&:hover fieldset': {},
        '&.Mui-focused fieldset': {
          borderColor: '#0A2133',
        },
      },
    },
  })(TextField)

  const NewsButton = withStyles((theme) => ({
    root: {
      color: '#FFF',
      backgroundColor: '#0A2133',
      fontFamily: 'Mallory',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '18px',
      display: 'flex',
      alignItems: 'center',
      padding: '15px 0',
      width: '100%',
      textTransform: 'capitalize',
      boxShadow: '0px 0px 24px rgba(178, 213, 48, 0.7)',
      borderRadius: '2px',
      '&:hover': {
        backgroundColor: '#0A2133',
      },
    },
  }))(Button)

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item md={6}>
          <div className={classes.contactPanel}>
            <Typography className={classes.contactTitle}>{sampleData.contactTitle}</Typography>
            <Typography className={classes.contactInfo}>{sampleData.companyName}</Typography>
            <Typography className={classes.contactInfo}>{sampleData.address1}</Typography>
            <Typography className={classes.contactInfo}>{sampleData.address2}</Typography>
            <br />
            <Typography className={classes.contactInfo}>{sampleData.email}</Typography>
            <Typography className={classes.contactSummary}>{sampleData.summary}</Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.headTitleRow}>
          <div className={classes.loginPanel}>
            <Typography className={classes.loginTitle}>{sampleData.newsTitle}</Typography>

            <Box>
              <Box mb={0.5}>
                <Typography variant="body1">
                  <Box color="#DBF1C1">Medium</Box>
                </Typography>
              </Box>
              <TextField border="1px solid #0A2133;" fullWidth variant="outlined" />
            </Box>
            <Box mt={2} mb={5}>
              <Box mb={0.5}>
                <Typography variant="body1">
                  <Box color="#DBF1C1">Medium</Box>
                </Typography>
              </Box>
              <TextField border="1px solid #0A2133;" style={{ height: 48 }} fullWidth variant="outlined" />
            </Box>

            <ContainedButton label={sampleData.newsButtonLabel} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
