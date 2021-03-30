import React from 'react'
import { BlogList } from '../components/blog-list'

export default {
  title: 'Example/Blog/List',
}

const Template = (args) => <BlogList {...args} />

export const List = Template.bind({})
