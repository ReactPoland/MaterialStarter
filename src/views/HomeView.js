import React from 'react';
import { FlatButton, Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui';
import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';


var mock = {
	
	websitesList: [
		{
			href: 'http://onet.pl',
			anchor: 'Visit ONET',
      otherColumnValue: '#1'
		},
    {
      href: 'http://wp.pl',
      anchor: 'Visit WP',
      otherColumnValue: '#3'
    }
  ]
}

export default class HomeView extends React.Component {
  render () {


  let rowsJSX = mock.websitesList.map((item, index) => {
    let tableStyle={display: "inline-block"};

    return (<TableRow key={index}>
              <TableRowColumn>
                <div style={tableStyle}>
                <a href={item.href} target="_blank">
                  <FlatButton
                    backgroundColor="#ffffff"
                    label={" "} 
                    icon={<Icon_Flag_US style={{marginTop: 10}}/>} />
                  {item.anchor}
                </a>
                </div>
              </TableRowColumn>
              <TableRowColumn>{item.otherColumnValue}</TableRowColumn>
            </TableRow>);
  });

  let tableMOCK = (
    <Table selectable={false}>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>websites</TableHeaderColumn>
          <TableHeaderColumn>other column</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow style={{backgroundColor: "#ccc"}}>
          <TableRowColumn>
              EXAMPLE STATIC ROW
          </TableRowColumn>
          <TableRowColumn> </TableRowColumn>
        </TableRow>
        {rowsJSX}
      </TableBody>
    </Table>
  );
    return (
      <div style={{paddingLeft: 50, paddingRight: 50}}>
        <h1>A HEADER GO HERE</h1>
        {tableMOCK}
      </div>
    );
  }
}
