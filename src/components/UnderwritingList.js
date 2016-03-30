import React from 'react';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import styles from '../styles.js';

export default class UnderwritingList extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     
    }

  }
	render() {
		let menuSimpleStyling = {...styles.menuTopMargin };
		return (
			<div>
			    <Menu style={menuSimpleStyling}>
			      <MenuItem primaryText="Super Preferred" />
			      <MenuItem primaryText="Preferred" />
			      <MenuItem primaryText="Standard" />
			      <MenuItem primaryText="Standard Plus" />
			    </Menu>
			</div>
			);
	}
}