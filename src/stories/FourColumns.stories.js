import React from 'react'
import { FourColumns } from '../components/four-columns-a/FourColumns'

export default {
  title: 'Example/FourColumns',
  component: FourColumns,
}

const Template = (args) => <FourColumns {...args} />

export const FourColumnsLayout = Template.bind({})
