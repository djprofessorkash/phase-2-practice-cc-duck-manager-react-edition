/* 
  DELIVERABLE TWO: When a DuckListCard is clicked, it becomes the featuredDuck in state. 
  The featuredDuck details are shown in the DuckDisplay component.

  • From here, we can use the passed prop for the currently featured duck (`featuredDuck`) 
    and access its object attributes to display the relevant HTML!
  • But wait! We're not done. If you go back up to `App`, we notice that we want to tether
    the logic for clicking on the featured duck all the way down to the actual duck images. 
    This means that `DuckList` and `DuckListCard` need to explicitly handle the logic from 
    `handleClickDuck`, which means we'll have to manually add that logic in each component!
*/

/*
  DELIVERABLE FOUR: In the duck detail, the number of likes should increment whenever the likes 
                    button is clicked.

  • Since like incrementation is a feature embedded within the featured duck display, and there's
    no direct data transfer/flux from the outermost components, we can simply start at the parent
    component of the likes button!
  • We want to get access to our featured duck's likes via state getters and setters. 
  • From there, we can leverage a `useEffect` to invoke the state setter and reset the current
    likes to the updated likes post-incrementation.
  • We also need an outer helper function (`handleIncrementLikes`) that actually handles the 
    direct logic of HOW the incrementation works (e.g. on click, do we add one to the current
    likes?).
  • Finally, we can redefine the button class in the returned JSX to execute the increment handling
    helper function and re-render the button's text with the newly updated current likes.
*/

/*
  DELIVERABLE FIVE: When the number of likes increments, send a PATCH request to edit the 
                    duck in the backend.

  • We need to modify the logic of our like-increment handling function to perform a PATCH
    action immediately upon updating our likes data.
  • Create a fetch API request using a PATCH action. We have to remember to convert the 
    updated likes to JSON and pass that to the appropriate endpoint in the database.
*/

import React, { useState, useEffect } from 'react'


function DuckDisplay({featuredDuck}) {

  const [currentLikes, setCurrentLikes] = useState(featuredDuck.likes)

  useEffect(() => {
    setCurrentLikes(featuredDuck.likes)
  }, [featuredDuck])

  const handleIncrementLikes = () => {
    fetch(`http://localhost:4001/ducks/${featuredDuck.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({likes: currentLikes + 1})
    })
      .then(response => response.json())
      .then(() => {
        // Resolution for Post-PATCH Card Switch Like Rerendering Bug
        featuredDuck.likes = currentLikes + 1
        setCurrentLikes(currentLikes + 1)
      })
    }

  return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      {/* Set the currently featured duck name via the prop attribute! */}
      <h2>{featuredDuck.name}</h2>

      {/* Set the currently featured duck image and hoverable name via the prop attributes! */}
      <img src={featuredDuck.img_url} alt={featuredDuck.name} />

      <button onClick={() => handleIncrementLikes()} >{currentLikes} likes</button>

    </div>
  )
}

export default DuckDisplay
