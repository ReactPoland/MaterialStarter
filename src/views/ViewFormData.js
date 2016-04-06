import React from 'react';
import styles from '../styles.js';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import FormDataComponent from '../components/FormDataComponent.js';
import { bindActionCreators } from 'redux';
import { connect  } from 'react-redux';
import * as formDataActions from 'actions/formData';

const mapStateToProps = (state) => ({
 ...state
});

const mapDispatchToProps = (dispatch) => ({
 actions: bindActionCreators(formDataActions, dispatch)
});

class FormDataView extends React.Component {

			constructor(props) {
	   	super(props);
  }
	  	render () {
	  		let formDataJSX = [];
		  	for(let formDataKey in this.props.formData) {
		  		let formDataDetails = this.props.formDataReducer[formDataKey];
		  		let currentFormDataJSX = (
		  			<div key={formDataKey}>
		  				<h2>{formDataDetails.amount}</h2>
		  				<h3>{formDataDetails.client}</h3>
		  			</div>);
		  		formDataJSX.push(currentFormDataJSX);
		  	}
		    console.info(this.props);
		    console.info("this.props.formData", this.props.formData);
		    /*console.info("this.props.actions.formData", this.props.actions.submitData);*/
		    return (
		      <div >
		        
		        <FormDataComponent />
		        {formDataJSX}
		      </div>);

		  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormDataView);