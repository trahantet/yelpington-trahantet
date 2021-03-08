import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { useState } from 'react';
import Map from "./components/Map";
import Home from "./components/Home";
import Rest from "./components/Rest"
import "./App.css";

function App() {

  // state for the ma
  const[zoom, setZoom] = useState({
    zoomIn: false, 
    zoom: 13,
    center:[51.505, -0.09]
  })

  console.log(zoom)

  return (
    <div id="main">
      {/* make the title a link home */}
      <a className="restaurant-links" href={`/`}><h1 className="title-bar">Yelpington</h1></a> 
      <div id="browser"> 
      <BrowserRouter >
        <Switch >
          {/* home route, send it props to update state so when the back button is hit, the map zooms back out*/}
          <Route exact path="/"
          render={() => { 
            return  <Home setZoom={setZoom}/>
          }}
          />  
          {/* individual restuarant route */}
          <Route path="/restaurant/:id"
          // send it props for if the path is exact, and for updating the map 
          render={(props) => {
            return props.match.isExact ? (
              <Rest match={props.match} setZoom={setZoom} zoomIn={zoom.zoomIn}  />
            ) : (
              // if the path isn't an exact match redirect to home
              <Redirect to="/" />
            );
          }}/>
        
        </Switch>
        {/* map, outside of switch so its always showing up */}
        {/* sent props for zoom and center */}
        <div id="spacer"> <Map newZoom={zoom.zoomIn ? zoom.zoom: 13} newCenter={zoom.zoomIn ? zoom.center: [51.505, -0.09]} /></div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
