import React from 'react';
import ActionAndroid from 'material-ui/lib/svg-icons/communication/business';
import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';
import { Form } from 'components/FirstInsuranceForm.js';
import styles from '../styles.js';




export default class SubpageView extends React.Component {
  render () {
    let formMaxWidthAndMargins = {...styles.formMaxWidth, ...styles.formMargin};
    let formComponentMarginTop = {...styles.componentMarginTop};
    let formHeading = { ...styles.formHeading };
    return (
      <div style={formComponentMarginTop}>
        <h1 style={formHeading}>First Insurance Form</h1>
        <div style={formMaxWidthAndMargins}>
          <Form onSubmit={(model) => alert(JSON.stringify(model, null, 4))} />
        </div>
      </div>);

  }
}
