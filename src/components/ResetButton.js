import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';


export default class ResetButton extends React.Component {

  render() {

    return (
      <div>
	    <RaisedButton label="Reset" secondary={true} style={{margin: '0 auto',display: 'block', width: 150}} />
	  </div>
    );
  }
}