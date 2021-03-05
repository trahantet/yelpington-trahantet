import React from 'react'
import L, { map } from "leaflet";
import { useState, useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,
    Polyline,
  } from "react-leaflet";
  import 'leaflet/dist/leaflet.css';
  // import MyComponent from './MyComponent'

export default function Map(props) {
    return (
        <div>
            <MapContainer
      center={props.center}
      //maybe dropped pin?
      zoom={10}
      scrollWheelZoom={true}
      doubleClickZoom={true}
      zoomControl={true}
      touchZoom={true}
      style={{ height: "600px", width: "600px" }}
    >

      {/* <MyComponent 
      //droppedPin = {props.droppedPin} 
      center={props.center}
       zoom={props.zoom} /> */}

      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker  
      position={props.center} 
      />
      {/* <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      /> */}
    </MapContainer>
            
        </div>
    )
}
