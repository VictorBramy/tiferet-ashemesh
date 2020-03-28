import React, {Component} from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MakeCall from './components/MakeCall/MakeCall';
import {setRouteField} from './actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    route: state.changeRoute.route,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouteChange: (route) => dispatch(setRouteField(route))
  }
}
class App extends Component {
  
  render() {
    const {route} = this.props
    return (
      <div className="App">
        {route === 'landingpage' ? <LandingPage  /> :
        route === 'makecall' ? <MakeCall  /> : null }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
