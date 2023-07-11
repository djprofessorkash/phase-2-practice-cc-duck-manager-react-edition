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
  • Create a fetch API invocation using a PATCH request. We have to remember to convert the 
    updated likes to JSON and pass that to the appropriate endpoint in the database.
  • Once we've JSONified our response, we can invoke our state setter for current likes in 
    order to increment our duck's likes state by one. 
  • Uh oh... our PATCH is not really working as expected. As it turns out, we're forgetting
    to initially set our current likes – we want the current duck's likes to refresh every
    time we load a new featured duck, so we can use a side effect (`useEffect`) to trigger
    the setting logic each time a new featured duck is rendered (by setting `[featuredDuck]` 
    as a dependency).
  
  BONUS: 
  • Wait a minute... our PATCH request is only working partially. It turns out that when we 
    rerender a new featured duck, our program is updating the state and the database, but 
    NOT the actual attribute of `featuredDuck`. So we need to explicitly update the currently
    loaded attribute of `featuredDuck` in the same scope as when we perform our incrementation. 
*/

import React, { useState, useEffect } from 'react'


function DuckDisplay({featuredDuck}) {

  // State instantiation for getting and setting current duck card's likes
  const [currentLikes, setCurrentLikes] = useState(featuredDuck.likes)

  // Side effect to load currently featured duck's likes on new feature component render
  useEffect(() => {
    setCurrentLikes(featuredDuck.likes)
  }, [featuredDuck])

  // Handler to invoke fetch API for PATCH request, JSONify response,
  // and increment state getter for current duck card's likes
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

        // Updates state variable via incrementation
        setCurrentLikes(currentLikes + 1)
      })

    // console.log(`State Reference Post-PATCH: ${currentLikes}`)
    // console.log(`Object Reference Post-PATCH: ${featuredDuck.likes}`)

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
