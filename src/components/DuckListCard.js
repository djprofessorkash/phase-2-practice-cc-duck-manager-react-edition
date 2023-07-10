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

function DuckListCard(props) {
  return (
    <img src={props.duck.img_url} alt={props.duck.name} />
  )
}

export default DuckListCard
