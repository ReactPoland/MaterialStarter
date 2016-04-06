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
 formActions: bindActionCreators(formDataActions, dispatch)
});

class FormDataView extends React.Component {

			constructor(props) {
			   	super(props);
		  }
		  componentWillMount() {
		    this._fetchFormData();
		  }
		  async _fetchFormData() {
		    let inputDataGathered = [
		      {
		          "client" : "new client 15",
		          "amount" : 9990,
		          "nearest age" : 55,
		          "actual age" : 67
		      },
		      {
		          "client" : "another client 25",
		          "amount" : 7770,
		          "nearest age" : 22,
		          "actual age" : 33
		      }
		    ];

		    this.props.formActions.submitData(inputDataGathered);
		  }
	  	render () {
	  		let formDataJSX = [];
		  	for(let formDataKey in this.props.formDataReducer) {
		  		let formDataDetails = this.props.formDataReducer[formDataKey];
		  		let currentFormDataJSX = (
		  			<div key={formDataKey}>
		  				<h2>{formDataDetails.amount}</h2>
		  			</div>);
		  		formDataJSX.push(currentFormDataJSX);
		  	}
		    console.info(this.props);
		    /*HERE THE DATA STORED IN THIS.PROPS.FORMDATAREDUCER ARE SEND BY THIS.PROPS.FORMACTIONS.SUBMITDATA(INPUT)
		    SOOOO I NEED TO PROVIDE HERE DATA TAKEN FROM FORM COMPONENT AND THATS IT*/
		    console.info("this.props.formData", this.props.formDataReducer);
		    /*console.info("this.props.actions.formData", this.props.actions.submitData);*/
		    return (
		      <div >
		        
		        <FormDataComponent />
		        {formDataJSX}
		      </div>);

		  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormDataView);