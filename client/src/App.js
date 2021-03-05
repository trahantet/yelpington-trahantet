import "./App.css";
import Map from "./components/Map";
import { useState } from "react";
import L, { map } from "leaflet";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState(8);

  return (
    <div>
      <h1>Yelpington</h1>
      {/* <Map center={center} zoom={zoom} /> */}
      <Switch>
        <Route exact path="/" >
          <SideBar/> 
        </Route>
        {/* <Route
          path="/bar/:id"
          children={(props) => {
            return
             props.match.isExact ? (
              <SideBar match={props.match} />
            ) : (
              <Redirect to="/bar/:id" />
            );
          }}
        /> */}
          {/* // render={({ match }) => <h1> {match.params.id || "none"}</h1>} */}


        {/* <Route
          path="*"
          component={(props) => <NotFound match={props.match} />}
        /> */}
      </Switch>
    </div>
  );
}

export default App;

//title on top, map,
