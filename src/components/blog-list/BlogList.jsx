import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { BlogListItem } from './BlogListItem'
import { Carousel } from '../elements/Carousel'
import saladCrypto from '../../images/salad_crypto.png'
import saladHeart from '../../images/salad_heart.png'
import saladThreeDots from '../../images/salad_three_dots.png'

const items = [
  {
    id: 1,
    src: saladCrypto,
    title: 'How Does Mining With Salad Affect Your PC?',
    content: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus',
    date: '10 DECEMBER 2019',
  },
  {
    id: 2,
    src: saladHeart,
    title: 'Does Mining For Cryptocurrency Damage My GPU?',
    content: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus',
    date: '10 DECEMBER 2019',
  },
  {
    id: 3,
    src: saladThreeDots,
    title: 'A Gamer’s Guide to Blockchain',
    content: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus',
    date: '10 DECEMBER 2019',
  },
  {
    id: 4,
    src: saladCrypto,
    title: 'How Does Mining With Salad Affect Your PC?',
    content: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus',
    date: '10 DECEMBER 2019',
  },
]

export const BlogList = () => {
  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h2">
          <Box fontWeight={700}>Category Name</Box>
        </Typography>
      </Box>
      <Carousel items={items}>
        {items.map((it) => {
          return <BlogListItem key={it.id} item={it} />
        })}
      </Carousel>
    </Container>
  )
}
