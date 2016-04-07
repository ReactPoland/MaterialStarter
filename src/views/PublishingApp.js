"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from 'actions/article.js';

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
    this._tryArraySlice();

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
    let people = [
      {
        name: 'Shane'
      },
      {
        name: 'Sally'
      }
    ];
    let anotherPeople = [
      {
        name: 'Bill'
      },
      {
        name: 'Tom'
      }
    ];
    let wantPersonNames =[];
    people.concat(anotherPeople).forEach(function (person){
      let personsNames = person.name;
      console.log(personsNames);
      wantPersonNames.push(personsNames);
    });
    console.log("for each method log ",wantPersonNames);
    

    this.props.articleActions.articlesList(wantPersonNames);
  }
  async _tryArraySlice() {
    console.log("fire _tryArraySlice ");
    /*this.props.articleActions.articlesList(wantPersonNames);*/
  }

  render () {
    console.info("from reducer -> ", this.props.articleReducer);
    let personNamesFromReducer = this.props.articleReducer;

    let mapPersonsJSX = [];
    for(let personKey in personNamesFromReducer) {
      let personDetails = personNamesFromReducer[personKey];
      let currentArticleJSX = (
        <div key={personKey}>
          <h2>{personDetails}</h2>
        </div>);
      mapPersonsJSX.push(currentArticleJSX)
      };
   
  	/*let articlesJSX = [];
  	for(let articleKey in this.props.articleReducer) {
  		let articleDetails = this.props.articleReducer[articleKey];
  		let currentArticleJSX = (
  			<div key={articleKey}>
  				<h2>{articleDetails.articleTitle}</h2>
  				<h3>{articleDetails.articleContent}</h3>


  			</div>);
  		articlesJSX.push(currentArticleJSX)
      };*/
  	
    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Our publishing app - Javascript Playground</h1>
          {mapPersonsJSX}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);