"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from 'actions/article.js';
import  todoActions from 'actions/addTodo';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({

  todoActions: bindActionCreators(todoActions, dispatch)
});


class PublishingApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
     
     }
    /*this._tryArrayJoin = this._tryArrayJoin.bind(this);*/
    this._addTodo = this._addTodo.bind(this);
  }
   /* componentWillMount() {
    this._addTodo();
  }*/

  _addTodo() {
    let addTodoData = {
        text: "action.text"
      };
    this.props.todoActions.addTodo(addTodoData);
  }
  
  render () {
    let todoJSX = this.props.todoReducer;
    console.info("item from reducer",todoJSX);
    /*let todoJSXArray =[];
    todoJSXArray.push(todoJSX);
    
    console.info("todoJSXArray has: ", todoJSXArray);*/
   /*let todoMapJSX = todoJSX.map(function( item, index) {
    return <li key={index}>{item.customText}</li>
   });*/

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Our publishing app - Javascript Playground</h1>
          <button onClick={this._addTodo}>Add Todo</button>
          
          <div>
            <ul>
            {"todoJSX"}
            </ul>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);


/* var selectListRelationshipTasksJSX = stateRelationshipTasksToMap.map(function ( item, index ) {
      return <option key={index} value={item.text}>{item.text}</option>
    });*/








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

      