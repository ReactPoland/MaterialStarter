
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import articleActions from 'actions/article.js';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActions, dispatch)
});


class SettingsView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
     
     }
  }

  //mocked data here, normally from database

  render () {

    return (
      <div>
          <h1 className="row center-lg center-md center-sm center-xs">Settings View</h1>
          	
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsView);

  