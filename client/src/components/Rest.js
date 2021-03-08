import React from "react";
import { useState, useEffect } from "react";

function Rest(props) {
  // local state of restaurant details
  const [restInfo, setRestInfo] = useState({
    id: "",
    name: "",
    address: "",
    "phone number": "",
    hours: "",
    latitude: "",
    longitude: "",
    notes: [],
  });

  useEffect(() => {
    // if there is nothing in state or! the restuarant in state doesnt match the new one being visited... 
    if (restInfo.id === "" || restInfo.id !== props.match.params.id) {
      console.log(props.match.params.id);
      // fetch from the api points for restaurant info
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restContent) => {
          // set local state
          setRestInfo(restContent);
          // update app.js state so map will zoom in appropriately 
          props.setZoom({
                zoomIn: true,
                zoom: 22,
                center: [restContent.latitude, restContent.longitude],
              });
        });
    }
  });

  return (
    <div id="solo-rest">
      {/* post restaurant info to page */}
      <h1>{restInfo.name}</h1>
      <i><h4 className="details">{restInfo.address}</h4></i>
      <i><h4 className="details">{restInfo["phone number"]}</h4></i>
      <i><h4 className="details">{restInfo.hours}</h4></i>
      <br/>
      <h2>Comments:</h2>
      <h4 className="comments">{restInfo.notes[0]}</h4>
      <h4 className="comments">{restInfo.notes[1]}</h4>
    </div>
  );
}

export default Rest;
