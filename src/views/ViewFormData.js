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
		  
	  	render () {
	  		let reducerData= this.props.formDataReducer;

	  		let formDataJSXMine = reducerData.client;
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
		    console.info("this.props.formDataReducer", this.props.formDataReducer);
		    /*console.info("this.props.actions.formData", this.props.actions.submitData);*/
		    return (
		      <div >
		        <div className="row center-lg center-md center-sm center-xs" >
       		<h2 >View Data from the form here:</h2>
       	</div>
        <Table>
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>Client</TableHeaderColumn>
			        <TableHeaderColumn>Amount</TableHeaderColumn>
			        <TableHeaderColumn>Actual age</TableHeaderColumn>
			        <TableHeaderColumn>Nearest age</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      <TableRow>
			        <TableRowColumn>{formDataJSXMine}</TableRowColumn>
			        <TableRowColumn>{formDataJSXMine}</TableRowColumn>
			        <TableRowColumn>{formDataJSXMine}</TableRowColumn>
			        <TableRowColumn>{formDataJSXMine}</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>2</TableRowColumn>
			        <TableRowColumn>Randal White</TableRowColumn>
			        <TableRowColumn>Unemployed</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>3</TableRowColumn>
			        <TableRowColumn>Stephanie Sanders</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>4</TableRowColumn>
			        <TableRowColumn>Steve Brown</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			        <TableRowColumn>Employed</TableRowColumn>
			      </TableRow>
				    </TableBody>
				  </Table>
		        
		      </div>);

		  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormDataView);