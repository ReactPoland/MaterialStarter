"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from 'actions/article.js';
import { Form } from 'components/Form.js';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});

class PublishingApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this._fetch();
  }
  //mocked data here, normally from database
  async _fetch() {
    let articles = [
      {
          "articleId" : "987654",
          "articleTitle" : "Lorem ipsum - article one",
          "articleContent" : "Here goes the content of the article"
      },
      {
          "articleId" : "123456",
          "articleTitle" : "Lorem ipsum - article two",
          "articleContent" : "Sky is the limit, the content goes here."
      }
    ];

    this.props.articleActions.articlesList(articles);
  }

  render () {
    console.info("from reducer -> ", this.props.article)
  	let articlesJSX = [];
  	for(let articleKey in this.props.article) {
  		let articleDetails = this.props.article[articleKey];
  		let currentArticleJSX = (
  			<div key={articleKey}>
  				<h2>{articleDetails.articleTitle}</h2>
  				<h3>{articleDetails.articleContent}</h3>
  			</div>);
  		articlesJSX.push(currentArticleJSX);
  	}
    return (
      <div>
          <h1>Our publishing app</h1>
          {articlesJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);