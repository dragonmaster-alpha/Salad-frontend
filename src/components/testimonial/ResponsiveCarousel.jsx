import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ArrowLeft from '../../images/carousel_left.svg'
import ArrowRight from '../../images/carousel_right.svg'
import { COLORS } from '../../theme'
import { Triangles } from './Triangles'

const useStyles = makeStyles(() => {
  return {
    carouselheight: {
      marginTop: '60px',
      height: '230px',
      '@media (min-width:600px)': {
        height: '160px',
      },
    },
    as: {
      width: '93.8%',
      float: 'right',
      marginBottom: '50px',
      transition: 'opacity 0.5s ease-in-out',
      marginTop: '30px',
      marginRight: '8px',
      height: 258,
      '@media (min-width:600px)': {
        width: '78%',
        height: '206px',
      },
      '@media (min-width:780px)': {
        width: '77%',
        height: '206px',
      },
    },
    assub: {
      background: 'linear-gradient(234.33deg, rgba(102, 0, 204, 0.7) 17.15%, #6600CC 61.94%)',
      border: '1px solid #6600CC',
      boxSizing: 'border-box',
      boxShadow: '0px 5px 30px rgba(102, 0, 204, 0.8), inset 0px 0px 50px #6600CC',
      backdropFilter: 'blur(10px)',
      height: '100%',
    },
    ascontent: {
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      padding: 0,
      '@media (min-width:600px)': {
        width: '78%',
        right: 0,
        left: 'unset',
        transform: 'unset',
        paddingLeft: '58px',
        paddingRight: '58px',
      },
      '@media (min-width:780px)': {
        width: 'unset',
        right: 'unset',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 0,
      },
    },
    lorem: {
      fontFamily: 'Mallory, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '4.5vw',
      lineHeight: '22px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#DBF1C1',
      maxWidth: '520px',
      paddingTop: '70px',
      '@media (min-width:600px)': {
        maxWidth: 'unset',
        fontSize: '18px',
      },
      '@media (min-width:780px)': {
        paddingTop: '80px',
        maxWidth: '520px',
        fontSize: '18px',
      },
    },
    maria: {
      paddingTop: '36px',
      fontFamily: 'Mallory, sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '3.5vw',
      lineHeight: '16px',
      textAlign: 'center',
      color: '#DBF1C1',
      maxWidth: '496px',
      paddingBottom: '50px',
      '@media (min-width:600px)': {
        fontSize: '12px',
      },
    },
    arrowLeftStyles: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(100% - 32px)',
      left: 'calc(50% - 100px)!important',
      width: 30,
      height: 30,
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      '@media (min-width:600px)': {
        left: 'calc(60% - 100px)!important',
      },
      '@media (min-width:780px)': {
        left: 'calc(50% - 100px)!important',
      },
    },

    arrowNextStyles: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(100% - 32px)',
      right: 'calc(50% - 100px)!important',
      width: 30,
      height: 30,
      cursor: 'pointer',
      background: 'transparent',
      border: 'none',
      '@media (min-width:600px)': {
        right: 'calc(40% - 100px)!important',
      },
      '@media (min-width:780px)': {
        right: 'calc(50% - 100px)!important',
      },
    },

    indicatorStyles: {
      transition: 'opacity .25s ease-in',
      filter: 'alpha(opacity=30)',
      boxShadow: '1px 1px 2px rgb(0 0 0 / 90%)',
      borderRadius: '50%',
      width: '8px',
      height: '8px',
      cursor: 'pointer',
      display: 'inline-block',
      margin: '0 8px',
      border: '2px solid white',
      background: 'transparent',
    },

    carousel: {
      position: 'relative',
      '& .control-dots': {
        width: '100%',
        right: 0,
        '@media (min-width:600px)': {
          width: '80%',
        },
        '@media (min-width:780px)': {
          width: '100%',
        },
      },
    },
  }
})

export const ResponsiveCarousel = () => {
  const classes = useStyles()
  const contents = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Almost onto a third line it'll adjust automatically to structure it in the center.",
  ]

  const writers = ['Maria Lopez,VP of Design at Meshery']

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelectCarousel = (index) => {
    setSelectedIndex(index)
  }

  return (
    <Box
      color={COLORS.text.footer}
      style={{
        background: 'rgb(10, 33, 51)',
        position: 'relative',
        boxShadow: '0px 10px 64px #0A2133, 0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box className={classes.carouselheight}></Box>
      <Triangles></Triangles>
      <Box height={'73px'}></Box>
      <Box
        style={{
          position: 'absolute',
          top: '-70px',
          width: 'calc(100% + 8px)',
        }}
      >
        <Carousel
          className={classes.carousel}
          onChange={onSelectCarousel}
          showStatus={false}
          autoPlay={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            // hasPrev &&
            <button type="button" onClick={onClickHandler} title={label} className={classes.arrowLeftStyles}>
              <img src={ArrowLeft} alt="Arrow Left" />
            </button>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            // hasNext &&
            <button type="button" onClick={onClickHandler} title={label} className={classes.arrowNextStyles}>
              <img src={ArrowRight} alt="Arrow Right" />
            </button>
          )}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className={classes.indicatorStyles}
                  style={{ background: 'white' }}
                  aria-label={'Selected: ${label} ${index + 1}'}
                  title={'Selected: ${label} ${index + 1}'}
                />
              )
            }
            return (
              <li
                className={classes.indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={'${label} ${index + 1}'}
                aria-label={'${label} ${index + 1}'}
              />
            )
          }}
        >
          <Box className={classes.as} style={selectedIndex === 0 ? { opacity: '1' } : { opacity: '0' }}>
            <Box className={classes.assub}></Box>
            <Box className={classes.ascontent}>
              <Typography type="p" className={classes.lorem}>
                {contents[0]}
              </Typography>
              <Typography type="p" className={classes.maria}>
                {writers[0]}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.as} style={selectedIndex === 1 ? { opacity: '1' } : { opacity: '0' }}>
            <Box className={classes.assub}></Box>
            <Box className={classes.ascontent}>
              <Typography type="p" className={classes.lorem}>
                {contents[0]}
              </Typography>
              <Typography type="p" className={classes.maria}>
                {writers[0]}
              </Typography>
            </Box>
          </Box>

          <Box className={classes.as} style={selectedIndex === 2 ? { opacity: '1' } : { opacity: '0' }}>
            <Box className={classes.assub}></Box>
            <Box className={classes.ascontent}>
              <Typography type="p" className={classes.lorem}>
                {contents[0]}
              </Typography>
              <Typography type="p" className={classes.maria}>
                {writers[0]}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.as} style={selectedIndex === 3 ? { opacity: '1' } : { opacity: '0' }}>
            <Box className={classes.assub}></Box>
            <Box className={classes.ascontent}>
              <Typography type="p" className={classes.lorem}>
                {contents[0]}
              </Typography>
              <Typography type="p" className={classes.maria}>
                {writers[0]}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.as} style={selectedIndex === 4 ? { opacity: '1' } : { opacity: '0' }}>
            <Box className={classes.assub}></Box>
            <Box className={classes.ascontent}>
              <Typography type="p" className={classes.lorem}>
                {contents[0]}
              </Typography>
              <Typography type="p" className={classes.maria}>
                {writers[0]}
              </Typography>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  )
}
