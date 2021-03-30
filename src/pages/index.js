import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { TwoColumnMediaLeft } from '../components/2-Column-Media-Left'
import { TwoColumnMediaRight } from '../components/2-Column-Media-Right'
import AsSeenOn from '../components/AsSeenOn'
import { BlogArticle } from '../components/blog-article/BlogArticle'
import { BlogList } from '../components/blog-list'
import { CookiesNotify } from '../components/cookies-notify/CookiesNotify'
import { CTA, CTACenter } from '../components/CTA'
import { FeatureMedia } from '../components/feature-media'
import { FourColumns } from '../components/four-columns-a'
import { FullWidthImage } from '../components/full-width-image'
import {
  DesktopNavInitial,
  DesktopNavScroll,
  MobileNav,
  MobileOffScreenNav,
  TabletOffScreenNav,
} from '../components/Nav'
import { RewardFeature } from '../components/reward-feature'
import Social from '../components/Social'
import Staff from '../components/Staff'
import { Stats } from '../components/Stats'
import Layout from '../layout/layout'

// import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const [pos, setPos] = useState('top')
  const [mobileOffNav, setMobileOffNav] = useState(false)

  // const data = useStaticQuery(query);

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 5) {
        setPos('moved')
      } else {
        setPos('top')
      }
    })
  }, [])

  return (
    <Layout>
      {pos === 'top' ? <DesktopNavInitial /> : <DesktopNavScroll show={pos !== 'top' ? true : false} />}
      <TabletOffScreenNav />
      <MobileNav handleMenu={setMobileOffNav} showOffNav={mobileOffNav} />
      <MobileOffScreenNav showOffNav={mobileOffNav} />

      <BlogArticle />
      <Stats />
      <Box>
        <FeatureMedia />
      </Box>
      <Box pt={5}>
        <FullWidthImage />
      </Box>
      <Box mt={5}>
        <FourColumns />
      </Box>
      <Box mt={5} pb={2}>
        <BlogList />
      </Box>
      <Box py={2}>
        <CTA />
      </Box>
      <Box py={2}>
        <CTACenter />
      </Box>
      <Box py={2}>
        <AsSeenOn />
      </Box>
      <Box py={2}>
        <Social />
      </Box>
      <Box py={2}>
        <TwoColumnMediaLeft />
      </Box>
      <Box py={2}>
        <TwoColumnMediaRight />
      </Box>
      <Box py={2}>
        <Staff />
      </Box>
      <Box>
        <RewardFeature />
      </Box>
      <CookiesNotify />
    </Layout>
  )
}

// const query = '';

export default IndexPage
