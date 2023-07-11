/*
  DELIVERABLE SIX:  Make the DuckForm a controlled form. When submitted, a new duck 
                    gets posted to the `db.json` database. Assume that a new duck starts
                    with zero likes.

  • We need to create several helper functions to handle each of the newly created
    attributes across our generated duck object. 
  • Since we're navigating from the form across the grandparent app (instead of passing data
    down from parents to children), we're going to use state to track our current and new 
    duck attributes (the image URL and name). 
  • Two of those helpers are going to be executed for our name and image change attributes,
    since we can obtain those attributes via the form submission event. 
  • Our final handler is going to trigger the actual form submission event. Since the event
    is supposed to immediately load the new duck image & name on screen, we'll also use this
    handler to invoke the duck POSTing function that we have as a prop (`postNewDuck()`). 
  • We also need to modify the form's JSX to pass in the new duck name and image URL path. This
    will allow the data generated from the form submission to pass back up to the application
    and render as a new duck card for the user. (Remember to tether the handler functions to 
    corresponding `onChange` events.)
*/

import React, { useState } from 'react'

function DuckForm({postNewDuck}) {

  // Create getters and setters for tracking new duck states via form submission
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  // Helper function/handler for event-driven state change for duck name
  function handleNameChange(event) {
    setName(event.target.value)
  }

  // Helper function/handler for event-driven state change for duck image
  function handleImageChange(event) {
    setImage(event.target.value)
  }

  // Helper function/handler for triggering POST on duck form submission
  function handleSubmit(event) {
    event.preventDefault()
    postNewDuck({name: name, img_url: image, likes: 0})
    // id gets added by the json-server so we don't include it
  }

  return (
    <form id="new-duck-form" onSubmit={handleSubmit}>

       <label htmlFor="duck-name-input">New Duck Name:</label>
       <input type="text" name="duck-name-input" value={name} onChange={handleNameChange} />

       <label htmlFor="duck-image-input">New Duck Image URL:</label>
       <input type="text" name="duck-image-input" value={image} onChange={handleImageChange} />

       <input type="submit" value="Create Duck" />

    </form>
  )
}

export default DuckForm
