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
 formData: state.formData
});

const mapDispatchToProps = (dispatch) => ({
 actions: bindActionCreators(formDataActions, dispatch)
});

class FormDataView extends React.Component {
  render () {
    
    return (
      <div >
        
        <FormDataComponent />
        
      </div>);

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FormDataView);