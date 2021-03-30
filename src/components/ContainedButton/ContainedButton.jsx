import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

export const ContainedButton = ({ label }) => {
  const NewButton = withStyles((theme) => ({
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
    <NewButton variant="contained" color="primary">
      {label}
    </NewButton>
  )
}

ContainedButton.propTypes = {
  label: PropTypes.string.isRequired,
}

ContainedButton.defaultProps = {
  label: 'Button',
}
