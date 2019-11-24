import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head/Head'

import blogStyles from './blog.module.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allGhostPost(
                sort: { order: DESC, fields: [published_at] }
                filter: { primary_author: { name: { eq: "Tashila Fernando" } } }
            ) {
                edges {
                    node {
                        slug
                        title
                        published_at(formatString: "MMMM Do, YYYY")
                        primary_author {
                            name
                        }
                        excerpt
                        feature_image
                        reading_time
                        primary_tag {
                            name
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
                    {data.allGhostPost.edges.map((edge, index) => {
                        const imageArray = edge.node.feature_image.split(':')

                        const imageUrl = 'https:'.concat(imageArray[1])

                        return (
                            <div className={`item-${index + 1}`}>
                                <Link
                                    to={`/blog/${edge.node.slug}`}
                                    className={blogStyles.card}
                                >
                                    <div
                                        className={blogStyles.thumb}
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                        }}
                                    ></div>
                                    <article>
                                        <span className={blogStyles.blogTag}>
                                            {edge.node.primary_tag.name}
                                        </span>
                                        <h1>{edge.node.title}</h1>
                                        <p>{edge.node.excerpt}</p>
                                        <span>
                                            {`${edge.node.published_at}  -  ${edge.node.reading_time} min read`}
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
