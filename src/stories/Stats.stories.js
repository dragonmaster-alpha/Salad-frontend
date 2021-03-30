import React from 'react'
import { Stats } from '../components/Stats'

export default {
  title: 'Example/Stats',
  component: Stats,
}

const Template = (args) => <Stats {...args} />

export const StatsLayout = Template.bind({})
