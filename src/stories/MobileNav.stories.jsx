import React from 'react'
import { MobileNav } from '../components/Nav'

export default {
  title: 'Example/Nav',
  component: MobileNav,
}

const Template = (args) => <MobileNav {...args} showOffNav={true} />
export const MobileNavLayout = Template.bind({})
