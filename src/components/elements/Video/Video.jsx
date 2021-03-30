import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core'

import playButton from '../../../images/play_arrow_24px.svg'

const useStyles = makeStyles(() => ({
  video: {
    position: 'relative',
    '&.playing:after': {
      display: 'none',
    },
    '&:after': {
      content: '" "',
      backgroundColor: '#0A2133',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    },

    '& video': {
      width: '100%',
    },

    '& .controls': {
      position: 'absolute',
      bottom: 0,
      left: 32,
      right: 32,
      zIndex: 2,

      '& .seek-bar': {
        position: 'absolute',
        bottom: 15,
        left: 32,
        right: 0,
        height: 2,
        backgroundColor: '#DBF1C1',

        '& .seek-bar-control': {
          content: '" "',
          height: 10,
          width: 10,
          borderRadius: 5,
          position: 'absolute',
          top: '-4px',
          left: 0,
          backgroundColor: '#B2d530',
        },
      },

      '& .play-button': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 32,
        height: 32,

        '& img': {
          width: '100%',
          height: '100%',
        },
      },
    },
  },
}))

export const Video = ({ onPlay, onPause }) => {
  const [play, setPlay] = useState(false)
  const videoRef = useRef()
  const seekBarControlRef = useRef()
  const containerRef = useRef()
  const classes = useStyles()

  const togglePlay = () => {
    if (play) {
      setPlay(false)
      onPause()
      videoRef.current.pause()
    } else {
      setPlay(true)
      videoRef.current.play()
      onPlay()
      containerRef.current.classList.add('playing')
    }
  }

  useEffect(() => {
    const video = videoRef.current
    video.addEventListener('timeupdate', (evt) => {
      const pos = video.currentTime / video.duration
      seekBarControlRef.current.style.left = 'calc(' + pos * 100 + '% - 10px)'
      if (video.ended) {
        console.log('hehe')
      }
    })
  })

  return (
    <div className={classes.video} ref={containerRef}>
      <video ref={videoRef} src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm" name="media" />
      <div className="controls">
        <div className="seek-bar">
          <div ref={seekBarControlRef} className="seek-bar-control" />
        </div>
        <div className="play-button" onClick={togglePlay}>
          <img src={playButton} alt="Play button" />
        </div>
      </div>
    </div>
  )
}
