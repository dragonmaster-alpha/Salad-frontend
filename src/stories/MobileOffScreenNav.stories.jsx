import React from 'react'
import { MobileOffScreenNav } from '../components/Nav'

export default {
  title: 'Example/Nav',
  component: MobileOffScreenNav,
}

const Template = (args) => <MobileOffScreenNav {...args} showOffNav={true} />
export const MobileOffScreenNavLayout = Template.bind({})
