import React from 'react'
import { DesktopNavScroll } from '../components/Nav'

export default {
  title: 'Example/Nav',
  component: DesktopNavScroll,
}

const Template = (args) => <DesktopNavScroll {...args} show={true} />
export const DesktopNavScrollLayout = Template.bind({})
