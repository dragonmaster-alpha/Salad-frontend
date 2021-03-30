import { Box, Link } from '@material-ui/core'
import React from 'react'
import saladBar from '../../images/saladbar.svg'
import saladPay from '../../images/saladpay.svg'

export const SaladEcoSystem = () => {
  return (
    <Box display="flex" alignItems="center">
      <Box height={18} mr={3} mt={0.5}>
        <Link href="./">
          <img style={{ height: '100%' }} src={saladPay} alt="Salad Pay" />
        </Link>
      </Box>
      <Box height={16}>
        <Link href="./">
          <img style={{ height: '100%' }} src={saladBar} alt="Salad Bar" />
        </Link>
      </Box>
    </Box>
  )
}
