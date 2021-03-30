import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const content = [
  {
    id: 1,
    title: 'Crypto Mining for Gamers',
    body:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. ',
  },
  {
    id: 2,
    title: 'Complete Offers',
    body:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget.',
  },
  {
    id: 3,

    title: 'Power Web 3.0',
    body:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. ',
  },
  {
    id: 4,
    title: 'Redeem Rewards',
    body:
      'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam, ultricies sollicitudin erat facilisis eget. ',
  },
]

export const FourColumns = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {content.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={6} md={3}>
              <Box>
                <Box mb={1.5}>
                  <Typography variant="h6">
                    <Box fontWeight="700">{item.title}</Box>
                  </Typography>
                </Box>
                <Typography variant="body1">
                  <Box>{item.body}</Box>
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
