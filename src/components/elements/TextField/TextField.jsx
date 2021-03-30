import React from 'react'
import { InputBase, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: (props) => (props.border ? props.border : '1px solid #ced4da'),
    fontSize: 16,
    width: '100%',
    padding: (props) => (props.size === 'small' ? '8px 12px' : '16px 12px'),
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    '&:focus': {
      // boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

export const TextField = (props) => {
  const classes = useStyles({
    size: props.size || 'medium',
    border: props.border,
  })
  return <InputBase classes={classes} {...props} />
}
