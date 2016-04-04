import React from 'react';
import styles from '../styles.js';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import FormDataComponent from '../components/FormDataComponent.js';

/*const mapStateToProps = (state) => ({
 formData: state.formData
});

const mapDispatchToProps = (dispatch) => ({
 actions: bindActionCreators(formDataActions, dispatch)
});*/

export default class FormDataView extends React.Component {
  render () {
    
    return (
      <div>
        <h2 >View Data from the form here</h2>
        <FormDataComponent />
        
      </div>);

  }
}
