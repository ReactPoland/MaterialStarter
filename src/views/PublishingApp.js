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
    let symbols = [];
    let prices = [];
    let volumes = [];

      stocks.map(function(stock) {
        symbols.push(stock.symbol);
        prices.push(stock.price);
        volumes.push(stock.volume);
      });
      

    let combinedVaribales =  [symbols, prices, volumes];
    this.props.articleActions.joinArray(combinedVaribales);
  }
  addTodo() {

  }
  toggleTodo() {

  }

   

  render () {
    console.info("from reducer -> ", this.props.articleReducer);
    let stocks =  [
      { symbol: "XFX", price: 240.22, volume: 23432 },
      { symbol: "TNZ", price: 332.19, volume: 234 },
      { symbol: "JXJ", price: 120.22, volume: 5323 },
    ];

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Our publishing app - Javascript Playground</h1>
          <h2 onClick={this._forEachLesson.bind(null, stocks)} className="row center-lg center-md center-sm center-xs">ForEach Lesson</h2>
          {"symbolsToMapJSX"}
          <div>


          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);











 function toTitleCase(str)
      {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      };
// "DOUBLE MAP - MAPPING NESTED ARRAYS"
  /*var calendarJSX = calendarDaysArray.map(function(dayItem, index){

            var currentDate = dayItem.date;
           
                  var hoursJSX = dayItem.hours.map(function(hourItem, index2) {

                        let currentHour = hourItem.hour;

                        let hoursMinutes = hourItem.minutes;

                          let minutesMapped = hoursMinutes.map(function(minutesItem, index3){

                              let minutesJSX = minutesItem;

                              return <div>{minutesJSX}<br/></div>;

                          });
                        return <div>{currentHour} {minutesMapped}</div>;
                    });
                  
              return (
                <div>
                  <div style={{marginLeft:"200px"}}>{currentDate} </div>
                  <div >{hoursJSX}</div>
                </div>
              )
          });*/


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

      