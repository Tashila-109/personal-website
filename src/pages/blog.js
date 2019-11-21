import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head/Head'

import blogStyles from './blog.module.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { fields: publishedDate, order: DESC }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                        author
                        summary {
                            summary
                        }
                        blogCover {
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <Head title="Blog" />
            <main className="content-home">
                <div className={blogStyles.band}>
                    {data.allContentfulBlogPost.edges.map((edge, index) => {
                        return (
                            <div className={`item-${index + 1}`}>
                                <Link
                                    to={`/blog/${edge.node.slug}`}
                                    className={blogStyles.card}
                                >
                                    <div
                                        className={blogStyles.thumb}
                                        style={{
                                            backgroundImage: `url(${edge.node.blogCover.file.url})`,
                                        }}
                                    ></div>
                                    <article>
                                        <h1>{edge.node.title}</h1>
                                        <p>{edge.node.summary.summary}</p>
                                        <span>
                                            {`${edge.node.author} - ${edge.node.publishedDate}`}
                                        </span>
                                    </article>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Blog
