import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import styles from '../styles.js';

export default class ProvinceDropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 6};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
  	let menuSimpleStyling = {...styles.menuTopMargin };
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} style={menuSimpleStyling}>
        <MenuItem value={1} primaryText="All provinces"/>
        <MenuItem value={2} primaryText="Alberta"/>
        <MenuItem value={3} primaryText="Quebec"/>
        <MenuItem value={4} primaryText="Nova Scotia"/>
        <MenuItem value={5} primaryText="Yukon"/>
        <MenuItem value={6} primaryText="New Foundland and Labrador"/>
      </DropDownMenu>
    );
  }
}