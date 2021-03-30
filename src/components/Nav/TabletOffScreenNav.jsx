import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Container, InputBase, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { useState } from 'react'
import ActiveMenuBottom from '../../images/nav_menu_active.svg'
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
    padding: '11px 12px',
    textTransform: 'capitalize',
    color: COLORS.text.darkBlue,
    backgroundColor: COLORS.primaryGreen,
    border: '1px solid #DBF1C1',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 24px rgba(178, 213, 48, 0.7)',
    borderRadius: '2px',
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
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: COLORS.text.lightGreen,
    position: 'relative',
    top: 22,
    minWidth: 66,
  },
  activeMenuMark: {
    position: 'relative',
    bottom: '-6px',
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
  fontIcon: {
    fontSize: '24px',
    color: '#0A2133',
    lineHeight: '22px',
    marginRight: 24,
  },
  inputRoot: {
    backgroundColor: '#fff',
    display: 'none',
    width: '0%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 8,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        // width: '20ch',
      },
    },
  },
  activeInput: {
    display: 'flex',
    width: '100%',
  },
}))

export const TabletOffScreenNav = () => {
  const classes = useStyles()
  const [activeMenu, setActiveMenu] = useState('')
  const [openSearchBar, setOpenSearchBar] = useState(false)
  const menuArray = ['store', 'earn', 'about', 'support', 'community', 'blog']

  const handleMenu = (item) => {
    setActiveMenu(item)
  }

  const handleSearchBar = () => {
    setOpenSearchBar(!openSearchBar)
  }

  return (
    <Box bgcolor={COLORS.brandDarkBlue} display={{ xs: 'none', sm: 'flex', md: 'flex', lg: 'none' }}>
      <Container>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Box display="flex">
            {menuArray.map((menu, index) => (
              <Box
                textAlign="center"
                mr={3}
                minHeight={58}
                key={index}
                className={activeMenu === menu ? classes.activeMenu : classes.menu}
                onClick={() => handleMenu(menu)}
              >
                <Typography className={classes.label}>{menu}</Typography>
                <img src={ActiveMenuBottom} className={classes.activeMenuMark} alt="active menu" />
              </Box>
            ))}
          </Box>
          <Box alignItems="center" color="white" display="flex">
            <InputBase
              placeholder="Search…"
              classes={{
                root: openSearchBar ? clsx(classes.inputRoot, classes.activeInput) : classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <FontAwesomeIcon icon={faSearch} onClick={() => handleSearchBar()} style={{ paddingLeft: 4 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
