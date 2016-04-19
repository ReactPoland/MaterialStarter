import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import RaisedButton from 'material-ui/lib/raised-button';
import toolbarActions from '../actions/toolbarActions.js';

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
  toolbarActions: bindActionCreators(toolbarActions, dispatch)
});

const MessageComponent = (props) => (
  <div style={{padding: '1%',
    textAlign: 'right',
    width: '50%',
    display: 'inline-block',
    boxSizing: 'border-box'}}>
    <span>{props.message}</span>
    </div>);

const SuccessButtonComponent = (props) => {
  return <div style={{padding: '10px',
    textAlign: 'left',
    width: '25%',
    display: 'inline-block',
    boxSizing: 'border-box'}}>
      <RaisedButton label="OK" primary={true} onMouseDown={props.action}/>
    </div>
  }

const CloseXComponent = (props) => {
  return <div style={{padding: '10px',
    textAlign: 'right',
    width: '25%',
    display: 'inline-block',
    boxSizing: 'border-box'}}>
      <RaisedButton label="Close" onMouseDown={props.action}/>
    </div>
  }

class ToolbarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.toolbarActions.getState();
  }
  componentWillReceiveProps(){
    if (this.props.ToolbarReducer.success) {
      alert('Success flag toggled!');
    }
    if (this.props.ToolbarReducer.close) {
      alert('Close flag toggled!');
    }
  }
  render(){
    var suc = this.props.toolbarActions.clickSuccess;
    var clo = this.props.toolbarActions.clickClose;
    return (
      <Toolbar>
        <MessageComponent message={this.props.message} />
        <SuccessButtonComponent action={this.props.toolbarActions.clickSuccess}/>
        <CloseXComponent action={this.props.toolbarActions.clickClose}/>
      </Toolbar>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent);
