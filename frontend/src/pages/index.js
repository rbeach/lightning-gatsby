import React from 'react'
import ArticlesList from '../components/articles-list'

const IndexPage = ({data}) => (
  <div>
    <h1>Drupal Articles</h1>
    <ArticlesList articles={data.allNodeArticle.edges}/>
  </div>
)

export const query = graphql`
  query SiteArticleQuery {
    allNodeArticle {
      edges {
        node {
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`

export default IndexPage
