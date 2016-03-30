import React from 'react';
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import styles from '../styles.js';


export default class RadioButtonExampleSimple extends React.Component {
  render () {
    let sexSwitchesBlock = {...styles.sexSwitchesBlock};
    let sexSwitchesRadioButton = {...styles.sexSwitchesRadioButton};
    let sexSwitchesButtonsMarginTop = {...styles.sexSwitchesButtonsMarginTop};
    return (
      <div>
        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={sexSwitchesButtonsMarginTop} >
          <RadioButton
            value="light"
            label="Male"
            style={sexSwitchesRadioButton}
          />
          <RadioButton
            value="not_light"
            label="Female"
            style={styles.radioButton}
          />
        </RadioButtonGroup>

      </div>);

  }
}