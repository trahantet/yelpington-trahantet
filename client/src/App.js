import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import Map from "./components/Map";
import Home from "./components/Home";
import Rest from "./components/Rest"
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
          <Route path="/restaurant/:id"
          render={(props) => {
            return props.match.isExact ? (
              <Rest match={props.match} />
            ) : (
              <Redirect to="/" />
            );
          }}/>
        
        </Switch>
        <div id="spacer"> <Map /></div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
