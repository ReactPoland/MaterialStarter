import React from 'react';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import { DefaultInput } from './DefaultInput';
import axios from 'axios';



export class Form extends React.Component {
  constructor() {
    super();
    this.state = { canSubmit: false }
    this._submit = this._submit.bind(this);
  }

  _submit(model) {
    console.info("data submited", model);

  }

  render() {
    let JSXtoReturn = (
      <Formsy.Form onSubmit={this._submit}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h3>Something Great</h3>
          <DefaultInput 
            name='href' 
            title='Something Great URL' 
            required />
          <DefaultInput 
            name='title' title='Something Great URL' required />

          <div style={{marginTop: 24}}>
            <RaisedButton
              secondary={true}
              type="submit"
              style={{margin: '0 auto', display: 'block', width: 150}}
              label={'Submit form'} />
          </div>
        </Paper>
      </Formsy.Form>
    );

    return JSXtoReturn;
  }
}