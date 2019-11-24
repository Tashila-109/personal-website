import React from 'react'
import { useEffect } from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Prism from 'prismjs'

import BlogHead from '../components/head/BlogHead'

import blogitemStyles from './blogItem.module.scss'

export const query = graphql`
    query($slug: String!) {
        post: ghostPost(slug: { eq: $slug }) {
            slug
            title
            published_at(formatString: "MMMM Do, YYYY")
            primary_author {
                name
            }
            feature_image
            excerpt
            reading_time
            primary_tag {
                name
            }
            html
        }
    }
`

const BlogItem = props => {
    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        setTimeout(() => Prism.highlightAll(), 0)
        var preList = document.getElementById('blog').querySelectorAll('pre')
        for (var i = 0; i < preList.length; ++i) {
            preList[i].classList.add('line-numbers')
        }
    })

    return (
        <>
            <BlogHead
                title={props.data.post.title}
                description={props.data.post.excerpt}
                author={props.data.post.primary_author.name}
                tag={props.data.post.primary_tag.name}
                slug={props.data.post.slug}
                image={props.data.post.feature_image}
            />
            <main className={`${blogitemStyles.contentBlog}`} id="blog">
                <span className={blogitemStyles.blogTag}>
                    {props.data.post.primary_tag.name}
                </span>
                <h1 className={`${blogitemStyles.blogHeading} heading-2`}>
                    {props.data.post.title}
                </h1>
                <span className={blogitemStyles.blogDate}>
                    {props.data.post.published_at} -{' '}
                    {props.data.post.reading_time} min read
                </span>
                <img
                    src={props.data.post.feature_image}
                    alt={props.data.post.title}
                    className={blogitemStyles.blogImage}
                />
                <div
                    dangerouslySetInnerHTML={{ __html: props.data.post.html }}
                ></div>

                <span className={blogitemStyles.line}></span>
                <span className={blogitemStyles.writtenBy}>Written by</span>
                <span className={blogitemStyles.author}>
                    {props.data.post.primary_author.name}
                </span>
            </main>
        </>
    )
}

export default BlogItem
