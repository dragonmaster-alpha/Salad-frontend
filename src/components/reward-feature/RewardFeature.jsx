import { Box, Button, Link, makeStyles, Typography } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React from 'react'
import amazon from '../../images/reward_amazon.svg'
import discord from '../../images/reward_discord.svg'
import skinbaron from '../../images/reward_skinbaron.svg'
import visa from '../../images/reward_visa.svg'
import { COLORS } from '../../theme'
import { Carousel_reward } from '../elements/Carousel/Carousel_reward.jsx'
import { Triangles } from '../elements/Triangles'
import { RewardItem } from './RewardItem'

const books = [
  {
    id: 1,
    src: amazon,
  },
  {
    id: 2,
    src: discord,
  },
  {
    id: 3,
    src: visa,
  },
  {
    id: 4,
    src: skinbaron,
  },
  {
    id: 5,
    src: skinbaron,
  },
]

const content =
  'Short paragraph talking about all the available types of rewards we have and feature any category that might be interesting to users'

const useStyles = makeStyles((theme) => ({
  back_first: {
    background: '#0A2133',
    position: 'relative',
    width: '100%',

    height: 400,
    [theme.breakpoints.down('md')]: {
      height: 350,
    },
    [theme.breakpoints.down('sm')]: {
      height: 350,
    },
    [theme.breakpoints.down('xs')]: {
      height: 620,
    },

    marginTop: '30px',
    boxShadow: '0px 10px 64px #0A2133, 0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  back_second: {
    fontFamily: 'Montserrat',
    position: 'absolute',
    top: '-37px',
    width: '93%',
    height: '100%',
    background: 'linear-gradient(234.33deg, rgba(51, 204, 204, 0.06) -18.15%, #33CCCC 61.94%)',
    border: '1px solid #33CCCC',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 30px rgba(51, 204, 204, 0.8), inset 0px 0px 50px #33CCCC',
    backdropFilter: 'blur(10px)',
    '@media (min-width:800px)': {
      width: '82%',
    },
  },
  download: {
    height: '40px',
    background: '#B2D530',
    border: '1px solid #DBF1C1',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 24px rgba(178, 213, 48, 0.7)',
    borderRadius: '2px',
    margin: '16px 0px',
    padding: '0px 12px',
    fontSize: '16px',
    lineHeight: '18px',
  },
  column: {
    float: 'left',
    width: '90%',
    height: '220px',
    paddingLeft: '23px',
    boxSizing: 'border-box',
    '@media (min-width:400px)': {
      width: '90%',
      height: '200px',
      paddingLeft: '6.25%',
    },
    '@media (min-width:700px)': {
      width: '45%',
      height: '200px',
      paddingLeft: '7.89%',
    },
  },
  smallCaption: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '26px',
    '@media (max-width:400px)': {
      marginTop: 24,
    },
  },
  medium: {
    color: '#0A2133',
    fontSize: '16px',
    lineHeight: '18px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  'row: after': {
    content: '',
    display: 'table',
    clear: 'both',
  },
  row: {
    position: 'absolute',
    width: '100%',
    top: '56px',
  },
  howContent: {
    marginTop: '16px',
    width: '325px',
    fontSize: '16px',
    fontFamily: 'Mallory',
    lineHeight: '20px',
    '@media (max-width:400px)': {
      width: '80%',
    },
  },
  columnPadding: {
    paddingLeft: '23px',
    '@media (min-width:800px)': {
      paddingLeft: '6.25%',
    },
    '@media (min-width:1200px)': {
      paddingLeft: '7.89%',
    },
  },
}))

export const RewardFeature = () => {
  const classes = useStyles()
  return (
    <Box className={classes.back_first}>
      <Triangles />
      <Box className={classes.back_second}></Box>
      <Box>
        <Box className={classes.columnPadding} style={{ position: 'absolute' }}>
          <Typography variant="h2">
            <Box color={COLORS.text.lightGreen}>Get the Reward You Want</Box>
          </Typography>
        </Box>
        <Box className={classes.row}>
          <Box className={classes.column}>
            <Box className={classes.smallCaption}>HOW</Box>
            <Box className={classes.howContent}>{content}</Box>
            <Button className={classes.download}>Download</Button>
          </Box>
          <Box className={classes.column}>
            <Box mt={{ xs: 5, sm: 0 }} className={classes.smallCaption}>
              WHAT
            </Box>
            <Carousel_reward items={books}>
              {books.map((it) => {
                return <RewardItem key={it.id} item={it} />
              })}
            </Carousel_reward>
            <Box mt={{ xs: 2 }}>
              <Link href="#" className={classes.medium}>
                Medium <ChevronRightIcon />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
