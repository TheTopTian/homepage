import React from 'react'
import { graphql } from 'gatsby'
export default function BlogTemplate({data}){
    let frontmatter = data.markdownRemark.frontmatter
    let html = data.markdownRemark.html
    return (
        <div>
            <div>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.author}</p>
                <p>{frontmatter.date}</p>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
        </div>
    )
}

export const data = graphql`
    query($slug:String){
        markdownRemark(frontmatter:{slug:{eq:$slug}}){
            frontmatter{
                title
                date(formatString: "YYYY-MM-DD")
                author
                slug
            }
            html
        }
    }
`