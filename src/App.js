import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
