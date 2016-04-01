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
import AccountBox from 'material-ui/lib/svg-icons/action/account-box';
import Info from 'material-ui/lib/svg-icons/action/info';
import Hourglass from 'material-ui/lib/svg-icons/action/hourglass-empty';
import AttachMoney from 'material-ui/lib/svg-icons/editor/attach-money';
import ClearIcon from 'material-ui/lib/svg-icons/content/clear';
import Colors from 'material-ui/lib/styles/colors';


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
    let formIconsTopMargin ={...styles.formIconsTopMargin};
    let raisedButtonFloatAndWidth ={ ...styles.raisedButtonFloatAndWidth};
    let inputsMarginLeft ={...styles.inputsMarginLeft, ...styles.menuTopMargin};
    let resetButtonStyling = {...styles.resetButtonMargin, ...styles.resetButtonWidth, ...styles.resetButtonDisplay};
    let buttonsLeftMargin = { ...styles.inputsMarginLeft};
    let JSXtoReturn = (
      
      <Formsy.Form onSubmit={this._submit}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h1 style={formHeading}>First Insurance Form</h1>
          <div className="row center-lg center-md center-sm center-xs" style={marginTopForty}>
            <div>
              <AccountBox 
              style={formIconsTopMargin}/>
            </div>
            
            <DefaultInput
              className="col-xs-9
                col-sm-10
                col-md-11
                col-lg-11"
              name='client' 
              title='Client 1' 
              required />
            <div>
              <ClearIcon style={formIconsTopMargin} hoverColor={Colors.redA200}/>
            </div>
            </div>
            <div className="row center-lg center-md center-sm center-xs" style={marginTopForty}>
              <div>
                <AttachMoney style={formIconsTopMargin}/>
              </div>
             
              <DefaultInput 
                className="col-xs-9
                  col-sm-10
                  col-md-11
                  col-lg-11"
                name='amount' title='Amount' required />
                <div>
                  <ClearIcon style={formIconsTopMargin} hoverColor={Colors.redA200}/>
                </div>
            </div>
          <div className="row center-lg center-md center-sm center-xs" style={formIconsTopMargin}>
            <div>
              <Info style={formIconsTopMargin}/>
            </div>
            
            <DefaultInput

              className="col-xs-6
                  col-sm-3
                  col-md-3
                  col-lg-3"

              name='actual age' 
              title='Actual age' 
              required />
            <div>
              <ClearIcon style={formIconsTopMargin} hoverColor={Colors.redA200}/>
            </div>
            </div>
            <div className="row center-lg center-md center-sm center-xs" style={formIconsTopMargin}>
             <div >
              <Hourglass style={formIconsTopMargin}/>
            </div>
            <DefaultInput 
              className="col-xs-6
                  col-sm-3
                  col-md-3
                  col-lg-3"
              name='nearest age' 
              title='Nearest age' 
              required />
              <div>
                <ClearIcon style={formIconsTopMargin} hoverColor={Colors.redA200}/>
              </div>
          </div>
          <div className="row center-lg center-md center-sm center-xs" style={formIconsTopMargin}>
          <UnderwritingList />
          <TypeMenu />
          <ProvinceDropdownMenu />
          
          
          </div>
          <SexSwitches />
          <CheckBox />
          <div className="row center-lg center-md center-sm center-xs" style={formIconsTopMargin}>
          <div className="row center-lg center-md center-sm center-xs">
          <ResetButton />
          
          <RaisedButton
            secondary={true}
            type="submit"
            style={resetButtonStyling}
            label={'Submit form'} />
          </div>
          </div>
        </Paper>
      </Formsy.Form>
      
    );

    return JSXtoReturn;
  }
}