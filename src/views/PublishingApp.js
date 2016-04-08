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

    this.state = { 

     }
    this._tryArrayJoin = this._tryArrayJoin.bind(this);
  }
  componentWillMount() {
    /*this._fetch();*/

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
  _tryArrayJoin() {
    console.log("fire _tryArrayJoin ");
    let mockedString = "los angeles california United States";
    let anotherString = "beatiful city with lovely views";
    let usaCities = ["waszyngton", "dallas", "denver", "honolulu"];
    console.log(usaCities.join(" "));
    let joinedCities = usaCities.join("\n");
    let inputValuesFromReducer = this.props.formDataReducer;
    console.info(inputValuesFromReducer);
    this.props.articleActions.joinArray(joinedCities);



    function toTitleCase(str)
      {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      }
  }

  render () {
    console.info("from reducer -> ", this.props.articleReducer);
    let personNamesFromReducer = this.props.articleReducer;
    let citiesArray = String(this.props.articleReducer);
    let citiesArrayToUppercase = citiesArray.split(' ').map( character => character.charAt(0)
      .toUpperCase() + character.slice(1))
      .join(' ');
      console.info(citiesArrayToUppercase);

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Our publishing app - Javascript Playground</h1>
          
          <h2 onClick={this._tryArrayJoin} className="row center-lg center-md center-sm center-xs">Array Join Show</h2>
          {citiesArray}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);



 /* let mapPersonsJSX = [];
    for(let personKey in personNamesFromReducer) {
      let personDetails = personNamesFromReducer[personKey];
      let currentArticleJSX = (
        <div key={personKey}>
          <h2>{personDetails}</h2>
        </div>);
      mapPersonsJSX.push(currentArticleJSX)
      };*/

     
      /*let citiesArrayConverted = JSON.stringify(citiesArray);*/

   
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


     /* let newNyc = [];
      let newPropNyc =[];


      function myFunction() {

        let nyc = {
            fullName: "New York City",
            mayor: "Michael Bloomberg",
            population: 8000000,
            boroughs: 5
        };
        let propValue;
        for(let propName in nyc) {
            propValue = nyc[propName]

            newNyc.push(propValue);
            newPropNyc.push(propName);
        }
      };
      myFunction();*/