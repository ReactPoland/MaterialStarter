import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import styles from '../../styles.js';

export default class UnderwritingDropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 4};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
  	let menuSimpleStyling = {...styles.menuTopMargin };
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} >
        <MenuItem value={1} primaryText="Super Preferred"/>
        <MenuItem value={2} primaryText="Preferred"/>
        <MenuItem value={3} primaryText="Standard"/>
        <MenuItem value={4} primaryText="Standard Plus"/>
      </DropDownMenu>
    );
  }
}