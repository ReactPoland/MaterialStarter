import React from 'react';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';
import styles from '../../styles.js';


export default class CheckBox extends React.Component {
  render () {
    let checkboxTopMargin = {...styles.sexSwitchesButtonsMarginTop};
    return (
      <div style={checkboxTopMargin}>
	    <Checkbox
	      label="Waiver"
	    />
	    
	  </div>);

  }
}