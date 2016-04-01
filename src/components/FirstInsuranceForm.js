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
    let centerSelectableRow = {...styles.centerSelectableRow};
    let centerSumbitButtonsRow ={...styles.centerSumbitButtonsRow};
    let JSXtoReturn = (
      
      <Formsy.Form onSubmit={this._submit}>
        <Paper zDepth={1} style={{padding: 32}}>
          <h1 style={formHeading}>First Insurance Form</h1>
          <div className="row" style={marginTopForty}>
            <div>
              <Accessability style={formIconsTopMargin}/>
            </div>
            
            <DefaultInput
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='href' 
              title='Client 1' 
              required />
            <div>
              <ClearIcon style={formIconsTopMargin} hoverColor={Colors.greenA200}/>
            </div>
            <div>
              <EditIcon style={formIconsTopMargin}/>
            </div>
           
            <DefaultInput 
              className="col-xs-12
                col-sm-5
                col-md-5
                col-lg-5"
              name='title' title='Amount' required />
              <div>
                <ClearIcon style={formIconsTopMargin} hoverColor={Colors.greenA200}/>
              </div>
          </div>
          <div className="row" style={marginTopForty}>
            <div>
              <EditIcon style={formIconsTopMargin}/>
            </div>
            
            <DefaultInput
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"

              name='href' 
              title='Actual age' 
              required />
            <div>
              <ClearIcon style={formIconsTopMargin} hoverColor={Colors.greenA200}/>
            </div>
             <div>
              <EditIcon style={formIconsTopMargin}/>
            </div>
            <DefaultInput 
              className="col-xs-12
                  col-sm-5
                  col-md-5
                  col-lg-5"
              name='href' 
              title='Nearest age' 
              required />
              <div>
                <ClearIcon style={formIconsTopMargin} hoverColor={Colors.greenA200}/>
              </div>
          </div>
          <div className="row" style={centerSelectableRow}>
          <UnderwritingList />
          <TypeMenu />
          <ProvinceDropdownMenu />
          
          
          </div>
          <SexSwitches />
          <CheckBox />
          <div className="row" style={centerSumbitButtonsRow}>
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