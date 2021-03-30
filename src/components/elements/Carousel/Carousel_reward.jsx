import React, { useCallback, useRef, useEffect, useState } from 'react'
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import play from './play.svg'

const useStyles = makeStyles((theme) => ({
  carousel: {
    // "& .slick-list":{
    //   "& .slick-slide":{
    //     width:"unset!important",
    //   }
    // },
    '& .slick-dots': {
      '& ul': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        listStyle: 'none',

        '& li': {
          display: 'inline-flex',
          '& + li': {
            marginLeft: 10,
          },

          '&.slick-active div': {
            backgroundColor: '#0A2133',
          },
        },
      },
    },
  },
  leftArrow: {
    cursor: 'pointer',
  },
  rightArrow: {
    '& img': {
      transform: 'rotate(180deg)',
    },
  },
}))

export const useSlidesToShow = () => {
  const [slides, setSlides] = useState(1)
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))

  useEffect(() => {
    if (xs) {
      setSlides(2)
    } else if (sm) {
      setSlides(3)
    } else {
      setSlides(4)
    }
  }, [sm, xs])

  return slides
}

export const Carousel_reward = ({ items, children }) => {
  const ref = useRef()
  const classes = useStyles()
  const slidesToShow = useSlidesToShow()

  const handleNext = useCallback(() => {
    ref.current.slickNext()
  }, [])

  const handlePrev = useCallback(() => {
    ref.current.slickPrev()
  }, [])

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return (
        <div
          style={{
            padding: '10px',
          }}
        >
          <ul style={{ margin: '0px' }}>
            <li className={classes.leftArrow} onClick={handlePrev}>
              <img src={play} alt="Left arrow" />
            </li>
            {dots}
            <li className={classes.rightArrow} onClick={handleNext}>
              <img src={play} alt="Right arrow" />
            </li>
          </ul>
        </div>
      )
    },
    customPaging: () => {
      return (
        <div
          style={{
            display: 'inline-block',
            width: '12px',
            height: '12px',
            color: '12px',
            border: '1px solid #0A2133',
            borderRadius: '50%',
          }}
        />
      )
    },
  }

  return (
    <div style={{ marginLeft: 0, marginRight: 0 }}>
      <Slider ref={ref} className={classes.carousel} {...settings}>
        {children}
      </Slider>
    </div>
  )
}
