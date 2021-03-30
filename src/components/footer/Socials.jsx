import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@material-ui/core'
import React from 'react'

const socialsArray = [
  { iconName: 'github' },
  { iconName: 'twitter' },
  { iconName: 'reddit' },
  { iconName: 'youtube' },
  { iconName: 'twitch' },
  { iconName: 'linkedin' },
]

export const Socials = () => {
  return (
    <Box>
      {socialsArray.map((s) => {
        return (
          <Box component="span" key={s.iconName} mr={1}>
            <FontAwesomeIcon icon={['fab', s.iconName]} />
          </Box>
        )
      })}
    </Box>
  )
}
