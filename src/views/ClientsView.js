"use strict";

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clientsActions from 'actions/clientsActions.js';

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
    let clientsData = [{
        "id": "1",
        "name": "first client",
        "faceAmount": 50000,
        "clientChildrens": [{
            "age": 8,
            "sex": "male"
        }, {
            "age": 14,
            "sex": "female"
        }, {
            "age": 15,
            "sex": "female"
        }],
        "selectedUnderwriting": "Super preferred",

        "clientAgeData": {
            "actualAge": 30,
            "nearestAge": 31
        }

    },
    {
        "id": "2",
        "name": "second client",
        "faceAmount": 50000,
        "secondClientChildrens": [{
            "age": 11,
            "sex": "male"
        }],
        "selectedUnderwriting": "Super",
        "generatedQuotes": [{
            "companyName": "Sun Life",
            "companyProduct": "Term 40",
            "productPrice": "35000",
            "productPremium": "$162.65",
            "productConv": "69"
        }, {
            "companyName": "Manufacturers Life Insurance Company",
            "companyProduct": "Term 60",
            "productPrice": "75000",
            "productPremium": "$182.65",
            "productConv": "60"
        }],
        "licenseInfo": {
            "licenseKey": "unique license key",
            "clientName": "my client LTD",
            "description": "licensed to someone , someone under some conditions"
        },

        "clientAgeData": {
            "actualAge": 50,
            "nearestAge": 51
        }
    }];

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