import AppBar from 'material-ui/AppBar';
import AppBarActions from './AppBarActions';
import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const Main = React.createClass({
  componentWillMount() {
    this.props.fetchRecipes();
  },

  handleTitleTouchTap() {
    this.props.goToMain();
  },

  render() {
    const styleTitle = {
      maxWidth: '100vw',
      minWidth: '150px',
      marginRight: '10px'
    };

    const styleAppBar = {
      paddingRight: 0,
      position: 'fixed'
    };

    return <div>
      <AppBar
        className="appBar"
        onTitleTouchTap={this.handleTitleTouchTap}
        showMenuIconButton={false}
        style={styleAppBar}
        title="NameOfApp"
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
