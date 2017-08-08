import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBarComponent from './TopBarComponent';
import DrawerComponent from './DrawerComponent';
import PageContentComponent from './PageContentComponent';

export default class App extends React.Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
    this.toggleLoggingIn = this.toggleLoggingIn.bind(this);

    this.state = {
      menuOpen: false,
      user: {
        loggedIn: true
      }
    }
  }

  clickHandler() {
    this.setState({
      menuOpen: !this.state.menuOpen,
      user: {
        loggedIn: this.state.user.loggedIn
      }
    });
  }

  toggleLoggingIn() {
    this.setState({
      menuOpen: this.state.menuOpen,
      user: {
        loggedIn: !this.state.user.loggedIn
      }
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TopBarComponent clickHandler={this.clickHandler} user={this.state.user} />
          <DrawerComponent
            open={this.state.menuOpen}
            toggleOpen={this.clickHandler}
            toggleLoggedIn={this.toggleLoggingIn}
          />
          <PageContentComponent />
        </div>
      </MuiThemeProvider>
    )
  }
};