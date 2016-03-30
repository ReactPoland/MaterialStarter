import React from 'react';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


export default class UnderwritingList extends React.Component  {
	constructor(props) {
    super(props)

    this.state = {
     
    }

  }
	render() {
		const style = {
		};
		return (
			<div>
			    <Menu style={style}>
			      <MenuItem primaryText="Super Preferred" />
			      <MenuItem primaryText="Preferred" />
			      <MenuItem primaryText="Standard" />
			      <MenuItem primaryText="Standard Plus" />
			    </Menu>
			</div>
			);
	}
}