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

/* 
  DELIVERABLE TWO: When a DuckListCard is clicked, it becomes the featuredDuck in state. 
  The featuredDuck details are shown in the DuckDisplay component.

  • Send a prop to `DuckDisplay` that'll contain our featured duck data, aptly called
    `featuredDuck`. This is a state that's given to us, and we'll make good use of it!
  • We also want to use the setter function from the relevant state declaration to 
    modify which duck is being featured on click, so we'll create a helper function 
    to do that called `handleClickDuck` and executes the setter on the currently clicked
    duck. 
  • Now let's go write the logic for `DuckDisplay`!
*/

import React, { useState, useEffect } from 'react'
import DuckList from './DuckList'
import DuckDisplay from "./DuckDisplay"
import DuckForm from "./DuckForm"

function App() {

  const [ducks, setDucks] = useState([])
  const [featuredDuck, setFeaturedDuck] = useState({})
  const [duckFormOpen, setDuckFormOpen] = useState(true)

  // Define helper function for handling duck image click
  function handleClickDuck(duck) {
    setFeaturedDuck(duck)
  }

  // GET request on server-hosted duck data
  useEffect(() => {
    fetch('http://localhost:4001/ducks')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      setDucks(data)

      // I just added this to avoid that empty form on fetch. Not needed for the CC!
      setFeaturedDuck(data[0])
    })
  }, [])

  return (
    <div className="App">

      <h1>Duck Manager 2022 - React Edition</h1>

      {/* Send ducks and duck on-click handler as props of our duck list! */}
      <DuckList ducks={ducks} handleClickDuck={handleClickDuck}/>

      {/* Send our duck on-click handler as a prop of our duck display region! */}
      <DuckDisplay featuredDuck={featuredDuck}/>

      <button>Open Duck Form</button>

      {/* Conditionally display the duck form on the line below depending on whether the duckFormOpen state is true or false... */}
      <DuckForm />

    </div>
  );
}

export default App;
