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
    /*this._tryArrayJoin = this._tryArrayJoin.bind(this);*/
    this._forEachLesson = this._forEachLesson.bind(this);
  }
  componentWillMount() {
   

  }
  
  //mocked data here, normally from database

  
  _forEachLesson(stocks) {

    console.info(stocks);

  }

   

  render () {
    console.info("from reducer -> (at first reducer sends {} it shows error when trying to show it on the view)", this.props.articleReducer);
    let stocks = ["PKK", "JPG"];
    let personNamesFromReducer = this.props.articleReducer;

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Our publishing app - Javascript Playground</h1>
          <h2 onClick={this._forEachLesson.bind(null, stocks)} className="row center-lg center-md center-sm center-xs">ForEach Lesson</h2>
          {personNamesFromReducer}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);

 function toTitleCase(str)
      {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      };




      /*_tryArrayJoin() {

    let usaCities2 = ["waszyngton", "dallas", "denver", "honolulu"];
    let usaCities22 = usaCities2.join(" ");

    let inputValuesFromReducer = this.props.formDataReducer;
    console.info(inputValuesFromReducer);
    
   
    let citiesArrayToUppercase = usaCities22.split(' ').map( character => character.charAt(0)
      .toUpperCase() + character.slice(1))
      .join(' ');
      console.log(citiesArrayToUppercase);

      this.props.articleActions.joinArray(citiesArrayToUppercase);

  }*/


        /*async _fetch() {
    
    let wantPersonNames =[];
    people.concat(anotherPeople).forEach(function (person){
      let personsNames = person.name;
      console.log(personsNames);
      wantPersonNames.push(personsNames);
    });
    console.log("for each method log ",wantPersonNames);
    

    this.props.articleActions.articlesList(wantPersonNames);
  }*/
  

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

      