import AppBar from 'material-ui/AppBar';
import AppBarActions from './AppBarActions';
import React from 'react';
import { browserHistory } from 'react-router';

const Main = React.createClass({
  render() {
    const styleTitle = {
      maxWidth: '100vw',
      minWidth: '150px',
      marginRight: '10px'
      // overflow: 'none',
      // textOverflow: 'none'
    };

    const styleAppBar = {
      paddingRight: 0,
      position: 'fixed'
    };

    return <div>
      <AppBar
        className="appBar"
        onTitleTouchTap={() => { browserHistory.push('/') }}
        showMenuIconButton={false}
        style={styleAppBar}
        title="NameOfApp"
        titleStyle={styleTitle}
      >
        <AppBarActions className="appBarActions" />
      </AppBar>
      <div className="appContentsContainer">
        {React.cloneElement(this.props.children, this.props)}
      </div>
    </div>;
  }
});

export default Main;
