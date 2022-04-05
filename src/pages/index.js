import React from 'react'
import {graphql,Link} from 'gatsby'

export default function IndexPage({data}){
  console.log(data)
  return (
    <div>
      <h1>This is Index</h1>
      <div><Link to='/about'>about</Link></div>
      <div>
        {
          data.allMarkdownRemark.nodes.map(node=>(
            <Link to={node.frontmatter.slug}>
              <div>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.author}</p>
                <p>{node.frontmatter.date}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
          date(formatString: "YYYY-MM-DD")
          title
          slug
        }
      }
    }
  }
`