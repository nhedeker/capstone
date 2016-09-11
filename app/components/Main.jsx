import AppBar from 'material-ui/AppBar';
import AppBarActions from './AppBarActions';
import React from 'react';
import { browserHistory } from 'react-router';

const Main = React.createClass({
  render() {
    return <div>
      <AppBar
        className="title"
        onTitleTouchTap={() => { browserHistory.push('/') }}
        showMenuIconButton={false} title="Title"
      >
        <AppBarActions />
      </AppBar>
      {React.cloneElement(this.props.children, this.props)}
    </div>;
  }
});

export default Main;
