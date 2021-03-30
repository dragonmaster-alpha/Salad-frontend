import React from 'react'
import { FullWidthImage } from '../components/full-width-image'
import Layout from '../layout/layout'

export default {
  title: 'Example/FullWidthImage',
  component: FullWidthImage,
}

const Template = (args) => (
  <Layout>
    <FullWidthImage {...args} />
  </Layout>
)

export const FullWidthImageDemo = Template.bind({})
