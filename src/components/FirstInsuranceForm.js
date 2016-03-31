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
import Accessability from 'material-ui/lib/svg-icons/action/account-box';
import EditIcon from 'material-ui/lib/svg-icons/image/edit';


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
    let formHeading = { ...styles.formHeading };
    let marginTopForty ={...styles.menuTopMargin};
    let JSXtoReturn = (
      
      <Formsy.Form onSubmit={this._submit}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h1 style={formHeading}>First Insurance Form</h1>
          <div className="row" style={marginTopForty}>
            <Accessability />
            <DefaultInput
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='href' 
              title='Client 1' 
              required />
           <EditIcon />
            <DefaultInput 
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='title' title='Amount' required />
          </div>
          <div className="row" style={marginTopForty}>
            <EditIcon />
            <DefaultInput
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"

              name='href' 
              title='Actual age' 
              required />
            <EditIcon />
            <DefaultInput 
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"
              name='href' 
              title='Nearest age' 
              required />
          </div>
          <div className="row" style={marginTopForty}>
          <UnderwritingList />
          <TypeMenu />
          <ProvinceDropdownMenu />
          
          
          </div>
          <SexSwitches />
          <CheckBox />
          <div className="row" style={marginTopForty}>
          <ResetButton />
          
          <RaisedButton
            secondary={true}
            type="submit"
            style={{float:'right', width: 150}}
            label={'Submit form'} />
          
          </div>
        </Paper>
      </Formsy.Form>
      
    );

    return JSXtoReturn;
  }
}