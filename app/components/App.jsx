import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    users: state.users,
    userAuth: state.userAuth,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
