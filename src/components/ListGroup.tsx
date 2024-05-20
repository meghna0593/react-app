import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Vancouver", "Toronto", "Halifax", "Edmonton"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  // go to getbootstrap.com -> docs -> list group
  return (
    <>
      <h1>List</h1>

      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
