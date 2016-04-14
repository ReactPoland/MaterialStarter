import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import API from 'utils/API';
import { Link } from 'react-router';
import { Paper, FlatButton, AppBar } from 'material-ui';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import Reorder from 'material-ui/lib/svg-icons/action/reorder';
import Accessability from 'material-ui/lib/svg-icons/action/account-box';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  // sessionActions: bindActionCreators(sessionActions, dispatch)
});

class CoreLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render () {

    return (
      <div >
        <Reorder
          style={{width:50, height:50}}
          onTouchTap={this.handleToggle}
        />
        <LeftNav width={150} openRight={false}  open={this.state.open} >
          <Reorder
          style={{width:50, height:50}}
          onTouchTap={this.handleToggle}
        />
        <Link to='/'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Home"
              icon={<Accessability />} />
        </Link>
        <Link to='/form'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Form"
              icon={<Accessability />} />
        </Link>
        </LeftNav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);


/*import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import API from 'utils/API';
import { Link } from 'react-router';
import { Paper, FlatButton, AppBar } from 'material-ui';
import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';
import Reorder from 'material-ui/lib/svg-icons/action/reorder';
import Accessability from 'material-ui/lib/svg-icons/action/account-box';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  // sessionActions: bindActionCreators(sessionActions, dispatch)
});

class CoreLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render () {

    return (
      <div >
        <Reorder
          style={{width:50, height:50}}
          onTouchTap={this.handleToggle}
        />
        <LeftNav width={150} openRight={false} open={this.state.open} >
          <Reorder
          style={{width:50, height:50}}
          onTouchTap={this.handleToggle}
        />
        <Link to='/'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Home"
              icon={<Accessability />} />
        </Link>
        <Link to='/form'>
            <FlatButton
              backgroundColor="#ffffff"
              label="Form"
              icon={<Accessability />} />
        </Link>
        </LeftNav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);*/


