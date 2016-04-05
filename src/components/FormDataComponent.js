import React from 'react';
import styles from '../styles.js';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class FormDataView extends React.Component {
  render () {
    
    return (
      <div>
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
		        <TableRowColumn>1</TableRowColumn>
		        <TableRowColumn>John Smith</TableRowColumn>
		        <TableRowColumn>Employed</TableRowColumn>
		        <TableRowColumn>Employed</TableRowColumn>
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
