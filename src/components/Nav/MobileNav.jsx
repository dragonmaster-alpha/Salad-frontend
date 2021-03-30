import { Box, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import BurgerSvg from '../../images/Leading Icon.svg'
import PrimaryLogo from '../../images/Primary Logo Lockup.svg'
import { COLORS } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.brandDarkBlue,
  },
  logoLink: {
    display: 'flex',
  },
}))

export const MobileNav = (props) => {
  const classes = useStyles()

  const toggleMenu = () => {
    props.handleMenu(!props.showOffNav)
  }

  return (
    <Box bgcolor={COLORS.brandDarkBlue} display={{ xs: 'flex', sm: 'none' }}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" height={60}>
          <Box display="flex">
            <Link href={'./'} className={classes.logoLink}>
              <img src={PrimaryLogo} alt="Salad logo" />
            </Link>
          </Box>
          <Box alignItems="center" style={{ cursor: 'pointer' }} onClick={() => toggleMenu()}>
            <img src={BurgerSvg} alt="menu" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
