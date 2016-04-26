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
import Description from 'material-ui/lib/svg-icons/action/description';
import Explore from 'material-ui/lib/svg-icons/action/explore';
import Favorite from 'material-ui/lib/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';

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
    boxShadow: "10px 10px 5px #888888",
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
/*Michal: i added in react-burger-menu to lib/baseStyles property top: 5px to fix jumping, moved down sidebar*/


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
        width={ 250 } 
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }>
          <List>
            <Link  to='/'><ListItem primaryText="LIFEADVISORPRO (TM)" leftIcon={<ContentInbox />} /></Link>
            <Link  to='/clients'><ListItem primaryText="Clients" leftIcon={<ActionGrade />} /></Link>
            <Link  to='/life-insurance'><ListItem primaryText="Life Insurance" leftIcon={<ContentSend />} /></Link>
            <Link  to='/critical-illness'><ListItem primaryText="Crtitical Illness" leftIcon={<ContentDrafts />} /></Link>
            <Link  to='/no-medical-exam'><ListItem primaryText="No Medical Exam" leftIcon={<ContentInbox />} /></Link>
            <Link  to='/disability'><ListItem primaryText="Disability" leftIcon={<Description />} /></Link>
            <Link  to='/needs-analysis'><ListItem primaryText="Needs Analysis" leftIcon={<Explore />} /></Link>
            <Link  to='/news'><ListItem primaryText="News" leftIcon={<Favorite />} /></Link>
            <Link  to='/settings'><ListItem primaryText="Settings" leftIcon={<FavoriteBorder />} /></Link>
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