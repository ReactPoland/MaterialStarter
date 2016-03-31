import React from 'react';
import Formsy from 'formsy-react';
import { RaisedButton, Paper } from 'material-ui';
import { DefaultInput } from './DefaultInput';
import axios from 'axios';
import UnderwritingList from './UnderwritingList.js';
import TypeMenu from './TypeMenu.js';
import ProvinceDropdownMenu from './ProvinceDropdownMenu.js';
import SexSwitches from './SexSwitches.js';
import CheckBox from './Checkbox.js';
import ResetButton from './ResetButton.js';
import styles from '../styles.js';
import FaceIcon from '../my-react-icons/FaceIcon.js';


export class Form extends React.Component {
  constructor() {
    super();
    this.state = { canSubmit: false }
    this._submit = this._submit.bind(this);
  }

  _submit(model) {
    console.info("data submited", model);
    this.props.onSubmit(model);

  }

  render() {
    let ageInputsStyle = {...styles.ageInputsStyle};
    let JSXtoReturn = (
      
      <Formsy.Form onSubmit={this._submit}>
        <Paper zDepth={1} style={{padding: 32}}>
          
          <div className="row">
            <FaceIcon  />
            <DefaultInput
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='href' 
              title='Client 1' 
              required />
           
            <FaceIcon  />
            <DefaultInput 
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='title' title='Amount' required />
          </div>
          <h3>Select type of insurance:</h3>
          <UnderwritingList />
          <h3>Enter age:</h3>
          <div className="row">
            <FaceIcon  />
            <DefaultInput
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"

              name='href' 
              title='Actual age' 
              required />
            <FaceIcon  />
            <DefaultInput 
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"
              name='href' 
              title='Nearest age' 
              required />
          </div>
          <h3>Select Sex:</h3>
          <SexSwitches />
          <h3>Choose Type:</h3>
          <TypeMenu />
          <CheckBox />
          <h3>Select Province:</h3>
          <ProvinceDropdownMenu />
          <ResetButton />
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