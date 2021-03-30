import React from 'react'
import { Testimonial } from '../components/testimonial'

export default {
  title: 'Example/Testimonial',
  component: Testimonial,
}

const Template = (args) => <Testimonial {...args} />

export const Default = Template.bind({})
