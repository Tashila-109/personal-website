import React from 'react'
import { useEffect } from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Prism from 'prismjs'

import Head from '../components/head/Head'

import blogitemStyles from './blogItem.module.scss'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            author
            language
            blogCover {
                title
                file {
                    url
                }
            }
            body {
                json
            }
        }
    }
`

const BlogItem = props => {
    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll()
    })

    const options = {
        renderNode: {
            'embedded-asset-block': node => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url

                return (
                    <>
                        <img
                            alt={alt}
                            src={url}
                            className={blogitemStyles.bodyImage}
                        />
                        <span className={blogitemStyles.bodyImageText}>
                            {alt}
                        </span>
                    </>
                )
            },
        },
    }

    return (
        <>
            <Head title={props.data.contentfulBlogPost.title} />
            <main
                className={`${blogitemStyles.contentBlog} language-${props.data.contentfulBlogPost.language}`}
            >
                <h1 className={`${blogitemStyles.blogHeading} heading-2`}>
                    {props.data.contentfulBlogPost.title}
                </h1>
                <span className={blogitemStyles.blogDate}>
                    {props.data.contentfulBlogPost.publishedDate}
                </span>
                <img
                    src={props.data.contentfulBlogPost.blogCover.file.url}
                    alt={props.data.contentfulBlogPost.blogCover.title}
                    className={blogitemStyles.blogImage}
                />
                {documentToReactComponents(
                    props.data.contentfulBlogPost.body.json,
                    options
                )}
                <span className={blogitemStyles.line}></span>
                <span className={blogitemStyles.writtenBy}>Written by</span>
                <span className={blogitemStyles.author}>
                    {props.data.contentfulBlogPost.author}
                </span>
            </main>
        </>
    )
}

export default BlogItem
