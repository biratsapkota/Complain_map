import React, { Component } from 'react';
import Landingpage from './landingpage/Landingpage';
import Report from './report/Report';
import { Switch,Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component={Landingpage}/>
        <Route path="/report" component={Report} />
      </Switch>
    );
  }
}

export default App;
