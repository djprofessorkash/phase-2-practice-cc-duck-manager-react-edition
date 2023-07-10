/* 
  DELIVERABLE ONE: Fetch ducks from `db.json` and load `DuckListCard`s in `DuckList`. 

  • We know we have to `.map` through each duck data point and send each result to a 
    component called `DuckListCard` – we can assume that each of these cards will render
    within the `DuckList`. (You're probably guessing that `DuckListCard` isn't created 
    either, and you'd be right. But one problem at a time!)
  • `DuckList` is gonna show ALL MAPPED DUCKS, so I'm going to create a variable called
    `mappedDucks` (outside the return context) where we'll map across our duck data.
  • We'll map over the `ducks` prop and send each duck data point as a prop of 
    `DuckListCard`. (Remember that we also have to provide a `key` to avoid the uniqueness
    warning.)
  • From here, now we can send our mapped ducks (`mappedDucks`) as the return.
  • Now let's take care of our card! 
*/

/* 
  DELIVERABLE TWO: When a DuckListCard is clicked, it becomes the featuredDuck in state. 
  The featuredDuck details are shown in the DuckDisplay component.

  • Since we're handling multiple props of different types (now we have a variable and a
    function), I've renamed them for clarity. 
  • `DuckList` itself doesn't really need to handle the logic for clicking on a duck – that's
    `DuckListCard`'s job. We just have to pass it down as a prop!
*/

import React from 'react'
import DuckListCard from "./DuckListCard"

function DuckList({ducks, handleClickDuck}) {

  const mappedDucks = ducks.map(duck => <DuckListCard key={duck.id} duck={duck} handleClickDuck={handleClickDuck}/>)

  return (

    <div className="duck-nav">
      {mappedDucks}
    </div>

  )
}

export default DuckList
