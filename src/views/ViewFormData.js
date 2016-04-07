import React from 'react';
import styles from '../styles.js';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
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

		  		let currentFormDataJSX = (
		  			
		  			<TableRow >
			        <TableRowColumn>{reducerData.client}</TableRowColumn>
			        <TableRowColumn>{reducerData.amount}</TableRowColumn>
			        <TableRowColumn>{reducerData['actual age']}</TableRowColumn>
			        <TableRowColumn>{reducerData['nearest age']}</TableRowColumn>
			      </TableRow>
		  			);
		  		
		  	

		    console.info(this.props);
		    console.info("this.props.formDataReducer", this.props.formDataReducer);
		    console.log(currentFormDataJSX);
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
			      {currentFormDataJSX}
			    
				  </TableBody>
				  </Table>
		        
		      </div>);

		  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormDataView);