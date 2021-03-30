import React from 'react'
import { BlogArticle } from '../components/blog-article'

export default {
  title: 'Example/Blog/Article',
}

const Template = (args) => <BlogArticle {...args} />

export const Article = Template.bind({})
