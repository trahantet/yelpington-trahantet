import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/App.css";


export default function SideBar(props) {
  const [barNames, setBarNames] = useState([]);

  useEffect(() => {
    if (barNames.length === 0) {
      fetch(`/api`)
        .then((res) => res.json())
        .then((barList) => {
          setBarNames(barList);
        });
    }
  });
  return (
    <div id="SideBar">
      <h2> List of Bars</h2>
      {/* <h4>{barNames.name}</h4> */}
      {barNames.map((id, index) => {
        return (
          <h3 key={index}>
            <Link to={`/bars/${id}`}>{id.replaceAll("-", " ")}</Link>
          </h3>
        );
      })}
    </div>
  );
}

//  ${props.match.params.id}
