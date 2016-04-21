import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import API from 'utils/API';
import { Link } from 'react-router';
import { Paper, FlatButton, AppBar } from 'material-ui';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Accessability from 'material-ui/lib/svg-icons/action/account-box';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';
import Divider from 'material-ui/lib/divider';

var Menu = require('react-burger-menu').push;

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  // sessionActions: bindActionCreators(sessionActions, dispatch)
});

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7',
    cursor: 'pointer'
  },
  bmMenu: {
    background: '#ffffff',
    padding: '0 0 0 0',
    fontSize: '1.15em',
    boxShadow: "10px 10px 5px #888888"
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0'
  },
  bmOverlay: {
    background: 'ffffff'
  }
}


class CoreLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render () {

    return (
      <div id="outer-container">
      <Menu 
        styles={ styles }
        noOverlay 
        isOpen 
        width={ 200 } 
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }>
          <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
          </List>
          <Divider />
          <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
          </List>
      </Menu>
        <div id="page-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);

/*<Link  to='/'>
            <FlatButton style={{width: '200px'}}
            backgroundColor="#ffffff"
            label="Home"
            icon={<Accessability />} />
            </Link>
       
          <Link  to='/form'>
          <FlatButton
          backgroundColor="#ffffff"
          label="Form"
          icon={<Accessability />} />
          </Link>
    
        <Link  to='/clients'>
          <FlatButton
          backgroundColor="#ffffff"
          label="Clients"
          icon={<Accessability />} />
        </Link>*/