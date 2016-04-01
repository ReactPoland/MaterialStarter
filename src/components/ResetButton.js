import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from '../styles.js';


export default class ResetButton extends React.Component {

  render() {
  	let resetButtonStyling = {...styles.resetButtonMargin, ...styles.resetButtonWidth, ...styles.resetButtonDisplay};
    return (
      <div>
	    <RaisedButton label="Reset"  style={resetButtonStyling}  primary={true}/>
	  </div>
    );
  }
}