import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

const NotFound = React.createClass({
  render() {
    return <div className="notFoundPage">
      <h1>Uh Oh!</h1>
      <h2>The page you were looking for doesn't exist.</h2>
      <img className="errorImg" src="./PusheenEats.png" />
      <RaisedButton
        icon={<ArrowBack />}
        label="Return to Homepage"
        primary={true}
      />
    </div>;
  }
});

export default NotFound;
