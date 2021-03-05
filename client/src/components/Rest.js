import React from "react";
import { useState, useEffect } from "react";

function Rest(props) {
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
    if (restInfo.id === "" || restInfo.id !== props.match.params.id) {
        console.log(props.match.params.id)
      fetch(`/rest/${props.match.params.id}`)
        .then((res) => res.json())
        .then((restContent) => {
          setRestInfo(restContent);
        });
    } 
  } );

  return (
    <div>
      <h2>{restInfo.name}</h2>
      <h4>{restInfo.address}</h4>
      <h4>{restInfo["phone number"]}</h4>
      <h4>{restInfo.hours}</h4>

      

    </div>
  );
}

export default Rest;
