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

import React from 'react'


function DuckDisplay(props) {

  return (
    <div className="duck-display">

      {/* show all the details for the featuredDuck state here */}

      {/* Set the currently featured duck name via the prop attribute! */}
      <h2>{props.featuredDuck.name}</h2>

      {/* Set the currently featured duck image and hoverable name via the prop attributes! */}
      <img src={props.featuredDuck.img_url} alt={props.featuredDuck.name} />

      <button>0 likes</button>

    </div>
  )
}

export default DuckDisplay
