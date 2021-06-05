import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Screens and Components
import Home from "./screens/Home";

class App extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Switch>
          
            <Route
              exact
              path="/"
              component={() => {
                return <Home />;
              }}
            >
            </Route>
        </Switch>
      </React.Fragment>


    );
  }
}


export default App;
