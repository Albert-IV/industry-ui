import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        onRequestChange={this.props.toggleOpen}
        docked={false}
      >
        <MenuItem onClick={this.props.toggleLoggedIn}>Toggle Logging In</MenuItem>
      </Drawer>
    )
  }
};