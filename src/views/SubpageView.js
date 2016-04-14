import React from 'react';
import ActionAndroid from 'material-ui/lib/svg-icons/communication/business';
import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';
import { FirstInsuranceForm } from 'components/FormComponents/FirstInsuranceForm.js';
import styles from '../styles.js';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import * as formDataActions from 'actions/formData';

const mapStateToProps = (state) => ({
 /*formData: state.formData*/
 ...state
});


const mapDispatchToProps = (dispatch) => ({
 formDataActions: bindActionCreators(formDataActions, dispatch)
});

class SubpageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._onSubmit = this._onSubmit.bind(this);
  }
  componentWillMount() {
    this._onSubmit();
  }

  _onSubmit(model) {
    /*console.info("model ", model);*/
    this.props.formDataActions.submitData(model);
  }

  render () {

    /*console.info("222from reducer -> ", this.props.formDataReducer);*/
    let formMaxWidthAndMargins = {...styles.formMaxWidth, ...styles.formMargin};
    let formComponentMarginTop = {...styles.componentMarginTop};

    return (
      <div style={formComponentMarginTop}>
          
      <div style={formMaxWidthAndMargins}>
        <FirstInsuranceForm onSubmit={this._onSubmit} />
      </div>
          
    </div>);

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SubpageView);

//CONNECT takes function that returns actions, function that returns state,
//and as third argument takes react component( the view), it then makes 
//REACT SMART COMPONENT WITH these bound together