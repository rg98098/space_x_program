import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import FetchControl from "./containers/FetchControl/FetchControl";
import Layout from "./hoc/Layout/Layout";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Test from "./components/UI/NotFound/NotFound";


class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={FetchControl}/>
            {/* <Route path="/" render={() =><Test/>}/> */}
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
