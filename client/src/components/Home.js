import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
    // local state = list of restaurants
  const [restNames, setRestNames] = useState([]);

  useEffect(() => {
    //   if the list is empty
    if (restNames.length === 0) {
        // get it by calling the api endpoint
      fetch("/api")
        .then((res) => res.json())
        .then((restList) => {
            // then set it in state
          setRestNames(restList);
            // and reset to app.js state to false... this will update the map if the back button or home link are used 
          props.setZoom({ zoomIn: false, zoom: 13 , center:[51.505, -0.09]});
        });
    }
  });

  return (
    <div id="main-list">
      <ul>
          {/* go through each item in names list and make them into a link, directing to their info */}
        {restNames.map((title, index) => {
          return (
            <h3 key={index} id="link">
              <Link className="restaurant-links" to={`/restaurant/${title}`}>
                {title.replaceAll("-", " ").toUpperCase()}
              </Link>
            </h3>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
