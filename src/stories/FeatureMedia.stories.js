import React from 'react'
import { FeatureMedia } from '../components/feature-media'
import Layout from '../layout/layout'

export default {
  title: 'Example/FeatureMedia',
  component: FeatureMedia,
}

const Template = (args) => (
  <Layout>
    <FeatureMedia {...args} />
  </Layout>
)

export const Media = Template.bind({})
