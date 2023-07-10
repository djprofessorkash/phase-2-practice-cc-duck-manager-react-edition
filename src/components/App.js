/* 
  DELIVERABLE ONE: Fetch ducks from `db.json` and load `DuckListCard`s in `DuckList`. 
  State has been built for us on Line 13 (`const [ducks, setDucks] = useState([])`).

  • Get data from GET request using `useEffect()` and `fetch()` in main application.
    Recall that it needs to be outside of the render (state-driven)!
  • Once data is being retrieved, send it to the relevant region on our DOM (`DuckList`) 
    as a prop(erty) of `DuckList`.
  • We're done! Right? Right??!?
      ...no. `DuckList` isn't created! We gotta built it. 
      ...once that's built, we need to make sure all other dependent components are built too!
*/

import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  // GET request on server-hosted duck data
  useEffect(() => {
    fetch('http://localhost:4001/ducks')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDucks(data))
  }, [])

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      <DuckList ducks={ducks}/>

      <DuckDisplay />

      <button>Open Duck Form</button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      <DuckForm />

    </div>
  );
}

export default App;
