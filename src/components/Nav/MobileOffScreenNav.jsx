import { Box, Button, Container, InputBase, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import RightActiveMenuMark from '../../images/Group 282.svg'
import { COLORS } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.brandDarkBlue,
  },
  logoLink: {
    display: 'flex',
  },
  customButton: {
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '18px',
    textTransform: 'capitalize',
    color: COLORS.text.darkBlue,
    backgroundColor: COLORS.primaryGreen,
    border: '1px solid #DBF1C1',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 24px rgba(178, 213, 48, 0.7)',
    borderRadius: '2px',
    width: '100%',
    '&:hover': {
      backgroundColor: COLORS.primaryGreen,
    },
  },
  label: {
    fontFamily: 'Mallory',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '150%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: COLORS.text.lightGreen,
    textAlign: 'right',
  },
  activeMenuMark: {
    position: 'absolute',
    right: '-24px',
    top: '-24px',
    display: 'none',
  },
  activeMenu: {
    cursor: 'pointer',
    '& p': {
      color: COLORS.text.primaryGreen,
      textShadow: '0px 0px 24px rgba(178, 213, 48, 0.7)',
    },
    '& img': {
      display: 'flex',
    },
  },
  menu: {
    cursor: 'pointer',
  },
  inputRoot: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #AAAAAA',
    boxSizing: 'border-box',
    borderRadius: '2px',
    width: '100%',
  },
  inputInput: {
    padding: '7px 14px',
    fontFamily: 'Mallory',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '18px',
    color: COLORS.text.darkBlue,
  },
}))

export const MobileOffScreenNav = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeMenu, setActiveMenu] = useState('')
  const menuArray = ['store', 'earn', 'about', 'support', 'community', 'blog']
  const xs = useMediaQuery(theme.breakpoints.down('xs'))

  const showOffNav = xs && props.showOffNav

  const handleMenu = (item) => {
    setActiveMenu(item)
  }

  return (
    <Box bgcolor={COLORS.brandDarkBlue} display={showOffNav ? 'flex' : 'none'}>
      <Container>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          // height={60}
        >
          <Box>
            {menuArray.map((menu, index) => (
              <Box
                textAlign="center"
                mr={1}
                mt={3}
                // minHeight={28}
                position="relative"
                key={index}
                className={activeMenu === menu ? classes.activeMenu : classes.menu}
                onClick={() => handleMenu(menu)}
              >
                <Typography className={classes.label}>{menu}</Typography>
                <img src={RightActiveMenuMark} className={classes.activeMenuMark} alt="active menu" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box alignItems="center" color="white" display="flex" mt={2} mb={2}>
          <InputBase
            placeholder="Small"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </Box>
        <Box alignItems="center" display="flex" justifyContent="center" mb={3}>
          <Button classes={{ root: classes.customButton }}>Send Me A Download Link</Button>
        </Box>
      </Container>
    </Box>
  )
}
