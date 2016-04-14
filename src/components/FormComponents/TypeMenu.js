import React from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import styles from '../../styles.js';

export default class TypeDropdownMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 4};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
  	let menuSimpleStyling = {...styles.menuTopMargin };
    return (
      <div>
      <DropDownMenu value={this.state.value} onChange={this.handleChange} >
        <MenuItem value={1} primaryText="Term 10"/>
        <MenuItem value={2} primaryText="Term 15"/>
        <MenuItem value={3} primaryText="Term 20"/>
        <MenuItem value={4} primaryText="Term 25"/>
        <MenuItem value={5} primaryText="Term 30"/>
        <MenuItem value={6} primaryText="Term 65"/>
      </DropDownMenu>
      </div>
    );
  }
}