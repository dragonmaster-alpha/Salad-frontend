import React from 'react'
import { CookiesNotify } from '../components/cookies-notify'

export default {
  title: 'Example/Cookies',
  component: CookiesNotify,
}

const Template = (args) => <CookiesNotify {...args} />

export const CookiesNotifyLayout = Template.bind({})
