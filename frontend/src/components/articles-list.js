import React from 'react'

class ArticlesList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const articles = this.props.articles.map((article) =>
      <li>{article.node.title}</li>
    );

    return (
      <div>
        <ul>
          {articles}
        </ul>
      </div>
    );
  }
}

export default ArticlesList