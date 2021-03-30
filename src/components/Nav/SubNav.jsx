import { Box, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  subNavBack: {
    background: '#53A626',
    height: '123px',
  },
  title: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '150%',
    marginTop: '5px',
  },
  content: {
    fontFamily: 'Mallory',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#DBF1C1',
  },
}))

export const SubNav = (props) => {
  const classes = useStyles()
  // const [isMouseOut , setMouseOut] = useState(false);

  return (
    <Box style={{ display: props.displayShown == 1 ? 'unset' : 'none', position: 'absolute', width: '100%' }}>
      <Box
        className={classes.subNavBack}
        style={{ paddingLeft: props.paddingL }}
        display={{ xs: 'none', lg: 'flex' }}
        onMouseLeave={() => {
          props.setMouseOut(true)
        }}
      >
        <Container>
          <Box py={1} px={2}>
            <Box>
              {Object.keys(props.titles).map((title) => (
                <Box style={{ marginLeft: '0px', float: 'left' }}>
                  <Typography className={classes.title} style={{ margin: '5px 30px 10px 30px' }}>
                    {props.titles[title].name}
                  </Typography>
                  <Box style={{ float: 'left', columnCount: props.titles[title].columnCounts }}>
                    {Object.keys(props.titles[title].contents).map((content) => (
                      <Typography className={classes.content} style={{ margin: '0 30px 0 30px' }}>
                        {props.titles[title].contents[content]}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
