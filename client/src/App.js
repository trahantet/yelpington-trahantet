import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Map from "./components/Map";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div id="main">
      <h1 className="title-bar">Yelpington</h1>
      <div id="browser"> 
      <BrowserRouter >
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <div id="spacer"> <Map /></div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
