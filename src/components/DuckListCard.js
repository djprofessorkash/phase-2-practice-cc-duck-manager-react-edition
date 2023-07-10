/* 
  DELIVERABLE ONE: Fetch ducks from `db.json` and load `DuckListCard`s in `DuckList`. 

  • Replace the placeholder data from our `img.src` and `img.alt` properties with the
    relevant props that we're getting. Remember: in `DuckList.js`, we sent each mapped
    duck as a prop called `duck`, so we can access it here using `props.duck`. From 
    there, we can access attributes of the database object by chaining the relevant 
    attribute name off of `props.duck`. In this case, we can get the image URL via 
    `props.duck.img_url` and the name via `props.duck.name`. 
  • That should be the last component we need to build out to complete our deliverable!
*/

/* 
  DELIVERABLE TWO: When a DuckListCard is clicked, it becomes the featuredDuck in state. 
  The featuredDuck details are shown in the DuckDisplay component.

  • Again, let's rename our props for clarity since we're dealing with variant data types.
  • From here, let's add an `onClick` event handler as part of the image HTML that 
    calls `handleClickDuck()` and passes it a `duck` object. 
  • From there, the rendered `duck.img_url` and `duck.name` can be dynamically set using the 
    setter that we invoke in the context of `handleClickDuck`. 
*/

function DuckListCard({duck, handleClickDuck}) {
  return (
    <img 
      onClick={() => handleClickDuck(duck)}
      src={duck.img_url} 
      alt={duck.name} 
    />
  )
}

export default DuckListCard
