import { Box, Button, Container, Link, Slide, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import ActiveMenuBottom from '../../images/nav_menu_active.svg'
import PrimaryLogo from '../../images/Primary Logo Symbol.svg'
import { COLORS } from '../../theme'
import { SubNav } from './SubNav.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.brandDarkBlue,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
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
    top: 26,
    minWidth: 66,
  },
  activeMenuMark: {
    position: 'relative',
    bottom: '-8px',
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
}))

export const DesktopNavScroll = (props) => {
  const classes = useStyles()
  const [activeMenu, setActiveMenu] = useState('')
  const menuArray = ['store', 'earn', 'about']
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayShown, setDisplayShown] = useState(0)

  const handleMenu = (item, index) => {
    setActiveMenu(item)
    setCurrentTitle(index != -1 ? index : 1)
    setDisplayShown(index != -1 ? 1 : 0)
  }

  const titles = [
    [
      {
        id: 1,
        name: 'Rewards',
        columnCounts: 1,
        contents: ['How It Works', 'Storefront', 'Reward Vault'],
      },
      {
        id: 2,
        name: 'Categories',
        columnCounts: 2,
        contents: ['Top Chops', 'Fresh Loot Friday', 'Games', 'Donation', 'Gift Cards', 'Search'],
      },
    ],
    [
      {
        id: 1,
        name: 'Mining',
        contents: ['How It Works', 'Get Started'],
      },
      {
        id: 2,
        name: 'offerwalls',
        contents: ['How It Works', 'Get Started'],
      },
      {
        id: 3,
        name: 'Referrals',
        contents: ['How It Works', 'Enter A Code'],
      },
    ],
    [
      {
        id: 1,
        name: 'Rewards',
        contents: ['About Us', 'Company Info', 'Brand'],
      },
      {
        id: 2,
        name: 'Community',
        columnCounts: '1',
        contents: ['Discord', 'Forums'],
      },
      {
        id: 3,
        name: 'Documentation',
        columnCounts: '1',
        contents: ['Blog', 'FAQs', 'Guides'],
      },
    ],
  ]

  return (
    <Slide in={props.show} direction="down" mountOnEnter unmountOnExit>
      <Box position="fixed" left={0} top={0} width="100%" zIndex={10}>
        <Box bgcolor={COLORS.brandDarkBlue} display={{ xs: 'none', lg: 'flex' }}>
          <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex">
                <Link href={'./'} className={classes.logoLink}>
                  <img src={PrimaryLogo} alt="Salad logo" height={35} />
                </Link>
                {menuArray.map((menu, index) => (
                  <Box
                    textAlign="center"
                    ml={4}
                    minHeight={60}
                    key={index}
                    className={activeMenu === menu ? classes.activeMenu : classes.menu}
                    onClick={() => handleMenu(menu, index)}
                    onMouseEnter={() => handleMenu(menu, index)}
                    // onMouseLeave={() => handleMenu("", -1)}
                  >
                    <Typography className={classes.label}>{menu}</Typography>
                    <img src={ActiveMenuBottom} className={classes.activeMenuMark} alt="active menu" />
                  </Box>
                ))}
              </Box>
              <Box alignItems="center">
                <Button classes={{ root: classes.customButton }}>Download</Button>
              </Box>
            </Box>
          </Container>
        </Box>
        <SubNav
          titles={titles[currentTitle]}
          displayShown={displayShown}
          paddingL={'50px'}
          setMouseOut={(isMouseOut) => {
            handleMenu('', -1)
          }}
        />
      </Box>
    </Slide>
  )
}
