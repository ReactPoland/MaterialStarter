"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clientsActions from 'actions/clientsActions.js';
import clientDataModel from 'reducers/tempModel.js';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
  clientsActions: bindActionCreators(clientsActions, dispatch)
});

class ClientsComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this._fetchClientsData();
  }
  //mocked data here, normally from database
  async _fetchClientsData() {
    let clientsData = clientDataModel;

    this.props.clientsActions.clientsDataShow(clientsData);
  }

  render () {
    console.info("from reducer -> ", this.props.clientsDataReducer);
  	
    return (
      <div>
          <h1>Our publishing app</h1>
          {"this.props.clientsDataReducer"}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsComponent);