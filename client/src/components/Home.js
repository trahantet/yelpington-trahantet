import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Home(props) {

const [restNames, setRestNames] = useState([])
// const [articleContent, setArticleContent] = useState({})

useEffect(()  => {
  if(restNames.length === 0){
    fetch('/rest')
    .then((res) => res.json())
    .then(restList => {
      setRestNames(restList)
    })
  } 
}
)

  return (
    <div id="main-list">
      <ul>
        {restNames.map((title, index) => {
          return <h3 key={index}><Link to={`/restaurant/${title}`}>{title.replaceAll('-', " ")}</Link></h3>
        })}
      </ul>
  
    </div>
  );
}

export default Home;
