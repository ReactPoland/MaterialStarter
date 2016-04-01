import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import API from 'utils/API';
import { Link } from 'react-router';

import { Paper, FlatButton, AppBar } from 'material-ui';

import Colors from 'material-ui/lib/styles/colors';
import AlertWarning from 'material-ui/lib/svg-icons/alert/warning';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Accessability from 'material-ui/lib/svg-icons/action/account-box';
import Autorenew from 'material-ui/lib/svg-icons/action/autorenew';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  // sessionActions: bindActionCreators(sessionActions, dispatch)
});

class CoreLayout extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    return (
      <div>
        <AppBar
          title={
            <h1 style={{display: 'flex', paddingLeft: 30, fontSize: 25, lineHeight: 2}}>
              <Link to='/'style={{textDecoration: "underline", color: "white", fontSize: 22}}>Material UI starter</Link>
            </h1>
          }
          iconElementLeft={<span />}>

          <div  style={{marginRight: 30, marginTop: 20}}>
          <Link to='/starter'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Form"
              icon={<Autorenew />} />
          </Link>
          </div>
        </AppBar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
