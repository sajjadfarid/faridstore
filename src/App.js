import React from 'react';
import {Provider} from "react-redux";
import SportsStoreDataStore from "./data/DataStore";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ShopConnector from "./shop/ShopConnector";

export default class App extends React.Component{
  render = ()=>
      <Provider store={SportsStoreDataStore}>
          <Router>
              <Switch>
                  <Route path='/shop' component={ShopConnector} />
                  <Redirect to='/shop' />
              </Switch>
          </Router>
      </Provider>
}
