import React from 'react'
import { Card, CardContent, CardMedia, Button, Typography, Box, makeStyles } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    margin: '0 16px 32px',
    boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  },
  cardContent: {
    height: 224,
    padding: 16,
    '&:last-child': { paddingBottom: 16 },
  },
  media: {
    height: 164,
  },
  button: {
    borderRadius: 0,
  },
})

export const BlogListItem = ({ item }) => {
  const classes = useStyles()
  const { src, date, title, content } = item

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={src} title={title} />
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography gutterBottom variant="overline">
          <Box letterSpacing={0.5}>{date}</Box>
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          {content}
        </Typography>
        <Box mt={3}>
          <Button
            size="small"
            variant="outlined"
            color="default"
            endIcon={<ChevronRightIcon />}
            className={classes.button}
          >
            <Box lineHeight={1.2}>Read Blog</Box>
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
