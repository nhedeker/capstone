import AppBar from 'material-ui/AppBar';
import AppBarActions from './AppBarActions';
import IconButton from 'material-ui/IconButton';
import LocalDining from 'material-ui/svg-icons/maps/local-dining';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Main = React.createClass({
  componentWillMount() {
    this.props.fetchRecipes();
  },

  handleTouchTap() {
    this.props.goToMain();
  },

  render() {
    const styleTitle = {
      maxWidth: '100vw',
      minWidth: '125px',
      marginRight: '10px'
    };

    const styleAppBar = {
      paddingRight: 0,
      position: 'fixed'
    };

    const styleIconButton = {
      margin: 0,
      padding: 0
    };

    return <div>
      <AppBar
        className="appBar"
        iconElementLeft={
          <IconButton
            iconStyle={styleIconButton}
            onTouchTap={this.handleTouchTap}
            style={styleIconButton}
          >
            <LocalDining />
          </IconButton>
        }
        onTitleTouchTap={this.handleTouchTap}
        style={styleAppBar}
        title="MyApron"
        titleStyle={styleTitle}
      >
        {React.cloneElement(
          <AppBarActions className="appBarActions" />, this.props)
        }
      </AppBar>
      <div className="appContentsContainer">
        {React.cloneElement(this.props.children, this.props)}
      </div>
      <Snackbar
        autoHideDuration={4000}
        message={this.props.errors.errorMessage}
        onRequestClose={this.props.handleCloseError}
        open={this.props.errors.showError}
      />
    </div>;
  }
});

export default Main;
