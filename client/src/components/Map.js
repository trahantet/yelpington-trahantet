import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Zoom from './Zoom'
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});



L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) {
  return (
    
    <div id="map-container">
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://stamen.com">Stamen Design</a>,'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        <Zoom center={props.newCenter} zoom={props.newZoom} />
      {/* restuarant markers */}
        <Marker className="marker" position={[51.50665042583389, -0.052600917369056394]}>
          <Popup >
            <Link to={`/restaurant/il-bordello`}>Il Bordello</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.475684897183925, -0.03695599779996597]}>
          <Popup >
            <Link to={`/restaurant/new-cross-house`}>New Cross House</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.52067167785204, -0.0718227250224073]}>
          <Popup >
            <Link to={`/restaurant/aladin-indian`}>Aladin Indian</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.536433599490074, -0.06777154696621474]}>
          <Popup >
            <Link to={`/restaurant/trade`}>Trade</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.50556388920947, -0.09112392810180123]}>
          <Popup >
            <Link to={`/restaurant/borough-market`}>Borough Market</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.48444080779992, -0.0329539793353793]}>
          <Popup >
            <Link to={`/restaurant/welcome-inn-fish-bar`}>Welcome Inn Fish Bar</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.4996290450527, -0.07622660750196131]}>
          <Popup >
            <Link to={`/restaurant/maltby-street-market`}>Maltby Street Market</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.4757069327405, -0.036886290729891455]}>
          <Popup >
            <Link to={`/restaurant/new-cross-house`}>New Cross House</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.50327282268096, -0.058297435298983166]}>
          <Popup >
            <Link to={`/restaurant/captain-kidd`}>Captain Kidd</Link>
          </Popup>
        </Marker>
        <Marker className="marker" position={[51.52439682268097, -0.07734326941116289]}>
          <Popup >
            <Link to={`/restaurant/dishoom`}>Dishoom</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
