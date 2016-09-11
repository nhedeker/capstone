import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
