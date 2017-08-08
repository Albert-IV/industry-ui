import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class LoggedInComponent extends React.Component {
  constructor() { super(); }
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color="rgb(255, 255, 255)" /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }
}

class LogInComponent extends React.Component {
  constructor() { super(); }
  render() { return <div>Log In</div> }
}

export default class TopBarComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppBar
        title="Industry Calculator"
        onLeftIconButtonTouchTap={this.props.clickHandler}
        iconElementRight={this.props.user.loggedIn ? <LoggedInComponent/> : <LogInComponent/>}
      />
    )
  }
};