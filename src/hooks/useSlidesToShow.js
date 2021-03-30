import { useMediaQuery, useTheme } from '@material-ui/core'
import { useEffect, useState } from 'react'

export const useSlidesToShow = () => {
  const [slides, setSlides] = useState(1)
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))

  useEffect(() => {
    if (xs) {
      setSlides(1)
    } else if (sm) {
      setSlides(2)
    } else {
      setSlides(3)
    }
  }, [sm, xs])

  return slides
}
