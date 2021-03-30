import { Link } from '@material-ui/core'
import React from 'react'
import logo from '../../images/salad_logo.svg'

export const Logo = () => {
  return (
    <Link href={'./'}>
      <img src={logo} alt="Salad logo" />
    </Link>
  )
}
