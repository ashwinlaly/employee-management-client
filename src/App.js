import React, { Component } from 'react';
import {connect} from 'react-redux';
import Routes from './Routes';
import {onLoad, onRedirect} from './Redux/actions/userAction';

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  redirectTo: state.common.redirectTo
})

const mapDispatchToProps = {
  onLoad,
  onRedirect
}

class App extends Component {
  componentDidMount() {
    const token = window.localStorage.getItem("jwt")
    this.props.onLoad(token? token : null)
  }

  render() {
    if(this.props.appLoaded) {
      return (
        <div className="App">
          <Routes/>
        </div>
      );
    } else {
      return (
        <div className="App">
          Hi
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);