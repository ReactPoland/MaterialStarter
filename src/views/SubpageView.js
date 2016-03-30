import React from 'react';
import ActionAndroid from 'material-ui/lib/svg-icons/communication/business';
import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';
import { Form } from 'components/Form.js';



export default class SubpageView extends React.Component {
  render () {


  return (
    <div style={{marginTop: 20}}>
      <div style={{maxWidth: 450, margin: '0 auto'}}>
        <Form onSubmit={(model) => alert(JSON.stringify(model, null, 4))} />
      </div>
    </div>);

  }
}
