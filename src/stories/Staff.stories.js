import React from 'react'
import Staff from '../components/Staff'

export default {
  title: 'Example/Staff',
  component: Staff,
}

const Template = (args) => <Staff {...args} />
export const StaffLayout = Template.bind({})
