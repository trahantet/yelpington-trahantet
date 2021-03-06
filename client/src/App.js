import "./components/style/App.css";
import Map from "./components/Map";
import { useState } from "react";
import L, { map } from "leaflet";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import SideBar from "./components/SideBar";
import BarPage from "./components/BarPage";

function App() {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 13,
    center: [44.4759, -73.2121],
  });

  return (
    <div>
      <h1 id="header"> Yelpington</h1>
      <Map
        center={center}
        // zoom={zoom}
        newZoom={zoom.zoomIn ? zoom.zoom : 13}
        newCenter={zoom.zoomIn ? zoom.center : [44.4759, -73.2121]}
      />
      
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <SideBar setZoom={setZoom} />;
          }}
        >
          <SideBar />
        </Route>

        <Route
          path="/bars/:id"
          render={(props) => {
            return props.match.isExact ? (
              <BarPage match={props.match} setNewZoom={setZoom} />
            ) : (
              <Redirect to="/" />
             
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;

//title on top, map,

{
  /* <Route
          path="/bar/:id"
          children={(props) => {
            return
             props.match.isExact ? (
              <SideBar match={props.match} />
            ) : (
              <Redirect to="/bar/:id" />
            );
          }}
        /> */
}
{
  /* // render={({ match }) => <h1> {match.params.id || "none"}</h1>} */
}

{
  /* <Route
          path="*"
          component={(props) => <NotFound match={props.match} />}
        /> */
}
