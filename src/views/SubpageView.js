import React from 'react';
import ActionAndroid from 'material-ui/lib/svg-icons/communication/business';
import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';
import { Form } from 'components/FirstInsuranceForm.js';
import styles from '../styles.js';
import ViewFormData from './ViewFormData.js';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import * as formDataActions from 'actions/formData';

//function that return state of application , needed for CONNECT
const mapStateToProps = (state) => ({
 formData: state.formData
});

//function that return actions of application , needed for CONNECT
const mapDispatchToProps = (dispatch) => ({
 actions: bindActionCreators(formDataActions, dispatch)
});

class SubpageView extends React.Component {

  submitForm(model) {
    /*(model) => alert(JSON.stringify(model, null, 9));*/
    this.props.actions.submitData(model);
  }

  render () {
    console.info(this.props);
    console.info("this.props.formData", this.props.formData);
    console.info("this.props.actions.formData", this.props.actions.submitData);
    let formMaxWidthAndMargins = {...styles.formMaxWidth, ...styles.formMargin};
    let formComponentMarginTop = {...styles.componentMarginTop};
    
    return (
      <div style={formComponentMarginTop}>
        
        <div style={formMaxWidthAndMargins}>
          <Form submitModel={this.submitForm} />
        </div>
        
      </div>);

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubpageView);

//CONNECT takes function that returns actions, function that returns state,
//and as third argument takes react component( the view), it then makes 
//REACT SMART COMPONENT WITH these bound together