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

import React from 'react'
import DuckListCard from "./DuckListCard"

function DuckList(props) {

  const mappedDucks = props.ducks.map(duck => <DuckListCard key={duck.id} duck={duck} />)

  return (

    <div className="duck-nav">
      {mappedDucks}
    </div>

  )
}

export default DuckList
