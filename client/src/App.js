import "./App.css";
import Map from "./components/Map";
import { useState } from 'react';
import L, { map} from 'leaflet';


function App() {
const [center, setCenter] = useState([43.88, -72.7317]);
const [zoom, setZoom] = useState(8);


  return (
    <div>
      <h1>Yelpington</h1>

      <Map center={center} zoom={zoom}/>
    </div>
  );
}


export default App;

//title on top, map,
